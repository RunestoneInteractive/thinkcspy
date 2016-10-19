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



    #.  Create a list called ``myList`` with the following six items: 76, 92.3, "hello", True, 4, 76.  Do it with both append and with concatenation, one item at a time.

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


    #. (GRADED) Write a function to find the sum of all the even numbers in a list.

       Normally we start you off by providing the function definition statement, e.g.:

       .. code-block:: python

          def launch_rockets(destination, num_passengers):
              # your code here

       But in this case we will leave that to you! In other words, you will need to write that ``def`` line yourself. Make sure you give your function the name ``sum_evens``, so that the tests work. Your function should accept one argument, the list of numbers to be summed.

       .. activecode:: ex_9_7

          # TODO
          # define a function called sum_evens, which receives one argument, a list of numbers.
          # your function should return the sum of all the even numbers in the list


          # don't copy these tests into Vocareum
          from test import testEqual

          testEqual(sum_evens([2,3,4]), 6)
          testEqual(sum_evens([]), 0)
          testEqual(sum_evens([0,7,2,4,2,1]), 8)
          testEqual(sum_evens([0,1,2,3,4,5,6,7,8,9]), 20)
          testEqual(sum_evens(range(200,500)), 52350)
