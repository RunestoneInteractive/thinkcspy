..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell. Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

Exercises
---------

.. container:: full_width

    #.

        .. tabbed:: q1

            .. tab:: Question

               Draw a reference diagram for ``a`` and ``b`` before and after the third line of
               the following python code is executed:

               .. sourcecode:: python

                   a = [1, 2, 3]
                   b = a[:]
                   b[0] = 5

            .. tab:: Answer

                Your diagram should show two variables referring to two different lists.  ``a`` refers to the original list with 1,2, and 3.
                ``b`` refers to a list with 5,2, and 3 since the zero-eth element was replaced with 5.



    #.  Create a list called ``myList`` with the following six items: 76, 92.3, "hello", True, 4, 76. Do it with both append and with concatenation, one item at a time.

        .. activecode:: ex_9_2


    #.

        .. tabbed:: q3

            .. tab:: Question

               Starting with the list in Exercise 2, write Python statements to do the following:

               a. Append "apple" and 76 to the list.
               #. Insert the value "cat" at position 3.
               #. Insert the value 99 at the start of the list.
               #. Find the index of "hello".
               #. Count the number of 76s in the list.
               #. Remove the first occurrence of 76 from the list.
               #. Remove True from the list using ``pop`` and ``index``.


               .. activecode:: ex_9_3

            .. tab:: Answer

                .. activecode:: q3_answer

                    myList = [76, 92.3, 'hello', True, 4, 76]

                    myList.append("apple")         # a
                    myList.append(76)              # a
                    myList.insert(3, "cat")        # b
                    myList.insert(0, 99)           # c

                    print(myList.index("hello"))   # d
                    print(myList.count(76))        # e
                    myList.remove(76)              # f
                    myList.pop(myList.index(True)) # g

                    print (myList)


    #.

        .. tabbed:: q7

            .. tab:: Question

                Write a function to count how many odd numbers are in a list.

                .. activecode:: ex_9_6

            .. tab:: Answer

                .. activecode:: q7_answer

                    import random

                    def countOdd(lst):
                        odd = 0
                        for e in lst:
                            if e % 2 != 0:
                                odd = odd + 1
                        return odd

                    # make a random list to test the function
                    lst = []
                    for i in range(100):
                        lst.append(random.randint(0, 1000))

                    print(countOdd(lst))

Weekly Graded Assignment
========================

.. container:: full_width

    Write a function to find the average of the numbers in a list after the highest and lowest valued numbers have been removed. (You can assume that no number will appear more than once in the list.) For example, given a list of ``[24,1,10,4,38,2]`` the numbers "1" and "38" should be removed and the average of the remaining numbers should be returned (in this case, the average is 10).

    Normally we start you off by providing the function definition statement, e.g.:

    .. code-block:: python

        def launch_rockets(destination, num_passengers):
              # your code here

    But in this case we will leave that to you! In other words, you will need to write that ``def`` line yourself. Make sure you give your function the name ``find_average``, so that the tests work. Your function should accept one argument, the list of numbers to find the average for.

    .. activecode:: ex_9_7

          # TODO
          # define a function called find_average, which receives one argument, a list of numbers.
          # your function should remove both the highest and the lowest number in the list and then
          # return the average of the remaining numbers in the list.


          # don't copy these tests into Vocareum
          from test import testEqual

          testEqual(find_average([19,3,1,8,13]), 8)
          testEqual(find_average([0,7,3,4,5,13,1]), 4)
          testEqual(find_average([120,30,50]), 50)
