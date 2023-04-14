Post Test
-----------------------------------------------------

Please answer
the following problems to the best of your ability without any
outside help. You can stop working on a problem after you worked
on it for about five minutes without solving it.

Problems
==============

.. activecode:: ps-swap1-ac-v2
   :autograde: unittest

   Finish writing the code to swap the values in x and y (so that x ends up with y's initial value and y ends up with x's initial value).
   ~~~~

   x = 6
   y = 2
   temp = 0

   # print the values
   print(x)
   print(y)

   # swap the values of x and y
   # write your code here

   # print the values
   print(x)
   print(y)
   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(x, 2, "value of x after swap")
           self.assertEqual(y, 6, "value of y after swap")

   myTests().main()

.. activecode:: ps-swap2-ac
   :autograde: unittest

   Finish writing the code to swap the values in a and b (so that a ends up with b's initial value and b ends up with a's initial value).
   ~~~~

   a = -3
   b = 5
   temp = 0

   # print the values
   print(a)
   print(b)

   # swap the values of a and b
   # write your code here

   # print the values
   print(a)
   print(b)
   ====
   from unittest.gui import TestCaseGui
   class myTests(TestCaseGui):

       def testOne(self):
           self.assertEqual(a, 5, "value of a after swap")
           self.assertEqual(b, -3, "value of b after swap")

   myTests().main()


Feedback
==================================

.. shortanswer:: ps-posttest-sa

   Please provide feedback here. Please share any comments, problems, or suggestions.

Thank You
============================
Thank you for taking part in this assignment!  We appreciate your time on this.
