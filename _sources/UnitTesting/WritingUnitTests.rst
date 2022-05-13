..  Copyright (C)  Stephen Schaub.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: writetest-1-
   :start: 1

.. _writing_unit_tests:

Writing Unit Tests
==================

Once you have designed a testable function, with a clear docstring specification, writing unit tests
is not difficult. In this section, you'll learn how to do just that.

Let's start with our ``sumnums`` function::

    def sumnums(lo, hi):
        """computes the sum of a range of numbers
        
        Precondition: lo <= hi
        Postcondition: returns the sum of the numbers in the range [lo..hi]
        """

        sum = 0
        for i in range(lo, hi+1):
            sum += i
        return sum        

As we've seen, to write a unit test, you devise test cases for the function, and then write assert statements that call
the function and check that the function produced the expected results. The following assert statements would be
appropriate for a unit test for ``sumnums``::

    assert sumnums(1, 3) == 6
    assert sumnums(1, 1) == 1

But what about the following?

::

    assert sumnums(3, 1) == 0

Note that ``sumnums`` produces the value ``0`` for cases where the ``lo`` values exceeds the ``hi`` value, as is the
case in this assert. So, like the first two asserts above, this assert would pass. However, it is not an
appropriate assertion, because the specification says nothing about what the function produces if ``lo`` is greater than
``hi``. 

The unit test should be written such that it passes even if the function implementation is altered in a way that
causes some other value than 0 to be returned if ``lo`` exceeds ``hi``. For example, we might want to redesign the
function to be more efficient --- for example, use Gauss's formula for summing numbers, as in the following::

    def sumnums(lo, hi):
        """computes the sum of a range of numbers
        
        Precondition: lo <= hi
        Postcondition: returns the sum of the numbers in the range [lo..hi]
        """

        return (hi * (hi + 1) / 2) - (lo * (lo - 1) / 2)

This version will produce correct results if the precondition is satisfied. Like the original function, it produces
incorrect results if the precondition is violated --- but unlike the original function, the values produced if the
precondition is violated are not necessarily 0.

Specification-Based Testing
---------------------------

A key idea to remember when writing a unit test is that your test must always respect the function's preconditions. The
docstring states what the function should do, with the assumption that parameter values meet the preconditions. It does
not state what the function should do if the parameter values violate the preconditions. 

Writing an assert that violates the functions preconditions is not a good idea, because to determine what the function
will produce for that case, you must look into the implementation of the function and analyze its behavior. That is
called **implementation-based testing**, and it leads to brittle tests that are likely to fail if you rework the
function implementation. When you write tests are based only on the function specification, without looking at the
implementation, you are doing specification-based testing.

.. admonition:: Specification-Based Tests

    Specification-based tests are tests that are designed based only on the information in the function
    specification, without considering any of the details in the function implementation.

Specification-based tests are preferred over implementation-based tests, because they are more resilient. They will continue
to pass even if you rework the function implementation.


**Check your understanding**

.. mchoice:: mc_designtests_1
   :answer_a: assert repeat('*', 0) == ''
   :answer_b: assert repeat('*', -1) == ''
   :answer_c: assert repeat('-', 5) == '-----'
   :answer_d: assert repeat('*', 5) == '***'
   :correct: a,c
   :feedback_a: Correct. The specification indicates that the function should produce an empty string.
   :feedback_b: Incorrect. The parameter -1 violates the precondition, and such a test is inappropriate, even though the function would return an empty string in this case.
   :feedback_c: Correct. The parameters satisfy the precondition and the value '-----' is appropriate given the postcondition.
   :feedback_d: Incorrect. The string '***' does not conform to the postcondition.

   Consider the following function. Indicate which of the asserts would be
   appropriate for a unit test.

   .. sourcecode:: python

        def repeat(s: str, num: int) -> str:
            """duplicates a string
            
            Precondition: `num` >= 0
            Postcondition: Returns a string containing `num` copies of `s`
            """
            if num >= 0:
                return s * num
            else:
                return ''

            
.. tabbed:: tab_grade_unittest

    .. tab:: Question

        .. activecode:: ac_grade_unittest
            :autograde: unittest
            :include: ac_grade_unittest_aux

            Write assert statements below to test a function
            with the following specification. Your asserts should
            check that the function produces an appropriate value
            for each of the three postcondition cases.

            .. sourcecode:: python

                def grade(score):
                    """Determines letter grade given a numeric score

                    Precondition: 0 <= `score` <= 100
                    Postcondition: Returns 'A' if 90 <= `score` <= 100,
                      'B' if 80 <= `score` < 90, 'F' if 0 <= `score` < 80
                    """

            Note: Line numbers in any assert error messages that appear while
            you are developing and testing your answer will not be accurate.
            ~~~~
            # Write assert statements to test grade()
            

            ====
            from unittest.gui import TestCaseGui

            class myTests(TestCaseGui):

                def testOne(self):
                    code = self.getEditorText().replace(' ','').replace('"', '').replace("'", '')
                    self.assertTrue(testA and '==A' in code, "Assert tested 90..100")
                    self.assertTrue(testB and '==B' in code, "Assert tested 80..90")
                    self.assertTrue(testF and '==F' in code, "Assert tested 0..80")
                    self.assertFalse(illegal, "No asserts violated preconditions")

            myTests().main()


    .. tab:: Answer

        The following asserts are just some of several that could have been used.

        .. activecode:: ac_grade_unittest_sol
            :include: ac_grade_unittest_aux
            :optional:
            
            assert grade(92) == 'A'
            assert grade(85) == 'B'
            assert grade(69) == 'F'
            
        .. .. reveal:: ac_grade_unittest_aux_reveal
        ..     :instructoronly:

        ..     .. actex:: ac_grade_unittest_aux

        ..         testA = False
        ..         testB = False
        ..         testF = False
        ..         illegal = False

        ..         def grade(score):
        ..             global illegal, testA, testB, testF

        ..             if score > 100 or score < 0:
        ..                 illegal = True
        ..                 return ''
        ..             elif score >= 90:
        ..                 testA = True
        ..                 return 'A'
        ..             elif score >= 80:
        ..                 testB = True
        ..                 return 'B'
        ..             else:
        ..                 testF = True
        ..                 return 'F'


