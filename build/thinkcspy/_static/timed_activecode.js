function TimedActiveCode (opts) {
    if (opts) {
        this.timedInit(opts);
    }
}
TimedActiveCode.prototype = new ActiveCode();

TimedActiveCode.prototype.timedInit = function (opts) {
    this.init(opts);
    this.renderTimedIcon(this.containerDiv);
    this.hideButtons();
};


TimedActiveCode.prototype.hideButtons = function () {
    var buttonList = [this.saveButton, this.loadButton, this.gradeButton, this.showHideButt, this.clButton, this.coachButton, this.atButton];
    for (var i = 0; i < buttonList.length; i++) {
        if (buttonList[i] !== undefined && buttonList[i] !== null)
            $(buttonList[i]).hide();
    }
};

TimedActiveCode.prototype.renderTimedIcon = function (component) {
    // renders the clock icon on timed components.    The component parameter
    // is the element that the icon should be appended to.
    var timeIconDiv = document.createElement("div");
    var timeIcon = document.createElement("img");
    $(timeIcon).attr({
        "src": "../_static/clock.png",
        "style": "width:15px;height:15px"
    });
    timeIconDiv.className = "timeTip";
    timeIconDiv.title = "";
    timeIconDiv.appendChild(timeIcon);
    $(component).prepend(timeIconDiv);
};

TimedActiveCode.prototype.checkCorrectTimed = function () {
    return "I";   // we ignore this in the grading
};

TimedActiveCode.prototype.hideFeedback = function () {
    // no feedback to hide
};

TimedActiveCode.prototype.processTimedSubmission = function (logFlag) {
    // Disable input & evaluate component
    if (this.useRunestoneServices) {
        if (logFlag) {
            this.saveEditor();
        } else {
            this.loadEditor().done(this.runProg.bind(this));
        }
    }
    this.runButton.disabled = true;
    $(this.codeDiv).addClass("ac-disabled");
};
