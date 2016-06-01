/*==========================================
=======     Master dragndrop.js     ========
============================================
===     This file contains the JS for    ===
=== the Runestone Drag n drop component. ===
============================================
===              Created by              ===
===           Isaiah Mayerchak           ===
===                7/6/15                ===
==========================================*/

var ddList = {};    // Dictionary that contains all instances of dragndrop objects


function DragNDrop (opts) {
    if (opts) {
        this.init(opts);
    }
}

DragNDrop.prototype = new RunestoneBase();

/*========================================
== Initialize basic DragNDrop attributes ==
========================================*/
DragNDrop.prototype.init = function (opts) {
    RunestoneBase.apply(this, arguments);
    var orig = opts.orig;    // entire <ul> element that will be replaced by new HTML
    this.origElem = orig;
    this.divid = orig.id;

    this.random = false;
    if ($(this.origElem).is("[data-random]")) {
        this.random = true;
    }
    this.feedback = "";
    this.dragPairArray = [];
    this.question = "";
    this.populate();   // Populates this.dragPairArray, this.feedback and this.question

    this.createNewElements();
};
/*======================
=== Update variables ===
======================*/
DragNDrop.prototype.populate = function () {
    for (var i = 0; i < this.origElem.childNodes.length; i++) {
        if ($(this.origElem.childNodes[i]).data("component") === "dropzone") {

            var tmp = document.getElementById($(this.origElem.childNodes[i]).attr("for"));
            var replaceSpan = document.createElement("span");
            replaceSpan.innerHTML = tmp.innerHTML;
            replaceSpan.id = this.divid + tmp.id;
            $(replaceSpan).attr("draggable","true");
            $(replaceSpan).addClass("draggable-drag");

            var otherReplaceSpan = document.createElement("span");

            otherReplaceSpan.innerHTML = this.origElem.childNodes[i].innerHTML;
            $(otherReplaceSpan).addClass("draggable-drop");

            this.setEventListeners(replaceSpan, otherReplaceSpan);
            var tmpArr = [];
            tmpArr.push(replaceSpan);
            tmpArr.push(otherReplaceSpan);
            this.dragPairArray.push(tmpArr);
        } else if ($(this.origElem.childNodes[i]).data("component") === "question") {
            this.question = this.origElem.childNodes[i].innerHTML;
        } else if ($(this.origElem.childNodes[i]).data("component") === "feedback") {
            this.feedback = this.origElem.childNodes[i].innerHTML;
        }
    }

};
/*========================================
== Create new HTML elements and replace ==
==      original element with them      ==
========================================*/
DragNDrop.prototype.createNewElements = function () {
    this.containerDiv = document.createElement("div");
    $(this.containerDiv).addClass("alert alert-warning draggable-container");
    $(this.containerDiv).text(this.question);
    this.containerDiv.appendChild(document.createElement("br"));

    this.dragDropWrapDiv = document.createElement("div");   // Holds the draggables/dropzones, prevents feedback from bleeding in
    $(this.dragDropWrapDiv).css("display", "block");
    this.containerDiv.appendChild(this.dragDropWrapDiv);

    this.draggableDiv = document.createElement("div");
    $(this.draggableDiv).addClass("draggable dragzone");
    this.addDragDivListeners();

    this.dropZoneDiv = document.createElement("div");
    $(this.dropZoneDiv).addClass("draggable");
    this.dragDropWrapDiv.appendChild(this.draggableDiv);
    this.dragDropWrapDiv.appendChild(this.dropZoneDiv);

    this.createButtons();
    this.checkLocalStorage();
    this.appendReplacementSpans();
    this.renderFeedbackDiv();

    $(this.origElem).replaceWith(this.containerDiv);
    if (!this.hasStoredDropzones) {
        this.minheight = $(this.draggableDiv).height();
    }
    this.draggableDiv.style.minHeight = this.minheight.toString() + "px";
    if ($(this.dropZoneDiv).height() > this.minheight) {
        this.dragDropWrapDiv.style.minHeight = $(this.dropZoneDiv).height().toString() + "px";
    } else {
        this.dragDropWrapDiv.style.minHeight = this.minheight.toString() + "px";
    }
};

DragNDrop.prototype.addDragDivListeners = function () {
    this.draggableDiv.addEventListener("dragover", function (ev) {  // Can't set these during this.setEventListeners because this.draggableDiv wasn't created yet
        ev.preventDefault();
        if ($(this.draggableDiv).hasClass("possibleDrop")) {
            return;
        }
        $(this.draggableDiv).addClass("possibleDrop");
    }.bind(this));
    this.draggableDiv.addEventListener("drop", function (ev) {
        ev.preventDefault();
        if ($(this.draggableDiv).hasClass("possibleDrop")) {
            $(this.draggableDiv).removeClass("possibleDrop");
        }
        var data = ev.dataTransfer.getData("draggableID");
        var draggedSpan = document.getElementById(data);
        if (!$(this.draggableDiv).has(draggedSpan).length && !this.strangerDanger(draggedSpan)) {  // Make sure element isn't already there--prevents erros w/appending child
            this.draggableDiv.appendChild(draggedSpan);
        }
    }.bind(this));

    this.draggableDiv.addEventListener("dragleave", function(e) {
        if (!$(this.draggableDiv).hasClass("possibleDrop")) {
            return;
        }
        $(this.draggableDiv).removeClass("possibleDrop");
    }.bind(this));
};

DragNDrop.prototype.createButtons = function () {
    this.buttonDiv = document.createElement("div");
    this.submitButton = document.createElement("button");    // Check me button
    this.submitButton.textContent = "Check Me";
    $(this.submitButton).attr({
        "class": "btn btn-success drag-button",
        "name": "do answer",
    });

    this.submitButton.onclick = function () {
        this.dragEval();
    }.bind(this);

    this.resetButton = document.createElement("button");    // Check me button
    this.resetButton.textContent = "Reset";
    $(this.resetButton).attr({
        "class": "btn btn-default drag-button drag-reset",
        "name": "do answer",
    });

    this.resetButton.onclick = function () {
        this.resetDraggables();
    }.bind(this);

    this.buttonDiv.appendChild(this.submitButton);
    this.buttonDiv.appendChild(this.resetButton);
    this.containerDiv.appendChild(this.buttonDiv);
};

DragNDrop.prototype.appendReplacementSpans = function () {
    this.createIndexArray();
    this.randomizeIndexArray();
    for (var i = 0; i < this.dragPairArray.length; i++) {
        if (this.hasStoredDropzones) {
            if ($.inArray(this.indexArray[i][0], this.pregnantIndexArray) < 0) {
                this.draggableDiv.appendChild(this.dragPairArray[this.indexArray[i]][0]);
            }
        } else {
            this.draggableDiv.appendChild(this.dragPairArray[this.indexArray[i]][0]);
        }
    }
    this.randomizeIndexArray();
    for (var i = 0; i < this.dragPairArray.length; i++) {
        if (this.hasStoredDropzones) {
            if (this.pregnantIndexArray[this.indexArray[i]] !== "-1") {
                this.dragPairArray[this.indexArray[i]][1].appendChild(this.dragPairArray[this.pregnantIndexArray[this.indexArray[i]]][0]);
            }
        }
        this.dropZoneDiv.appendChild(this.dragPairArray[this.indexArray[i]][1]);
    }

};

DragNDrop.prototype.setEventListeners = function (dgSpan, dpSpan) {
    dgSpan.addEventListener("dragstart", function (ev) {
        ev.dataTransfer.setData("draggableID", ev.target.id);
    });
    dgSpan.addEventListener("dragover", function (ev) {
        ev.preventDefault();
    });
    dgSpan.addEventListener("drop", function (ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("draggableID");
        var draggedSpan = document.getElementById(data);
        if (this.hasNoDragChild(ev.target) && draggedSpan != ev.target && !this.strangerDanger(draggedSpan)) {  // Make sure element isn't already there--prevents erros w/appending child
            this.draggableDiv.appendChild(draggedSpan);
        }
    }.bind(this));
    dpSpan.addEventListener("dragover", function (ev) {
        ev.preventDefault();
        if ($(ev.target).hasClass("possibleDrop")) {
            return;
        }
        if  ($(ev.target).hasClass("draggable-drop") && this.hasNoDragChild(ev.target)) {
            $(ev.target).addClass("possibleDrop");
        }
    }.bind(this));

    dpSpan.addEventListener("dragleave", function (ev) {
        ev.preventDefault();
        if (!$(ev.target).hasClass("possibleDrop")) {
            return;
        }
        $(ev.target).removeClass("possibleDrop");
    });

    dpSpan.addEventListener("drop", function (ev) {
        ev.preventDefault();
        if ($(ev.target).hasClass("possibleDrop")) {
            $(ev.target).removeClass("possibleDrop");
        }
        var data = ev.dataTransfer.getData("draggableID");
        var draggedSpan = document.getElementById(data);

        if ($(ev.target).hasClass("draggable-drop") && this.hasNoDragChild(ev.target) && !this.strangerDanger(draggedSpan)) {  // Make sure element isn't already there--prevents erros w/appending child
            ev.target.appendChild(draggedSpan);
        }
    }.bind(this));
};
DragNDrop.prototype.renderFeedbackDiv = function () {
    this.feedBackDiv = document.createElement("div");
    this.feedBackDiv.id = this.divid + "_feedback";
    this.containerDiv.appendChild(document.createElement("br"));
    this.containerDiv.appendChild(this.feedBackDiv);
};
/*=======================
== Auxiliary functions ==
=======================*/
DragNDrop.prototype.strangerDanger = function (testSpan) {   // Returns true if the test span doesn't belong to this instance of DragNDrop
    var strangerDanger = true;
    for (var i = 0; i < this.dragPairArray.length; i++) {
        if (testSpan === this.dragPairArray[i][0]) {
            strangerDanger = false;
        }
    }
    return strangerDanger;
};
DragNDrop.prototype.hasNoDragChild = function (parent) {  // Ensures that each dropZoneDiv can have only one draggable child
    var counter = 0;
    for (var i = 0; i < parent.childNodes.length; i++) {
        if ($(parent.childNodes[i]).attr("draggable") === "true") {
            counter++;
        }
    }
    if (counter >= 1) {
        return false;
    } else {
        return true;
    }
};

DragNDrop.prototype.createIndexArray = function () {
    this.indexArray = [];
    for (var i = 0; i < this.dragPairArray.length; i++) {
        this.indexArray.push(i);
    }
};

DragNDrop.prototype.randomizeIndexArray = function () {
    var currentIndex = this.indexArray.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = this.indexArray[currentIndex];
        this.indexArray[currentIndex] = this.indexArray[randomIndex];
        this.indexArray[randomIndex] = temporaryValue;
    }
};
/*==============================
== Reset button functionality ==
==============================*/
DragNDrop.prototype.resetDraggables = function () {
    for (var i = 0; i < this.dragPairArray.length; i++) {
        for (var j = 0; j < this.dragPairArray[i][1].childNodes.length; j++) {
            if ($(this.dragPairArray[i][1].childNodes[j]).attr("draggable") === "true") {
                this.draggableDiv.appendChild(this.dragPairArray[i][1].childNodes[j]);
            }
        }
    }
    this.feedBackDiv.style.display = "none";
};
/*===========================
== Evaluation and feedback ==
===========================*/

DragNDrop.prototype.dragEval = function () {
    this.correct = true;
    this.unansweredNum = 0;
    this.incorrectNum = 0;
    this.dragNum = this.dragPairArray.length;
    for (var i = 0; i < this.dragPairArray.length; i++) {
        if (!$(this.dragPairArray[i][1]).has(this.dragPairArray[i][0]).length) {
            this.correct = false;
            $(this.dragPairArray[i][1]).addClass("drop-incorrect");
            this.incorrectNum++;
        } else {
            $(this.dragPairArray[i][1]).removeClass("drop-incorrect");
        }
        if (this.hasNoDragChild(this.dragPairArray[i][1])) {
            this.unansweredNum++;
            this.incorrectNum -= 1;
        }
    }
    this.correctNum = this.dragNum - this.incorrectNum - this.unansweredNum;

    var answerInfo = "Number-correct:" + this.correctNum + ":number-incorrect:" + this.incorrectNum + ":number-unanswered:" + this.unansweredNum;
    this.logBookEvent({"event": "dragNdrop", "act": answerInfo, "div_id": this.divid});
    this.setLocalStorage();
    this.renderFeedback();
};
DragNDrop.prototype.renderFeedback = function () {
    this.feedBackDiv.style.display = "block";
    if (this.correct) {
        $(this.feedBackDiv).html("You are correct!");
        $(this.feedBackDiv).attr("class", "alert alert-success draggable-feedback");
    } else {
        $(this.feedBackDiv).html("Incorrect. " + "You got " + this.correctNum + " correct and " + this.incorrectNum + " incorrect out of " + this.dragNum + ". You left " + this.unansweredNum + " blank. " + this.feedback);
        $(this.feedBackDiv).attr("class", "alert alert-danger draggable-feedback");
    }
};
/*===============================
== Local storage functionality ==
===============================*/
DragNDrop.prototype.setLocalStorage = function () {
    this.pregnantIndexArray = [];
    for (var i = 0; i < this.dragPairArray.length; i++) {
        if (!this.hasNoDragChild(this.dragPairArray[i][1])) {
            for (var j = 0; j < this.dragPairArray.length; j++) {
                if ($(this.dragPairArray[i][1]).has(this.dragPairArray[j][0]).length) {
                    this.pregnantIndexArray.push(j);
                }
            }
        } else {
            this.pregnantIndexArray.push(-1);
        }
    }
    var tmp = this.pregnantIndexArray.join(";") + "_split_" + this.minheight;
    localStorage.setItem(eBookConfig.email + ":" + this.divid + "-dragInfo", tmp);
};

DragNDrop.prototype.checkLocalStorage = function () {
    this.hasStoredDropZones = false;
    var len = localStorage.length;
    if (len > 0) {
        var ex = localStorage.getItem(eBookConfig.email + ":" + this.divid + "-dragInfo");
        if (ex !== null) {
            this.hasStoredDropzones = true;
            this.minheight = ex.split("_split_")[1];
            this.pregnantIndexArray = ex.split("_split_")[0].split(";");
        }

    }
};
/*=================================
== Find the custom HTML tags and ==
==   execute our code on them    ==
=================================*/
$(document).ready(function () {
    $("[data-component=dragndrop]").each(function (index) {
        if ($(this.parentNode).data("component") !== "timedAssessment") { // If this element exists within a timed component, don't render it here
            ddList[this.id] = new DragNDrop({"orig": this});
        }
    });
});
