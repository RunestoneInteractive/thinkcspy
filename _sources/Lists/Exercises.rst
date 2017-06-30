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

               Draw a reference diagram for ``a`` and ``b`` before and after the third line of the following Python code is executed:

               .. sourcecode:: python

                   a = [1, 2, 3]
                   b = a[:]
                   b[0] = 5

            .. tab:: Answer

                Your diagram should show two variables referring to two different lists. ``a`` refers to the original list with 1, 2, and 3. ``b`` refers to a list with 5, 2, and 3 since the zero-eth element was replaced with 5.



    #.  Create a list called ``my_list`` with the following six items: ``76, 92.3, "hello", True, 4, 76``. Do it with both append and with concatenation, one item at a time.

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

                    my_list = [76, 92.3, 'hello', True, 4, 76]

                    my_list.append("apple")         # a
                    my_list.append(76)              # a
                    my_list.insert(3, "cat")        # b
                    my_list.insert(0, 99)           # c

                    print(my_list.index("hello"))   # d
                    print(my_list.count(76))        # e
                    my_list.remove(76)              # f
                    my_list.pop(my_list.index(True)) # g

                    print (my_list)


    #.

        .. tabbed:: q4

            .. tab:: Question

                Write a function to count how many odd numbers are in a list.

                .. activecode:: ex_9_6

            .. tab:: Answer

                .. activecode:: q4_answer

                    import random

                    def count_odd(alist):
                        odd = 0
                        for e in alist:
                            if e % 2 != 0:
                                odd = odd + 1
                        return odd

                    def main():
                        # make a random list to test the function
                        alist = []
                        for i in range(100):
                            alist.append(random.randint(0, 1000))

                        print(count_odd(alist))

                    if __name__ == "__main__":
                        main()

    #.

        .. tabbed:: q5

            .. tab:: Question

               Write a Python function that will take a list of 100 random integers between 0 and 1000 (you can use iteration, ``append``, and the ``random`` module to create a test list) and return the maximum value. (Note: there is a built-in function named ``max`` but do not use it for this exercise.)

               .. activecode:: ex_9_5


            .. tab:: Answer

                .. activecode:: q5_answer

                    import random

                    def max(alist):
                        max = 0
                        for e in alist:
                            if e > max:
                                max = e
                        return max

                    alist = []
                    for i in range(100):
                        alist.append(random.randint(0, 1000))

                    print(max(alist))


    #. Write a function ``sum_of_squares(xs)`` that computes the sum of the squares of the numbers in the list ``xs``.  For example, ``sum_of_squares([2, 3, 4])`` should return 4+9+16 which is ``29``:

       .. activecode:: ex_7_11

    #.

        .. tabbed:: q9

            .. tab:: Question

               Sum up all the negative numbers in a list.

               .. activecode:: ex_9_8

            .. tab:: Answer

                .. activecode:: q9_answer

                    import random

                    def sum_negative(alist):
                        sum = 0
                        for e in alist:
                            if e < 0:
                                sum = sum + e
                        return sum

                    alist = []
                    for i in range(100):
                        alist.append(random.randrange(-1000, 1000))

                    print(sum_negative(alist))


    #. Count how many words in a list have length 5.

       .. activecode:: ex_9_9


    #.

        .. tabbed:: q13

            .. tab:: Question

               Although Python provides us with many list methods, it is good practice and very instructive to think about how they are implemented. Implement your own Python functions that works like the following built-in ones:

               a. count
               #. in
               #. reverse
               #. index
               #. insert

               Note that you cannot call your version of the ``in`` function "in", since that is a reserved keyword. You could call it ``is_in`` instead.

               .. activecode:: ex_9_12

            .. tab:: Answer

                .. activecode:: q13_answer

                    def count(obj, alist):
                        count = 0
                        for e in alist:
                            if e == obj:
                                count = count + 1
                        return count

                    def is_in(obj, alist):  # cannot be called in() because in is a reserved keyword
                        for e in alist:
                            if e == obj:
                                return True
                        return False

                    def reverse(alist):
                        reversed = []
                        for i in range(len(alist)-1, -1, -1): # step through the original list backwards
                            reversed.append(alist[i])
                        return reversed

                    def index(obj, alist):
                        for i in range(len(alist)):
                            if alist[i] == obj:
                                return i
                        return -1

                    def insert(obj, index, alist):
                        new_list = []
                        for i in range(len(alist)):
                            if i == index:
                                new_list.append(obj)
                            new_list.append(alist[i])
                        return new_list

                    def main():
                        alist = [0, 1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9]
                        print(count(1, alist))
                        print(is_in(4, alist))
                        print(reverse(alist))
                        print(index(2, alist))
                        print(insert('cat', 4, alist))

                    if __name__ == "__main__":
                        main()

    #. Write a function ``replace(s, old, new)`` that replaces all occurences of ``old`` with ``new`` in a string ``s``::

          test(replace('Mississippi', 'i', 'I'), 'MIssIssIppI')

          s = 'I love spom! Spom is my favorite food. Spom, spom, spom, yum!'
          test(replace(s, 'om', 'am'),
                 'I love spam! Spam is my favorite food. Spam, spam, spam, yum!')

          test(replace(s, 'o', 'a'),
                 'I lave spam! Spam is my favarite faad. Spam, spam, spam, yum!')

       *Hint*: use the ``split`` and ``join`` methods.

       .. activecode:: ex_9_13

    #. Write a function that will sum up all the elements in a list up to but not including the first even number.

        .. activecode:: ex_9_10

          def sum_of_initial_odds(nums):
              # your code here


          from test import testEqual

          testEqual(sum_of_initial_odds([1,3,1,4,3,8]), 5)
          testEqual(sum_of_initial_odds([6,1,3,5,7]), 0)
          testEqual(sum_of_initial_odds([1, -7, 10, 23]), -6)
          testEqual(sum_of_initial_odds(range(1,555,2)), 76729)


Weekly Graded Assignment
========================

.. container:: full_width

    Write a function that will return a string of country codes from an argument that is a string of prices (containing dollar amounts following the country codes). Your function will take as an argument a string of prices like the following: ``"US$40, AU$89, JP$200"``. In this example, the function would return the string ``"US, AU, JP"``.

    **Hint:** You may want to break the original string into a list, manipulate the individual elements, then make it into a string again.

    .. activecode:: ex_9_10

       def get_country_codes(prices):
           # your code here


       # don't include these tests in Vocareum
       from test import testEqual

       testEqual(get_country_codes("NZ$300, KR$1200, DK$5"), "NZ, KR, DK")
       testEqual(get_country_codes("US$40, AU$89, JP$200"), "US, AU, JP")
       testEqual(get_country_codes("AU$23, NG$900, MX$200, BG$790, ES$2"), "AU, NG, MX, BG, ES")
       testEqual(get_country_codes("CA$40"), "CA")
