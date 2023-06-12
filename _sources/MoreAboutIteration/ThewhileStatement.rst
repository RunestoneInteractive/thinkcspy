..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: iter-3-
   :start: 1

The ``while`` Statement
-----------------------

.. youtube:: blTBEqybQmQ
    :divid: whileloop
    :height: 315
    :width: 560
    :align: left

A basic building block of all programs is to be able to repeat some code
over and over again.  In computer science, we refer to this repetitive idea as **iteration**.  In this section, we will explore some mechanisms for basic iteration.

Let's look at our first Python statement that can be used to build an iteration.  It is called the ``while`` statement. When used with other code it can be used to 
repeat code in a **while loop**. Similar to the ``if`` statement, it uses
a boolean expression to control the flow of execution.  The body of while (code indented one space in) will be repeated as long as the controlling boolean 
expression evaluates to ``True``.

Here is a simple example that counts down from 10 to 0.

.. activecode:: ch07_while1

	count = 10
	while count > 0:
		print(count)
		count = count - 1
	print("Blastoff!")


* **count** is a normal variable here, but since it is governing the ``while`` loop it is also called the **loop variable**.
* Line 2 here is the **loop condition**. It must always be a boolean expression that will evaluate to ``False`` or ``True``.
* Lines 3 and 4 are the **loop body**.  The loop body is always
  indented. The indentation determines exactly what statements are "in the
  loop".  The loop body is run each time the loop is repeated.
* On each *iteration* or *pass* of the loop, a check is done to see if
  the loop condition is True (if ``count`` is greater than zero).  If it is not (this is
  called the **terminating condition** of the loop), the loop has finished.
  Program execution continues at the next statement after the loop body.
* If ``count`` is greater than zero, the loop body is executed again.
* At the end of each execution of the body of the loop, Python returns
  to the ``while`` statement, to see if the loop should repeat.

Notice that if the condition is ``False`` the first time through the
loop, the statements inside the loop are never executed.

.. warning::
   Though Python's ``while`` is very close to the English "while",
   there is an important difference:  In English "while X, do Y",
   we usually assume that immediately after X becomes false, we stop
   with Y.  In Python there is *not* an immediate stop:  After the
   initial test, any following tests come only after the execution of
   the *whole* body, even if the condition becomes false in the middle of the loop body.

The body of the loop should change the value of one or more variables so that
eventually the condition becomes ``False`` and the loop terminates. Otherwise the
loop will repeat forever. This is called an **infinite loop**.
An endless source of amusement for computer scientists is the observation that the
directions written on the back of the shampoo bottle (lather, rinse, repeat) create an infinite loop.

We can use the ``while`` loop to create any type of iteration we wish, making more general-purpose than the ``for`` loop we'll learn next week.  
For example, let us consider a program that adds all numbers from ``1`` to ``n``. To do this, we will create a variable called ``aNumber`` and initialize it to 
1, the first number in the summation.  Every iteration will add ``aNumber`` to the running total until all the values have been used.
In order to control the iteration, we must create a boolean expression that evaluates to ``True`` as long as we want to keep adding values to our 
running total.  In this case, as long as ``aNumber`` is less than or equal to the bound, we should keep going.

Here is the summation program that uses a while statement.

.. activecode:: ch07_while2

	""" Return the sum of 1+2+3 ... n """
	aBound = int(input("Please give a number n: "))
	theSum  = 0
	aNumber = 1
	while aNumber <= aBound:
		theSum = theSum + aNumber
		aNumber = aNumber + 1
	print(theSum)



You can almost read the ``while`` statement as if it were in natural language. It means,
while ``aNumber`` is less than or equal to ``aBound``, continue executing the body of the loop. Within
the body, each time, update ``theSum`` and increment ``aNumber``. After the body of the loop, we go 
back up to the condition of the ``while`` and reevaluate it.  When ``aNumber`` becomes greater 
than ``aBound``, the condition fails and flow of control continues to the ``print`` statement.

The same program in codelens will allow you to observe the flow of execution.

.. codelens:: ch07_while3

	""" Return the sum of 1+2+3 ... n """
	aBound = 10
	theSum  = 0
	aNumber = 1
	while aNumber <= aBound:
		theSum = theSum + aNumber
		aNumber = aNumber + 1
	print(theSum)



In the case shown above, we can prove that the loop terminates because we
know that the value of ``aBound`` is finite, and we can see that the value of ``aNumber``
increments each time through the loop, so eventually it will have to exceed ``aBound``. In
other cases, it is not so easy to tell.

.. note::

   This workspace is provided for your convenience.  You can use this activecode window to try out anything you like.

   .. activecode:: scratch_07_01

.. mchoice:: test_question7_2_2
   :practice: T
   :answer_a: n starts at 10 and is incremented by 1 each time through the loop, so it will always be positive
   :answer_b: answer starts at 1 and is incremented by n each time, so it will always be positive
   :answer_c: You cannot compare n to 0 in while loop.  You must compare it to another variable.
   :answer_d: In the while loop body, we must set n to False, and this code does not do that.
   :correct: a
   :feedback_a: The loop will run as long as n is positive.  In this case, we can see that n will never become non-positive.
   :feedback_b: While it is true that answer will always be positive, answer is not considered in the loop condition.
   :feedback_c: It is perfectly valid to compare n to 0.  Though indirectly, this is what causes the infinite loop.
   :feedback_d: The loop condition must become False for the loop to terminate, but n by itself is not the condition in this case.

   The following code contains an infinite loop.  Which is the best explanation for why the loop does not terminate?

   .. code-block:: python

     n = 10
     answer = 1
     while n > 0:
         answer = answer + n
         n = n + 1
     print(answer)


.. mchoice:: test_question7_2_3
   :practice: T
   :answer_a: 4 7
   :answer_b: 5 7
   :answer_c: 7 15
   :correct: c
   :feedback_a: Setting a variable so the loop condition would be false in the middle of the loop body does not keep the variable from actually being set.
   :feedback_b: Setting a variable so the loop condition would be false in the middle of the loop body does not stop execution of statements in the rest of the loop body.
   :feedback_c: After n becomes 5 and the test would be False, but the test does not actually come until after the end of the loop - only then stopping execution of the repetition of the loop.


   What is printed by this code?

   .. code-block:: python

     n = 1
     x = 2
     while n < 5:
         n = n + 1
         x = x + 1
         n = n + 2
         x = x + n
     print(n, x)
