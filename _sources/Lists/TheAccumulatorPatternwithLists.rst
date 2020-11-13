..  Copyright (C)  Paul Resnick and Stephen Schaub.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: list-29-
   :start: 1

.. _accumulator_lists:

The Accumulator Pattern with Lists
----------------------------------

Remember the :ref:`accumulator pattern <accumulator>`? Many algorithms involving lists make use of
this pattern to process the items in a list and compute a result. In this section, we'll 
explore the use of the accumulator pattern with lists.

Let's take the problem of adding up all of the items in a list. The following program
computes the sum of a list of numbers.

.. activecode:: ac7_10_0
   
   sum = 0
   for num in [1, 3, 5, 7, 9]:
       sum = sum + num
   print(sum)

The program begins by defining an accumulator variable, ``sum``, and initializing it to 0 (line 1).

Next, the program iterates over the list (lines 2-3), and updates the sum on each
iteration by adding an item from the list (line 3). When the loop is finished, ``sum``
has accumulated the sum of all of the items in the list.

Take a moment to step through this program using CodeLens to see how it works. It's important to
grasp the basic techniques.

Sometimes when we're accumulating, we don't want to add to our accumulator every time we iterate.
Consider, for example, the following program which counts the number of names with more than 3 letters.

.. activecode:: ac7_10_1
   
   long_names = 0
   for name in ["Joe", "Sally", "Amy", "Brad"]:
       if len(name) > 3:
           long_names += 1
   print(long_names)

Here, we **initialize** the accumulator variable to be zero on line 1.

We **iterate** through the sequence (line 2).

The **update** step happens in two parts. First, we check to see if the name is longer than 3 letters. If 
so, then we increment the accumulator variable ``long_names`` (on line 4) by adding one to 
it. 

At the end, we have accumulated the total number of long names.

We can use conditionals to also count if particular items are in a string or list. The following code finds all occurrences of vowels in a string.

.. activecode:: ac7_10_2

    s = "what if we went to the zoo"
    num_vowels = 0
    for i in s:
        if i in ['a', 'e', 'i', 'o', 'u']:
            num_vowels += 1
    print(num_vowels)

We can also use ``==`` to execute a similar operation. Here, we'll check to see if the character we are iterating over is 
an "o". If it is an "o" then we will update our counter. 

.. image:: Figures/accum_o.gif
   :alt: a gif that shows code to check that "o" is in the phrase "onomatopoeia". 

Accumulating the Max Value
~~~~~~~~~~~~~~~~~~~~~~~~~~

We can also use the accumulation pattern with conditionals to find the maximum or minimum value. Instead of 
continuing to build up the accumulator value like we have when counting or finding a sum, we can reassign the 
accumulator variable to a different value.

The following example shows how we can get the maximum value from a list of integers.

.. activecode:: ac7_10_3

   nums = [9, 3, 8, 11, 5, 29, 2]
   best_num = 0
   for n in nums:
       if n > best_num:
           best_num = n
   print(best_num)

Here, we initialize best_num to zero, assuming that there are no negative numbers in the list.

In the for loop, we check to see if the current value of n is greater than the current value of ``best_num``. 
If it is, then we want to **update** ``best_num`` so that it now is assigned the higher number. Otherwise, we 
do nothing and continue the for loop.

You may notice that the current structure could be a problem. If the numbers were all negative what would 
happen to our code? What if we were looking for the smallest number but we initialized ``best_num`` with 
zero? To get around this issue, we can initialize the accumulator variable using one of the numbers in the 
list.

.. activecode:: ac7_10_4

   nums = [9, 3, 8, 11, 5, 29, 2]
   best_num = nums[0]
   for n in nums:
       if n > best_num:
           best_num = n
   print(best_num)

The only thing we changed was the value of ``best_num`` on line 2 so that the value of ``best_num`` is the 
first element in ``nums``, but the result is still the same!

Accumulating a String Result
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The accumulator pattern can be used to convert a list of items to a string. 

Consider the following program:

.. activecode:: ac7_10_5

   scores = [85, 95, 70]
   result = ''
   for score in scores:
      result = result + str(score) + ','

   print("The scores are " + result)

Here, the accumulator variable is ``result``. Each time through the loop, the program concatenates
the current contents of ``result`` with the comma separator and a score from the list, and updates
the ``result`` with the new value. Use CodeLens to step through this example to see it in action.

The output of the program has some undesirable formatting problems: there is a trailing comma instead
of a period, and there are no spaces between the items. The next activity lets you work to 
correct those problems.

.. tabbed:: tab_string_accum

   .. tab:: Question

      .. activecode:: ac7_10_5a
         :language: python
         :autograde: unittest
         :practice: T

         Let's work to improve the formatting of the sentence produced by the program above.
         Revise the following code so that it outputs the sentence::

            The scores are 85, 95, and 70.

         ~~~~
         scores = [85, 95, 70]
         result = ''
         for score in scores:
            result = result + str(score) + ','

         print("The scores are " + result)

         =====

         from unittest.gui import TestCaseGui

         class myTests(TestCaseGui):

            def testOne(self):
               self.assertEqual(self.getOutput().rstrip('\n'), 'The scores are 85, 95, and 70.', "Output should be 'The scores are 85, 95, and 70.'")

         myTests().main()

   .. tab:: Tip

      Try changing the loop so that it does not process the final score. Handle that last
      score separately, after the loop finishes.

   .. tab:: Answer

      This solution works by iterating over all of the scores in the list
      except the last, and dealing with that one separately.

      .. activecode:: ac7_10_5a_solution

         scores = [85, 95, 70]
         result = ''
         for score in scores[:-1]:
            result = result + str(score) + ', '

         # Now, append the last score
         result = result + 'and ' + str(scores[-1]) + '.'

         print("The scores are " + result)


**Check your understanding**

.. mchoice:: question7_10_1
   :answer_a: 2
   :answer_b: 5
   :answer_c: 0
   :answer_d: There is an error in the code so it cannot run.
   :correct: b
   :feedback_a: Though only two of the letters in the list are found, we count them each time they appear.
   :feedback_b: Yes, we add to x each time we come across a letter in the list.
   :feedback_c: Check again what the conditional is evaluating. The value of i will be a character in the string s, so what will happen in the if statement?
   :feedback_d: There are no errors in this code.
   :practice: T

   What is printed by the following statements?

   .. code-block:: python

     s = "We are learning!"
     x = 0
     for i in s:
         if i in ['a', 'b', 'c', 'd', 'e']:
             x += 1
     print(x)

.. mchoice:: question7_10_2
   :answer_a: 10
   :answer_b: 1
   :answer_c: 0
   :answer_d: There is an error in the code so it cannot run.
   :correct: c
   :feedback_a: Not quite. What is the conditional checking?
   :feedback_b: min_value was set to a number that was smaller than any of the numbers in the list, so it was never updated in the for loop.
   :feedback_c: Yes, min_value was set to a number that was smaller than any of the numbers in the list, so it was never updated in the for loop.
   :feedback_d: The code does not have an error that would prevent it from running.
   :practice: T

   What is printed by the following statements?

   .. code-block:: python

     list= [5, 2, 1, 4, 9, 10]
     min_value = 0
     for item in list:
        if item < min_value:
            min_value = item
     print(min_value)


.. activecode:: ac7_10_7
   :language: python
   :autograde: unittest
   :practice: T

   **Challenge** For each word in ``words``, add 'd' to the end of the word if the word ends in "e" to make it past tense. Otherwise, add 'ed' to make it past tense. Save these past tense words to a list called ``past_tense``.
   ~~~~
   words = ["adopt", "bake", "beam", "confide", "grill", "plant", "time", "wave", "wish"]
      
   =====

   from unittest.gui import TestCaseGui

   class myTests(TestCaseGui):

      def testNine(self):
         self.assertEqual(past_tense, ['adopted', 'baked', 'beamed', 'confided', 'grilled', 'planted', 'timed', 'waved', 'wished'], "Testing that the past_tense list is correct.")
         self.assertIn("else", self.getEditorText(), "Testing output (Don't worry about actual and expected values).")
         self.assertIn("for", self.getEditorText(), "Testing output (Don't worry about actual and expected values).")

   myTests().main()
