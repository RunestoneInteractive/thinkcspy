..  Copyright (C)  Stephen Schaub.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: testfunc-1-
   :start: 1

Testing Functions
=================

Melinda is writing a program that does some mathematical calculations. At the moment, she is working on adding some
functionality to her program that requires rounding numbers to the nearest integer. She would normally use the built-in
Python function ``round`` to do the job, but her program has a special requirement that numbers should be rounded up if
the fractional portion is .6 or greater, instead of the usual .5 or greater. So, Melinda decides to write a function that
rounds up numbers according to this requirement. 

She defines a function ``round6`` to do the job::

    def round6(num):
        """returns num rounded to nearest int if fractional part is >= .6"""

        return int(num + .6)

This function uses a valid approach to rounding, but is not quite correct (Melinda doesn't realize it yet --- can you
spot the bug?).

Now she needs to test the new code. There are two basic approaches Melinda could take to do her testing:

#. Put the function into the program, modify the program to call the function at the appropriate point, then run the program.    

#. Test the function by itself, somehow. 

Which do you think will be more efficient?

Melinda's program does complex mathematical calculations, and asks the user to enter 5 separate pieces of input before
performing the calculations. If she goes with option 1, each time she runs the program to test the function,
she must enter all 5 pieces of input. As you can imagine, that process is cumbersome and will not be very efficient.
Also, if the program output is incorrect, it may be difficult to determine whether the fault is in the new function,
or elsewhere in the program.

Melinda decides to write a separate, short program to help her test her new function. The test program is very simple
--- it contains only her new function and a bit of code to get some input, pass it to the function, and display the
result. Here's what she writes:

.. activecode:: ac_round6_1

    def round6(num):
        """returns num rounded to nearest int if fractional part is >= .6"""

        return int(num + .6)

    # ----- test program -------

    x = float(input('Enter a number:'))
    result = round6(x)
    print('Result: ', result)

Before running the program, she jots down some test cases to help her in her testing::

                  Input    Expected Output
                  -------- ---------------
    Test Case 1:       3.5               3
    Test Case 2:       3.6               4
    Test Case 3:       3.7               4

Try running the program with the input values above. Notice that the output isn't quite right.
Can you figure out how to correct the bug?

After analyzing her logic, Melinda corrects the bug by changing the return statement in the function as follows::

    return int(num + .4)

She runs the test program again to verify that the function is working correctly. Then, she copies the
``round6`` function into her main program, confident that her rounding logic is correct.

The program Melinda wrote to help her test her round6 function is an example of a unit test. 

.. admonition:: Unit Test

    A **unit test** is code that tests a function to determine if it works properly.

A unit test program like this one can dramatically reduce the effort it takes to test a new function, and can reduce the
overall effort involved in adding functionality to a program. The savings tradeoff depends on the amount of effort
required to write the test program, compared to the amount of effort required to test the function in the context of the
main program for which the new function is being developed. Here, the function was relatively simple, and it probably
wouldn't have taken Melinda too many iterations of testing the function in the context of the main program, with its
five pieces of input. In this scenario, Melinda may not have saved much effort. However, if the function were more
complex, writing a unit test would probably have helped reduce the overall effort. And, using some tricks I'll show you
in the next sections, you can reduce the amount of effort required to write and run the unit test, making the case for
writing unit tests even more compelling.


Automated Unit Tests
--------------------

The unit test program above is a manual unit test. A **manual unit test** gets input from the user, invokes the code
under test, providing the input supplied by the user, and displays the result. (In our example, ``round6`` is the code
under test.) Manual unit tests are helpful, but they can be improved in two ways:

#. We can embed the test input directly within the unit test code, so the person running the test doesn't have to
   come up with the test input or take the time to enter it.

#. We can make the unit test report success or failure, instead of requiring the person running the test to
   look at the output and determine whether the function worked correctly.

We call a unit test that contains its own test input and produces a clear pass/fail indication an **automated
unit test**. Take a look at the following example:

.. activecode:: ac_round6_2

    def round6(num):
        return int(num + .4)

    # ---- automated unit test ----

    result = round6(9.7)
    if result == 10:
        print("Test 1: PASS")
    else:
        print("Test 1: FAIL")

    result = round6(8.5)
    if result == 8:
        print("Test 2: PASS")
    else:
        print("Test 2: FAIL")

This automated unit test invokes the ``round6`` function on predetermined test input, checks that the function produced the
expected result, and displays a pass / fail message. Run it to see the test PASS messages.

Try editing the round6 function above to introduce Melinda's original bug, then run it again to see the failure message.
Notice the big advantage of an automated unit test: you can change the function being tested, run the unit test,
and immediately see the test results for a whole series of tests. No hand-entry of test data, and no interpretation of the
results. Clearly, once you have the test written, you can dramatically speed up your edit-test-debug cycle. The downside,
of course, is that the unit test program itself takes more time to develop.

Automated Unit Tests with ``assert``
------------------------------------

To help reduce the amount of effort required to develop an automated unit test, let's bring the ``assert`` statement into
play. We can replace each ``if`` statement in the program above with an assert, as in the program below:

.. activecode:: ac_round6_3

    def round6(num: float) -> int:
        return int(num + .4)

    # ---- automated unit test ----

    result = round6(9.7)
    assert result == 10

    result = round6(8.5)
    assert result == 8

    print("All tests passed!")

Try running the program above to see the success message. Then, try altering the ``round6`` function to reintroduce the original
bug, and see how the assertion failure pinpoints that the second test failed.

We can streamline this program even further by eliminating the ``result`` variable::

    assert round6(9.7) == 10
    assert round6(8.5) == 8

    print("All tests passed!")

This is Really Nice. We have a short test program that contains its own test input and displays an automated pass or
fail indication.  Writing this program takes very little effort. We have the benefits of an automated test without
having to write much code. Unit test programs are essentially "throw-away" programs that are used only during
development, and it's important that they can be developed quickly and easily.

Unit Tests can have bugs
------------------------

Unit tests, like the functions they test, can have bugs. So, when you run a unit test and it fails with an assert error,
one of the first questions you need to ask yourself is: "Is the unit test correct?" If the unit test is incorrect, then
you need to correct it, rather than spending time trying to find the bug in the function that the unit test is testing.

For example, consider the following assert::

    assert round6(9.2) == 10

This unit test is incorrect, because ``round6`` should produce the value 9, not 10, when given the parameter ``9.2``.


**Check your understanding**

.. mchoice:: mc_testfunc_1
    :answer_a: assert result != 'OK'
    :answer_b: assert engage_thruster(22) == result
    :answer_c: assert engage_thruster(22) != 'OK'
    :answer_d: assert engage_thruster(22) == 'OK'
    :correct: d
    :feedback_a: Incorrect. The assert should call the engage_thruster function. Try again.
    :feedback_b: Incorrect. The assert should not assume the presence of a variable named result.
    :feedback_c: Incorrect. This assert calls the engage_thruster function with the correct parameter, but interprets the result differently from the if statement provided.
    :feedback_d: Correct! This assert checks that the result of invoking engage_thruster(22) is the value 'OK'.

    Rewrite the following 3 lines of code with a single assert::

        result = engage_thruster(22)
        if result != 'OK':
            print("Test 2: FAIL")



.. mchoice:: mc_testfunc_2
    :answer_a: Unit test
    :answer_b: Tested function
    :answer_c: Both are in error
    :answer_d: Both are correct
    :correct: b
    :feedback_a: Incorrect. The assertion correctly checks that get_first should return the first character in 'Bells', 'B'.
    :feedback_b: Correct. The function code returns the second character of the parameter, not the first.
    :feedback_c: Incorrect. The assertion correctly checks that get_first should return the first character in 'Bells', 'B'.
    :feedback_d: Incorrect. The function code returns the second character of the parameter, not the first.

    Consider the following function which is supposed to return the first character of its argument::

        def get_first(msg):
            return msg[1]

    Now, consider this unit test::

        assert get_first('Bells') == 'B'

    This assertion fails. Is the unit test in error, or the function it is testing?

