..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell. Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: list-2-
   :start: 1

.. index:: lists, len, in, slice, list deletion, strings

Lists and Strings are Similar
==============================

Lists, like strings, are collection data types. Many of the operations you learned to do on strings in the last chapter you can do on lists. In this lesson we'll review a few of these similarities.

List Length
-----------

As with strings, the function ``len`` returns the length of a list (the number of items in the list).  However, since lists can have items which are themselves lists, it important to note that ``len`` only returns the length of the top-most list. In other words, sublists are considered to be a single item when counting the length of the list.

.. activecode:: chp09_01a

    alist =  ["hello", 2.0, 5, [10, 20]]
    print(len(alist))
    print(len(['spam!', 1, ['Brie', 'Roquefort', 'Pol le Veq'], [1, 2, 3]]))


List Membership
---------------

``in`` and ``not in`` are boolean operators that test membership in a sequence. We used them previously with strings and they also work here.

.. activecode:: chp09_4

    fruit = ["apple", "orange", "banana", "cherry"]

    print("apple" in fruit)
    print("pear" in fruit)


List Slices
-----------

The slice operation we saw with strings also work on lists. Remember that the first index is the starting point for the slice and the second number is one index past the end of the slice (up to but not including that element).  Recall also that if you omit the first index (before the colon), the slice starts at the beginning of the sequence. If you omit the second index, the slice goes to the end of the sequence.

.. activecode:: chp09_6

    a_list = ['a', 'b', 'c', 'd', 'e', 'f']
    print(a_list[1:3])
    print(a_list[:4])
    print(a_list[3:])
    print(a_list[:])


List Deletion
-------------

Although there are many similarities between lists and strings, there are some important differences. Perhaps the most profound is that lists are mutable (can be changed), where as strings are immutable. An example of this can be seen in list deletion --- an operation that wouldn't be possible on a string, since its collection of characters can't be changed.

Using slices to delete list elements can be awkward and error-prone, so Python provides an alternative that is more readable. The ``del`` statement removes an element from a list by using its position.

.. activecode:: ch09_11

    a = ['one', 'two', 'three']
    del a[1]
    print(a)

    alist = ['a', 'b', 'c', 'd', 'e', 'f']
    del alist[1:5]
    print(alist)

As you might expect, ``del`` handles negative indices and causes a runtime error if the index is out of range. In addition, you can use a slice as an index for ``del``. As usual, slices select all the elements up to, but not including, the second index.


**Check your understanding**

.. mchoice:: test_question9_2_1
   :answer_a: 4
   :answer_b: 5
   :correct: b
   :feedback_a: len returns the actual number of items in the list, not the maximum index value.
   :feedback_b: Yes, there are 5 items in this list.

   What is printed by the following statements?

   .. code-block:: python

     alist = [3, 67, "cat", 3.14, False]
     print(len(alist))


.. mchoice:: test_question9_2_2
   :answer_a: 7
   :answer_b: 8
   :correct: a
   :feedback_a: Yes, there are 7 items in this list even though two of them happen to also be lists.
   :feedback_b: len returns the number of top level items in the list. It does not count items in sublists.

   What is printed by the following statements?

    .. code-block:: python

      alist = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
      print(len(alist))


.. mchoice:: test_question9_4_1
   :answer_a: True
   :answer_b: False
   :correct: a
   :feedback_a: Yes, 3.14 is an item in the list alist.
   :feedback_b: There are 7 items in the list, 3.14 is one of them.

   What is printed by the following statements?

   .. code-block:: python

     alist = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
     print(3.14 in alist)


.. mchoice:: test_question9_4_2
   :answer_a: True
   :answer_b: False
   :correct: b
   :feedback_a: in returns True for top level items only. 57 is in a sublist.
   :feedback_b: Yes, 57 is not a top level item in alist. It is in a sublist.

   What is printed by the following statements?

   .. code-block:: python

     alist = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
     print(57 in alist)


.. mchoice:: test_question9_6_1
   :answer_a: [ [ ], 3.14, False]
   :answer_b: [ [ ], 3.14]
   :answer_c: [ [56, 57, "dog"], [ ], 3.14, False]
   :correct: a
   :feedback_a: Yes, the slice starts at index 4 and goes up to and including the last item.
   :feedback_b: By leaving out the upper bound on the slice, we go up to and including the last item.
   :feedback_c: Index values start at 0.

   What is printed by the following statements?

   .. code-block:: python

     alist = [3, 67, "cat", [56, 57, "dog"], [ ], 3.14, False]
     print(alist[4:])
