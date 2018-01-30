..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell. Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: select-2-
   :start: 1

.. index:: logical operators, truth tables, boolean value, boolean expression

Logical Operators
-----------------

There are three **logical operators**: ``and``, ``or``, and ``not``. The semantics (meaning) of these operators is similar to their meaning in English. For example, ``x > 0 and x < 10`` is true only if ``x`` is greater than 0 *and*, at the same time, ``x`` is less than 10. How else might you describe this? You could say that ``x`` is between 0 and 10, not including the endpoints.

``n % 2 == 0 or n % 3 == 0`` is true if *either* of the conditions is true, that is, if the number is divisible by 2 *or* the number is divisible by 3. In this case, one, or the other, or both of the parts has to be true for the result to be true.

Finally, the ``not`` operator negates a boolean expression, so ``not i > j`` is true if ``i > j`` is false, that is, the statement will evaluate to true if ``i`` is less than or equal to ``j``.

.. activecode:: chp05_3

    x = 5
    print(x > 0 and x < 10)

    n = 25
    print(n % 2 == 0 or n % 3 == 0)

    i = 2
    j = 3
    print(not(i > j))

    i = 3
    j = 3
    print(not(i > j))

.. admonition:: Common Mistake!

  There is a very common mistake that occurs when programmers try to write boolean expressions. For example, what if we have a variable ``num`` and we want to check if its value is 5, 6, or 7. In words we might say: "num equal to 5 or 6 or 7".  However, if we translate this into Python as ``num == 5 or 6 or 7``, it will not be correct. The ``or`` operator must join the *results* of three equality checks. The correct way to write this is ``num == 5 or num == 6 or num == 7``.  This may seem like a lot of typing but it is absolutely necessary. You cannot take a shortcut.

  An exception is the case of chaining comparison operators. For example, in Python it is permissible to write ``x < y < z`` which means the same as its mathematical expression and is functionally equivalent to the Python expression ``x < y and y < z``.

`Truth tables <https://en.wikipedia.org/wiki/Truth_table>`_ can be very helpful to us in determining the boolean value of an expression that uses a logical operator. Here is an example of a truth table that looks at two statements, ``p`` and ``q``, that are boolean expressions. It tells us which result, ``True`` or ``False``, we will get based on whether the boolean value of each statement is ``True`` or ``False``:

==========  ==========  =========================
``p``        ``q``         ``p and q``
==========  ==========  =========================
True        True        True
True        False       False
False       True        False
False       False       False
==========  ==========  =========================

You can see from this that both statements must be true in order for the expression ``p and q`` to evaluate to ``True``. Similarly, we can do a truth table for the expression ``p or q`` and it will show us that only either ``p`` or ``q`` must be true for the whole expression to evaluate to ``True``:

==========  ==========  =========================
``p``        ``q``         ``p or q``
==========  ==========  =========================
True        True        True
True        False       True
False       True        True
False       False       False
==========  ==========  =========================

Finally, we can make a truth table that will show us the value of the expression ``not p`` given the boolean value of the statement ``p``:

==========  ==========
``p``        ``not p``
==========  ==========
True        False
False       True
==========  ==========

**Check your understanding**

.. mchoice:: test_question6_2_1
   :answer_a: x &gt; 0 and &lt; 5
   :answer_b: x &gt; 0 or x &lt; 5
   :answer_c: x &gt; 0 and x &lt; 5
   :correct: c
   :feedback_a: Each comparison must be between exactly two values. In this case the right-hand expression &lt; 5 lacks a value on its left.
   :feedback_b: Although this is legal Python syntax, the expression is incorrect. It will evaluate to true for all numbers that are either greater than 0 or less than 5. Because all numbers are either greater than 0 or less than 5, this expression will always be True.
   :feedback_c: Yes, with an and keyword both expressions must be true so the number must be greater than 0 an less than 5 for this expression to be true.

   What is the correct Python expression for checking to see if a number stored in a variable x is between 0 and 5.
