..  Copyright (C)  Stephen Schaub.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: designtest-1-
   :start: 1

.. _designing_testable_functions:

Designing Testable Functions
============================

Now that you know how to write unit tests using the ``assert`` statement, it's important for you
to understand how to write testable functions. Not all functions can be tested.

Consider the following function::

    def add(x, y):
        """Adds two numbers and displays the sum"""
        print(x + y)

How would you write an assert statement to check that this function works? Think about it a moment.
Would this work?

::

    assert add(2, 3) == 5

Answer: no. An assert statement cannot verify that what a function displays on the screen is correct.
It can only check that the contents of variables are correct. This function is not testable.

A **testable function** is a function that produces a result that can be checked by an assert
statement. Generally, it does so in one of three ways:

#. It returns its result

#. It stores its result in a global variable

#. It modifies the state of an object passed as a parameter

Functions that display their output using print are not testable functions.

**Check your understanding**

.. mchoice:: mc_testable_1
   :answer_a: Yes.
   :answer_b: No.
   :correct: a
   :feedback_a: Correct. In a unit test, an assert statement could check the value of sum after a call to add.
   :feedback_b: Incorrect. The function stores its result in a global variable, which can be checked by an assert statement.

   Is this a testable function?

   ::

        sum = 0
        def add(x, y):
            global sum
            sum = x + y


.. index:: design by contract

Design by Contract
------------------

In addition to producing a result that can be checked by an assert statement, a testable function must have a clear
specification. In order to write unit tests for a function, you must have a precise understanding of what the function
should do. 

A function specification describes what value the function produces, given its parameter values, and is
generally expressed in the form of a docstring. For example, consider the ``sumnums`` function given earlier in this
chapter::

    def sumnums(lo, hi):
        """returns the sum of the numbers in the range [lo..hi]
        
        Precondition: lo <= hi
        """
        ...

The docstring is this function's specification. Given this specification, you might write a unit test
that contains the following assert::

    assert sumnums(1, 3) == 6

An alternate way to write the docstring is as follows::

    def sumnums(lo, hi):
        """computes the sum of a range of numbers
        
        Precondition: lo <= hi
        Postcondition: returns the sum of the numbers in the range [lo..hi]
        """
        ...

This docstring contains three elements: a brief description; a precondition; and a postcondition. We've
discussed the concept of a precondition earlier in this chapter. The postcondition is new.

.. admonition:: Postcondition

    A **postcondition** states the work the function completed by the function if the precondition is satisfied.

Functions that include a precondition and a postcondition in their docstring embody a software engineering idea called
**design by contract**. The idea is that a function specification forms a contract between the function and the code
calling the function. If the code calling the function passes parameters that satisfy the function's precondition, then
the function should be expected to produce what it says it will produce. If the parameters do not satisfy the function's
precondition, then the function does not have to produce a valid result. In the design by contract approach, a testable
function is one where the function's postcondition can be verified by an assert statement.

In this example, you can think of the function's docstring as promising to calling code: "If you give me two parameters,
lo and hi, such that lo is less than or equal to hi, I promise to return the sum of the numbers in the range lo..hi,
inclusive."

To write a precondition, think about the parameter values that the function is designed to handle, and write a boolean
expression that expresses what parameter values are valid. For example, consider a function that computes the average weight,
given a total weight and a number of items::

    def compute_average(total_weight: float, num_items: float) -> float:
        return total / num_items

This function will work if num_items is greater than zero, but will fail if num_items is zero. So, an appropriate precondition
would be ``num_items > 0``. A complete docstring would look like this::

    def compute_average(total_weight: float, num_items: float) -> float:
        """computes the average weight, given `total_weight` of items and `num_items`

        Precondition: num_items > 0
        Postcondition: returns average item weight
        """

Sometimes, your precondition will be expressed more loosely, using English. Consider this function which extracts the
first word from a string containing text::

    def get_first_word(text: str) -> str:
        """extracts the first word from `text`"""

        space_loc = text.find(' ')
        return text[0:space_loc]

This function will produce nonsense if the string doesn't contain a space. So, an appropriate precondition might be
"text contains 2 or more words separated by spaces". The docstring might be::

    def get_first_word(text: str) -> str:
        """extracts the first word from `text`
        
        Precondition: `text` contains 2 or more words separated by spaces
        Postcondition: returns the first word in `text`
        """

Following the design by contract idea and writing function specifications that include preconditions and postconditions
is an excellent way to design testable functions, because, as we'll see in the next section, it makes it possible to
reason precisely about what the function should do when given various parameter values. Even if you don't use
precondition and postcondition terminology in your docstrings, it helps to *think* in those terms.

**Check your understanding**

.. mchoice:: mc_testable_2
   :answer_a: len(msg) &lt;= 0
   :answer_b: len(msg) > 0
   :answer_c: msg == ""
   :answer_d: none of these
   :correct: b
   :feedback_a: Incorrect. The function would crash if this condition were true.
   :feedback_b: Correct. The function cannot return the first character of an empty msg.
   :feedback_c: Incorrect. The function would crash if this condition were true.
   :feedback_d: Incorrect. Try again.

   Consider the following function. What would an appropriate precondition be?

   .. sourcecode:: python

    def getfirst(msg):
        """returns first character of msg"""

        return msg[0]

