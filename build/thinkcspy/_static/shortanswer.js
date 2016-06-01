/*==========================================
=======    Master shortanswer.js    ========
============================================
===     This file contains the JS for    ===
=== the Runestone shortanswer component. ===
============================================
===              Created by              ===
===           Isaiah Mayerchak           ===
===                7/2/15                ===
==========================================*/

var saList = {};    // Dictionary that contains all instances of shortanswer objects


function ShortAnswer (opts) {
    if (opts) {
        this.init(opts);
    }
}

ShortAnswer.prototype = new RunestoneBase();

/*========================================
== Initialize basic ShortAnswer attributes ==
========================================*/
ShortAnswer.prototype.init = function (opts) {
    RunestoneBase.apply(this, arguments);
    var orig = opts.orig;    // entire <p> element that will be replaced by new HTML
    this.useRunestoneServies = opts.useRunestoneServices || eBookConfig.useRunestoneServices;
    this.origElem = orig;
    this.divid = orig.id;
    this.question = this.origElem.innerHTML;

    this.optional = false;
    if ($(this.origElem).is("[data-optional]")) {
        this.optional = true;
    }

    this.renderHTML();
    this.loadJournal();
};

ShortAnswer.prototype.renderHTML = function() {
    this.containerDiv = document.createElement("div");
    this.containerDiv.id = this.divid;
    if (this.optional) {
        $(this.containerDiv).addClass("journal alert alert-success");
                            } else {
        $(this.containerDiv).addClass("journal alert alert-warning");
                            }

    this.newForm = document.createElement("form");
    this.newForm.id = this.divid + "_journal";
    this.newForm.name = this.newForm.id;
    this.newForm.action = "";
    this.containerDiv.appendChild(this.newForm);

    this.fieldSet = document.createElement("fieldset");
    this.newForm.appendChild(this.fieldSet);

    this.legend = document.createElement("legend");
    this.legend.innerHTML = "Short Answer";
    this.fieldSet.appendChild(this.legend);

    this.firstLegendDiv = document.createElement("div");
    this.firstLegendDiv.innerHTML = this.question;
    $(this.firstLegendDiv).addClass("journal-question");
    this.fieldSet.appendChild(this.firstLegendDiv);

    this.jInputDiv = document.createElement("div");
    this.jInputDiv.id = this.divid + "_journal_input";
    this.fieldSet.appendChild(this.jInputDiv);

    this.jOptionsDiv = document.createElement("div");
    $(this.jOptionsDiv).addClass("journal-options");
    this.jInputDiv.appendChild(this.jOptionsDiv);

    this.jLabel = document.createElement("label");
    $(this.jLabel).addClass("radio-inline");
    this.jOptionsDiv.appendChild(this.jLabel);

    this.jTextArea = document.createElement("textarea");
    this.jTextArea.id = this.divid + "_solution";
    $(this.jTextArea).css("display:inline, width:530px");
    $(this.jTextArea).addClass("form-control");
    this.jTextArea.rows = 4;
    this.jTextArea.cols = 50;
    this.jLabel.appendChild(this.jTextArea);

    this.fieldSet.appendChild(document.createElement("br"));

    this.buttonDiv = document.createElement("div");
    this.fieldSet.appendChild(this.buttonDiv);

    this.submitButton = document.createElement("button");
    $(this.submitButton).addClass("btn btn-default");
    this.submitButton.type = "button";
    this.submitButton.textContent = "Save";
    this.submitButton.onclick = function () {
        this.submitJournal();
    }.bind(this);
    this.buttonDiv.appendChild(this.submitButton);

    this.randomSpan = document.createElement("span");
    this.randomSpan.innerHTML = "Instructor's Feedback";
    this.fieldSet.appendChild(this.randomSpan);

    this.otherOptionsDiv = document.createElement("div");
    $(this.otherOptionsDiv).css("padding-left:20px");
    $(this.otherOptionsDiv).addClass("journal-options");
    this.fieldSet.appendChild(this.otherOptionsDiv);

    this.feedbackDiv = document.createElement("div");
    $(this.feedbackDiv).addClass("bg-info form-control");
    $(this.feedbackDiv).css("width:530px, background-color:#eee, font-style:italic");
    this.feedbackDiv.id = this.divid + "_feedback";
    this.feedbackDiv.innerHTML = "There is no feedback yet.";
    this.otherOptionsDiv.appendChild(this.feedbackDiv);

    this.fieldSet.appendChild(document.createElement("br"));

    $(this.origElem).replaceWith(this.containerDiv);
};

ShortAnswer.prototype.submitJournal = function () {
    var value = $("#"+this.divid+"_solution").val();
    localStorage.setItem(this.divid, value);
    /*
    directiveRemoteCommand("set_journal_entry",  this.divid, {"solution": value},
                      function(data) {
                        storage.remove(this.divid);
                      },
                      function(data) {
                        console.log(data.message);
                      });  */
    this.logBookEvent({'event': 'shortanswer', 'act': JSON.stringify(value), 'div_id': this.divid});
};

ShortAnswer.prototype.loadJournal = function () {

    // Ask the server to send the latest
    var loadAnswer = function(data,status,whatever) {
        var len = localStorage.length;
        var answer = {};
        if (! jQuery.isEmptyObject(data)) {
            answer = data;
        }  else {
            answer.answer = "";
        }
        var solution = $("#" + this.divid + "_solution");
        if (len > 0) {
            var ex = storage.get(this.divid);
            if (ex !== null ) {
                if (! storage.is_new(answer.divid, new Date(answer.timestamp))) {
                    solution.text(storage.get(this.divid));
                // now send the newer answer to the server...
                } else {
                    solution.text(answer.answer);
                }
            } else {
                solution.text(answer.answer);
            }
        } else {
            solution.text(answer.answer);
        }
    }.bind(this);
    var data = {'div_id' : this.divid};
    if (this.useRunestoneServies) {
        jQuery.get(eBookConfig.ajaxURL + 'getlastanswer', data, loadAnswer);
    } else {
        loadAnswer({},null,null);
    }
};


/*=================================
== Find the custom HTML tags and ==
==   execute our code on them    ==
=================================*/
$(document).ready(function () {
    $("[data-component=shortanswer]").each(function (index) {
        if ($(this.parentNode).data("component") !== "timedAssessment") { // If this element exists within a timed component, don't render it here
            saList[this.id] = new ShortAnswer({"orig": this, 'useRunestoneServices': eBookConfig.useRunestoneServices});
        }
    });

});
