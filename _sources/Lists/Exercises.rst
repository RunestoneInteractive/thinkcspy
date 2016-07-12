..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

Exercises
---------

.. container:: full_width


    #.  Create a list containing 100 random integers between 0 and 1000 (use iteration, append, and the random module).  Write a function called ``average`` that will take the list as a parameter and return the average.

        .. activecode:: ex_9_4

    #.

        .. tabbed:: q5

            .. tab:: Question

               Write a Python function that will take a the list of 100 random integers between 0 and 1000 and return the maximum value.  (Note: there is a builtin function named ``max`` but pretend you cannot use it.)

               .. activecode:: ex_9_5


            .. tab:: Answer

                .. activecode:: q5_answer

                    import random

                    def max(lst):
                        max = 0
                        for e in lst:
                            if e > max:
                                max = e
                        return max

                    lst = []
                    for i in range(100):
                        lst.append(random.randint(0, 1000))

                    print(max(lst))


    #. Write a function ``sum_of_squares(xs)`` that computes the sum
       of the squares of the numbers in the list ``xs``.  For example,
       ``sum_of_squares([2, 3, 4])`` should return 4+9+16 which is ``29``:

       .. activecode:: ex_7_11

    #.

        .. tabbed:: q9

            .. tab:: Question

               Sum up all the negative numbers in a list.

               .. activecode:: ex_9_8

            .. tab:: Answer

                .. activecode:: q9_answer

                    import random

                    def sumNegative(lst):
                        sum = 0
                        for e in lst:
                            if e < 0:
                                sum = sum + e
                        return sum

                    lst = []
                    for i in range(100):
                        lst.append(random.randrange(-1000, 1000))

                    print(sumNegative(lst))


    #. Count how many words in a list have length 5.

       .. activecode:: ex_9_9


    #. (GRADED) Write a function that will sum up all the elements in a list up to but not including the first even number.

        .. activecode:: ex_9_10


    #. Count how many words occur in a list up to and including the first occurrence of the word "sam".

       .. activecode:: ex_9_11


    #.

        .. tabbed:: q13

            .. tab:: Question

               Although Python provides us with many list methods, it is good practice and very instructive to think about how they are implemented.  Implement a Python function that works like the following:

               a. count
               #. in
               #. reverse
               #. index
               #. insert


               .. activecode:: ex_9_12

            .. tab:: Answer

                .. activecode:: q13_answer

                    def count(obj, lst):
                        count = 0
                        for e in lst:
                            if e == obj:
                                count = count + 1
                        return count

                    def is_in(obj, lst):  # cannot be called in() because in is a reserved keyword
                        for e in lst:
                            if e == obj:
                                return True
                        return False

                    def reverse(lst):
                        reversed = []
                        for i in range(len(lst)-1, -1, -1): # step through the original list backwards
                            reversed.append(lst[i])
                        return reversed

                    def index(obj, lst):
                        for i in range(len(lst)):
                            if lst[i] == obj:
                                return i
                        return -1

                    def insert(obj, index, lst):
                        newlst = []
                        for i in range(len(lst)):
                            if i == index:
                                newlst.append(obj)
                            newlst.append(lst[i])
                        return newlst

                    lst = [0, 1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9]
                    print(count(1, lst))
                    print(is_in(4, lst))
                    print(reverse(lst))
                    print(index(2, lst))
                    print(insert('cat', 4, lst))


    #. Write a function ``replace(s, old, new)`` that replaces all occurences of
       ``old`` with ``new`` in a string ``s``::

          test(replace('Mississippi', 'i', 'I'), 'MIssIssIppI')

          s = 'I love spom!  Spom is my favorite food.  Spom, spom, spom, yum!'
          test(replace(s, 'om', 'am'),
                 'I love spam!  Spam is my favorite food.  Spam, spam, spam, yum!')

          test(replace(s, 'o', 'a'),
                 'I lave spam!  Spam is my favarite faad.  Spam, spam, spam, yum!')

       *Hint*: use the ``split`` and ``join`` methods.

       .. activecode:: ex_9_13
