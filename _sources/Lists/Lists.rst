..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell. Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: list-1-
   :start: 1

.. index:: lists, nested list, sublist, elements, index

Lists
======

A **list** is a sequential collection of Python data values, where each value is identified by an index. The values that make up a list are called its **elements**. Lists are similar to strings, which are ordered collections of characters, except that the elements of a list can have *any type* and for any one list, the items can be of different types.

List Basics
-----------

There are several ways to create a new list. The simplest is to enclose the elements in square brackets.

.. sourcecode:: python

    [10, 20, 30, 40]
    ["spam", "bungee", "swallow"]

The first example is a list of four integers. The second is a list of three strings. As we said above, the elements of a list don't have to be the same type. The following list contains a string, a float, an integer, and another list.

.. sourcecode:: python

    ["hello", 2.0, 5, [10, 20]]

A list within another list is said to be **nested** and the inner list is often called a **sublist**. We'll talk more about nested lists below. Finally, there is a special list that contains no elements. It is called the empty list and is denoted ``[]``.

As you would expect, we can also assign list values to variables and pass lists as parameters to functions.

.. activecode:: chp09_01

    vocabulary = ["iteration", "selection", "control"]
    numbers = [17, 123]
    empty = []
    mixed_list = ["hello", 2.0, 5*2, [10, 20]]

    print(numbers)
    print(mixed_list)
    new_list = [ numbers, vocabulary ]
    print(new_list)


Accessing List Elements
------------------------

The syntax for accessing the elements of a list is the same as the syntax for accessing the characters of a string. We use the index operator ( ``[]`` -- not to be confused with an empty list). The expression inside the brackets specifies the index. Remember that the indices start at 0. Any integer expression can be used as an index and negative index values will locate items from the right instead of from the left.

.. activecode:: chp09_02

    numbers = [17, 123, 87, 34, 66, 8398, 44]
    print(numbers[2])
    print(numbers[9 - 8])
    print(numbers[-2])


Nested Lists
------------

A nested list is a list that appears as an element in another list. In this list, the element with index 3 is a nested list. If we print(``nested[3]``), we get ``[10, 20]``. To extract an element from the nested list, we can proceed in two steps. First, extract the nested list, then extract the item of interest. It is also possible to combine those steps using bracket operators that evaluate from left to right.

.. activecode:: chp09_nest

    nested = ["hello", 2.0, 5, [10, 20]]
    innerlist = nested[3]
    print(innerlist)
    item = innerlist[1]
    print(item)

    print(nested[3][1])


**Check your understanding**

.. mchoice:: test_question9_1_1
   :answer_a: False
   :answer_b: True
   :correct: a
   :feedback_a: Yes, unlike strings, lists can consist of any type of Python data.
   :feedback_b: Lists are heterogeneous, meaning they can have different types of data.

   A list can contain only integer items.


.. mchoice:: test_question9_3_1
   :answer_a: [ ]
   :answer_b: 3.14
   :answer_c: False
   :correct: b
   :feedback_a: The empty list is at index 4.
   :feedback_b: Yes, 3.14 is at index 5 since we start counting at 0 and sublists count as one item.
   :feedback_c: False is at index 6.

   What is printed by the following statements?

   .. code-block:: python

     alist = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
     print(alist[5])


.. mchoice:: test_question9_3_2
   :answer_a: Error, you cannot use the upper method on a list.
   :answer_b: 2
   :answer_c: CAT
   :correct: c
   :feedback_a: alist[2] is the string cat so the upper method is legal
   :feedback_b: 2 is the index. We want the item at that index.
   :feedback_c: Yes, the string cat is upper cased to become CAT.

   What is printed by the following statements?

   .. code-block:: python

     alist = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
     print(alist[2].upper())

.. mchoice:: test_question9_21_1
   :answer_a: 6
   :answer_b: 8
   :answer_c: 888
   :answer_d: 999
   :correct: c
   :feedback_a: 6 is in the wrong list. alist[1] refers to the second item in alist, namely [888,999].
   :feedback_b: 8 is in the wrong list. alist[1] refers to the second item in alist, namely [888,999].
   :feedback_c: Yes, alist[0][1][0] is True and alist[1] is the second list, the first item is 888.
   :feedback_d: alist[0][1][0] is True. Take another look at the if statement.

   What is printed by the following statements?

   .. code-block:: python

     alist = [ [4, [True, False], 6, 8], [888, 999] ]
     if alist[0][1][0]:
        print(alist[1][0])
     else:
        print(alist[1][1])
