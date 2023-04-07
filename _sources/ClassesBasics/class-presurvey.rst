Pre Survey
-----------------------------------------------------

Please answer the following questions.

==============

.. poll:: class-CS-self-efficacy-1
    :option_1: Strongly disagree
    :option_2: Disagree
    :option_3: Neither agree nor disagree
    :option_4: Agree
    :option_5: Strongly agree
    :results: instructor

    Generally I have felt secure about attempting computer programming problems.

.. poll:: class-CS-self-efficacy-2
    :option_1: Strongly disagree
    :option_2: Disagree
    :option_3: Neither agree nor disagree
    :option_4: Agree
    :option_5: Strongly agree
    :results: instructor

    I am sure I could do advanced work in computer science.

.. poll:: class-CS-self-efficacy-3
    :option_1: Strongly disagree
    :option_2: Disagree
    :option_3: Neither agree nor disagree
    :option_4: Agree
    :option_5: Strongly agree
    :results: instructor

    I am sure that I can learn programming.

.. poll:: class-CS-self-efficacy-4
    :option_1: Strongly disagree
    :option_2: Disagree
    :option_3: Neither agree nor disagree
    :option_4: Agree
    :option_5: Strongly agree
    :results: instructor

    I think I could handle more difficult programming problems.

.. poll:: class-CS-self-efficacy-5
    :option_1: Strongly disagree
    :option_2: Disagree
    :option_3: Neither agree nor disagree
    :option_4: Agree
    :option_5: Strongly agree
    :results: instructor

    I can get good grades in computer science.

.. poll:: class-CS-self-efficacy-6
    :option_1: Strongly disagree
    :option_2: Disagree
    :option_3: Neither agree nor disagree
    :option_4: Agree
    :option_5: Strongly agree
    :results: instructor

    I have a lot of self-confidence when it comes to programming.

For the next questions please select the answer that best
matches your familiarity and confidence
about the specified concept(s).

.. poll:: class-obj-7-itcse
    :option_1: I am unfamiliar with these concepts
    :option_2: I know what they mean, but have not used them in a program
    :option_3: I have used these concepts in a program, but am not confident about my ability to use them
    :option_4: I am confident in my ability to use these concepts in simple programs
    :option_5: I am confident in my ability to use these concepts in complex programs
    :results: instructor

    Creating classes like <code>class Person:</code> and objects like <code>p = Person("Barb Ericson")</code>

.. poll:: class-obj-8-itcse
    :option_1: I am unfamiliar with these concepts
    :option_2: I know what they mean, but have not used them in a program
    :option_3: I have used these concepts in a program, but am not confident about my ability to use them
    :option_4: I am confident in my ability to use these concepts in simple programs
    :option_5: I am confident in my ability to use these concepts in complex programs
    :results: instructor

    Methods like <code>__init__</code> and <code>__str__</code>

.. poll:: class-obj-9-itcse
    :option_1: I am unfamiliar with these concepts
    :option_2: I know what they mean, but have not used them in a program
    :option_3: I have used these concepts in a program, but am not confident about my ability to use them
    :option_4: I am confident in my ability to use these concepts in simple programs
    :option_5: I am confident in my ability to use these concepts in complex programs
    :results: instructor

    The use of  <code>self</code> in class

.. poll:: class-obj-10-itcse
    :option_1: I am unfamiliar with these concepts
    :option_2: I know what they mean, but have not used them in a program
    :option_3: I have used these concepts in a program, but am not confident about my ability to use them
    :option_4: I am confident in my ability to use these concepts in simple programs
    :option_5: I am confident in my ability to use these concepts in complex programs
    :results: instructor

    Defining instance variables like <code>self.color = color</code>

Thanks for filling this survey and let us know you better!

Feedback
==================================

.. shortanswer:: class-presurvey-sa

   Please provide feedback here. Please share any comments, problems, or suggestions.

What to do next
============================
.. raw:: html

   <p>Click on the following link to go the practice problems: <a id="class-practice"><font size="+2">Practice Problems</font></a></p>

.. raw:: html

   <script type="text/javascript">

     function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
           let c = ca[i];
           while (c.charAt(0) == ' ') {
              c = c.substring(1);
           }
           if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
           }
        }
        return "";
     }

     function setCookie(cname, cvalue) {
        document.cookie = cname + "=" + cvalue + ";";
     }

     window.onload = function() {

        a = document.getElementById("class-practice")

        // get prev set cookie
        var EXP_COOKIE = 'class-exp-dist-or-no'
        var cond = getCookie(EXP_COOKIE);

        // if no prev set cookie: generate random condition and set cookie
        if (cond != 'wd' && cond != 'nd') {
           var v = Math.floor(Math.random() * 2);
           if (v < 1) {
               cond = 'wd';
           } else {
               cond = 'nd';
           }
           setCookie(EXP_COOKIE, cond);
        }

        if (cond == 'wd') {
           a.href = "class-pwd.html"
        } else if (cond == 'nd') {
           a.href = "class-pnd.html"
        }
     };
   </script>
