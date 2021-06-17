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
**>=**    Greater Than or Equal to  **<=**
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

For example, suppose we can slay the dragon only if our magic lightsabre sword is charged to 90% or higher, and we have 100 or more energy units in our protective shield. We find this fragment of Python code in the game:

.. sourcecode:: python

   if not ((sword_charge >= 0.90) and (shield_energy >= 100)):
      print("Your attack has no effect, the dragon fries you to a crisp!")
   else:
      print("The dragon crumples in a heap. You rescue the gorgeous princess!")

      
de Morgan’s laws together with the logical opposites would let us rework the condition in a (perhaps) easier to understand way like this:

.. sourcecode:: python

   if (sword_charge < 0.90) or (shield_energy < 100):
      print("Your attack has no effect, the dragon fries you to a crisp!")
   else:
      print("The dragon crumples in a heap. You rescue the gorgeous princess!")

We could also get rid of the ``not`` by swapping around the ``then`` and ``else`` parts of the conditional. So here is a third version, also equivalent:
  
.. sourcecode:: python
   
   if (sword_charge >= 0.90) and (shield_energy >= 100):
      print("The dragon crumples in a heap. You rescue the gorgeous princess!")
   else:
      print("Your attack has no effect, the dragon fries you to a crisp!")
      
This version is probably the best of the three, because it very closely matches the initial English statement. Clarity of our code (for other humans), and making it easy to see that the code does what was expected should always be a high priority.


As our programming skills develop we’ll find we have more than one way to solve any problem. So good programs are *designed*. We make choices that favour clarity, simplicity, and elegance. The job title *software architect* says a lot about what we do — we are *architects* who engineer our products to balance beauty, functionality, simplicity and clarity in our creations.
            
