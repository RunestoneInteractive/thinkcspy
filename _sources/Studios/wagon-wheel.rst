Wagon Wheel
===========

*Studios are in-class activities to give you hands-on practice with new concepts. The first half is the Walkthrough, an instructor-led programming problem. The second half is for you to work on individually or in pairs in class.*

*These problems are not graded, and you are not obligated to finish them. Get as far as you can while in class, and use them as an opportunity to play with and solidify new concepts.*

Walkthrough
-----------

For the walkthrough, we will write a program that uses functions to draw a line star with a chosen number of lines.

.. activecode:: wagon_wheel_walkthrough

    import turtle

    def draw_line(length, angle):
        mike = turtle.Turtle()
        mike.left(angle)
        mike.forward(length / 2)
        mike.forward(-length)
        mike.forward(length / 2)

    def star(nlines):
        for angle in range(0, 180, int(180/nlines)):
            draw_line(200, angle)

    star(10)

Studio
------

Draw this pretty pattern.

.. image:: Figures/tess08.png


*Hint:* Think about the repeating element that makes up this image. It probably looks a lot like what you'd draw on the sidewalk if you wanted to play foursquare.

.. image:: Figures/foursquare.png

.. activecode:: wagon_wheel_studio

Challenges
----------

*Modify the ``square`` function given to you in section 5.4 of the textbook. Modify this function so that instead of computing the square, it can compute any positive integer exponent that is given to the function.

*Use your modified function from the previous problem to create a second function that can compute the volume of a sphere. Your ``sphereVol(r)`` function should take in a positive value for r and return the volume of a sphere with radius r which is given by the formula: 4/3 * pi * r^3.

*The fibonacci sequence is given as:

0, 1, 1, 2, 3, 5, 8, ...

Notice that each number in the series is simply the sum of the previous two numbers of the series. Write a function called ``fib(n)`` that takes in an integer ``n`` which is greater than 2 and returns the ``nth`` fibonacci number. For example ``fib(4)`` would be 3, ``fib(6)`` would be 8 etc.

Note that it is tricky to compute ``fib(0) = 0`` and ``fib(1) = 1`` with the concepts we have currently covered. If you have done the prep work for chapter 6, however, you should be able to update your function to cover those two values.

Finally, investigate the following question: what is the largest value of n that returns the correct fibonacci number? Why does this function stop working after that point?
