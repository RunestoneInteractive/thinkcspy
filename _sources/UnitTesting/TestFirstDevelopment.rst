..  Copyright (C) Stephen Schaub.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: tdd-1-
   :start: 1

Test-First Development
=======================

The idea of unit tests has been around a long time, and most people agree that writing unit tests is a good idea.
However, when deadlines loom and time is at a premium, the unit tests often don't get written. That's a problem, because
studies have shown that projects with good unit tests often are more robust, with fewer bugs, than projects that don't
have good unit tests. 

In a traditional development process, when a programmer needs to create a new function, he writes the function, and
then, if he has time, writes a unit test for it. If he doesn't have time, he doesn't write the unit test: he tests the
function in the context of the program being developed. One day, someone decided that it might be a good idea
to reverse the order: write the unit test *first*, and then write the function. That led to the idea of
Test-First Development.

.. admonition:: Test-First Development

    Test-First Development is an approach to writing software that involves writing a unit test for a function before
    writing the function.

In this section, we'll explore the idea of test-first development to see how it can help.

A programmer using Test-First Development writes a new function using the following steps:

#. First, create the function interface and docstring.

#. Next, create a unit test for the function. 

#. Run the unit test. It should fail.

#. Write the body of the function.

#. Run the unit test. If it fails, debug the function, and run the test again. Repeat until the test passes.

As an example, suppose that we're going to write our ``sumnums`` function using the Test-First methodology. We begin
by creating the interface and docstring::

    def sumnums(lo, hi):
        """computes the sum of a range of numbers
        
        Precondition: lo <= hi
        Postcondition: returns the sum of the numbers in the range [lo..hi]
        """

Next, we write the unit test for it:

.. activecode:: ac_tfd_sumnums

    def sumnums(lo, hi):
        """computes the sum of a range of numbers
        
        Precondition: lo <= hi
        Postcondition: returns the sum of the numbers in the range [lo..hi]
        """

    assert sumnums(1, 3) == 6
    assert sumnums(1, 1) == 1
    print("All tests passed!")

We run the unit test and it fails. 

Next, we implement the body of ``sumnums``:

.. activecode:: ac_tfd_sumnums2

    def sumnums(lo, hi):
        """computes the sum of a range of numbers
        
        Precondition: lo <= hi
        Postcondition: returns the sum of the numbers in the range [lo..hi]
        """
        sum = 0
        for i in range(lo, hi):
            sum += i
        return sum           

    assert sumnums(1, 3) == 6
    assert sumnums(1, 1) == 1
    print("All tests passed!")

Now, run the tests. The tests indicate an assertion error, which points to a bug in the function logic. Fix the bug,
and test again. (If you're not sure what the bug is, try using **Show in CodeLens** and stepping through the code to help
you figure it out.)

.. reveal:: rv_tfd_tip
   :showtitle: Give me a tip
   :modal:
   :modalTitle: Here's a tip!

   The range function generates numbers in the range ``lo`` .. ``hi - 1``. Our function should include ``hi``.
   Try adjusting the ``hi`` parameter for range to ``hi + 1``.

Suppose we're not creating a new function, but modifying an existing one. In Test-First Development,
before making the modification to the function, we write a test for the new functionality. Then,
we modify the function, and use the test to check that the modification worked.

Benefits of Test-First Development
----------------------------------

There are several benefits to Test-First Development.

#. It ensures that unit tests are written. This tends to lead to higher-quality, robust code, with fewer
   bugs.

#. Writing the tests first helps the programmer to clarify the function specification. It's not possible to
   write an assert for a function that has a vague function docstring. This process forces the
   programmer to write a clear docstring and to practice specification-based testing, because when the
   tests are written, there is no function implementation to reference. 

#. When the programmer writes the function and is ready to test it, the test is all ready to go. There is no
   internal struggle about whether a unit test should be written or not. The programmer runs the test,
   and gets instant feedback about whether the function is working or not.

#. If the function fails to pass the test, the benefits of unit testing in helping the programmer
   to quickly diagnose and fix the problem are instantly available. The test-debug cycle is rapid.

#. When a programmer modifies an existing function for which unit tests already exist, perhaps to add some more functionality, 
   the existing unit tests serve as a safety net. They check that the modifications made by the programmer don't break
   any of the old functionality.

#. The overall development time tends to be reduced.  Perhaps counter-intuitively, writing more code (the unit tests)
   actually speeds up the overall development process, because of the benefits imparted by unit testing.

#. Believe it or not, there are psychological benefits. As the programmer works on the project, creating
   little tests and then writing code that passes those tests, there is a sense of accomplishment and satisfaction that
   comes every time a new test passes. Instead of spending hours of frustration debugging a new function in the context
   of a complex program, with few visible results, the test-first progress leads to more visible and regular successes. 

I hope you'll try out Test-First Development on your next assignment and experience some of these benefits
for yourself!


**Check your understanding**

.. mchoice:: mc_tfd_1
   :answer_a: True
   :answer_b: False
   :correct: a
   :feedback_a: Correct. Test-First Development requires the developer to write unit tests. However, these tests come with significant benefits and can speed up overall development.
   :feedback_b: Incorrect. Test-First Development requires the developer to write unit tests. However, these tests come with significant benefits and can speed up overall development.

   Test-First Development often involves writing more code than traditional development.

