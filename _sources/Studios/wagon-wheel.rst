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
