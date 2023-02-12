..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: turtle-3-
   :start: 1

.. index:: for loop, iteration, body
   loop; for

The ``for`` Loop
----------------

.. youtube:: xGSfiZt5cdw
    :divid: forloopvid
    :height: 315
    :width: 560
    :align: left

The ``while`` statement is a general-purpose tool for iteration, and is necessary for any instance of iteration where we don't know how many repetitions will be needed.
However, if we do know how many are needed, there is a more efficient method: the ``for`` statement.

As a simple example, let's say we have some friends, and
we'd like to send them each an email inviting them to our party.  We
don't quite know how to send email yet, so for the moment we'll just print a
message for each friend.

.. activecode:: ch03_4
    :nocanvas:
    :tour_1: "Overall Tour"; 1-2: Example04_Tour01_Line01; 2: Example04_Tour01_Line02; 1: Example04_Tour01_Line03;

    for name in ["Joe", "Amy", "Brad", "Angelina", "Zuki", "Thandi", "Paris"]:
        print(f"Hi {name}! Please come to my party on Saturday!")


Take a look at the output produced when you press the ``run`` button.  There is one line printed for each friend.  Here's how it works:


* **name** in this ``for`` statement is the **loop variable**.
* The list of names in the square brackets is a regular list. Later we'll see that other types besides lists can be put in this spot.
* Line 2  is the **loop body**.  Like with while, the loop body is always
  indented. The loop body is performed one time for each name in the list.
* On each *iteration* or *pass* of the loop, a check is done to see if
  there are still more items to be processed.  If there are none left (this is
  called the **terminating condition** of the loop), the loop has finished.
  Program execution continues at the next statement after the loop body.
* If there are items still to be processed, the loop variable is updated to
  refer to the next item in the list.  This means, in this case, that the loop
  body is executed here 7 times, and each time ``name`` will refer to a different
  friend.
* At the end of each execution of the body of the loop, Python returns
  to the ``for`` statement, to see if there are more items to be handled.

.. note::

	Introduction of the for statement causes us to think about the types of iteration we have seen.  The ``for`` statement will always iterate through a sequence of 
	values like the list of names for the party.  
	Since we know that it will iterate once for each value in the collection, it is often said that a ``for`` loop creates a
	**definite iteration** because we definitely know how many times we are going to iterate.  On the other
	hand, the ``while`` statement is dependent on a condition that needs to evaluate to ``False`` in order
	for the loop to terminate.  Since we do not necessarily know when this will happen, it creates what we
	call **indefinite iteration**.  Indefinite iteration simply means that we don't know how many times we will repeat but eventually the condition 
	controlling the iteration will fail and the iteration will stop. (Unless we have an infinite loop which is of course a problem.)

What you will notice here is that the ``while`` loop is more work for
you --- the programmer --- than the equivalent ``for`` loop.  When using a ``while``
loop you have to control the loop variable yourself.  You give it an initial value, test
for completion, and then make sure you change something in the body so that the loop
terminates.

**Check your understanding**

.. mchoice:: test_question7_6_1
   :practice: T
   :answer_a: True
   :answer_b: False
   :correct: a
   :feedback_a: Although the while loop uses a different syntax, it is just as powerful as a for-loop and often more flexible.
   :feedback_b: Often a for-loop is more natural and convenient for a task, but that same task can always be expressed using a while loop.

   True or False: You can rewrite any for-loop as a while-loop.
