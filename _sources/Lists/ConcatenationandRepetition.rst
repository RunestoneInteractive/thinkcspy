..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell. Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: list-6-
   :start: 1

.. index:: concatenation, repetition, lists

Concatenation and Repetition
----------------------------

Also, as with strings, the ``+`` operator concatenates lists. Similarly, the ``*`` operator repeats the items in a list a given number of times.

.. activecode:: chp09_5

    fruit = ["apple", "orange", "banana", "cherry"]
    print([1, 2] + [3, 4])
    print(fruit + [6, 7, 8, 9])

    print([0] * 4)
    print([1, 2, ["hello", "goodbye"]] * 2)

It is important to see that these operators **create new lists** from the elements of the operand lists. If you concatenate a list with 2 items and a list with 4 items, you will get a new list with 6 items (*not a list with two sublists*).  Similarly, repetition of a list of 2 items 4 times will give a list with 8 items.

One way for us to make this more clear is to run a part of this example in codelens. As you step through the code, you will see the variables being created and the lists that they refer to. Pay particular attention to the fact that when ``new_list`` is created by the statement ``new_list = fruit + num_list``, it refers to a completely new list formed by making copies of the items from ``fruit`` and ``num_list``.  You can see this very clearly in the codelens object diagram. *The objects are different*.

.. codelens:: chp09_concatid
    :python: py3

    fruit = ["apple", "orange", "banana", "cherry"]
    num_list = [6, 7]

    new_list = fruit + num_list

    zeros = [0] * 4

Note that concatenation is similar to the append method, but with the important difference that ``append`` only *modifies* the original list. It does not *create a new list* as concatenation does.

Also be aware that you can only concatenate *lists* together. So if you wanted to concatenate the ``fruit`` list above with a string like ``"kiwi"``, you would need to put it in square brackets::

   more_fruit = fruit + ["kiwi"]

**Check your understanding**

.. mchoice:: test_question9_5_1
   :answer_a: 6
   :answer_b: [1, 2, 3, 4, 5, 6]
   :answer_c: [1, 3, 5, 2, 4, 6]
   :answer_d: [3, 7, 11]
   :correct: c
   :feedback_a: Concatenation does not add the lengths of the lists.
   :feedback_b: Concatenation does not reorder the items.
   :feedback_c: Yes, a new list with all the items of the first list followed by all those from the second.
   :feedback_d: Concatenation does not add the individual items.

   What is printed by the following statements?

   .. code-block:: python

     alist = [1, 3, 5]
     blist = [2, 4, 6]
     print(alist + blist)


.. mchoice:: test_question9_5_2
   :answer_a: 9
   :answer_b: [1, 1, 1, 3, 3, 3, 5, 5, 5]
   :answer_c: [1, 3, 5, 1, 3, 5, 1, 3, 5]
   :answer_d: [3, 9, 15]
   :correct: c
   :feedback_a: Repetition does not multiply the lengths of the lists. It repeats the items.
   :feedback_b: Repetition does not repeat each item individually.
   :feedback_c: Yes, the items of the list are repeated 3 times, one after another.
   :feedback_d: Repetition does not multiply the individual items.

   What is printed by the following statements?

   .. code-block:: python

     alist = [1, 3, 5]
     print(alist * 3)


.. mchoice:: test_question9_15_1
   :answer_a: [4, 2, 8, 6, 5, 999]
   :answer_b: Error, you cannot concatenate a list with an integer.
   :correct: b
   :feedback_a: You cannot concatenate a list with an integer.
   :feedback_b: Yes, in order to perform concatenation you would need to write alist+[999].  You must have two lists.

   What is printed by the following statements?

   .. code-block:: python

     alist = [4, 2, 8, 6, 5]
     alist = alist + 999
     print(alist)
