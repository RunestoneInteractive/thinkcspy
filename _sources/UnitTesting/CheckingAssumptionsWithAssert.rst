..  Copyright (C)  Stephen Schaub.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: checkassump-1-
   :start: 1

.. index:: preconditions

Checking Assumptions With ``assert``
=====================================

Many functions work correctly only for certain parameter values, and produce invalid results (or crash) if given others.
Consider the following function, which computes the sum of the numbers in a range specified by its parameters:

.. activecode:: ac_sumnums_1

    def sumnums(lo, hi):
        """returns the sum of the numbers in the range [lo..hi]"""

        sum = 0
        for i in range(lo, hi+1):
            sum += i
        return sum

    print(sumnums(1, 3))
    print(sumnums(3, 1))

Notice that the first call to sumnums produces the correct answer (6), while the second call produces an incorrect answer.
``sumnums`` works correctly only if ``lo`` has a value that is less than, or equal to, ``hi``.

This function trusts the calling code to provide parameter values that are valid. If the caller provides a second
parameter that is lower than the first parameter, the function does not produce a correct result. That's not 
the fault of the function; the function isn't designed to work correctly if ``lo`` > ``hi``. 

To make it clear that the function is designed to work correctly only if ``lo`` <= ``hi``, it's a good idea to state
that as a precondition in the function documentation, like this::

    def sumnums(lo, hi):
        """returns the sum of the numbers in the range [lo..hi]
        
        Precondition: lo <= hi
        """

.. admonition:: Precondition

    A **precondition** specifies a condition that must be True if the function is to produce correct results. 

A precondition places a constraint on the values of the parameters that the caller can pass and expect to receive a
valid result. Preconditions are boolean expressions -- comparisons that you might write in an ``if`` statement.
We'll have more to say about preconditions later in the chapter.

Code that calls a function is responsible for passing parameters that satisfy the function's preconditions. If the
calling code passes values that violate the function's preconditions, the function isn't expected to work correctly.
That's not the function's fault: it's the caller's fault for passing parameters to the function that the function is not
designed to handle correctly. However, it might be a good idea if we designed the function to check for invalid values,
and when it detects them, somehow report that it was called incorrectly.

.. index:: defensive functions

Designing Defensive Functions
-----------------------------

A defensive function is a function that checks its parameters to see if they are valid, and responds in an appropriate
way if they are invalid. That raises the question: what should a defensive function do if it receives invalid values?
Should it print an error? Silently ignore the problem and return a default value? Return a special value that indicates
an error? Exit the program? There are several options.

As an example, here is one way we could make ``sumnums`` defensive:

.. activecode:: ac_sumnums_2

    def sumnums(lo, hi):
        """returns the sum of the numbers in the range [lo..hi]
        
        Precondition: lo <= hi
        """

        if lo > hi:
            print('Alert: Invalid parameters to sumnums.')
            return -1

        sum = 0
        for i in range(lo, hi+1):
            sum += i
        return sum

    print(sumnums(1, 3))
    print(sumnums(3, 1))

In this version, the function checks to see if the preconditions are violated, and if so, it complains by printing a
message and returns the value -1 to the caller.

.. admonition:: Defensive Programming

    The strategy of designing functions that check their parameters embodies a principle of software design called
    **defensive programming**, in which software checks for invalid inputs and responds in an appropriate way.
    Defensive programming is especially important for mission critical systems, but it can be a helpful 
    strategy in regular software projects, as we'll soon see.

This is an improvement over the original function, because now, if the function is called with invalid data,
the user will see a message that something is wrong. However, the ``if`` statement adds three lines of code to the
function. That may not seem like much, but it clutters the code and, in a typical program with several functions,
those if statements will start to feel like undesirable baggage. There's a better way.

.. index:: assert statement

The ``assert`` Statement
------------------------

Python provides a statement called the ``assert`` statement that can be used to check function
preconditions. An ``assert`` statement checks the value of a boolean expression. If the expression is ``True``, the
assert statement allows the program to proceed normally. But if the expression is ``False``, the assert
statement signals an error and stops the program.

Here's an example of an assert statement:

.. activecode:: ac_assert_1

    x = 1 + 1
    assert x == 2
    print(x)

To see it in action, run the example above. You'll see the value ``2`` displayed. The boolean condition ``x == 2``
was True, and the assert statement allowed execution to continue. 

Try changing the assert statement above as follows::

    assert x == 3

Run this version of the code, and you'll see an AssertionError appear. That occurred because the value of the boolean
expression was ``False``.

Let's modify our sumnums function to use an assert statement to check the precondition:

.. activecode:: ac_sumnums_3

    def sumnums(lo, hi):
        """returns the sum of the numbers in the range [lo..hi]
        
        Precondition: lo <= hi
        """

        assert lo <= hi

        sum = 0
        for i in range(lo, hi+1):
            sum += i
        return sum

    print(sumnums(1, 3))
    print(sumnums(3, 1))

In this version of ``sumnums``, we've replaced the ``if`` statement with an ``assert`` statement. Notice that the boolean
condition of the ``assert`` statement is the precondition, ``lo <= hi``. When the function is called, if the
condition is true, the function completes normally and returns its result. If the condition is false, the program stops
with an AssertionError. So, the first call to ``sumnums(1, 3)`` succeeds and the result, 6, appears. The second call to
``sumnums(3, 1)`` causes the assert to fail and an error appears.

Notice how much more streamlined this version of the function is than the version with the three-line ``if`` statement.
Here, we've added just one line of code to the original version. Using assertions is a relatively low-effort way to
create defensive functions.

.. admonition:: Writing assert statements to check preconditions

    Writing assert statements to check preconditions is easy. They go at the **beginning** of the function. When you
    write an assert statement to check a precondition, if the function comment already contains a precondition, you
    often can simply take the precondition and put it directly into the ``assert`` statement (you might have to tweak it
    to make it syntactically legal).  If there is no precondition in the function comment, think about how you would
    write an if statement to check that the values in the parameters are **correct**, and then put that condition after
    the word ``assert``.

More on ``assert`` and Preconditions
------------------------------------

Let's discuss for a moment the question of what a defensive function should do when it receives invalid values in its
parameters. By using an ``assert`` statement to check preconditions, we've designed the function to terminate the
program if it is given bad data. Is this the right thing to do? If the program ends abruptly due to an assertion
failure, the user will lose whatever work is in progress. That seems undesirable, to put it mildly.

Although a full discussion of defensive programming and assertions is outside the scope of an introductory programming
textbook, think about this: an assertion error **indicates a bug in the program**. More specifically, the bug is a
logic error that resulted in calling a function with inappropriate parameter values. If a computation is in progress and
a logic error occurs, any results that computation might produce will be faulty. Logic errors often go silently
undetected by users, because they aren't aware that the output is incorrect. It is better for a user to lose work
than for a logic error to go undetected and produce an invalid result that might be unwittingly used. Therefore,
using assert statements to check function preconditions is entirely appropriate.

Not only will adding assertions to your functions to check preconditions help expose logic errors in your program, it
does so in a way that helps you track them down and fix them quickly. When you don't use assertions, a function that is
called with incorrect parameters may produce erroneous results that aren't detected until much later in the program, and
debugging the problem can be difficult to trace back to the source. When you use assertions to check preconditions, a
function that detects a problem will stop immediately, helping you pinpoint the problem much faster. This behavior is
called the **fail fast principle**. You want your program to fail as quickly after a logic error is detected as possible
to help streamline the diagnostic work. 

.. admonition:: Debugging Assertion Failures

    When an ``assert`` statement that you have written to check a function precondition signals an error at runtime, your first
    thought will probably be: "what went wrong? where's the problem?" It will help if you remember that an assert that
    checks a function precondition is there to **catch bugs in code that calls the function**. After all, you put it on the
    first line of the function. So, it's not an indication of a problem in the function: instead, the calling code has a
    problem. So, look to see what code called the function. When you're running your program in a regular Python interpreter,
    the full error message will show the exact sequence of calls that triggered the error, and you can tell exactly
    which line of code is responsible for providing the incorrect values.

.. admonition:: Functions that Cannot Fail

    An alternative approach to handling bad input for sumnums would be to design the function so that it works correctly
    regardless of whether the low end of the range is specified first or second. For example, we could design it so that
    both of the following calls produce correct results::

        print(sumnums(1, 3))
        print(sumnums(3, 1))

    It's not hard to do; I bet you could figure out how to tweak the function to work correctly for both of these
    calls without much effort. However, a more important question is: should we do that? 

    This question doesn't necessarily have a simple answer, but briefly, there are a couple of considerations that argue
    against it. First, refining the function to work correctly for both of these calls will result in a function that is
    slightly more complex, and therefore, perhaps more likely to contain bugs. Also, testing will be more involved;
    there are more cases to consider. 


**Check your understanding**

.. mchoice:: mc_assert_1
   :answer_a: True
   :answer_b: False
   :correct: b
   :feedback_a: Incorrect. Output is displayed only if the condition is False.
   :feedback_b: Correct. Output is displayed only if the condition is False.

   An ``assert`` statement displays output if the condition is True.

.. mchoice:: mc_assert_2
   :answer_a: assert len(msg) &lt;= 0
   :answer_b: assert len(msg) > 0
   :answer_c: assert msg[0]
   :answer_d: none of these
   :correct: b
   :feedback_a: Incorrect. Use the precondition as the condition for the assert.
   :feedback_b: Correct. Use the precondition as the condition for the assert.
   :feedback_c: Incorrect. Use the precondition as the condition for the assert.
   :feedback_d: Incorrect. Use the precondition as the condition for the assert.

   Consider the following function. Which assert should be added to check its
   precondition?

   .. sourcecode:: python

    def getfirst(msg):
        """returns first character of msg

        Precondition: len(msg) > 0
        """

        return msg[0]

