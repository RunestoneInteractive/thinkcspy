..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: func-1-
   :start: 1

.. index::function definition
   single: def


Functions
---------

.. youtube:: 4wKtB57J5J4
    :divid: function_intro
    :height: 315
    :width: 560
    :align: left

In Python, a **function** is a named sequence of statements
that belong together.  Their primary purpose is to help us
organize programs into chunks that match how we think about
the solution to the problem.

.. index::
   single: ( ); function definition

The syntax for a **function definition** is:

.. code-block:: python

    def name( parameters ):
        statements

You can make up any names you want for the functions you create, except that
you can't use a name that is a Python keyword, and the names must follow the rules
for legal identifiers that were given previously. The parameters specify
what information, if any, you have to provide in order to use the new function.  Another way to say this is that the parameters specify what the function needs to do its work.

There can be any number of statements inside the function, but they have to be
indented from the ``def``. In the examples in this book, we will use the
standard indentation of four spaces. Function definitions are the second of
several **compound statements** we will see, all of which have the same
pattern:

#. A header line which begins with a keyword and ends with a colon.
#. A **body** consisting of one or more Python statements, each
   indented the same amount -- *4 spaces is the Python standard* -- from
   the header line.

We've already seen the ``while`` and ``for`` loops which follow this pattern.

In a function definition, the keyword in the header is ``def``, which is
followed by the name of the function and some *parameters* enclosed in
parentheses. The parameter list may be empty, or it may contain any number of
parameters separated from one another by commas. In either case, the parentheses are required.

We need to say a bit more about the parameters.  In the definition, the parameter list is more specifically known
as the **formal parameters**.  This list of names describes those things that the function will
need to receive from the user of the function.  When you use a function, you provide values to the formal parameters.

The figure below shows this relationship.  A function needs certain information to do its work.  These values, often called **arguments** or **actual parameters**, are passed to the function by the user.

.. image:: Figures/blackboxproc.png

This type of diagram is often called a **black-box diagram** because it only states the requirements from the perspective of the user.  The user must know the name of the function and what arguments need to be passed.  The details of how the function works are hidden inside the "black-box".

Suppose we're working with lists of numeric data and a common operation we need is to find the size of the range of numbers in a list.
It would make sense if we did not have to duplicate all the steps each time we want to find the size of the range.   "printRange" can be thought of as an 
*abstraction* of a number of smaller steps.  We will need to provide one piece of information for the function to do its work: the list we need the range of.

Here is a program containing a function to capture this idea.  Give it a try.

.. activecode:: ch04_1
    :nocodelens:

    def printRange(lst):
        """Prints the size of the range of lst."""
        smallest = min(lst)
		largest = max(lst)
        print(largest - smallest)


    my_list1 = [1, 2, 3, 4, 5, 6]
	printRange(my_list1)

This function is named ``printRange``.  It has one parameter --- a variable storing a list of numbers.  In the function definition this parameter is called 
``lst``.   Make sure you know where the body of the function
ends --- it depends on the indentation and the blank lines don't count for
this purpose!

.. admonition::  docstrings

    If the first thing after the function header is a string (some tools insist that
    it must be a triple-quoted string), it is called a **docstring**
    and gets special treatment in Python and in some of the programming tools.

    Another way to retrieve this information is to use the interactive
    interpreter, and enter the expression ``<function_name>.__doc__``, which will retrieve the
    docstring for the function.  So the string you write as documentation at the start of a function is
    retrievable by python tools *at runtime*.  This is different from comments in your code,
    which are completely eliminated when the program is parsed.

    By convention, Python programmers use docstrings for the key documentation of
    their functions.

.. index::
   single: ( ); function call

Defining a new function does not make the function run. To do that we need a
**function call**.  This is also known as a **function invocation**. We've already seen how to call some built-in functions like
``print``, ``range`` and ``int``. Function calls contain the name of the function to be
executed followed by a list of values in parentheses, called *arguments*, which are assigned
to the parameters in the function definition.
So in the last line of
the program, we call the function, and pass ``my_list1`` as the list to be analyzed.

.. The parameters being sent to the function, sometimes referred to as the **actual parameters** or **arguments**,
.. represent the specific data items that the function will use when it is executing.





Once we've defined a function, we can call it as often as we like and its
statements will be executed each time we call it.  In this case, we could use it to get
the size of the range of multiple lists. Make sure you can identify all three invocations of the ``printRange`` function.

.. activecode:: ch04_1
    :nocodelens:

    def printRange(lst):
        """Prints the size of the range of lst."""
        smallest = min(lst)
		largest = max(lst)
        print(largest - smallest)


    my_list1 = [1, 2, 3, 4, 5, 6]
	my_list2 = [2, 6, 9, 16, 42, 100, 2, 5]
	printRange(my_list1)
	printRange(my_list2)
	printRange([5, 10, 1000, 2])


.. warning::

   Even if a function call needs no arguments,
   the parentheses ``( )`` after the function name are *required*.  This
   can lead to a difficult bug:  A function name without the
   parenthesis is a legal expression *referring* to the function; for example,
   ``print``, but it does
   not *call* the associated function. Try it below if you want to see.

.. note::

   This workspace is provided for your convenience.  You can use this activecode window to try out anything you like.

   .. activecode:: scratch_05_01



**Check your understanding**

.. mchoice:: test_question5_1_1
   :practice: T
   :answer_a: A named sequence of statements.
   :answer_b: Any sequence of statements.
   :answer_c: A mathematical expression that calculates a value.
   :answer_d: A statement of the form x = 5 + 4.
   :correct: a
   :feedback_a: Yes, a function is a named sequence of statements.
   :feedback_b: While functions contain sequences of statements, not all sequences of statements are considered functions.
   :feedback_c: While some functions do calculate values, the python idea of a function is slightly different from the mathematical idea of a function in that not all functions calculate values.  Consider, for example, the turtle functions in this section.   They made the turtle draw a specific shape, rather than calculating a value.
   :feedback_d: This statement is called an assignment statement.  It assigns the value on the right (9), to the name on the left (x).

   What is a function in Python?

.. mchoice:: test_question5_1_2
   :practice: T
   :answer_a: To improve the speed of execution
   :answer_b: To help the programmer organize programs into chunks that match how they think about the solution to the problem.
   :answer_c: All Python programs must be written using functions
   :answer_d: To calculate values.
   :correct: b
   :feedback_a: Functions have little effect on how fast the program runs.
   :feedback_b: While functions are not required, they help the programmer better think about the solution by organizing pieces of the solution into logical chunks that can be reused.
   :feedback_c: In the first several chapters, you have seen many examples of Python programs written without the use of functions.  While writing and using functions is desirable and essential for good programming style as your programs get longer, it is not required.
   :feedback_d: Not all functions calculate values.

   What is one main purpose of a function?

.. mchoice:: test_question5_1_3
   :practice: T
   :answer_a: def drawCircle(t):
   :answer_b: def drawCircle:
   :answer_c: drawCircle(t, sz):
   :answer_d: def drawCircle(t, sz)
   :correct: a
   :feedback_a: A function may take zero or more parameters.  It does not have to have two.  In this case the size of the circle might be specified in the body of the function.
   :feedback_b: A function needs to specify its parameters in its header.
   :feedback_c: A function definition needs to include the keyword def.
   :feedback_d: A function definition header must end in a colon (:).

   Which of the following is a valid function header (first line of a function definition)?

.. mchoice:: test_question5_1_4
   :practice: T
   :answer_a: def printSquare(size)
   :answer_b: printSquare
   :answer_c: printSquare(size)
   :answer_d: Print a square of asterices with side size.
   :correct: b
   :feedback_a: This line is the complete function header (except for the semi-colon) which includes the name as well as several other components.
   :feedback_b: Yes, the name of the function is given after the keyword def and before the list of parameters.
   :feedback_c: This includes the function name and its parameters
   :feedback_d: This is a comment stating what the function does.

   What is the name of the following function?

   .. code-block:: python

     def printSquare(size):
         """Print a square of asterices with side size."""
         for i in range(size):
             print("*"*size)



.. mchoice:: test_question5_1_5
   :practice: T
   :answer_a: i
   :answer_b: size, i
   :answer_c: size
   :answer_d: "*"*size
   :correct: c
   :feedback_a: i is a variable used inside of the function, but not a parameter, which is passed in to the function.
   :feedback_b: i is a variable used inside of the function, but not a parameter, which is passed in to the function.
   :feedback_c: Yes, the function specifies one parameter: size.
   :feedback_d: This is an argument provided to the call to print().

   What are the parameters of the following function?

   .. code-block:: python

     def printSquare(size):
         """Print a square of asterices with side size."""
         for i in range(size):
             print("*"*size)



.. mchoice:: test_question5_1_6
   :practice: T
   :answer_a: def printSquare(size)
   :answer_b: printSquare
   :answer_c: printSquare(10)
   :answer_d: printSquare(my_size):
   :answer_e: printSquare(size):
   :correct: e
   :feedback_a: No, size is the name of the formal parameter to this function.  When the function is called, it requires an actual value to be passed in.
   :feedback_b: A function call always requires parentheses after the name of the function.
   :feedback_c: Yes, this would work
   :feedback_d: Yes, this would work since my_size is already defined.
   :feedback_e: A colon is only required in a function definition.  It will cause an error with a function call.

   Considering the function below, which of the following statements correctly invokes, or calls, this function (i.e., causes it to run)? Assume we already have a variable named my_size.

   .. code-block:: python

     def printSquare(size):
         """Print a square of asterices with side size."""
         for i in range(size):
             print("*"*size)



.. mchoice:: test_question5_1_7
   :practice: T
   :answer_a: True
   :answer_b: False
   :correct: a
   :feedback_a: Yes, you can call a function multiple times by putting the call in a loop.
   :feedback_b: One of the purposes of a function is to allow you to call it more than once.   Placing it in a loop allows it to executed multiple times as the body of the loop runs multiple times.

   True or false: A function can be called several times by placing a function call in the body of a loop.
