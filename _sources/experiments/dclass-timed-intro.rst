Introduction to the Timed Pretest
-----------------------------------------------------

The pretest is a timed test.

* This means that you will see how much time you have at the top (in minutes) and then a start button.  Once you click the start button you will see the first question. The time will start to countdown.  If you reach 0 all your answers will be saved.
* Answer each question to the best of your ability.  You will not receive any feedback on the correctness of your answer.
* Use the "Next" button to move to the next question.  You can also click the number buttons to move to that number question.
* Once you have seen all of the questions a "Finish Exam" button will appear.  Click that button to end your exam, but only when you are done.
* Use the "Flag Question" button to highlight a question to remind yourself to come back to it later.  The number button for that question will have a orange background if you click "Flag Question".

See the video below for detailed instructions on how to start a timed exam,
move to different questions, flag a question to remind yourself to review it later,
and finish the exam.

.. youtube:: CrydSpPplUQ
    :divid: dintro-timed-exam-v1-class-exp
    :optional:
    :width: 650
    :align: center

Practice Timed Exam
========================

Click the start button to take the practice timed exam.


.. timed:: dtimed_intro-class-exp
   :timelimit: 5
   :noresult:
   :nofeedback:
   :nopause:

   .. mchoice:: dtimed_intro_q1_add-class-exp
      :practice: T
      :answer_a: 3
      :answer_b: 4
      :answer_c: 7
      :answer_d: 7.0
      :answer_e: I don't know
      :correct: c
      :feedback_a: Incorrect!  It will set x to 3 + 4.
      :feedback_b: Incorrect!  It will set x to 3 + 4.
      :feedback_c: It will set x to 3 + 4 = 7
      :feedback_d: Incorrect! It is adding integers so the result will be an integer
      :feedback_e: No problem.

      What will the following code print?

      ::

        x = 3 + 4
        print(x)

   .. mchoice:: dtimed_intro_q2_str_upper-class-exp
      :practice: T
      :answer_a: hi there
      :answer_b: Hi There
      :answer_c: HI there
      :answer_d: HI THERE
      :answer_e: I don't know
      :correct: d
      :feedback_a: Incorrect!  It will print the string in uppercase.
      :feedback_b: Incorrect!  It will print the string in uppercase.
      :feedback_c: Incorrect!  It will print the string in uppercase.
      :feedback_d: Correct! It will print the sting in all uppercase letters.
      :feedback_e: No problem.

      What will the following code print?

      ::

        s = "hi there"
        print(s.upper())


Feedback
==================================

.. shortanswer:: dclass-exp-pre-timed-intro-sa

   Please provide feedback here. Please share any comments, problems, or suggestions.

What to do next
============================
.. raw:: html

    <p>Click on the following link to take the pretest: <b><a id="dclass-pretest"><font size="+2">Pre Test</font></a></b></p>

.. raw:: html

    <script type="text/javascript" >


      function preventBack() { window.history.forward(); }
      setTimeout("preventBack()", 0);
      window.onunload = function () { null };

      window.onload = function() {

        a = document.getElementById("dclass-pretest")
        a.href = "dclass-pretest.html"

      };

    </script>
