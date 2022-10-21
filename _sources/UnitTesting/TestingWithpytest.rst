..  Copyright (C)  Stephen Schaub.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: pytest-1-
   :start: 1

Testing with pytest
===================

Writing automated unit tests is very helpful in reducing the effort needed to build software. However, the simple
approach described so far is inadequate to help programmers realize the full benefits of unit testing. In this section,
we introduce a unit test framework which addresses some practical issues that crop up when you try to apply
unit testing techniques in software development projects. Here are some of the issues with using plain assertion unit
tests:

* Simple assert-based tests don't give very good diagnostic information when they fail. It would help to have better
  reporting. For example, when an assert fails, it would help us in diagnosing the error to see what value the function
  actually produced. An AssertionError doesn't give us that information.

* We need a better way to organize our unit test code. So far, I've suggested creating separate programs to hold
  the functions under test together with their unit test code. But that isn't practical for most projects. For example,
  functions often need to call other functions in the program in order to do their work. It's not convenient to
  bring those auxiliary functions over into separate test programs.

* We need a way to keep the unit test around and use it even after the function is first developed
  to help us catch bugs that are inadvertently introduced into the function when we make modifications to it.

Unit testing frameworks help to address these issues, by improving error reporting, providing a structure
for programmers to organize their unit tests, and making it possible to leverage existing unit tests when
making enhancements to functions. **pytest** is one unit testing framework that provides these benefits.

For our purposes, the attractive thing about pytest is that writing unit tests with pytest feels a lot like writing unit
tests using plain assert statements. The only difference is that you put your assert statements into test functions.
Here's an example of how it works:

.. activecode:: ac_round6_pytest1

    def round6(num: float) -> int:
        """This function has a bug in it"""
        return int(num + .6)

    # ---- automated unit test ----

    def test_round6():
        assert round6(9.7) == 10
        assert round6(8.5) == 8

    =====

    from unittest.gui import TestCaseGui

    class pyTests(TestCaseGui):

        def testOne(self):
            for item in globals():
                if item.startswith("test_"):
                    try:
                        globals()[item]()
                        self.assertEqual(item + " passed", item + " passed", item + " passed")
                    except Exception as e:
                        self.assertEqual(item + " failed", item + " passed", item + " failed: " + str(e))

    pyTests().main()


.. test:

    success = True
    for item in globals():
        if item.startswith("test_"):
            try:
                globals()[item]()
            except Exception as e:
                success = False
                print(item + "() test failed with ", e)

    if success:
        print("All tests passed!")

This code example defines two functions: the function to be tested, ``round6``, and a function named ``test_round6``
that contains unit test code. When using the pytest approach, you write your unit test as a function whose name must
start with the prefix ``test_``. Inside the function, you write normal assert statements to test the desired function.
Notice that you do not write a line to *call* the unit test function. Instead, when you launch pytest to run the unit
tests, pytest scans your script and executes only the functions with the prefix ``test_``.

This ActiveCode environment simulates pytest by scanning for and executing functions with a ``test_`` prefix when you
click **Run**. Go ahead and try it - rename the test_round6 function to ``test_itworks`` and try running the test again.

Organizing pytest Functions
---------------------------

The example above uses a single pytest function, with both asserts in the same pytest function. The
disadvantage of that approach is that the first failing assert prevents the rest of the asserts from
being tested.

If you want, you can write multiple pytest functions to test a single function. That way, when an
assert fails in one test function, the rest of the pytest functions can still run and report success or
failure.

You can name your pytest functions with names that indicate what they are testing. For
example, try changing the ActiveCode example above so that it defines two test functions: one named
``test_round6_rounds_up``, containing the first assert, and one named ``test_round6_rounds_down``,
containing the second assert. Your code should look like this::

    def test_round6_rounds_up():
        assert round6(9.7) == 10

    def test_round6_rounds_down():
        assert round6(8.5) == 8

If you use good pytest function names, when a pytest function has an assertion failure, you can
easily tell what the problem was.

Using pytest
------------

To use pytest, you must first install it using the **pip** command. Open your computer's command line window
(not the Python interpreter) and enter the following command to install:

* Windows::

    pip install pytest

* Mac/Linux::

    pip3 install pytest

After you have installed pytest, you run pytest unit tests from the command line window. To run pytest unit
tests, try copying the code from the ActiveCode example above and pasting it into a Python file named (ex.)
**myround.py**. Then, use the **pytest** command to run your tests by opening a command window,
navigating to the folder where you stored myround.py, and executing the following command::

    pytest myround.py


Understanding pytest Failure Reports
------------------------------------

When you run the pytest command and an assertion fails, you see a report like this::

    =============================== FAILURES ================================
    ______________________________ test_round6 ______________________________
        def test_round6():
            assert round6(9.7) == 10
    >       assert round6(8.5) == 8
    E       assert 9 == 8
    E        +  where 9 = round6(8.5)

    myround.py:8: AssertionError

Let's take a closer look at this report to understand what it's telling you.

#. First, notice the line with the ``>`` symbol::

       >       assert round6(8.5) == 8

   The ``>`` symbol points to the line with the assertion that failed.

#. Next, notice the lines marked ``E``::

       E       assert 9 == 8
       E        +  where 9 = round6(8.5)

   This indicates that the call to ``round6(8.5)`` returned the value 9, instead of the value 8.
   The value ``9`` is the actual result of the function. Knowing the value actually produced by
   the function can help you to troubleshoot the bug and correct the problem.

Integrated Unit Testing with pytest
------------------------------------

When you use the pytest framework, you can include pytest test functions in your main program, along with the rest of
your program code. This allows you to keep your tests together with the functions that they test, and you can run either
your program (using the python command) or the unit tests (using the pytest command).

Take a look at this example that shows a function (``round6``, containing a bug), together with a
unit test function (``test_round6``), and a main program that uses ``round6``:

.. sourcecode:: python
    :linenos:

    def round6(num: float) -> int:
        return int(num + .6)

    # ---- automated unit test ----

    def test_round6():
        assert round6(9.7) == 10
        assert round6(8.5) == 8

    # ----- main program follows -----

    if __name__ == '__main__':
        num = float(input('Enter a value:'))
        print('The value rounded is: ' + str(round6(num)))

Notice how the main program is inside the ``if`` statement on line 12. This if condition is true when the program is run
using the **python** command, and allows the main program to execute. When the unit tests are executed using the
**pytest** command, any top-level code outside a function in the python file gets executed when **pytest** scans the
script looking for unit test functions with a ``test_`` prefix. The ``if`` condition is false in this scenario, and that
prevents the main program from executing when **pytest** is scanning the script. If that explanation didn't make total
sense, just remember: in order for pytest to work correctly, any code that is part of the main program must be inside an
``if`` statement like the one in this example, so that it doesn't interfere with pytests's unit testing process.


**Check your understanding**

.. tabbed:: tab_grade_unittest

    .. tab:: Question

        .. activecode:: ac_grade_pytest
            :autograde: unittest
            :include: ac_grade_pytest_aux

            Write a pytest unit test function named ``test_grade`` to test a function
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
            ~~~~
            # Write a pytest unit test function named ``test_grade``


            ====
            from unittest.gui import TestCaseGui

            testA = False
            testB = False
            testF = False
            illegal = False

            def grade(score):
                global illegal, testA, testB, testF

                if score > 100 or score < 0:
                    illegal = True
                    return ''
                elif score >= 90:
                    testA = True
                    return 'A'
                elif score >= 80:
                    testB = True
                    return 'B'
                else:
                    testF = True
                    return 'F'

            class myTests(TestCaseGui):

                def testOne(self):
                    code = self.getEditorText().replace(' ','').replace('"', '').replace("'", '')
                    self.assertEqual(test_grade(), None, 'test_grade function defined' )
                    self.assertTrue(testA and '==A' in code, "Assert tested 90..100")
                    self.assertTrue(testB and '==B' in code, "Assert tested 80..90")
                    self.assertTrue(testF and '==F' in code, "Assert tested 0..80")

            myTests().main()


    .. tab:: Answer

        The following is a suggested pytest unit test.

        .. sourcecode::

            def test_grade():
                assert grade(92) == 'A'
                assert grade(85) == 'B'
                assert grade(69) == 'F'




