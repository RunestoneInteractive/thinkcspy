..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

Programming Exercises
---------------------

.. question:: recursion_ex_1
   :number: 1


   .. actex:: ex_rec_1
       :practice: T
       :autograde: unittest

       Write a recursive function to compute the factorial of a number.
       ~~~~
       def computeFactorial(number):
           #your code here

       ====

       from unittest.gui import TestCaseGui

       class myTests(TestCaseGui):

           def testOne(self):
               self.assertEqual(computeFactorial(0),1,"Tested computeFactorial on input 0")
               self.assertEqual(computeFactorial(1),1,"Tested computeFactorail on input 1")
               self.assertEqual(computeFactorial(2),2,"Tested computeFactorial on input 2")
               self.assertEqual(computeFactorial(3),6,"Tested computeFactorial on input 3")
               self.assertEqual(computeFactorial(4),24,"Tested computeFactorial on input 4")
               self.assertEqual(computeFactorial(8),40320,"Tested computeFactorial on input 8")
               self.assertEqual(computeFactorial(-5),None,"Tested computeFactorial on a negative number - make sure to handle this case")

       myTests().main()

.. question:: recursion_ex_2


   .. actex:: ex_rec_2
      :practice: T
      :autograde: unittest

      Write a recursive function to reverse a list.
      ~~~~
      def reverseList(lst):
          #your code here


      ====

      from unittest.gui import TestCaseGui

      class myTests(TestCaseGui):
          def testOne(self):
              self.assertEqual(reverseList([1,2,3,4,5]), [5,4,3,2,1], "Your function failed with input [1,2,3,4,5]")
              self.assertEqual(reverseList(['Hello','World','!']), ['!','World','Hello'], "Your function failed with input ['Hello,'World','!']")
              self.assertEqual(reverseList(['Python',100,'35','Computer Science']), ['Computer Science', '35', 100, 'Python'], "Your function failed with input ['Python,100,'35','Computer Science']")

      myTests().main()

.. question:: recursion_ex_3

   .. actex:: ex_rec_3
      :nocodelens:

      Modify the recursive tree program using one or all of the following
      ideas:

      -  Modify the thickness of the branches so that as the ``branchLen``
         gets smaller, the line gets thinner.

      -  Modify the color of the branches so that as the ``branchLen`` gets
         very short it is colored like a leaf.

      -  Modify the angle used in turning the turtle so that at each branch
         point the angle is selected at random in some range. For example
         choose the angle between 15 and 45 degrees. Play around to see
         what looks good.

      -  Modify the ``branchLen`` recursively so that instead of always
         subtracting the same amount you subtract a random amount in some
         range.

      If you implement all of the above ideas you will have a very
      realistic looking tree.
      ~~~~

.. question:: recursion_ex_4

   .. actex:: ex_rec_4
      :nocodelens:

      Find or invent an algorithm for drawing a fractal mountain. Hint: One
      approach to this uses triangles again.
      ~~~~

.. question:: recursion_ex_5

   .. actex:: ex_rec_5

      Write a recursive function to compute the Fibonacci sequence. How
      does the performance of the recursive function compare to that of an
      iterative version?
      ~~~~

.. question:: recursion_ex_6

   .. actex:: ex_rec_6

      Implement a solution to the Tower of Hanoi using three stacks to keep
      track of the disks.
      ~~~~

.. question:: recursion_ex_7

   .. actex:: ex_rec_7
      :nocodelens:

      Using the turtle graphics module, write a recursive program to
      display a Hilbert curve.
      ~~~~

.. question:: recursion_ex_8

   .. actex:: ex_rec_8
      :nocodelens:

      Using the turtle graphics module, write a recursive program to
      display a Koch snowflake.
      ~~~~

.. question:: recursion_ex_9

   .. actex:: ex_rec_9

      Write a program to solve the following problem: You have two jugs: a
      4-gallon jug and a 3-gallon jug. Neither of the jugs have markings on
      them. There is a pump that can be used to fill the jugs with water.
      How can you get exactly two gallons of water in the 4-gallon jug?
      ~~~~

.. question:: recursion_ex_10

   .. actex:: ex_rec_10

      Generalize the problem above so that the parameters to your solution
      include the sizes of each jug and the final amount of water to be
      left in the larger jug.
      ~~~~

.. question:: recursion_ex_11

   .. actex:: ex_rec_11

      Write a program that solves the following problem: Three missionaries
      and three cannibals come to a river and find a boat that holds two
      people. Everyone must get across the river to continue on the
      journey. However, if the cannibals ever outnumber the missionaries on
      either bank, the missionaries will be eaten. Find a series of
      crossings that will get everyone safely to the other side of the
      river.
      ~~~~

.. question:: recursion_ex_12

   .. actex:: ex_rec_12
      :nocodelens:

      Modify the Tower of Hanoi program using turtle graphics to animate
      the movement of the disks. Hint: You can make multiple turtles and
      have them shaped like rectangles.
      ~~~~

.. question:: recursion_ex_13

   .. actex:: ex_rec_13

      Pascal’s triangle is a number triangle with numbers arranged in
      staggered rows such that

      .. math::
         a_{nr} = {n! \over{r! (n-r)!}}

      This equation is the equation for a binomial coefficient. You can
      build Pascal’s triangle by adding the two numbers that are diagonally
      above a number in the triangle. An example of Pascal’s triangle is
      shown below.

      ::

                            1
                          1   1
                        1   2   1
                      1   3   3   1
                    1   4   6   4   1

      Write a program that prints out Pascal’s triangle. Your program
      should accept a parameter that tells how many rows of the triangle to
      print.
      ~~~~
