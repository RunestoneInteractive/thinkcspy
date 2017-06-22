.. Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell. Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: func-1-
   :start: 1

.. index:: function, compound statements, function definition, parameter, header, body, docstring, function call

Functions
---------

In Python, a **function** is a named sequence of statements that belong together. Their primary purpose is to help us organize programs into chunks that match how we think about the solution to the problem.

For instance, in the last chapter we discovered a way to create a square with a turtle using just three lines of code. This solution to the problem of how to make a square is something we may want to reuse. For example, if we have a program that creates many squares, instead of typing those three lines over and over again every time we want to draw a square, we could instead call a function named ``draw_square`` that contains those three lines of code:

.. code-block:: python

    def draw_square(t):
        for i in range(4):
            t.forward(50)
            t.left(90)

Now we can call this function in our code anytime we wish to draw a square. Notice that this function has a parameter ``t``. This parameter represents a turtle. Therefore, when we call this function in our code, we need to pass in an argument of a turtle object like so: ``draw_square(alex)``.

You've already been using functions such as ``forward``, ``range``, and ``print`` in your code, but now we'll examine how functions work (and how to create your own!) in more detail. We'll start by looking at function definitions --- something that every function has, but which you have not yet written yourself.

The syntax for a **function definition** is:

.. code-block:: python

    def name( parameters ):
        statements

You can make up any names you want for the functions you create, except that you can't use a name that is a Python keyword, and the names must follow the rules for legal identifiers that were given previously. The parameters specify what information, if any, you have to provide in order to use the function. Another way to say this is that the parameters specify what the function needs in order to do its work.

There can be any number of statements inside the function, but they have to be indented from the ``def`` line. In the examples in this book, we will use the standard indentation of four spaces. Function definitions are the second of several **compound statements** we will see, all of which have the same pattern:

#. A **header** line which begins with a keyword and ends with a colon.
#. A **body** consisting of one or more Python statements, each indented the same amount -- *4 spaces is the Python standard* -- from the header line.

We've already seen the ``for`` loop which is also a compound statement and therefore follows this pattern.

In a function definition, the keyword in the header is ``def``, which is followed by the name of the function and some *parameters* enclosed in parentheses. The parameter list may be empty, or it may contain any number of parameters separated from one another by commas. In either case, the parentheses are required.

We need to say a bit more about the parameters. In the definition, the parameter list is more specifically known as the **formal parameters**. This list of names describes those things that the function will need to receive from the user (or "caller") of the function. When you call a function, you provide values to the formal parameters.

The figure below shows this relationship. A function needs certain information to do its work. These values, often called **arguments** or **actual parameters**, are passed to the function by the user.

.. image:: Figures/blackboxproc.png

This type of diagram is often called a **black-box diagram** because it only states the requirements from the perspective of the user. The user must know the name of the function and what arguments need to be passed. The details of how the function works are hidden inside the "black-box".

Let's return to our turtle example above, where we use a function so we will not have to duplicate all the steps each time we want to make a square.  "Draw a square" can be thought of as an *abstraction* of a number of smaller steps. Let's modify our code so that instead of drawing a square of a set size, we can draw a square of whatever size the user wishes. In order to accomplish this we will need to provide two pieces of information for the function to do its work: a turtle to do the drawing and a size for the sides of the square. We could represent this using the following black-box diagram.

.. image:: Figures/turtleproc.png

Here is a program containing a function to capture this idea. Give it a try.

.. activecode:: ch04_1
    :nocodelens:

    import turtle

    def draw_square(t, sz):
        """Make turtle t draw a square of with side sz."""

        for i in range(4):
            t.forward(sz)
            t.left(90)


    wn = turtle.Screen()              # Set up the window and its attributes
    wn.bgcolor("lightgreen")

    alex = turtle.Turtle()            # create alex
    draw_square(alex, 50)             # Call the function to draw the square passing the actual turtle and the actual side size

    wn.exitonclick()

This function is named ``draw_square``. It has two parameters: one to tell the function which turtle to move around and the other to tell it the size of the square we want drawn. In the function definition they are called ``t`` and ``sz`` respectively. Make sure you know where the body of the function ends --- it depends on the indentation and the blank lines don't count for this purpose!

.. admonition::  docstrings

    If the first thing after the function header is a string (some tools insist that it must be a triple-quoted string), it is called a **docstring** and gets special treatment in Python and in some of the programming tools.

    One way to retrieve the information in this string is to use the interactive interpreter, and enter the expression ``<function_name>.__doc__``, which will retrieve the docstring for the function. So the string you write as documentation at the start of a function is retrievable by Python tools *at runtime*. This is different from comments in your code, which are completely eliminated when the program is parsed.

    By convention, Python programmers use docstrings for the key documentation of their functions.

Defining a new function does not make the function run. To do that we need a **function call**. This is also known as a **function invocation**. We've already seen how to call some built-in functions like ``print``, ``range`` and ``int``. Function calls contain the name of the function to be executed followed by a list of values, called *arguments*, which are assigned to the parameters in the function definition. So in the second to the last line of the program, we call the function, and pass ``alex`` as the turtle to be manipulated, and 50 as the size of the square we want.

Once we've defined a function, we can call it as often as we like and its statements will be executed each time we call it. In this case, we could use it to get one of our turtles to draw a square and then we can move the turtle and have it draw a different square in a different location. Note that we lift the tail so that when ``alex`` moves there is no trace. We put the tail back down before drawing the next square. Make sure you can identify both invocations of the ``draw_square`` function.

.. activecode:: ch04_1a
    :nocodelens:

    import turtle

    def draw_square(t, sz):
        """Make turtle t draw a square with side sz."""

        for i in range(4):
            t.forward(sz)
            t.left(90)


    wn = turtle.Screen()          # Set up the window and its attributes
    wn.bgcolor("lightgreen")

    alex = turtle.Turtle()        # create alex
    draw_square(alex, 50)          # Call the function to draw the square

    alex.penup()
    alex.goto(100,100)
    alex.pendown()

    draw_square(alex,75)           # Draw another square

    wn.exitonclick()

In the next example, we've made a new function named ``draw_multicolor_square`` that varies from the ``draw_square`` function a little and we get ``tess`` to draw 15 different squares. Once the function has been defined, we can call it as many times as we like with whatever actual parameters we like.

.. activecode:: ch04_2
    :nocodelens:

    import turtle

    def draw_multicolor_square(t, sz):
        """Make turtle t draw a multi-colour square of sz."""
        for i in ['red','purple','hotpink','blue']:
            t.color(i)
            t.forward(sz)
            t.left(90)

    wn = turtle.Screen()             # Set up the window and its attributes
    wn.bgcolor("lightgreen")

    tess = turtle.Turtle()           # create tess and set some attributes
    tess.pensize(3)

    size = 20                        # size of the smallest square
    for i in range(15):
        draw_multicolor_square(tess, size)
        size = size + 10             # increase the size for next time
        tess.forward(10)             # move tess along a little
        tess.right(18)               # and give her some extra turn

    wn.exitonclick()



**Check your understanding**

.. mchoice:: test_question5_1_1
   :answer_a: A named sequence of statements.
   :answer_b: Any sequence of statements.
   :answer_c: A mathematical expression that calculates a value.
   :answer_d: A statement of the form x = 5 + 4.
   :correct: a
   :feedback_a: Yes, a function is a named sequence of statements.
   :feedback_b: While functions contain sequences of statements, not all sequences of statements are considered functions.
   :feedback_c: While some functions do calculate values, the python idea of a function is slightly different from the mathematical idea of a function in that not all functions calculate values. Consider, for example, the turtle functions in this section. They made the turtle draw a specific shape, rather than calculating a value.
   :feedback_d: This statement is called an assignment statement. It assigns the value on the right (9), to the name on the left (x).

   What is a function in Python?

.. mchoice:: test_question5_1_2
   :answer_a: To improve the speed of execution
   :answer_b: To help the programmer organize programs into chunks that match how they think about the solution to the problem.
   :answer_c: All Python programs must be written using functions
   :answer_d: To calculate values.
   :correct: b
   :feedback_a: Functions have little effect on how fast the program runs.
   :feedback_b: While functions are not required, they help the programmer better think about the solution by organizing pieces of the solution into logical chunks that can be reused.
   :feedback_c: In the first several chapters, you have seen many examples of Python programs written without the use of functions. While writing and using functions is desirable and essential for good programming style as your programs get longer, it is not required.
   :feedback_d: Not all functions calculate values.

   What is one primary purpose of a function?

.. mchoice:: test_question5_1_3
   :answer_a: def draw_circle(t):
   :answer_b: def draw_circle:
   :answer_c: draw_circle(t, sz):
   :answer_d: def draw_circle(t, sz)
   :correct: a
   :feedback_a: A function may take zero or more parameters. It does not have to have two. In this case the size of the circle might be specified in the body of the function.
   :feedback_b: A function needs to specify its parameters in its header.
   :feedback_c: A function definition needs to include the keyword def.
   :feedback_d: A function definition header must end in a colon (:).

   Which of the following is a valid function header (first line of a function definition)?

.. mchoice:: test_question5_1_4
   :answer_a: def draw_square(t, sz)
   :answer_b: draw_square
   :answer_c: draw_square(t, sz)
   :answer_d: Make turtle t draw a square with side sz.
   :correct: b
   :feedback_a: This line is the complete function header (except for the semi-colon) which includes the name as well as several other components.
   :feedback_b: Yes, the name of the function is given after the keyword def and before the list of parameters.
   :feedback_c: This includes the function name and its parameters
   :feedback_d: This is a comment stating what the function does.

   What is the name of the following function?

   .. code-block:: python

     def draw_square(t, sz):
         """Make turtle t draw a square of with side sz."""
         for i in range(4):
             t.forward(sz)
             t.left(90)



.. mchoice:: test_question5_1_5
   :answer_a: i
   :answer_b: t
   :answer_c: t, sz
   :answer_d: t, sz, i
   :correct: c
   :feedback_a: i is a variable used inside of the function, but not a parameter, which is passed in to the function.
   :feedback_b: t is only one of the parameters to this function.
   :feedback_c: Yes, the function specifies two parameters: t and sz.
   :feedback_d: the parameters include only those variables whose values that the function expects to receive as input. They are specified in the header of the function.

   What are the parameters of the following function?

   .. code-block:: python

     def draw_square(t, sz):
         """Make turtle t draw a square of with side sz."""
         for i in range(4):
             t.forward(sz)
             t.left(90)



.. mchoice:: test_question5_1_6
   :answer_a: def draw_square(t, sz)
   :answer_b: draw_square
   :answer_c: draw_square(10)
   :answer_d: draw_square(alex, 10):
   :answer_e: draw_square(alex, 10)
   :correct: e
   :feedback_a: No, t and sz are the names of the formal parameters to this function. When the function is called, it requires actual values to be passed in.
   :feedback_b: A function call always requires parentheses after the name of the function.
   :feedback_c: This function takes two parameters (arguments)
   :feedback_d: A colon is only required in a function definition. It will cause an error with a function call.
   :feedback_e: Since alex was already previously defined and 10 is a value, we have passed in two correct values for this function.

   Considering the function below, which of the following statements correctly invokes, or calls, this function (i.e., causes it to run)?  Assume we already have a turtle named alex.

   .. code-block:: python

     def draw_square(t, sz):
         """Make turtle t draw a square of with side sz."""
         for i in range(4):
             t.forward(sz)
             t.left(90)



.. mchoice:: test_question5_1_7
   :answer_a: True
   :answer_b: False
   :correct: a
   :feedback_a: Yes, you can call a function multiple times by putting the call in a loop.
   :feedback_b: One of the purposes of a function is to allow you to call it more than once. Placing it in a loop allows it to executed multiple times as the body of the loop runs multiple times.

   True or false: A function can be called several times by placing a function call in the body of a loop.
