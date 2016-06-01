function TimedParsons (opts) {
    if (opts) {
        this.timedInit(opts);
    }
}

TimedParsons.prototype = new Parsons();

TimedParsons.prototype.timedInit = function (opts) {
    this.init(opts);
    this.renderTimedIcon(this.containerDiv);
    this.hideButtons();
};


TimedParsons.prototype.hideButtons = function () {
    $(this.checkButt).hide();
};

TimedParsons.prototype.renderTimedIcon = function (component) {
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

TimedParsons.prototype.checkCorrectTimed = function () {
    return this.correct ? "T" : "F";
};

TimedParsons.prototype.hideFeedback = function () {
    $(this.messageDiv).hide();
};

TimedParsons.prototype.processTimedSubmission = function (logflag) {
    // Disable input & evaluate component
    this.reInitialize();
    var hash = this.pwidget.getHash("#ul-parsons-sortableCode-" + this.counterId);
    if (logflag)
        localStorage.setItem(this.divid, hash);
    hash = this.pwidget.getHash("#ul-parsons-sortableTrash-" + this.counterId);
    if (logflag)
        localStorage.setItem(this.divid + "-trash", hash);
    this.pwidget.getFeedback();

    // Gross way to check if it's correct or not, but it's better than modifying the 3rd party parsons code to include a "correct" variable
    if ($(this.messageDiv).hasClass("alert-success")) {
        this.correct = true;
    } else {
        this.correct = false;
    }

    this.resetButt.disabled = true;
    $(this.sortContainerDiv).addClass("parsons-disabled");

};
