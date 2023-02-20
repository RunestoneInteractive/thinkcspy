..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: func-5-
   :start: 1

.. index::
    functional decomposition
    generalization
    abstraction


Functions can Call Other Functions
----------------------------------

It is important to understand that each of the functions we write can be used
and called from other functions we write.  This is one of the most important
ways that computer scientists take a large problem and break it down into a
group of smaller problems. This process of breaking a problem into smaller
subproblems is called **functional decomposition**.

Here's a simple example of functional decomposition using two functions. The
first function called ``square`` simply computes the square of a given number.
The second function called ``sum_of_squares`` makes use of square to compute
the sum of three numbers that have been squared.

.. codelens:: sumofsquares

    def square(x):
        y = x * x
        return y

    def sum_of_squares(x, y, z):
        a = square(x)
        b = square(y)
        c = square(z)

        return a + b + c

    a = -5
    b = 2
    c = 10
    result = sum_of_squares(a, b, c)
    print(result)


Even though this is a pretty simple idea, in practice this example
illustrates many very important Python concepts, including local and global
variables along with parameter passing.  Note that when you step through this
example, codelens bolds line 1 and line 5 as the functions are defined.  The
body of square is not executed until it is called from the ``sum_of_squares``
function for the first time on line 6.  Also notice that when ``square`` is
called there are two groups of local variables, one for ``square`` and one
for ``sum_of_squares``.  As you step through you will notice that ``x``, and ``y`` are local variables in both functions and may even have
different values.  This illustrates that even though they are named the same,
they are in fact, very different.

So far, it may not be clear why it is worth the trouble to create all of these
new functions. Actually, there are a lot of reasons, but this example
demonstrates two:

#. Creating a new function gives you an opportunity to name a group of
   statements. Functions can simplify a program by hiding a complex computation
   behind a single command. The function (including its name) can capture your
   mental chunking, or *abstraction*, of the problem.
#. Creating a new function can make a program smaller by eliminating repetitive
   code.
#. Sometimes you can write functions that allow you to solve a specific
   problem using a more general solution.

