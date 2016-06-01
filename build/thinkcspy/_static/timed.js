/*==========================================
========      Master timed.js     =========
============================================
===     This file contains the JS for    ===
===     the Runestone timed component.   ===
============================================
===              Created By              ===
===             Kirby Olson              ===
===               6/11/15                ===
==========================================*/

var TimedList = {};    // Timed dictionary

// Timed constructor
function Timed (opts) {
    if (opts) {
        this.init(opts);
    }
}

Timed.prototype = new RunestoneBase();

/*====================================
=== Setting Timed Assess Variables ===
====================================*/

Timed.prototype.init = function (opts) {
    RunestoneBase.apply(this, arguments);
    var orig = opts.orig;
    this.origElem = orig; // the entire element of this timed assessment and all of its children
    this.divid = orig.id;
    this.children = this.origElem.childNodes;

    this.timeLimit = 0;
    this.limitedTime = false;
    if (!isNaN($(this.origElem).data("time"))) {
        this.timeLimit = parseInt($(this.origElem).data("time"), 10) * 60; // time in seconds to complete the exam
        this.startingTime = this.timeLimit;
        this.limitedTime = true;
    }
    this.showFeedback = true;
    if ($(this.origElem).is("[data-no-feedback]")) {
        this.showFeedback = false;
    }
    this.showResults = true;
    if ($(this.origElem).is("[data-no-result]")) {
        this.showResults = false;
    }
    this.random = false;
    if ($(this.origElem).is("[data-random]")) {
        this.random = true;
    }
    this.showTimer = true;
    if ($(this.origElem).is("[data-no-timer]")) {
        this.showTimer = false;
    }

    this.running = 0;
    this.paused = 0;
    this.done = 0;
    this.taken = 0;
    this.score = 0;
    this.incorrect = 0;
    this.correctStr = "";
    this.incorrectStr = "";
    this.skippedStr = "";
    this.skipped = 0;

    this.currentQuestionIndex = 0;   // Which question is currently displaying on the page
    this.renderedQuestionArray = []; // list of all problems

    this.getNewChildren();
    this.renderTimedAssess();
};

Timed.prototype.getNewChildren = function () {
    this.newChildren = [];
    for (var i = 0; i < this.origElem.childNodes.length; i++) {
        this.newChildren.push(this.origElem.childNodes[i]);
    }
};

/*===============================
=== Generating new Timed HTML ===
===============================*/

Timed.prototype.renderTimedAssess = function () {
    this.renderContainer();
    this.renderTimer();
    this.renderControlButtons();
    this.assessDiv.appendChild(this.timedDiv);    // This can't be appended in renderContainer because then it renders above the timer and control buttons.
    this.createRenderedQuestionArray();
    this.renderTimedQuestion();
    this.renderNavControls();
    this.renderSubmitButton();
    this.renderFeedbackContainer();

    // Replace intermediate HTML with rendered HTML
    $(this.origElem).replaceWith(this.assessDiv);

    // check if already taken and if so show results
    this.tookTimedExam();
    if (this.taken) {
       this.handlePrevAssessment();
    }
};

Timed.prototype.renderContainer = function () {
    this.assessDiv = document.createElement("div"); // container for the entire Timed Component
    this.assessDiv.id = this.divid;
    this.timedDiv = document.createElement("div"); // div that will hold the questions for the timed assessment
    this.navDiv = document.createElement("div"); // For navigation control
    $(this.navDiv).attr({"style": "text-align:center"});
    this.switchDiv = document.createElement("div"); // is replaced by the questions
    this.timedDiv.appendChild(this.switchDiv);
    this.timedDiv.appendChild(this.navDiv);
    $(this.timedDiv).attr({ // set the id, and style the div to be hidden
        "id": "timed_Test",
        "style": "display:none"
    });
};

Timed.prototype.renderTimer = function () {
    this.wrapperDiv = document.createElement("div");
    this.timerContainer = document.createElement("P");
    this.wrapperDiv.id = "startWrapper";
    this.timerContainer.id = "output";
    this.wrapperDiv.appendChild(this.timerContainer);
    this.showTime();
};

Timed.prototype.renderControlButtons = function () {
    this.controlDiv = document.createElement("div");
    $(this.controlDiv).attr({
        "id": "controls",
        "style": "text-align: center"
    });
    this.startBtn = document.createElement("btn");
    this.pauseBtn = document.createElement("btn");
    $(this.startBtn).attr({
        "class": "btn btn-success",
        "id": "start"
    });
    this.startBtn.textContent = "Start";
    this.startBtn.addEventListener("click", function () {
        this.startAssessment();
    }.bind(this), false);
    $(this.pauseBtn).attr({
        "class": "btn btn-default",
        "id": "pause",
        "disabled":"true"
    });
    this.pauseBtn.textContent = "Pause";
    this.pauseBtn.addEventListener("click", function () {
        this.pauseAssessment();
    }.bind(this), false);
    this.controlDiv.appendChild(this.startBtn);
    this.controlDiv.appendChild(this.pauseBtn);
    this.assessDiv.appendChild(this.wrapperDiv);
    this.assessDiv.appendChild(this.controlDiv);
};

Timed.prototype.renderNavControls = function () {
	this.pagNavList = document.createElement("ul");
    $(this.pagNavList).addClass("pagination");
	this.leftContainer = document.createElement("li");
    this.leftNavButton = document.createElement("a");
    this.leftNavButton.innerHTML = "&#8249; Prev";
    $(this.leftNavButton).attr("aria-label", "Previous");
    $(this.leftNavButton).css("cursor", "pointer");
	this.leftContainer.appendChild(this.leftNavButton);
    this.pagNavList.appendChild(this.leftContainer);
    this.rightContainer = document.createElement("li");
    this.rightNavButton = document.createElement("a");
    $(this.rightNavButton).attr("aria-label", "Next");
    this.rightNavButton.innerHTML = "Next &#8250;";
    $(this.rightNavButton).css("cursor", "pointer");
    this.rightContainer.appendChild(this.rightNavButton);
	this.pagNavList.appendChild(this.rightContainer);
	this.ensureButtonSafety();
	this.navDiv.appendChild(this.pagNavList);
    this.break = document.createElement("br");
    this.navDiv.appendChild(this.break);

    // render the question number jump buttons
    this.qNumList = document.createElement("ul");
	$(this.qNumList).attr("id", "pageNums");
    this.qNumWrapperList = document.createElement("ul");
    $(this.qNumWrapperList).addClass("pagination");
	var tmpLi, tmpA;
    for (var i = 0; i < this.renderedQuestionArray.length; i++) {
	    tmpLi = document.createElement("li");
		tmpA = document.createElement("a");
        tmpA.innerHTML = i + 1;
        $(tmpA).css("cursor", "pointer");
        if (i === 0) {
            $(tmpLi).addClass("active");
        }
        tmpLi.appendChild(tmpA);
        this.qNumWrapperList.appendChild(tmpLi);
    }
    this.qNumList.appendChild(this.qNumWrapperList);
    this.navDiv.appendChild(this.qNumList);
	this.navBtnListeners();
};

Timed.prototype.navBtnListeners = function() {
	// Next and Prev Listener
	this.pagNavList.addEventListener("click", function (event) {
		if ($("div#timed_Test form input[name='group1']").is(":checked")) {
			$("ul#pageNums > ul > li:eq(" + this.currentQuestionIndex +")").addClass("answered");
		}
		var target = $(event.target).text();
		if (target.match(/Next/)) {
			if ($(this.rightContainer).hasClass("disabled")) {
				return;
			}
			this.currentQuestionIndex++;
		}
		else if (target.match(/Prev/)) {
			if ($(this.leftContainer).hasClass("disabled")) {
				return;
			}
			this.currentQuestionIndex--;
		}
		this.renderTimedQuestion();
		this.ensureButtonSafety();
		for (var i = 0; i < this.qNumList.childNodes.length; i++) {
			for (var j = 0; j < this.qNumList.childNodes[i].childNodes.length; j++) {
				$(this.qNumList.childNodes[i].childNodes[j]).removeClass("active");
			}
		}
		$("ul#pageNums > ul > li:eq(" + this.currentQuestionIndex +")").addClass("active");
	}.bind(this), false);

	// Numbered Listener
	this.qNumList.addEventListener("click", function (event) {
		if ($("div#timed_Test form input[name='group1']").is(":checked")) {
			$("ul#pageNums > ul > li:eq(" + this.currentQuestionIndex + ")").addClass("answered");
		}
		for (var i = 0; i < this.qNumList.childNodes.length; i++) {
			for (var j = 0; j < this.qNumList.childNodes[i].childNodes.length; j++) {
				$(this.qNumList.childNodes[i].childNodes[j]).removeClass("active");
			}
		}
		var target = $(event.target).text();
		this.currentQuestionIndex = parseInt(target) - 1;
		$("ul#pageNums > ul > li:eq(" + this.currentQuestionIndex +")").addClass("active");
		this.renderTimedQuestion();
		this.ensureButtonSafety();
	}.bind(this), false);

};

Timed.prototype.renderSubmitButton = function () {
    this.buttonContainer = document.createElement("div");
    $(this.buttonContainer).attr({"style": "text-align:center"});
    this.finishButton = document.createElement("button");
    $(this.finishButton).attr({
        "id": "finish",
        "class": "btn btn-inverse"
    });
    this.finishButton.textContent = "Finish Exam";
    this.finishButton.addEventListener("click", function () {
        this.finishAssessment();
    }.bind(this), false);

    this.buttonContainer.appendChild(this.finishButton);
    this.timedDiv.appendChild(this.buttonContainer);
};

Timed.prototype.ensureButtonSafety = function () {  // Makes sure that user can't navigate past the range of this.renderedQuestionArray
    if (this.currentQuestionIndex === 0) {
        if (this.renderedQuestionArray.length != 1) {
            $(this.rightContainer).removeClass("disabled");
        }
        $(this.leftContainer).addClass("disabled");
    }
    if (this.currentQuestionIndex >= (this.renderedQuestionArray.length-1)) {
        if (this.renderedQuestionArray.length != 1) {
            $(this.leftContainer).removeClass("disabled");
        }
        $(this.rightContainer).addClass("disabled");
    }
    if (this.currentQuestionIndex > 0 && this.currentQuestionIndex < this.renderedQuestionArray.length-1) {
        $(this.rightContainer).removeClass("disabled");
        $(this.leftContainer).removeClass("disabled");
    }
};

Timed.prototype.renderFeedbackContainer = function () {
    this.scoreDiv = document.createElement("P");
    this.scoreDiv.id = this.divid + "results";
    this.scoreDiv.style.display = "none";
    this.assessDiv.appendChild(this.scoreDiv);
};

Timed.prototype.createRenderedQuestionArray = function () {
    // this finds all the assess questions in this timed assessment and calls their constructor method
    // Also adds them to this.renderedQuestionArray
    for (var i = 0; i < this.newChildren.length; i++) {
        var tmpChild = this.newChildren[i];
        opts = {'orig':tmpChild, 'useRunestoneServices':eBookConfig.useRunestoneServices}
        if ($(tmpChild).is("[data-component=multiplechoice]")) {
            this.renderedQuestionArray.push(new TimedMC(opts));
        } else if ($(tmpChild).is("[data-component=fillintheblank]")) {
            var newFITB = new TimedFITB(opts);
            this.renderedQuestionArray.push(newFITB);
        } else if ($(tmpChild).is("[data-component=dragndrop]")) {
            this.renderedQuestionArray.push(new TimedDragNDrop(opts));
        } else if ($(tmpChild).is("[data-component=clickablearea]")) {
            this.renderedQuestionArray.push(new TimedClickableArea(opts));
        } else if ($(tmpChild).is("[data-component=shortanswer]")) {
            this.renderedQuestionArray.push(new TimedShortAnswer(opts));
        } else if ($(tmpChild).is("[data-component=parsons]")) {
            this.renderedQuestionArray.push(new TimedParsons(opts));
        } else if ($(tmpChild).is("[data-component=activecode]")) {
            this.renderedQuestionArray.push(new TimedActiveCode(opts));
        }
    }
    if (this.random) {
        this.randomizeRQA();
    }
};
Timed.prototype.randomizeRQA = function () {
    var currentIndex = this.renderedQuestionArray.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = this.renderedQuestionArray[currentIndex];
        this.renderedQuestionArray[currentIndex] = this.renderedQuestionArray[randomIndex];
        this.renderedQuestionArray[randomIndex] = temporaryValue;

    }
};

Timed.prototype.renderTimedQuestion = function () {
    $(this.switchDiv).replaceWith(this.renderedQuestionArray[this.currentQuestionIndex].containerDiv);
    this.switchDiv = this.renderedQuestionArray[this.currentQuestionIndex].containerDiv;
};


/*=================================
=== Timer and control Functions ===
=================================*/

Timed.prototype.handlePrevAssessment = function () {
		$(this.startBtn).hide();
        $(this.pauseBtn).attr("disabled", true);
        $(this.finishButton).attr("disabled", true);
        this.running = 0;
        this.done = 1;
        if (this.showResults) {
           $(this.timedDiv).show();
           this.submitTimedProblems(false); // do not log these results
        } else {
           $(this.pauseBtn).hide();
        }
};

Timed.prototype.startAssessment = function () {
    this.tookTimedExam();
    if (!this.taken) {
        $(this.startBtn).hide();
        $(this.pauseBtn).attr("disabled", false);
        if (this.running === 0 && this.paused === 0) {
            this.running = 1;
            $(this.timedDiv).show();
            this.increment();
            this.logBookEvent({"event": "timedExam", "act": "start", "div_id": this.divid});
            var resultStr = "0; ;0; ;" + this.renderedQuestionArray.length +"; ;0";
            localStorage.setItem(eBookConfig.email + ":" + this.divid, resultStr);
        }
    } else {
       this.handlePrevAssessment();
    }
};

Timed.prototype.pauseAssessment = function () {
    if (this.done === 0) {
        if (this.running === 1) {
            this.running = 0;
            this.paused = 1;
            this.pauseBtn.innerHTML = "Resume";
            $(this.timedDiv).hide();
        } else {
            this.running = 1;
            this.paused = 0;
            this.increment();
            this.pauseBtn.innerHTML = "Pause";
            $(this.timedDiv).show();
        }
    }
};

Timed.prototype.showTime = function () { // displays the timer value
    if (this.showTimer) {
    	var mins = Math.floor(this.timeLimit / 60);
    	var secs = Math.floor(this.timeLimit) % 60;
    	var minsString = mins;
    	var secsString = secs;

    	if (mins < 10) {
        	minsString = "0" + mins;
    	}
    	if (secs < 10) {
        	secsString = "0" + secs;
    	}
    	var beginning = "Time Remaining    ";
    	if (!this.limitedTime) {
        	beginning = "Time Taken    ";
    	}
    	var timeString =  beginning + minsString + ":" + secsString;

    	if (this.done || this.taken) {
        	var minutes = Math.floor(this.timeTaken / 60);
        	var seconds = Math.floor(this.timeTaken % 60);
        	if (minutes < 10) {
            	minutes = "0" + minutes;
        	}
        	if (seconds < 10) {
            	seconds = "0" + seconds;
        	}
        	timeString = "Time taken: " + minutes + ":" + seconds;
    	}

    	this.timerContainer.innerHTML = timeString;
    	var timeTips = document.getElementsByClassName("timeTip");
    	for (var i = 0; i <= timeTips.length - 1; i++) {
        	timeTips[i].title = timeString;
    	}
    } else {
       $(this.timerContainer).hide();
    }
};

Timed.prototype.increment = function () { // increments the timer
    // if running (not paused) and not taken
    if (this.running === 1 && !this.taken) {
        setTimeout(function () {
            if (this.limitedTime) {  // If there's a time limit, count down to 0
                this.timeLimit--;
            } else {
                this.timeLimit++; // Else count up to keep track of how long it took to complete
            }
            this.showTime();
            if (this.timeLimit > 0) {
                this.increment();
                // ran out of time
            } else {
                $(this.startBtn).attr({"disabled": "true"});
                $(this.finishButton).attr({"disabled": "true"});
                this.running = 0;
                this.done = 1;
                if (this.taken === 0) {
                    this.taken = 1;
                    this.finishAssessment();
                }
            }
        }.bind(this), 1000);
    }
};

Timed.prototype.checkIfFinished = function () {
    if (this.tookTimedExam()) {
        $(this.startBtn).attr("disabled", true);
        $(this.pauseBtn).attr("disabled", true);
        $(this.finishButton).attr("disabled", true);
        if (this.showResults) {
           this.resetTimedMCMFStorage();
        }
    }
};

Timed.prototype.tookTimedExam = function () {
    // Checks if this exam has been taken before

    $("#output").css({
        "width": "50%",
        "margin": "0 auto",
        "background-color": "#DFF0D8",
        "text-align": "center",
        "border": "2px solid #DFF0D8",
        "border-radius": "25px"
    });

    $(this.scoreDiv).css({
        "width": "50%",
        "margin": "0 auto",
        "background-color": "#DFF0D8",
        "text-align": "center",
        "border": "2px solid #DFF0D8",
        "border-radius": "25px"
    });

    $(".tooltipTime").css({
        "margin": "0",
        "padding": "0",
        "background-color": "black",
        "color": "white"
    });
    var len = localStorage.length;
    if (len > 0) {
        if (localStorage.getItem(eBookConfig.email + ":" + this.divid) !== null) {
            this.taken = 1;
            this.restoreFromStorage();

        } else {
            this.taken = 0;
        }
    } else {
        this.taken = 0;
    }
};

Timed.prototype.finishAssessment = function () {
    if (window.confirm("Clicking OK means you are ready to submit your answers and are finished with this assessment.")) {
        this.findTimeTaken();
        this.running = 0;
        this.done = 1;
        this.taken = 1;
        this.submitTimedProblems(true); // log results
        this.checkScore();
        this.displayScore();
        this.storeScore();
        this.logScore();
        $(this.pauseBtn).attr("disabled", true);
        this.finishButton.disabled = true;

        if (!this.showResults) {
           $(this.timedDiv).hide();
           $(this.pauseBtn).hide();
        }
    }
};

Timed.prototype.submitTimedProblems = function (logFlag) {
    for (var i = 0; i < this.renderedQuestionArray.length; i++) {
        this.renderedQuestionArray[i].processTimedSubmission(logFlag);
    }
    if (!this.showFeedback) {
        this.hideTimedFeedback();
    }
};

Timed.prototype.hideTimedFeedback = function () {
    for (var i = 0; i < this.renderedQuestionArray.length; i++) {
        this.renderedQuestionArray[i].hideFeedback();   // Defined in each timed class
    }
};

Timed.prototype.checkScore = function () {
	this.correctStr = "";
    this.skippedStr = "";
    this.incorrectStr = "";
    // Gets the score of each problem

    for (var i = 0; i < this.renderedQuestionArray.length; i++) {
        var correct = this.renderedQuestionArray[i].checkCorrectTimed();
        if (correct == "T") {
            this.score++;
            this.correctStr = this.correctStr + (i + 1) + ", ";

        } else if (correct == "F") {
            this.incorrect++;
            this.incorrectStr = this.incorrectStr + (i + 1) + ", ";
        } else if (correct === null) {
            this.skipped++;
            this.skippedStr = this.skippedStr + (i + 1) + ", ";
        } else {
            // ignored question; just do nothing
        }
    }
	// remove extra comma and space at end if any
    if (this.correctStr.length > 0) this.correctStr = this.correctStr.substring(0,this.correctStr.length-2);
    else this.correctStr = "None";
    if (this.skippedStr.length > 0) this.skippedStr = this.skippedStr.substring(0,this.skippedStr.length-2);
    else this.skippedStr = "None";
    if (this.incorrectStr.length > 0) this.incorrectStr = this.incorrectStr.substring(0,this.incorrectStr.length-2);
    else this.incorrectStr = "None";
};

Timed.prototype.findTimeTaken = function () {
    if (this.limitedTime) {
        this.timeTaken = this.startingTime - this.timeLimit;
    } else {
        this.timeTaken = this.timeLimit;
    }
};

Timed.prototype.storeScore = function () {
    var storage_arr = [];
    storage_arr.push(this.score, this.correctStr, this.incorrect, this.incorrectStr, this.skipped, this.skippedStr, this.timeTaken);
    localStorage.setItem(eBookConfig.email + ":" + this.divid, storage_arr.join(";"));
};

Timed.prototype.logScore = function () {
    this.logBookEvent({"event": "timedExam", "act": "finish", "div_id": this.divid, "correct": this.score, "incorrect": this.incorrect, "skipped": this.skipped, "time": this.timeTaken});
};

Timed.prototype.restoreFromStorage = function () {
    var tmpArr = localStorage.getItem(eBookConfig.email + ":" + this.divid).split(";");
    if (tmpArr.length == 4)
    {
       this.score = tmpArr[0];
       this.incorrect = tmpArr[1];
       this.skipped = tmpArr[2];
       this.timeTaken = tmpArr[3];
    }
    else if (tmpArr.length == 7)
    {
       this.score = tmpArr[0];
       this.correctStr = tmpArr[1];
       this.incorrect = tmpArr[2];
       this.incorrectStr = tmpArr[3];
       this.skipped = tmpArr[4];
       this.skippedStr = tmpArr[5];
       this.timeTaken = tmpArr[6];
    }
    else {
       this.score = 0;
       this.incorrect = 0;
       this.skipped = this.renderedQuestionArray.length;
       this.timeTaken = 0;
    }
    this.displayScore();
	this.showTime();
};

Timed.prototype.displayScore = function () {

	if (this.showResults)
    {
       // if we have some information
       if (this.correctStr.length > 0 || this.incorrectStr.length > 0 || this.skippedStr.length > 0)
       {
          var scoreString = "Num Correct: " + this.score + ". Questions: " + this.correctStr + "<br>" +
          "Num Wrong: " + this.incorrect + ". Questions: " + this.incorrectStr + "<br>" +
          "Num Skipped: " + this.skipped + ". Questions: " + this.skippedStr + "<br>";
          var numQuestions = this.score + this.incorrect + this.skipped;
          var percentCorrect = (this.score / numQuestions) * 100;
          scoreString += "Percent Correct: " + percentCorrect + "%";
          $(this.scoreDiv).html(scoreString);
          this.scoreDiv.style.display = "block";
      }
      else
      {
          var scoreString = "Num Correct: " + this.score + "<br>" +
          "Num Wrong: " + this.incorrect + "<br>" +
          "Num Skipped: " + this.skipped + "<br>";
          var numQuestions = this.score + this.incorrect + this.skipped
          var percentCorrect = (this.score / numQuestions) * 100;
          scoreString += "Percent Correct: " + percentCorrect + "%";
          $(this.scoreDiv).html(scoreString);
          this.scoreDiv.style.display = "block";
      }
      this.highlightNumberedList();
   }
   else {
      $(this.scoreDiv).html("Thank you for taking the exam.  Your answers have been recorded.");
      this.scoreDiv.style.display = "block";
   }
};

Timed.prototype.highlightNumberedList = function () {
	var correctCount = this.correctStr;
	var	incorrectCount = this.incorrectStr;
	var skippedCount = this.skippedStr;

	correctCount = correctCount.replace(/ /g,'').split(',');
	incorrectCount = incorrectCount.replace(/ /g,'').split(',');
	skippedCount = skippedCount.replace(/ /g,'').split(',');

	$(function () {		// This code is wrapped in a function so that it executes only after DOM has loaded
		var numberedBtns = $("ul#pageNums > ul > li");
		if (numberedBtns.hasClass("answered")) {
			numberedBtns.removeClass("answered");
		}
		for (var i = 0; i < correctCount.length; i++) {
			var test = parseInt(correctCount[i])-1;
			numberedBtns.eq(parseInt(correctCount[i])-1).addClass("correctCount");
		}
		for (var j = 0; j < incorrectCount.length; j++) {
			numberedBtns.eq(parseInt(incorrectCount[j])-1).addClass("incorrectCount");
		}
		for (var k = 0; k < skippedCount.length; k++) {
			numberedBtns.eq(parseInt(skippedCount[k])-1).addClass("skippedCount");
		}
	});
};


/*=======================================================
=== Function that calls the constructors on page load ===
=======================================================*/

$(document).bind("runestone:login-complete", function () {
    $("[data-component=timedAssessment]").each(function (index) {
        TimedList[this.id] = new Timed({"orig": this});
    });
});
