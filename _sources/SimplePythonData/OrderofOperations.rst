..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: data-9-
   :start: 1

Order of Operations
-------------------

.. youtube:: Ezve3QJv6Aw
    :divid: precedencevid
    :height: 315
    :width: 560
    :align: center



When more than one operator appears in an expression, the order of evaluation
depends on the **rules of precedence**. Python follows the same precedence
rules for its mathematical operators that mathematics does.




.. The acronym PEMDAS
.. is a useful way to remember the order of operations:

#. Parentheses have the highest precedence and can be used to force an
   expression to evaluate in the order you want. Since expressions in
   parentheses are evaluated first, ``2 * (3-1)`` is 4, and ``(1+1)**(5-2)`` is
   8. You can also use parentheses to make an expression easier to read, as in
   ``(minute * 100) / 60``, even though it doesn't change the result.
#. Exponentiation has the next highest precedence, so ``2**1+1`` is 3 and
   not 4, and ``3*1**3`` is 3 and not 27.  Can you explain why?
#. Multiplication and both division operators have the same
   precedence, which is higher than addition and subtraction, which
   also have the same precedence. So ``2*3-1`` yields 5 rather than 4, and
   ``5-2*2`` is 1, not 6.
#. Operators with the *same* precedence (except for ``**``) are
   evaluated from left-to-right. In algebra we say they are *left-associative*.
   So in the expression ``6-3+2``, the subtraction happens first, yielding 3.
   We then add 2 to get the result 5. If the operations had been evaluated from
   right to left, the result would have been ``6-(3+2)``, which is 1.

.. (The
..   acronym PEDMAS could mislead you to thinking that division has higher
..   precedence than multiplication, and addition is done ahead of subtraction.
..   Don't be misled.  Subtraction and addition are at the same precedence, and
..   the left-to-right rule applies.)

.. note::

    An exception to the left-to-right
    left-associative rule is the exponentiation operator `**`. A useful hint
    is to always use parentheses to force exactly the order you want when
    exponentiation is involved:

    .. activecode:: ch02_23
        :nocanvas:

        print(2 ** 3 ** 2)     # the right-most ** operator gets done first!
        print((2 ** 3) ** 2)   # use parentheses to force the order you want!

.. The immediate mode command prompt of Python is great for exploring and
.. experimenting with expressions like this.

See :ref:`operator-summary` for *all* the operators introduced in this book.
You will also see many upcoming non-mathematical Python operators.

**Check your understanding**

.. mchoice:: test_question2_8_1
   :practice: T
   :answer_a: 14
   :answer_b: 24
   :answer_c: 3
   :answer_d: 13.667
   :correct: a
   :feedback_a: Using parentheses, the expression is evaluated as (2*5) first, then (10 // 3), then (16-3), and then (13+1).
   :feedback_b: Remember that * has precedence over -.
   :feedback_c: Remember that // has precedence over -.
   :feedback_d: Remember that // does integer division.

   What is the value of the following expression:

   .. code-block:: python

      16 - 2 * 5 // 3 + 1



.. mchoice:: test_question2_8_2
   :practice: T
   :answer_a: 768
   :answer_b: 128
   :answer_c: 12
   :answer_d: 256
   :correct: a
   :feedback_a: Exponentiation has precedence over multiplication, but its precedence goes from right to left!  So 2 ** 3 is 8, 2 ** 8 is 256 and 256 * 3 is 768.
   :feedback_b: Exponentiation (**) is processed right to left, so take 2 ** 3 first.
   :feedback_c: There are two exponentiations.
   :feedback_d: Remember to multiply by 3.

   What is the value of the following expression:

   .. code-block:: python

      2 ** 2 ** 3 * 3

Here are animations for the above expressions:

.. showeval:: se_tq281
   :trace_mode: true

   16 - 2 * 5 // 3 + 1
   ~~~~
   16 - {{2 * 5}}{{10}} // 3 + 1
   16 - {{10 // 3}}{{3}} + 1
   {{16 - 3}}{{13}} + 1
   {{13 + 1}}{{14}}

.. showeval:: se_tq282
   :trace_mode: true

   2 ** 2 ** 3 * 3
   ~~~~
   2 ** {{2 ** 3}}{{8}} * 3
   {{2 ** 8}}{{256}} * 3
   {{256 * 3}}{{768}}
