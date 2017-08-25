..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: func-8-
   :start: 1

Program Development
-------------------

At this point, you should be able to look at complete functions and tell what
they do. Also, if you have been doing the exercises, you have written some
small functions. As you write larger functions, you might start to have more
difficulty, especially with runtime and semantic errors.

To deal with increasingly complex programs, we are going to suggest a technique
called **incremental development**. The goal of incremental development is to
avoid long debugging sessions by adding and testing only a small amount of code
at a time.

As an example, suppose you want to find the distance between two points, given
by the coordinates (x\ :sub:`1`\ , y\ :sub:`1`\ ) and
(x\ :sub:`2`\ , y\ :sub:`2`\ ).  By the Pythagorean theorem, the distance is:

.. image:: Figures/distance_formula.png
   :alt: Distance formula 

The first step is to consider what a ``distance`` function should look like in
Python. In other words, what are the inputs (parameters) and what is the output
(return value)?

In this case, the two points are the inputs, which we can represent using four
parameters. The return value is the distance, which is a floating-point value.

Already we can write an outline of the function that captures our thinking so far.

.. sourcecode:: python
    
    def distance(x1, y1, x2, y2):
        return 0.0

Obviously, this version of the function doesn't compute distances; it always
returns zero. But it is syntactically correct, and it will run, which means
that we can test it before we make it more complicated.

We import the test module to enable us to write a unit test for the function.



.. activecode:: ch06_distance1
    
    import test
    def distance(x1, y1, x2, y2):
        return 0.0

    test.testEqual(distance(1, 2, 1, 2), 0)

The ``testEqual`` function from the test module calls the distance function with sample inputs: (1,2, 1,2).
The first 1,2 are the coordinates of the first point and the second 1,2 are the coordinates of the second point.
What is the distance between these two points? Zero. ``testEqual`` compares what is returned by the distance function
and the 0 (the correct answer).

.. admonition:: Extend the program ...

   On line 6, write another unit test. Use (1,2, 4,6) as the parameters to the distance function. How far apart are these two points? Use that value (instead of 0) as the correct answer for this unit test.

   On line 7, write another unit test. Use (0,0, 1,1) as the parameters to the distance function. How far apart are these two points? Use that value as the correct answer for this unit test.

   The first test passes but the others fail since the distance function does not yet contain all the necessary steps.


**When testing a function, it is essential to know the right answer.**

For the second test the horizontal distance equals 3 and the vertical
distance equals 4; that way, the result is 5 (the hypotenuse of a 3-4-5
triangle). For the third test, we have a 1-1-sqrt(2) triangle.

At this point we have confirmed that the function is syntactically correct, and
we can start adding lines of code. After each incremental change, we test the
function again. If an error occurs at any point, we know where it must be --- in
the last line we added.

A logical first step in the computation is to find the differences
x\ :sub:`2`\ - x\ :sub:`1`\  and y\ :sub:`2`\ - y\ :sub:`1`\ .  We will store
those values in temporary variables named ``dx`` and ``dy``.

.. sourcecode:: python
    
    def distance(x1, y1, x2, y2):
        dx = x2 - x1
        dy = y2 - y1
        return 0.0


Next we compute the sum of squares of ``dx`` and ``dy``.

.. sourcecode:: python
    
    def distance(x1, y1, x2, y2):
        dx = x2 - x1
        dy = y2 - y1
        dsquared = dx**2 + dy**2
        return 0.0

Again, we could run the program at this stage and check the value of ``dsquared`` (which
should be 25).

Finally, using the fractional exponent ``0.5`` to find the square root,
we compute and return the result.

.. index:: testing, unit test

.. activecode:: ch06_distancefinal
    
    import test
    def distance(x1, y1, x2, y2):
        dx = x2 - x1
        dy = y2 - y1
        dsquared = dx**2 + dy**2
        result = dsquared**0.5
        return result

    test.testEqual(distance(1,2, 1,2), 0)
    test.testEqual(distance(1,2, 4,6), 5)
    test.testEqual(distance(0,0, 1,1), 1.41)

.. admonition:: Fix the error ...

   Two of the tests pass but the last one fails. Is there still an error in the function?

   Frequently we discover errors in the functions that we are writing. However, it is possible that there is an error in a test. Here the error is in the precision of the correct answer.

   The third test fails because by default testEqual checks 5 digits to the right of the decimal point.

   - Change ``1.41`` to ``1.41421`` and run. The test will pass.
   
   There are circumstances where 2 digits to the right of the decimal point is sufficiently precise.

   - Copy line 11 on to line 12. On line 12, change ``1.41421`` to ``1.41``. Run. The test fails.

   - Type ``, 2`` after 1.41. (The 2 represents the precision of the test -- how many digits to the right of the decimal that must be correct.) Run.

   Now all four the tests pass! Wonderful! However, you may still need to perform additional tests.



When you start out, you might add only a line or two of code at a time. As you
gain more experience, you might find yourself writing and debugging bigger
conceptual chunks. As you improve your programming skills you should find yourself
managing bigger and bigger chunks: this is very similar to the way we learned to read
letters, syllables, words, phrases, sentences, paragraphs, etc., or the way we learn
to chunk music --- from indvidual notes to chords, bars, phrases, and so on.  

The key aspects of the process are:

#. Make sure you know what you are trying to accomplish. Then you can write appropriate unit tests.
#. Start with a working skeleton program and make small incremental changes. At any
   point, if there is an error, you will know exactly where it is.
#. Use temporary variables to hold intermediate values so that you can easily inspect
   and check them.
#. Once the program is working, you might want to consolidate multiple statements 
   into compound expressions,
   but only do this if it does not make the program more difficult to read.

   

