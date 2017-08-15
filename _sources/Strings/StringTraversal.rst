..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell. Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: strings-6-
   :start: 1

.. index:: string traversal, for, while, iteration

String Traversal
-----------------

A lot of computations involve processing a collection one item at a time. For strings this means that we would like to process one character at a time. Often we start at the beginning, select each character in turn, do something to it, and continue until the end. This pattern of processing is called a **traversal**. In this lesson we'll look at a few different ways to traverse a string: two using the ``for`` loop and one using the ``while`` loop.

The for Loop: By Item
======================

We have previously seen that the ``for`` statement can iterate over the items of a sequence (a list of names in the case below).

.. activecode:: ch08_4
    :nocanvas:

    for name in ["Joe", "Amy", "Brad", "Angelina", "Zuki", "Thandi", "Paris"]:
        invitation = "Hi " + name + ".  Please come to my party on Saturday!"
        print(invitation)

Recall that the loop variable takes on each value in the sequence of names. The body is executed once for each name. The same was true for the sequence of integers created by the ``range`` function.

.. activecode:: ch08_5
    :nocanvas:

    for value in range(10):
        print(value)

Since a string is simply a sequence of characters, the ``for`` loop iterates over each character automatically.

.. activecode:: ch08_6
    :nocanvas:

    for char in "Go Spot Go":
        print(char)

The loop variable ``char`` is automatically reassigned each character in the string "Go Spot Go". We will refer to this type of sequence iteration as **iteration by item**. Note that it is only possible to process the characters one at a time from left to right.

The for Loop: By Index
======================

It is also possible to use the ``range`` function to systematically generate the indices (plural of index) of the characters. The ``for`` loop can then be used to iterate over these positions. These positions can be used together with the indexing operator to access the individual characters in the string.

Consider the following codelens example.

.. codelens:: ch08_7
    :python: py3

    fruit = "apple"
    for index in range(5):
        current_char = fruit[index]
        print(current_char)

The index positions in "apple" are 0,1,2,3 and 4. This is exactly the same sequence of integers returned by ``range(5)``. The first time through the for loop, ``index`` will be 0 and the "a" will be printed. Then, ``index`` will be reassigned to 1 and "p" will be displayed. This will repeat for all the range values up to but not including 5. Since "e" has index 4, this will be exactly right to show all of the characters.

In order to make the iteration more general, we can use the ``len`` function to provide the bound for ``range``. This is a very common pattern for traversing any sequence by position.Make sure you understand why the range function behaves correctly when using ``len`` of the string as its parameter value.

.. activecode:: ch08_7b
    :nocanvas:

    fruit = "apple"
    for index in range(len(fruit)):
        print(fruit[index])


You may also note that iteration by position allows the programmer to control the direction of the traversal by changing the sequence of index values. Recall that we can create ranges that count down as well as up so the following code will print the characters from right to left.

.. codelens:: ch08_8
    :python: py3

    fruit = "apple"
    for index in range(len(fruit)-1, -1, -1):
        print(fruit[index])

Trace the values of ``index`` and satisfy yourself that they are correct. In particular, note the start and end of the range.

The while Loop: By Index
======================

The ``while`` loop can also control the generation of the index values. Remember that the programmer is responsible for setting up the initial condition, making sure that the condition is correct, and making sure that something changes inside the body to guarantee that the condition will eventually fail and we avoid an infinite loop.

.. activecode:: ch08_7c
    :nocanvas:

    fruit = "apple"

    position = 0
    while position < len(fruit):
        print(fruit[position])
        position = position + 1


The loop condition is ``position < len(fruit)``, so when ``position`` is equal to the length of the string, the condition is false, and the body of the loop is not executed. The last character accessed is the one with the index ``len(fruit)-1``, which is the last character in the string.

Here is the same example in codelens so that you can trace the values of the variables.

.. codelens:: ch08_7c1
    :python: py3

    fruit = "apple"

    position = 0
    while position < len(fruit):
        print(fruit[position])
        position = position + 1


**Check your understanding**

.. mchoice:: test_question8_8_1
   :answer_a: 10
   :answer_b: 11
   :answer_c: 12
   :answer_d: Error, the for statement needs to use the range function.
   :correct: c
   :feedback_a: Iteration by item will process once for each item in the sequence.
   :feedback_b: The blank is part of the sequence.
   :feedback_c: Yes, there are 12 characters, including the blank.
   :feedback_d: The for statement can iterate over a sequence item by item.


   How many times is the word HELLO printed by the following statements?

   .. code-block:: python

      s = "python rocks"
      for ch in s:
          print("HELLO")


.. mchoice:: test_question8_8_2
   :answer_a: 4
   :answer_b: 5
   :answer_c: 6
   :answer_d: Error, the for statement cannot use slice.
   :correct: b
   :feedback_a: Slice returns a sequence that can be iterated over.
   :feedback_b: Yes, The blank is part of the sequence returned by slice
   :feedback_c: Check the result of s[3:8].  It does not include the item at index 8.
   :feedback_d: Slice returns a sequence.


   How many times is the word HELLO printed by the following statements?

   .. code-block:: python

      s = "python rocks"
      for ch in s[3:8]:
          print("HELLO")

.. mchoice:: test_question8_9_1
   :answer_a: 0
   :answer_b: 1
   :answer_c: 2
   :answer_d: Error, the for statement cannot have an if inside.
   :correct: c
   :feedback_a: The for loop visits each index but the selection only prints some of them.
   :feedback_b: o is at positions 4 and 8
   :feedback_c: Yes, it will print all the characters in even index positions and the o character appears both times in an even location.
   :feedback_d: The for statement can have any statements inside, including if as well as for.


   How many times is the letter "o" printed by the following statements?

   .. code-block:: python

      s = "python rocks"
      for index in range(len(s)):
          if index % 2 == 0:
              print(s[index])

.. mchoice:: test_question8_10_1
   :answer_a: 0
   :answer_b: 1
   :answer_c: 2
   :correct: a
   :feedback_a: Yes, index goes through the odd numbers starting at 1. o is at position 4 and 8.
   :feedback_b: o is at positions 4 and 8. index starts at 1, not 0.
   :feedback_c: There are 2 o characters but index does not take on the correct index values.


   How many times is the letter "o" printed by the following statements?

   .. code-block:: python

      s = "python rocks"
      index = 1
      while index < len(s):
          print(s[index])
          index = index + 2
