..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: intro-8-
   :start: 1

.. index:: error;runtime, runtime error

Runtime Errors
--------------

The second type of error is a runtime error, so called because the error does
not appear until you run the program. These errors are also called
**exceptions** because they usually indicate that something exceptional (and
bad) has happened.

Runtime errors are rare in the simple programs you will see in the first few
chapters, so it might be a while before you encounter one.

**Check your understanding**

.. mchoice:: question1_7_1
   :answer_a: Attempting to divide by 0.
   :answer_b: Forgetting a colon at the end of a statement where one is required.
   :answer_c: Forgetting to divide by 100 when printing a percentage amount.
   :correct: a
   :feedback_a: Python cannot reliably tell if you are trying to divide by 0 until it is executing your program (e.g., you might be asking the user for a value and then dividing by that value - you cannot know what value the user will enter before you run the program).
   :feedback_b: This is a problem with the formal structure of the program.  Python knows where colons are required and can detect when one is missing simply by looking at the code without running it.
   :feedback_c: This will produce the wrong answer, but Python will not consider it an error at all.  The programmer is the one who understands that the answer produced is wrong.

   Which of the following is a run-time error?

.. mchoice:: question1_7_2
   :answer_a: The programmer.
   :answer_b: The compiler / interpreter.
   :answer_c: The computer.
   :answer_d: The teacher / instructor.
   :correct: b
   :feedback_a: Programmers rarely find all the runtime errors, there is a computer program that will do it for us.
   :feedback_b: If an instruction is illegal to perform at that point in the execution, the interpreter will stop with a message describing the exception.
   :feedback_c: Well, sort of.  But it is a special thing in the computer that does it.  The stand alone computer without this additional piece can not do it.
   :feedback_d: Your teacher and instructor may be able to find most of your runtime errors, but only because they have experience looking at code and possibly writing code.  With experience runtime errors are easier to find.  But we also have an automated way of finding these types of errors.


   Who or what typically finds runtime errors?


