/**
 * Created by bmiller on 3/19/15.
 */


var edList = {};

ActiveCode.prototype = new RunestoneBase();

// separate into constructor and init

function ActiveCode(opts) {
    if (opts) {
        this.init(opts);
        }
    }

ActiveCode.prototype.init = function(opts) {
    RunestoneBase.apply( this, arguments );  // call parent constructor
    var _this = this;
    var suffStart = -1;
    var orig = opts.orig
    this.origElem = orig;
    this.divid = orig.id;
    this.code = $(orig).text();
    this.language = $(orig).data('lang');
    this.timelimit = $(orig).data('timelimit');
    this.includes = $(orig).data('include');
    this.hidecode = $(orig).data('hidecode');
    this.runButton = null;
    this.saveButton = null;
    this.loadButton = null;
    this.outerDiv = null;
    this.output = null; // create pre for output
    this.graphics = null; // create div for turtle graphics
    this.codecoach = null;
    this.codelens = null;

    if(this.includes !== undefined) {
        this.includes = this.includes.split(/\s+/);
    }

    suffStart = this.code.indexOf('====');
    if (suffStart > -1) {
        this.suffix = this.code.substring(suffStart+5);
        this.code = this.code.substring(0,suffStart);
    }

    this.createEditor();
    this.createOutput();
    this.createControls();
    if ($(orig).data('caption')) {
        this.caption = $(orig).data('caption');
    } else {
        this.caption = ""
    }
    this.addCaption()

    if ($(orig).data('autorun')) {
        $(document).ready(this.runProg.bind(this));
    }
};

ActiveCode.prototype.createEditor = function (index) {
    var newdiv = document.createElement('div');
    $(newdiv).addClass("ac_section alert alert-warning");
    var codeDiv = document.createElement("div");
    $(codeDiv).addClass("ac_code_div col-md-12");
    this.codeDiv = codeDiv;
    newdiv.id = this.divid;
    newdiv.lang = this.language;
    this.outerDiv = newdiv;

    $(this.origElem).replaceWith(newdiv);
    newdiv.appendChild(codeDiv);
    var editor = CodeMirror(codeDiv, {value: this.code, lineNumbers: true, mode: newdiv.lang});

    // Make the editor resizable
    $(editor.getWrapperElement()).resizable({
        resize: function() {
            editor.setSize($(this).width(), $(this).height());
            editor.refresh();
        }
    });

    // give the user a visual cue that they have changed but not saved
    editor.on('change', (function () {
        if (editor.acEditEvent == false || editor.acEditEvent === undefined) {
            $(editor.getWrapperElement()).css('border-top', '2px solid #b43232');
            $(editor.getWrapperElement()).css('border-bottom', '2px solid #b43232');
            this.logBookEvent({'event': 'activecode', 'act': 'edit', 'div_id': this.divid});
    }
        editor.acEditEvent = true;
        }).bind(this));  // use bind to preserve *this* inside the on handler.

    this.editor = editor;
    if (this.hidecode) {
        $(this.codeDiv).css("display","none");
    }
};

ActiveCode.prototype.createControls = function () {
    var ctrlDiv = document.createElement("div");
    $(ctrlDiv).addClass("ac_actions");

    // Run
    var butt = document.createElement("button");
    $(butt).text("Run");
    $(butt).addClass("btn btn-success");
    ctrlDiv.appendChild(butt);
    this.runButton = butt;
    $(butt).click(this.runProg.bind(this));

    // Save
    butt = document.createElement("button");
    $(butt).addClass("ac_opt btn btn-default");
    $(butt).text("Save");
    $(butt).css("margin-left","10px");
    this.saveButton = butt;
    ctrlDiv.appendChild(butt);
    if (this.hidecode) {
        $(butt).css("display","none")
    }
    // Load
    butt = document.createElement("button");
    $(butt).addClass("ac_opt btn btn-default");
    $(butt).text("Load");
    $(butt).css("margin-left","10px");
    this.loadButton = butt;
    ctrlDiv.appendChild(butt);
    if (this.hidecode) {
        $(butt).css("display","none")
    }

    if ($(this.origElem).data('gradebutton')) {
        butt = document.createElement("button");
        $(butt).addClass("ac_opt btn btn-default");
        $(butt).text("Show Feedback");
        $(butt).css("margin-left","10px");
        this.gradeButton = butt;
        ctrlDiv.appendChild(butt);
        $(butt).click(this.createGradeSummary.bind(this))
    }
    // Show/Hide Code
    if (this.hidecode) {
        butt = document.createElement("button");
        $(butt).addClass("ac_opt btn btn-default");
        $(butt).text("Show/Hide Code");
        $(butt).css("margin-left", "10px");
        this.showHideButt = butt;
        ctrlDiv.appendChild(butt);
        $(butt).click( (function() { $(this.codeDiv).toggle();
        $(this.loadButton).toggle();
        $(this.saveButton).toggle();
        }).bind(this));
    }

    // CodeLens
    if ($(this.origElem).data("codelens")) {
        butt = document.createElement("button");
        $(butt).addClass("ac_opt btn btn-default");
        $(butt).text("Show CodeLens");
        $(butt).css("margin-left", "10px");
        this.clButton = butt;
        ctrlDiv.appendChild(butt);
        $(butt).click(this.showCodelens.bind(this));
    }
    // CodeCoach
    if ($(this.origElem).data("coach")) {
        butt = document.createElement("button");
        $(butt).addClass("ac_opt btn btn-default");
        $(butt).text("Code Coach");
        $(butt).css("margin-left", "10px");
        this.coachButton = butt;
        ctrlDiv.appendChild(butt);
        $(butt).click(this.showCodeCoach.bind(this));
    }

    // Audio Tour
    if ($(this.origElem).data("audio")) {
        butt = document.createElement("button");
        $(butt).addClass("ac_opt btn btn-default");
        $(butt).text("Audio Tour");
        $(butt).css("margin-left", "10px");
        this.atButton = butt;
        ctrlDiv.appendChild(butt);
        $(butt).click((function() {new AudioTour(this.divid, this.editor.getValue(), 1, $(this.origElem).data("audio"))}).bind(this));
    }

    $(this.outerDiv).prepend(ctrlDiv);

};

ActiveCode.prototype.createOutput = function () {
    // Create a parent div with two elements:  pre for standard output and a div
    // to hold turtle graphics output.  We use a div in case the turtle changes from
    // using a canvas to using some other element like svg in the future.
    var outDiv = document.createElement("div");
    $(outDiv).addClass("ac_output col-md-6");
    this.outDiv = outDiv;
    this.output = document.createElement('pre');

    this.graphics = document.createElement('div');
    $(this.graphics).addClass("ac-canvas");
    // This bit of magic adds an event which waits for a canvas child to be created on our
    // newly created div.  When a canvas child is added we add a new class so that the visible
    // canvas can be styled in CSS.  Which a the moment means just adding a border.
    $(this.graphics).on("DOMNodeInserted", 'canvas', (function(e) {
        $(this.graphics).addClass("visible-ac-canvas")
    }).bind(this));

    this.clDiv = document.createElement("div");
    this.coachDiv = document.createElement("div");
    outDiv.appendChild(this.output);
    outDiv.appendChild(this.graphics);
    outDiv.appendChild(this.clDiv);
    outDiv.appendChild(this.coachDiv);
    this.outerDiv.appendChild(outDiv);

    clearDiv = document.createElement("div");
    $(clearDiv).css("clear","both");  // needed to make parent div resize properly
    this.outerDiv.appendChild(clearDiv);

};

ActiveCode.prototype.disableSaveLoad = function() {
    $(this.saveButton).addClass('disabled');
    $(this.saveButton).attr('title','Login to save your code');
    $(this.loadButton).addClass('disabled');
    $(this.loadButton).attr('title','Login to load your code');
};

ActiveCode.prototype.addCaption = function() {
    //someElement.parentNode.insertBefore(newElement, someElement.nextSibling);
    var capDiv = document.createElement('p');
    $(capDiv).html(this.caption + " (" + this.divid + ")");
    $(capDiv).addClass("ac_caption");
    $(capDiv).addClass("ac_caption_text");

    this.outerDiv.parentNode.insertBefore(capDiv, this.outerDiv.nextSibling);
};

ActiveCode.prototype.saveEditor = function () {

    var saveSuccess = function(data, status, whatever) {
        if (data.redirect) {
            alert("Did not save!  It appears you are not logged in properly")
        } else if (data == "") {
            alert("Error:  Program not saved");
        }
        else {
            var acid = eval(data)[0];
            if (acid.indexOf("ERROR:") == 0) {
                alert(acid);
            } else {
                // use a tooltip to provide some success feedback
                var save_btn = $("#" + acid + "_saveb");
                save_btn.attr('title', 'Saved your code.');
                opts = {
                    'trigger': 'manual',
                    'placement': 'bottom',
                    'delay': { show: 100, hide: 500}
                };
                save_btn.tooltip(opts);
                save_btn.tooltip('show');
                setTimeout(function () {
                    save_btn.tooltip('destroy')
                }, 4000);

                $('#' + acid + ' .CodeMirror').css('border-top', '2px solid #aaa');
                $('#' + acid + ' .CodeMirror').css('border-bottom', '2px solid #aaa');
            }
        }
    };

    var data = {acid: this.divid, code: this.editor.getValue()};
    data.lang = this.language;
    $(document).ajaxError(function (e, jqhxr, settings, exception) {
        alert("Request Failed for" + settings.url)
    });
    jQuery.post(eBookConfig.ajaxURL + 'saveprog', data, saveSuccess);
    if (this.editor.acEditEvent) {
        logBookEvent({'event': 'activecode', 'act': 'edit', 'div_id': this.divid}); // Log the run event
        this.editor.acEditEvent = false;
    }
    logBookEvent({'event': 'activecode', 'act': 'save', 'div_id': this.divid}); // Log the run event

};

ActiveCode.prototype.loadEditor = function () {

    var loadEditor = (function (data, status, whatever) {
        // function called when contents of database are returned successfully
        var res = eval(data)[0];

        if (res.source) {
            this.editor.setValue(res.source);
            this.loadButton.tooltip({'placement': 'bottom',
                             'title': "Loaded your saved code.",
                             'trigger': 'manual'
                            });
        } else {
            this.loadButton.tooltip({'placement': 'bottom',
                             'title': "No saved code.",
                             'trigger': 'manual'
                            });
        }
        this.loadButton.tooltip('show');
        setTimeout(function () {
            this.loadButton.tooltip('destroy')
        }, 4000);
    }).bind(this);

    var data = {acid: this.divid};
    if (sid !== undefined) {
        data['sid'] = sid;
    }
    logBookEvent({'event': 'activecode', 'act': 'load', 'div_id': this.divid}); // Log the run event
    jQuery.get(eBookConfig.ajaxURL + 'getprog', data, loadEditor);

};

ActiveCode.prototype.createGradeSummary = function () {
    // get grade and comments for this assignment
    // get summary of all grades for this student
    // display grades in modal window
    var showGradeSummary = function (data, status, whatever) {
        var report = eval(data)[0];
        // check for report['message']
        if (report['grade']) {
            body = "<h4>Grade Report</h4>" +
                   "<p>This assignment: " + report['grade'] + "</p>" +
                   "<p>" + report['comment'] + "</p>" +
                   "<p>Number of graded assignments: " + report['count'] + "</p>" +
                   "<p>Average score: " +  report['avg'] + "</p>"

        } else {
            body = "<h4>You must be Logged in to see your grade</h4>";
        }
        var html = '<div class="modal fade">' +
            '  <div class="modal-dialog compare-modal">' +
            '    <div class="modal-content">' +
            '      <div class="modal-header">' +
            '        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
            '        <h4 class="modal-title">Assignment Feedback</h4>' +
            '      </div>' +
            '      <div class="modal-body">' +
            body +
            '      </div>' +
            '    </div>' +
            '  </div>' +
            '</div>';

        el = $(html);
        el.modal();
    }
    var data = {'div_id': this.divid}
    jQuery.get(eBookConfig.ajaxURL + 'getassignmentgrade', data, showGradeSummary);
}

ActiveCode.prototype.hideCodelens = function (button, div_id) {
    this.codelens.style.display = 'none'
}

ActiveCode.prototype.showCodelens = function () {
    if (this.codelens === null) {
        var lensDiv = this.clDiv;
        $(lensDiv).addClass("col-md-6");
        $(lensDiv).css("display","none");
        this.codelens = lensDiv;
    }

    if (this.codelens.style.display == 'none') {
        this.codelens.style.display = 'block';
        this.clButton.innerText = "Hide Codelens";
    } else {
        this.codelens.style.display = "none";
        this.clButton.innerText = "Show in Codelens";
        return;
    }

    var cl = this.codelens.firstChild;
    if (cl) {
        div.removeChild(cl)
    }
    var code = this.editor.getValue();
    var myVars = {};
    myVars.code = code;
    myVars.origin = "opt-frontend.js";
    myVars.cumulative = false;
    myVars.heapPrimitives = false;
    myVars.drawParentPointers = false;
    myVars.textReferences = false;
    myVars.showOnlyOutputs = false;
    myVars.rawInputLstJSON = JSON.stringify([]);
    myVars.py = 2;
    myVars.curInstr = 0;
    myVars.codeDivWidth = 350;
    myVars.codeDivHeight = 400;
    var srcURL = '//pythontutor.com/iframe-embed.html';
    var embedUrlStr = $.param.fragment(srcURL, myVars, 2 /* clobber all */);
    var myIframe = document.createElement('iframe');
    myIframe.setAttribute("id", this.divid + '_codelens');
    myIframe.setAttribute("width", "800");
    myIframe.setAttribute("height", "500");
    myIframe.setAttribute("style", "display:block");
    myIframe.style.background = '#fff';
    //myIframe.setAttribute("src",srcURL)
    myIframe.src = embedUrlStr;
    var t = document.createElement('h3');
    t.innerHTML = "Hello Codelens";
    this.codelens.appendChild(t);
    this.codelens.appendChild(myIframe);
    this.logBookEvent({
        'event': 'codelens',
        'act': 'view',
        'div_id': this.divid
    });

};

// <iframe id="%(divid)s_codelens" width="800" height="500" style="display:block"src="#">
// </iframe>


ActiveCode.prototype.showCodeCoach = function (div_id) {
    var myIframe;
    var srcURL;
    var cl;
    if (this.codecoach === null) {
        this.codecoach = document.createElement("div");
        this.codecoach.style.display = 'block'
    }

    cl = this.codecoach.firstChild;
    if (cl) {
        this.codecoach.removeChild(cl)
    }

    srcURL = eBookConfig.app + '/admin/diffviewer?divid=' + div_id;
    myIframe = document.createElement('iframe');
    myIframe.setAttribute("id", div_id + '_coach');
    myIframe.setAttribute("width", "800px");
    myIframe.setAttribute("height", "500px");
    myIframe.setAttribute("style", "display:block");
    myIframe.style.background = '#fff';
    myIframe.style.width = "100%"
    myIframe.src = srcURL;
    this.codecoach.appendChild(myIframe);
    logBookEvent({
        'event': 'coach',
        'act': 'view',
        'div_id': this.divid
    });
};


ActiveCode.prototype.toggleEditorVisibility = function () {

};

ActiveCode.prototype.addErrorMessage = function (err) {
    //logRunEvent({'div_id': this.divid, 'code': this.prog, 'errinfo': err.toString()}); // Log the run event
    console.log("Runtime Error: " + err.toString());
};

ActiveCode.prototype.setTimeLimit = function (timer) {
    var timelimit = this.timeLimit;
    if (timer !== undefined ) {
        timelimit = timer
    }
    // set execLimit in milliseconds  -- for student projects set this to
    // 25 seconds -- just less than Chrome's own timer.
    if (this.code.indexOf('ontimer') > -1 ||
        this.code.indexOf('onclick') > -1 ||
        this.code.indexOf('onkey') > -1  ||
        this.code.indexOf('setDelay') > -1 ) {
        Sk.execLimit = null;
    } else {
        if (timelimit === "off") {
            Sk.execLimit = null;
        } else if (timelimit) {
            Sk.execLimit = timelimit;
        } else {
            Sk.execLimit = 25000;
    }
    }

};

ActiveCode.prototype.builtinRead = function (x) {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
        return Sk.builtinFiles["files"][x];
};

ActiveCode.prototype.outputfun = function(text) {
    // bnm python 3
        var x = text;
    if (x.charAt(0) == '(') {
        x = x.slice(1, -1);
        x = '[' + x + ']';
        try {
            var xl = eval(x);
            xl = xl.map(pyStr);
            x = xl.join(' ');
        } catch (err) {
        }
    }
    text = x;
    text = text.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br/>");
        $(this.output).append(text);
    };

ActiveCode.prototype.buildProg = function() {
    // assemble code from prefix, suffix, and editor for running.
    var pretext;
    var prog = this.editor.getValue();
    if (this.includes !== undefined) {
        // iterate over the includes, in-order prepending to prog
        pretext = "";
        for (var x=0; x < this.includes.length; x++) {
            pretext = pretext + edList[this.includes[x]].editor.getValue();
            }
        prog = pretext + prog
    }

    if(this.suffix) {
        prog = prog + this.suffix;
}

    return prog;
};

ActiveCode.prototype.runProg = function() {
        var prog = this.buildProg()

        $(this.output).text('');


        Sk.configure({output : this.outputfun.bind(this),
              read   : this.builtinRead,
              python3: true,
              imageProxy : 'http://image.runestone.academy:8080/320x'
        });
        Sk.divid = this.divid;
        this.setTimeLimit();
        (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = this.graphics;
        $(this.runButton).attr('disabled', 'disabled');
        $(this.codeDiv).switchClass("col-md-12","col-md-6",{duration:500,queue:false});
        $(this.outDiv).show({duration:700,queue:false});
        var myPromise = Sk.misceval.asyncToPromise(function() {

            return Sk.importMainWithBody("<stdin>", false, prog, true);
        });

        myPromise.then((function(mod) { // success
            $(this.runButton).removeAttr('disabled');
            this.logRunEvent({'div_id': this.id, 'code': prog, 'errinfo': 'success'}); // Log the run event
        }).bind(this),
            (function(err) {  // fail
            $(this.runButton).removeAttr('disabled');
            this.addErrorMessage(err)
                }).bind(this));

        if (typeof(allVisualizers) != "undefined") {
            $.each(allVisualizers, function (i, e) {
                e.redrawConnectors();
                });
            }

    };

JSActiveCode.prototype = new ActiveCode();

function JSActiveCode(opts) {
    if (opts) {
        this.init(opts)
        }
    }

JSActiveCode.prototype.init = function(opts) {
    ActiveCode.prototype.init.apply(this,arguments)
    }

JSActiveCode.prototype.outputfun = function (a) {
    var str = "["
    if (typeof(a) == "object" && a.length) {
        for (var i = 0; i < a.length; i++)
            if (typeof(a[i]) == "object" && a[i].length) {
                str += (i == 0 ? "" : " ") + "["
                for (var j = 0; j < a[i].length; j++)
                    str += a[i][j] + (j == a[i].length - 1 ?
                    "]" + (i == a.length - 1 ? "]" : ",") + "\n" : ", ");
            } else str += a[i] + (i == a.length - 1 ? "]" : ", ");
        } else {
    try {
            str = JSON.stringify(a);
    } catch (e) {
            str = a;
    }
    }
    return str;
}

JSActiveCode.prototype.runProg = function() {
    var _this = this;
    var prog = this.buildProg();

    var write = function(str) {
        _this.output.innerHTML += _this.outputfun(str);
    };

    var writeln = function(str) {
        if (!str) str="";
        _this.output.innerHTML += _this.outputfun(str)+"<br />";
            };

    $(this.output).text('')
    $(this.codeDiv).switchClass("col-md-12","col-md-6",{duration:500,queue:false});
    $(this.outDiv).show({duration:700,queue:false});

    try {
        eval(prog)
    } catch(e) {
        this.addErrorMessage(e);
    }

};

HTMLActiveCode.prototype = new ActiveCode();

function HTMLActiveCode (opts) {
    if (opts) {
        this.init(opts);
    }
}

HTMLActiveCode.prototype.runProg = function () {
    var prog = this.buildProg();

//    $('#'+myDiv+'_iframe').remove();
//    $('#'+myDiv+'_htmlout').show();
//    $('#'+myDiv+'_htmlout').append('<iframe class="activehtml" id="' + myDiv + '_iframe" srcdoc="' +
//        prog.replace(/"/g,"'") + '">' + '</iframe>');
    $(this.output).text('');
    $(this.codeDiv).switchClass("col-md-12","col-md-6",{duration:500,queue:false});
    $(this.outDiv).show({duration:700,queue:false});

    this.output.srcdoc = prog;
};

HTMLActiveCode.prototype.init = function(opts) {
    ActiveCode.prototype.init.apply(this,arguments)
    this.code = $('<textarea />').html(this.origElem.innerHTML).text();
    this.editor.setValue(this.code);
        };

HTMLActiveCode.prototype.createOutput = function () {
    var outDiv = document.createElement("div");
    $(outDiv).addClass("ac_output col-md-6");
    this.outDiv = outDiv;
    this.output = document.createElement('iframe');
    $(this.output).css("background-color","white");
    $(this.output).css("position","relative");
    $(this.output).css("height","400px");
    $(this.output).css("width","100%");
    outDiv.appendChild(this.output);
    this.outerDiv.appendChild(outDiv);

    clearDiv = document.createElement("div");
    $(clearDiv).css("clear","both");  // needed to make parent div resize properly
    this.outerDiv.appendChild(clearDiv);

};


String.prototype.replaceAll = function (target, replacement) {
    return this.split(target).join(replacement);
};

AudioTour.prototype = new RunestoneBase();

// function to display the audio tours
function AudioTour (divid, code, bnum, audio_text) {
    this.elem = null; // current audio element playing
    this.currIndex; // current index
    this.len; // current length of audio files for tour
    this.buttonCount; // number of audio tour buttons
    this.aname; // the audio file name
    this.ahash; // hash of the audio file name to the lines to highlight
    this.theDivid; // div id
    this.afile; // file name for audio
    this.playing = false; // flag to say if playing or not
    this.tourName;

    // Replacing has been done here to make sure special characters in the code are displayed correctly
    code = code.replaceAll("*doubleq*", "\"");
    code = code.replaceAll("*singleq*", "'");
    code = code.replaceAll("*open*", "(");
    code = code.replaceAll("*close*", ")");
    code = code.replaceAll("*nline*", "<br/>");
    var codeArray = code.split("\n");

    var audio_hash = new Array();
    var bval = new Array();
    var atype = audio_text.replaceAll("*doubleq*", "\"");
    var audio_type = atype.split("*atype*");
    for (var i = 0; i < audio_type.length - 1; i++) {
        audio_hash[i] = audio_type[i];
        var aword = audio_type[i].split(";");
        bval.push(aword[0]);
    }

    var first = "<pre><div id='" + divid + "_l1'>" + "1.   " + codeArray[0] + "</div>";
    num_lines = codeArray.length;
    for (var i = 1; i < num_lines; i++) {
        if (i < 9) {
            first = first + "<div id='" + divid + "_l" + (i + 1) + "'>" + (i + 1) + ".   " + codeArray[i] + "</div>";
        }
        else if (i < 99) {
            first = first + "<div id='" + divid + "_l" + (i + 1) + "'>" + (i + 1) + ".  " + codeArray[i] + "</div>";
        }
        else {
            first = first + "<div id='" + divid + "_l" + (i + 1) + "'>" + (i + 1) + ". " + codeArray[i] + "</div>";
        }
    }
    first = first + "</pre>"

    //laying out the HTML content

    var bcount = 0;
    var html_string = "<div class='modal-lightsout'></div><div class='modal-profile'><h3>Take an audio tour!</h3><div class='modal-close-profile'></div><p id='windowcode'></p><p id='" + divid + "_audiocode'></p>";
    html_string += "<p id='status'></p>";
    html_string += "<input type='image' src='../_static/first.png' width='25' id='first_audio' name='first_audio' title='Play first audio in tour' alt='Play first audio in tour' disabled/>" + "<input type='image' src='../_static/prev.png' width='25' id='prev_audio' name='prev_audio' title='Play previous audio in tour' alt='Play previous audio in tour' disabled/>" + "<input type='image' src='../_static/pause.png' width='25' id='pause_audio' name='pause_audio' title='Pause current audio' alt='Pause current audio' disabled/><input type='image' src='../_static/next.png' width ='25' id='next_audio' name='next_audio' title='Play next audio in tour' alt='Play next audio in tour' disabled/><input type='image' src='../_static/last.png' width ='25' id='last_audio' name='last_audio' title='Play last audio in tour' alt='Play last audio in tour' disabled/><br/>";
    for (var i = 0; i < audio_type.length - 1; i++) {
        html_string += "<input type='button' style='margin-right:5px;' class='btn btn-default btn-sm' id='button_audio_" + i + "' name='button_audio_" + i + "' value=" + bval[i] + " />";
        bcount++;
    }
    //html_string += "<p id='hightest'></p><p id='hightest1'></p><br/><br/><p id='test'></p><br/><p id='audi'></p></div>";
    html_string += "</div>";

    var tourdiv = document.createElement('div');
    document.body.appendChild(tourdiv);
    $(tourdiv).html(html_string);
    $('#windowcode').html(first);

    // Position modal box
    $.fn.center = function () {
        this.css("position", "absolute");
        // y position
        this.css("top", ($(window).scrollTop() + $(navbar).height() + 10 + "px"));
        // show window on the left so that you can see the output from the code still
        this.css("left", ($(window).scrollLeft() + "px"));
        return this;
    }

    $(".modal-profile").center();
    $('.modal-profile').fadeIn("slow");
    //$('.modal-lightsout').css("height", $(document).height());
    $('.modal-lightsout').fadeTo("slow", .5);
    $('.modal-close-profile').show();

    // closes modal box once close link is clicked, or if the lights out divis clicked
    $('.modal-close-profile, .modal-lightsout').click( (function () {
        if (this.playing) {
            this.elem.pause();
        }
        //log change to db
        this.logBookEvent({'event': 'Audio', 'act': 'closeWindow', 'div_id': divid});
        $('.modal-profile').fadeOut("slow");
        $('.modal-lightsout').fadeOut("slow");
        document.body.removeChild(tourdiv);
    }).bind(this));

    // Accommodate buttons for a maximum of five tours

    $('#' + 'button_audio_0').click((function () {
        this.tour(divid, audio_hash[0], bcount);
    }).bind(this));
    $('#' + 'button_audio_1').click((function () {
        this.tour(divid, audio_hash[1], bcount);
    }).bind(this));
    $('#' + 'button_audio_2').click((function () {
        this.tour(divid, audio_hash[2], bcount);
    }).bind(this));
    $('#' + 'button_audio_3').click((function () {
        this.tour(divid, audio_hash[3], bcount);
    }).bind(this));
    $('#' + 'button_audio_4').click((function () {
        this.tour(divid, audio_hash[4], bcount);
    }).bind(this));

    // handle the click to go to the next audio
    $('#first_audio').click((function () {
        this.firstAudio();
    }).bind(this));

    // handle the click to go to the next audio
    $('#prev_audio').click((function () {
        this.prevAudio();
    }).bind(this));

    // handle the click to pause or play the audio
    $('#pause_audio').click((function () {
        this.pauseAndPlayAudio();
    }).bind(this));

    // handle the click to go to the next audio
    $('#next_audio').click((function () {
        this.nextAudio();
    }).bind(this));

    // handle the click to go to the next audio
    $('#last_audio').click((function () {
        this.lastAudio();
    }).bind(this));

    // make the image buttons look disabled
    $("#first_audio").css('opacity', 0.25);
    $("#prev_audio").css('opacity', 0.25);
    $("#pause_audio").css('opacity', 0.25);
    $("#next_audio").css('opacity', 0.25);
    $("#last_audio").css('opacity', 0.25);

};

AudioTour.prototype.tour = function (divid, audio_type, bcount) {
    // set globals
    this.buttonCount = bcount;
    this.theDivid = divid;

    // enable prev, pause/play and next buttons and make visible
    $('#first_audio').removeAttr('disabled');
    $('#prev_audio').removeAttr('disabled');
    $('#pause_audio').removeAttr('disabled');
    $('#next_audio').removeAttr('disabled');
    $('#last_audio').removeAttr('disabled');
    $("#first_audio").css('opacity', 1.0);
    $("#prev_audio").css('opacity', 1.0);
    $("#pause_audio").css('opacity', 1.0);
    $("#next_audio").css('opacity', 1.0);
    $("#last_audio").css('opacity', 1.0);

    // disable tour buttons
    for (var i = 0; i < bcount; i++)
        $('#button_audio_' + i).attr('disabled', 'disabled');

    var atype = audio_type.split(";");
    var name = atype[0].replaceAll("\"", " ");
    this.tourName = name;
    $('#status').html("Starting the " + name);

    //log tour type to db
    this.logBookEvent({'event': 'Audio', 'act': name, 'div_id': divid});

    var max = atype.length;
    var str = "";
    this.ahash = new Array();
    this.aname = new Array();
    for (i = 1; i < max - 1; i++) {
        var temp = atype[i].split(":");
        var temp_line = temp[0];
        var temp_aname = temp[1];

        var akey = temp_aname.substring(1, temp_aname.length);
        var lnums = temp_line.substring(1, temp_line.length);

        //alert("akey:"+akey+"lnum:"+lnums);

        // str+="<audio id="+akey+" preload='auto'><source src='http://ice-web.cc.gatech.edu/ce21/audio/"+
        // akey+".mp3' type='audio/mpeg'><source src='http://ice-web.cc.gatech.edu/ce21/audio/"+akey+
        // ".ogg' type='audio/ogg'>Your browser does not support the audio tag</audio>";
        str += "<audio id=" + akey + " preload='auto' ><source src='../_static/audio/" + akey +
            ".wav' type='audio/wav'><source src='../_static/audio/" +
            akey + ".mp3' type='audio/mpeg'><br />Your browser does not support the audio tag</audio>";
        this.ahash[akey] = lnums;
        this.aname.push(akey);
    }
    var ahtml = "#" + divid + "_audiocode";
    $(ahtml).html(str); // set the html to the audio tags
    this.len = this.aname.length; // set the number of audio file in the tour

    // start at the first audio
    this.currIndex = 0;

    // play the first audio in the tour
    this.playCurrIndexAudio();
};

AudioTour.prototype.handlePlaying = function() {

    // if this.playing audio pause it
    if (this.playing) {

        this.elem.pause();

        // unbind current ended
        $('#' + this.afile).unbind('ended');

        // unhighlight the prev lines
        this.unhighlightLines(this.theDivid, this.ahash[this.aname[this.currIndex]]);
    }

}

AudioTour.prototype.firstAudio = function () {

    // if audio is this.playing handle it
    this.handlePlaying();

    //log change to db
    this.logBookEvent({'event': 'Audio', 'act': 'first', 'div_id': this.theDivid});


    // move to the first audio
    this.currIndex = 0;

    // start at the first audio
    this.playCurrIndexAudio();

};

AudioTour.prototype.prevAudio = function () {

    // if there is a previous audio
    if (this.currIndex > 0) {

        // if audio is this.playing handle it
        this.handlePlaying();

        //log change to db
        this.logBookEvent({'event': 'Audio', 'act': 'prev', 'div_id': this.theDivid});


        // move to previous to the current (but the current index has moved to the next)
        this.currIndex = this.currIndex - 1;

        // start at the prev audio
        this.playCurrIndexAudio();
    }

};

AudioTour.prototype.nextAudio = function () {

    // if audio is this.playing handle it
    this.handlePlaying();

    //log change to db
    this.logBookEvent({'event': 'Audio', 'act': 'next', 'div_id': this.theDivid});

    // if not at the end
    if (this.currIndex < (this.len - 1)) {
        // start at the next audio
        this.currIndex = this.currIndex + 1;
        this.playCurrIndexAudio();
    }
    else if (this.currIndex == (this.len - 1)) {
        this.handleTourEnd();
    }
};

AudioTour.prototype.lastAudio = function () {

    // if audio is this.playing handle it
    this.handlePlaying();

    //log change to db
    this.logBookEvent({'event': 'Audio', 'act': 'last', 'div_id': this.theDivid});

    // move to the last audio
    this.currIndex = this.len - 1;

    // start at last
    this.playCurrIndexAudio();

};

// play the audio at the current index
AudioTour.prototype.playCurrIndexAudio = function () {

    // set this.playing to false
    this.playing = false;

    // play the current audio and highlight the lines
    this.playaudio(this.currIndex, this.aname, this.theDivid, this.ahash);

};

// handle the end of the tour
AudioTour.prototype.handleTourEnd = function () {

    $('#status').html(" The " + this.tourName + " Ended");

    // disable the prev, pause/play, and next buttons and make them more invisible
    $('#first_audio').attr('disabled', 'disabled');
    $('#prev_audio').attr('disabled', 'disabled');
    $('#pause_audio').attr('disabled', 'disabled');
    $('#next_audio').attr('disabled', 'disabled');
    $('#last_audio').attr('disabled', 'disabled');
    $("#first_audio").css('opacity', 0.25);
    $("#prev_audio").css('opacity', 0.25);
    $("#pause_audio").css('opacity', 0.25);
    $("#next_audio").css('opacity', 0.25);
    $("#last_audio").css('opacity', 0.25);

    // enable the tour buttons
    for (var j = 0; j < this.buttonCount; j++)
        $('#button_audio_' + j).removeAttr('disabled');
};

// only call this one after the first time
AudioTour.prototype.outerAudio = function () {

    // unbind ended
    $('#' + this.afile).unbind('ended');

    // set this.playing to false
    this.playing = false;

    // unhighlight previous lines from the last audio
    this.unhighlightLines(this.theDivid, this.ahash[this.aname[this.currIndex]]);

    // increment the this.currIndex to point to the next one
    this.currIndex++;

    // if the end of the tour reset the buttons
    if (this.currIndex == this.len) {
        this.handleTourEnd();
    }

    // else not done yet so play the next audio
    else {

        // play the audio at the current index
        this.playCurrIndexAudio();
    }
};

// play the audio now that it is ready
AudioTour.prototype.playWhenReady = function (afile, divid, ahash) {
    // unbind current
    $('#' + afile).unbind('canplaythrough');
    //console.log("in playWhenReady " + elem.duration);

    $('#status').html("Playing the " + this.tourName);
    this.elem.currentTime = 0;
    this.highlightLines(divid, ahash[afile]);
    $('#' + afile).bind('ended', (function () {
        this.outerAudio();
    }).bind(this));
    this.playing = true;
    this.elem.play();

};


// play the audio at the specified index i and set the duration and highlight the lines
AudioTour.prototype.playaudio = function (i, aname, divid, ahash) {
    this.afile = aname[i];
    this.elem = document.getElementById(this.afile);

    // if this isn't ready to play yet - no duration yet then wait
    //console.log("in playaudio " + elem.duration);
    if (isNaN(this.elem.duration) || this.elem.duration == 0) {
        // set the status
        $('#status').html("Loading audio.  Please wait.   If it doesn't start soon close this window (click on the red X) and try again");
        $('#' + this.afile).bind('canplaythrough', (function () {
            this.playWhenReady(this.afile, divid, ahash);
        }).bind(this));
    }
    // otherwise it is ready so play it
    else {
        this.playWhenReady(this.afile, divid, ahash);
    }
};

// pause if this.playing and play if paused
AudioTour.prototype.pauseAndPlayAudio = function () {
    var btn = document.getElementById('pause_audio');

    // if paused and clicked then continue from current
    if (this.elem.paused) {
        // calcualte the time left to play in milliseconds
        counter = (this.elem.duration - this.elem.currentTime) * 1000;
        this.elem.play(); // start the audio from current spot
        document.getElementById("pause_audio").src = "../_static/pause.png";
        document.getElementById("pause_audio").title = "Pause current audio";
        //log change to db
        this.logBookEvent({'event': 'Audio', 'act': 'play', 'div_id': this.theDivid});
    }

    // if audio was this.playing pause it
    else if (this.playing) {
        this.elem.pause(); // pause the audio
        document.getElementById("pause_audio").src = "../_static/play.png";
        document.getElementById("pause_audio").title = "Play paused audio";
        //log change to db
        this.logBookEvent({'event': 'Audio', 'act': 'pause', 'div_id': this.theDivid});
    }

};

// process the lines
AudioTour.prototype.processLines = function (divid, lnum, color) {
    var comma = lnum.split(",");

    if (comma.length > 1) {
        for (i = 0; i < comma.length; i++) {
            this.setBackgroundForLines(divid, comma[i], color);
        }
    }
    else {
        this.setBackgroundForLines(divid, lnum, color);
    }
};

// unhighlight the lines - set the background back to transparent
AudioTour.prototype.unhighlightLines = function (divid, lnum) {
    this.processLines(divid, lnum, 'transparent');
};

// highlight the lines - set the background to a yellow color
AudioTour.prototype.highlightLines = function (divid, lnum) {
    this.processLines(divid, lnum, '#ffff99');
};

// set the background to the passed color
AudioTour.prototype.setBackgroundForLines = function (divid, lnum, color) {
    var hyphen = lnum.split("-");

    // if a range of lines
    if (hyphen.length > 1) {
        var start = parseInt(hyphen[0]);
        var end = parseInt(hyphen[1]) + 1;
        for (var k = start; k < end; k++) {
            //alert(k);
            var str = "#" + divid + "_l" + k;
            if ($(str).text() != "") {
                $(str).css('background-color', color);
            }
            //$(str).effect("highlight",{},(dur*1000)+4500);
        }
    }
    else {
        //alert(lnum);
        var str = "#" + divid + "_l" + lnum;
        $(str).css('background-color', color);
        //$(str).effect("highlight",{},(dur*1000)+4500);
    }
};

//
//

LiveCode.prototype = new ActiveCode();

function LiveCode(opts) {
    if (opts) {
        this.init(opts)
        }
    }

LiveCode.prototype.init = function(opts) {
    ActiveCode.prototype.init.apply(this,arguments)

    var orig = opts.orig;
    this.stdin = $(orig).data('stdin');
    this.datafile = $(orig).data('datafile');
    this.sourcefile = $(orig).data('sourcefile');

    this.API_KEY = "67033pV7eUUvqo07OJDIV8UZ049aLEK1"
    this.USE_API_KEY = true;
    this.JOBE_SERVER = 'http://jobe2.cosc.canterbury.ac.nz';
    this.resource = '/jobe/index.php/restapi/runs/';
    this.div2id = {}
    if (this.stdin) {
        this.createInputElement();
    }
    this.createErrorOutput();
    };

LiveCode.prototype.outputfun = function (a) {};

LiveCode.prototype.createInputElement = function () {

    var label = document.createElement('label');
    label.for = this.divid + "_stdin";
    $(label).text("Input for Program")
    var input = document.createElement('input')
    input.id = this.divid + "_stdin";
    input.type = "text";
    input.size = "35";
    input.value = this.stdin;
    this.outerDiv.appendChild(label);
    this.outerDiv.appendChild(input);
    this.stdin_el = input;
};

LiveCode.prototype.createErrorOutput = function () {

}

LiveCode.prototype.runProg = function() {
        var xhr, stdin;
        var runspec = {};
        var data, host, source, editor;
        var sfilemap = {java: '', cpp: 'test.cpp', c: 'test.c', python3: 'test.py', python2: 'test.py'}

        xhr = new XMLHttpRequest();
        source = this.editor.getValue();

        if (this.stdin) {
            stdin = $(this.stdin_el).val();
        }

        if (! this.sourcefile ) {
            this.sourcefile = sfilemap[this.language];
        }

        runspec = {
            language_id: this.language,
            sourcecode: source,
            sourcefilename: this.sourcefile
        };


        if (stdin) {
            runspec.input = stdin
        }

        if (this.datafile) {
            runspec['file_list'] = [[this.div2id[datafile],datafile]];
        }
        data = JSON.stringify({'run_spec': runspec});
        host = this.JOBE_SERVER + this.resource

        var odiv = this.output;
        $(this.runButton).attr('disabled', 'disabled');
        $(this.codeDiv).switchClass("col-md-12","col-md-6",{duration:500,queue:false});
        $(this.outDiv).show({duration:700,queue:false});
        $(this.errDiv).remove();

        xhr.open("POST", host, true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.setRequestHeader('X-API-KEY', this.API_KEY);

        xhr.onload = (function () {
            var logresult;
            $(this.runButton).removeAttr('disabled');
            try {
                var result = JSON.parse(xhr.responseText);
            } catch (e) {
                result = {};
                result.outcome = -1;
            }

            if (result.outcome === 15) {
                logresult = 'success';
            } else {
                logresult = result.outcome;
            }
            this.logRunEvent({'div_id': this.divid, 'code': source, 'errinfo': logresult, 'event':'livecode'});
            switch (result.outcome) {
                case 15:
                    $(odiv).html(result.stdout.replace(/\n/g, "<br>"));
                    break;
                case 11: // compiler error
                    $(odiv).html("There were errors compiling your code. See below.");
                    this.addJobeErrorMessage(result.cmpinfo);
                    break;
                case 12:  // run time error
                    $(odiv).html(result.stdout.replace(/\n/g, "<br>"));
                    if (result.stderr) {
                        this.addJobeErrorMessage(result.stderr);
                    }
                    break;
                case 13:  // time limit
                    $(odiv).html(result.stdout.replace(/\n/g, "<br>"));
                    this.addJobeErrorMessage("Time Limit Exceeded on your program");
                    break;
                default:
                    if(result.stderr) {
                        $(odiv).html(result.stderr.replace(/\n/g, "<br>"));
                    } else {
                        this.addJobeErrorMessage("A server error occurred: " + xhr.status + " " + xhr.statusText);
                    }
            }

            // todo: handle server busy and timeout errors too
        }).bind(this);

        ///$("#" + divid + "_errinfo").remove();
        $(this.output).html("Compiling and Running your Code Now...")

        xhr.onerror = function () {
            this.addJobeErrorMessage("Error communicating with the server.");
            $(this.runButton).removeAttr('disabled');
        };

        xhr.send(data);
    };
LiveCode.prototype.addJobeErrorMessage = function (err) {
        var errHead = $('<h3>').html('Error');
        var eContainer = this.outerDiv.appendChild(document.createElement('div'));
        this.errDiv = eContainer;
        eContainer.className = 'error alert alert-danger';
        eContainer.id = this.divid + '_errinfo';
        eContainer.appendChild(errHead[0]);
        var errText = eContainer.appendChild(document.createElement('pre'))
        errText.innerHTML = err;
    };


LiveCode.prototype.pushDataFile = function (datadiv) {

        var file_id = 'runestone'+Math.floor(Math.random()*100000);
        var contents = $(document.getElementById(datadiv)).text();
        var contentsb64 = btoa(contents);
        var data = JSON.stringify({ 'file_contents' : contentsb64 });
        var resource = '/jobe/index.php/restapi/files/' + file_id
        var host = JOBE_SERVER + resource
        var xhr = new XMLHttpRequest();

        if (this.div2id[datadiv] === undefined ) {
            this.div2id[datadiv] = file_id;

            xhr.open("PUT", host, true);
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.setRequestHeader('Accept', 'text/plain');
            xhr.setRequestHeader('X-API-KEY', API_KEY);

            xhr.onload = function () {
                console.log("successfully sent file " + xhr.responseText);
            }

            xhr.onerror = function () {
                console.log("error sending file" + xhr.responseText);
            }

            xhr.send(data)
        }
    };

//

$(document).ready(function() {
    $('[data-component=activecode]').each( function(index ) {
        if ($(this).data('lang') === "javascript") {
            edList[this.id] = new JSActiveCode({'orig': this});
        } else if ($(this).data('lang') === 'htmlmixed') {
            edList[this.id] = new HTMLActiveCode({'orig': this});
        } else if (['java', 'cpp', 'c', 'python3', 'python2'].indexOf($(this).data('lang')) > -1) {
            edList[this.id] = new LiveCode({'orig': this});
        } else {   // default is python
            edList[this.id] = new ActiveCode({'orig': this});
        }
    });
    if (loggedout) {
        for (k in edList) {
            edList[k].disableSaveLoad();
        }
    }

});

// This seems a bit hacky and possibly brittle, but its hard to know how long it will take to
// figure out the login/logout status of the user.  Sometimes its immediate, and sometimes its
// long.  So to be safe we'll do it both ways..
var loggedout;
$(document).bind("runestone:logout",function() { loggedout=true;})
$(document).bind("runestone:logout",function() {
    for (k in edList) {
        if (edList.hasOwnProperty(k)) {
            edList[k].disableSaveLoad();
        }
    }
});