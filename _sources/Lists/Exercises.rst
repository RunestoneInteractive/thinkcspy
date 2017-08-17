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

.. question:: strings_ex_1


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

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: disqus_12314cf40dbe407cb145f029870c0347


.. question:: strings_ex_2

   .. actex:: ex_9_2

      Create a list called ``myList`` with the following six items: 76, 92.3, "hello", True, 4, 76.  Do it with both append and with concatenation, one item at a time.
      ~~~~


.. question:: strings_ex_3

   .. tabbed:: q3

        .. tab:: Question


           .. actex:: ex_9_3

              Starting with the list of the previous exercise, write Python statements to do the following:
   
              a. Append "apple" and 76 to the list.
              #. Insert the value "cat" at position 3.
              #. Insert the value 99 at the start of the list.
              #. Find the index of "hello".
              #. Count the number of 76s in the list.
              #. Remove the first occurrence of 76 from the list.
              #. Remove True from the list using ``pop`` and ``index``.

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

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: disqus_b9034b274ebe4c55a58c44315ee681a4


.. question:: strings_ex_4

   .. actex:: ex_9_4

      Create a list containing 100 random integers between 0 and 1000 (use iteration, append, and the random module).  Write a function called ``average`` that will take the list as a parameter and return the average.
      ~~~~

.. question:: strings_ex_5

   .. tabbed:: q5

        .. tab:: Question

           Write a Python function that will take a the list of 100 random integers between 0 and 1000 and return the maximum value.  (Note: there is a builtin function named ``max`` but pretend you cannot use it.)

           .. actex:: ex_9_5


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

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: disqus_714fd5537ebf41189ce5fb6fb16d1d26


.. question:: strings_ex_6

   .. actex:: ex_7_11

      Write a function ``sum_of_squares(xs)`` that computes the sum
      of the squares of the numbers in the list ``xs``.  For example,
      ``sum_of_squares([2, 3, 4])`` should return 4+9+16 which is 29:
      ~~~~   
      def sum_of_squares(xs):
          # your code here

      ====
      from unittest.gui import TestCaseGui

      class myTests(TestCaseGui):

          def testOne(self):
              self.assertEqual(sum_of_squares([2,3,4]),29,"Tested sum_of_squares on input [2,3,4]")
              self.assertEqual(sum_of_squares([0,1,-1]),2,"Tested sum_of_squares on input [0,1,-1]")
              self.assertEqual(sum_of_squares([5,12,14]),365,"Tested sum_of_squares on input [5,12,14]")

      myTests().main()

.. question:: strings_ex_7

   .. tabbed:: q7

        .. tab:: Question

           .. actex:: ex_9_6

              Write a function to count how many odd numbers are in a list.
              ~~~~
              def countOdd(lst):
                  # your code here

              ====
              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                  def testOne(self):
                      self.assertEqual(countOdd([1,3,5,7,9]),5,"Tested countOdd on input [1,3,5,7,9]")
                      self.assertEqual(countOdd([1,2,3,4,5]),3,"Tested countOdd on input [-1,-2,-3,-4,-5]")
                      self.assertEqual(countOdd([2,4,6,8,10]),0,"Tested countOdd on input [2,4,6,8,10]")
                      self.assertEqual(countOdd([0,-1,12,-33]),2,"Tested countOdd on input [0,-1,12,-33]")

              myTests().main()



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

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: disqus_fdd366b1b4c8494082a385e1e1197844


.. question:: strings_ex_8

   .. actex:: ex_9_7

      Sum up all the even numbers in a list.
      ~~~~
      def sumEven(lst):
          # your code here

      ====
      from unittest.gui import TestCaseGui

      class myTests(TestCaseGui):

          def testOne(self):
              self.assertEqual(sumEven([1,3,5,7,9]),0,"Tested sumEven on input [1,3,5,7,9]")
              self.assertEqual(sumEven([-1,-2,-3,-4,-5]),-6,"Tested sumEven on input [-1,-2,-3,-4,-5]")
              self.assertEqual(sumEven([2,4,6,7,9]),12,"Tested sumEven on input [2,4,6,7,9]")
              self.assertEqual(sumEven([0,1,12,33]),12,"Tested sumEven on input [0,1,12,33]")

      myTests().main()

.. question:: strings_ex_9

   .. tabbed:: q9

        .. tab:: Question

           .. actex:: ex_9_8

              Sum up all the negative numbers in a list.
              ~~~~
              def sumNegatives(lst):
                  # your code here

              ====
              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                  def testOne(self):
                      self.assertEqual(sumNegatives([-1,-2,-3,-4,-5]),-15,"Tested sumNegatives on input [-1,-2,-3,-4,-5]")
                      self.assertEqual(sumNegatives([1,-3,5,-7,9]),-10,"Tested sumNegatives on input [1,-3,5,-7,9]")
                      self.assertEqual(sumNegatives([-2,-4,6,-7,9]),-13,"Tested sumNegatives on input [-2,-4,6,-7,9]")
                      self.assertEqual(sumNegatives([0,1,2,3,4]),0,"Tested sumNegatives on input [0,1,2,3,4]")

              myTests().main()



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

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: disqus_bfe671ac1e0942f2be4de7179921f83f


.. question:: strings_ex_10


   .. actex:: ex_9_9

      Count how many words in a list have length 5.
      ~~~~
      def countWords(lst):
          # your code here

.. question:: strings_ex_11

   .. tabbed:: q11

        .. tab:: Question

           Sum all the elements in a list up to but not including the first even number.

           .. actex:: ex_9_10

              def sumUntilEven(lst):
                  # your code here

              ====
              from unittest.gui import TestCaseGui

              class myTests(TestCaseGui):

                  def testOne(self):
                      self.assertEqual(sumUntilEven([1,2,3,4,5]),1,"Tested sumUntilEven on input [1,2,3,4.5]")
                      self.assertEqual(sumUntilEven([1,3,5,7,9]),25,"Tested sumUntilEven on input [1,3,5,7,9]")
                      self.assertEqual(sumUntilEven([2,4,6,7,9]),0,"Tested sumUntilEven on input [2,4,6,7,9]")

              myTests().main()


        .. tab:: Answer

            .. activecode:: q11_answer

                import random

                def sum(lst):
                    sum = 0
                    index = 0
                    while index < len(lst) and lst[index] % 2 != 0:
                        sum = sum + lst[index]
                        index = index + 1
                    return sum

                lst = []
                for i in range(100):
                    lst.append(random.randint(0,1000))

                print(sum(lst))

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: disqus_90f95bbe4a49428caa9ed0c5e02747b1


.. question:: strings_ex_12

   .. actex:: ex_9_11

      Count how many words occur in a list up to and including the first occurrence of the word "sam".
      ~~~~
      def count(lst):
          # your code here



.. question:: strings_ex_13

   .. tabbed:: q13

        .. tab:: Question

           .. actex:: ex_9_12

              Although Python provides us with many list methods, it is good practice and very instructive to think about how they are implemented.  Implement a Python function that works like the following:
   
              a. count
              #. in
              #. reverse
              #. index
              #. insert
              ~~~~ 

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

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: disqus_39ee0274e51d4c888cc20b6fefa4069c


.. question:: strings_ex_14

   .. actex:: ex_9_13

      Write a function ``replace(s, old, new)`` that replaces all occurences of
      ``old`` with ``new`` in a string ``s``::
   
         test(replace('Mississippi', 'i', 'I'), 'MIssIssIppI')
   
         s = 'I love spom!  Spom is my favorite food.  Spom, spom, spom, yum!'
         test(replace(s, 'om', 'am'),
                'I love spam!  Spam is my favorite food.  Spam, spam, spam, yum!')
   
         test(replace(s, 'o', 'a'),
                'I lave spam!  Spam is my favarite faad.  Spam, spam, spam, yum!')
   
      *Hint*: use the ``split`` and ``join`` methods.
      ~~~~
      def replace(s, old, new):
          # your code here

      ====
      from unittest.gui import TestCaseGui

      class myTests(TestCaseGui):

          def testOne(self):
              self.assertEqual(replace('Mississippi','i','I'),'MIssIssIppI',"Tested replace on input 'Mississippi','i','I'")
              self.assertEqual(replace('Bookkeeper','e','A'),'BookkAApAr',"Tested failed on input 'Bookkeeper','e','A'")
              self.assertEqual(replace('Deeded','e','q'),'Dqqdqd',"Tested failed on input 'Deeded','e','q'")

      myTests().main()



.. question:: strings_ex_15

   .. tabbed:: q15

        .. tab:: Question

           .. actex:: ex_9_14
              :nocodelens:

              Here are the rules for an L-system that creates something that resembles
              a common garden herb.  Implement the following rules and try it.  Use an
              angle of 25.7 degrees.
   
              ::
   
                  H
                  H --> HFX[+H][-H]
                  X --> X[-FFF][+FFF]FX
              ~~~~

        .. tab:: Answer

            .. activecode:: q15_answer
                :nocodelens:

                import turtle

                def createLSystem(numIters, axiom):
                    startString = axiom
                    endString = ""
                    for i in range(numIters):
                        endString = processString(startString)
                        startString = endString

                    return endString

                def processString(oldStr):
                    newstr = ""
                    for ch in oldStr:
                        newstr = newstr + applyRules(ch)

                    return newstr

                def applyRules(ch):
                    newstr = ""
                    if ch == 'H':
                        newstr = 'HFX[+H][-H]'   # Rule 1
                    elif ch == 'X':
                        newstr = 'X[-FFF][+FFF]FX'
                    else:
                        newstr = ch     # no rules apply so keep the character

                    return newstr

                def drawLsystem(aTurtle, instructions, angle, distance):
                    savedInfoList = []
                    for cmd in instructions:
                        if cmd == 'F':
                            aTurtle.forward(distance)
                        elif cmd == 'B':
                            aTurtle.backward(distance)
                        elif cmd == '+':
                            aTurtle.right(angle)
                        elif cmd == '-':
                            aTurtle.left(angle)
                        elif cmd == '[':
                            savedInfoList.append([aTurtle.heading(), aTurtle.xcor(), aTurtle.ycor()])
                            #print(savedInfoList)
                        elif cmd == ']':
                            newInfo = savedInfoList.pop()
                            aTurtle.setheading(newInfo[0])
                            aTurtle.setposition(newInfo[1], newInfo[2])


                def main():
                    inst = createLSystem(4, "H")   # create the string
                    print(inst)
                    t = turtle.Turtle()            # create the turtle
                    wn = turtle.Screen()
                    t.up()
                    t.back(200)
                    t.down()
                    t.speed(9)
                    drawLsystem(t, inst, 27.5, 5)  # draw the picture

                    wn.exitonclick()

                main()


        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: disqus_10a1fdd1fadb401b8e733afd9d105052


.. question:: strings_ex_16

   .. actex:: ex_9_16
      :nocodelens:

      Here is another L-System.  Use an Angle of 25.
   
      ::
   
          F
          F --> F[-F]F[+F]F
      ~~~~   
