..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: select-2-
   :start: 1

.. index::logical operator
   operator; logical
   single: and 
   single: or
   single: not


Logical operators
-----------------

There are three **logical operators**: ``and``, ``or``, and ``not``. The
semantics (meaning) of these operators is similar to their meaning in English.
For example, ``x > 0 and x < 10`` is true only if ``x`` is greater than 0 *and*
at the same time, x is less than 10.  How would you describe this in words?  You would say that
x is between 0 and 10, not including the endpoints.

``n % 2 == 0 or n % 3 == 0`` is true if *either* of the conditions is true,
that is, if the number is divisible by 2 *or* divisible by 3.  In this case, one, or the other, or
both of the parts has to be true for the result to be true.

Finally, the ``not`` operator negates a boolean expression, so ``not  x > y``
is true if ``x > y`` is false, that is, if ``x`` is less than or equal to
``y``.

.. activecode:: chp05_3

    x = 5
    print(x > 0 and x < 10)

    n = 25
    print(n % 2 == 0 or n % 3 == 0)


When trying to show how logical operators work, computer scientists and mathematicians alike will use 
**truth tables**. A truth table is a small table that lists all possible inputs on its left columns and
then will display the output of its particular logical operator in the right column. Take the logical
operator ``and`` for example:

===== =====  =================== 
===== =====  ===================
**a** **b**  **a** ``and`` **b**
  T   T      T
  T   F      F 
  F   T      F 
  F   F      F 
===== =====  ===================

The *T* in the table stands for ``True`` while the *F* stands for ``False``. Notice that when **a** and **b**
are both ``True``, the logcial operator ``and`` outputs ``True``. This is exactly how 
we normally use "and" in everyday conversation. Here are the rest of the operators:

+-------+-------+---------------------+--------------------+---------------+---------------+   
+=======+=======+=====================+====================+===============+===============+
| **a** | **b** | **a** ``and`` **b** | **a** ``or`` **b** | ``not`` **a** | ``not`` **b** | 
+-------+-------+---------------------+--------------------+---------------+---------------+
| T     | T     | T                   | T                  | F             | F             |   
+-------+-------+---------------------+--------------------+---------------+---------------+
| T     | F     | F                   | T                  | F             | T             |  
+-------+-------+---------------------+--------------------+---------------+---------------+
| F     | T     | F                   | T                  | T             | F             |         
+-------+-------+---------------------+--------------------+---------------+---------------+
| F     | F     | F                   | F                  | T             | T             |  
+-------+-------+---------------------+--------------------+---------------+---------------+

Also, Google has provided this short video showing different logical operators:

.. youtube::  57dPVbnRouU
   :divid: GoogleLogic
   :height: 375
   :width: 667
   :align: left
  
In the video, each letter is representative of a logical operater and only shows its color when the 
corresponding **x** or **y** is showing in the second **G**. If you take a look at xor, you will notice
it is only colorful when either **x** or **y** is showing, but not both. This is called ``exclusive or``,
which we will not be using.

.. admonition:: WARNING!

	There is a very common mistake that occurs when programmers try to write boolean expressions.  For example, what if we have a variable ``number`` and we want to check to see if its value is 5,6, or 7.  In words we might say: "number equal to 5 or 6 or 7".  However, if we translate this into Python, ``number == 5 or 6 or 7``, it will not be correct.  The ``or`` operator must join the results of three equality checks.  The correct way to write this is ``number == 5 or number == 6 or number == 7``.  This may seem like a lot of typing but it is absolutely necessary.  You cannot take a shortcut.


**Check your understanding**

.. mchoice:: test_question6_2_1
   :practice: T
   :answer_a: x &gt; 0 and &lt; 5
   :answer_b: x &gt; 0 or x &lt; 5
   :answer_c: x &gt; 0 and x &lt; 5
   :correct: c
   :feedback_a: Each comparison must be between exactly two values.  In this case the right-hand expression &lt; 5 lacks a value on its left.
   :feedback_b: Although this is legal Python syntax, the expression is incorrect.  It will evaluate to true for all numbers that are either greater than 0 or less than 5.  Because all numbers are either greater than 0 or less than 5, this expression will always be True.
   :feedback_c: Yes, with an and keyword both expressions must be true so the number must be greater than 0 an less than 5 for this expression to be true. Although most other programming languages do not allow this mathematical syntax, in Python, you could also write 0 &lt; x &lt; 5.

   What is a correct Python expression for checking to see if a number stored in a variable x is between 0 and 5?

.. mchoice:: test_question6_2_2
   :practice: T
   :answer_a: A and B
   :answer_b: A or B 
   :answer_c: not A
   :answer_d: not B
   :correct: b, d
   :feedback_a: Both A and B need to be True in order for this to be True. 
   :feedback_b: Either A or B need to be True in order for this to be True.
   :feedback_c: A needs to be False in order for this to be True.
   :feedback_d: B needs to be False in order for this to be True.

   Say you are registering for next semester's classes. You have choice A, which is your art class, and choice B, which is your math class. You need both of them, but it's a race between time and luck. 
   If you end up registering on time for choice A, but you don't get your choice B, which logical operators would be true?


Logical Opposites
~~~~~~~~~~~~~~~~~

Each of the six relational operators has a logical opposite: for example, suppose we can get a driving licence when our age is greater or equal to 17, we can *not* get the driving licence when we are less than 17.

========  ========================  =================
Operator  Definiton                 Logical Opposites
========  ========================  =================
**==**    Equals to                 **!=**
**!=**    Not Equals to             **==**
**<**     Less than                 **>=**
**<=**    Less Than or Equal to     **>**
**>**     Greater Than              **<=**
**>=**    Greater Than or Equal to  **<**
========  ========================  =================

Understanding these logical opposites allows us to sometimes get rid of ``not`` operators. ``not`` operators are often quite difficult to read in computer code, and our intentions will usually be clearer if we can eliminate them.

For example, if we wrote this Python:

.. sourcecode:: python

   if not (age >= 17):
      print("Hey, you're too young to get a driving licence!")

it would probably be clearer to use the simplification laws, and to write instead:           

.. sourcecode:: python

   if age < 17:
      print("Hey, you're too young to get a driving licence!")

Two powerful simplification laws (called de Morgan’s laws) that are often helpful when dealing with complicated Boolean expressions are:

.. sourcecode:: python

   not (x and y)  ==  (not x) or (not y)
   not (x or y)   ==  (not x) and (not y)

For example, suppose you want to update your phone; however, your phone will only update if it has at least 50% battery life and 15% of its storage available. As we look at the Python code for this, we see:

.. sourcecode:: python

   if not ((phone_charge >= 0.50) and (phone_storage >= .15)):
      print("You cannot restart your phone. Battery too low or not enough free space.")
   else:
      print("Updating now...Several restarts may be required.")

      
Applying rules of logical opposites would let us rework the condition in a (perhaps) easier to understand way like this:

.. sourcecode:: python

   if (phone_charge < 0.50) or (phone_storage < .15):
      print("You cannot restart your phone. Battery too low or not enough free space.")
   else:
      print("Updating now...Several restarts may be required.")

We could also get rid of the ``not`` by swapping around the ``then`` and ``else`` parts of the conditional. So here is a third version, also equivalent:
  
.. sourcecode:: python
   
   if (phone_charge >= 0.50) and (phone_storage >= .15):
      print("Updating now...Several restarts may be required.")
   else:
      print("You cannot restart your phone. Battery too low or not enough free space.")
      
This version is probably the best of the three, because it very closely matches the initial English statement. Clarity of our code (for other humans), and making it easy to see that the code does what was expected should always be a high priority.


As our programming skills develop we’ll find we have more than one way to solve any problem. So good programs are *designed*. We make choices that favour clarity, simplicity, and elegance. The job title *software architect* says a lot about what we do — we are *architects* who engineer our products to balance beauty, functionality, simplicity and clarity in our creations.
            
