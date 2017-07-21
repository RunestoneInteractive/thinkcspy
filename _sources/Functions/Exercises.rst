Exercises
---------

.. container:: full_width

    #.

        .. tabbed:: q1

            .. tab:: Question

                Use the ``draw_square`` function we wrote in this chapter to draw the image shown below. Assume each side is 20 units.

                (Hint: notice that the turtle has already moved away from the ending point of the last square when the program ends.)

                .. image:: Figures/five_squares.png

                .. activecode:: ex_5_1
                   :nocodelens:

                   import turtle

                   def draw_square(t, sz):
                       """Get turtle t to draw a square with sz side"""

                       for i in range(4):
                           t.forward(sz)
                           t.left(90)

                   def main():
                       wn = turtle.Screen()
                       wn.bgcolor("lightgreen")

                       alex = turtle.Turtle()
                       alex.color("pink")

                       draw_square(alex,20)

                       wn.exitonclick()

                   if __name__ == "__main__":
                       main()


            .. tab:: Answer

                .. activecode:: q1_answer
                   :nocodelens:

                   import turtle

                   def draw_square(t, sz):
                       """Make turtle t draw a square with side sz."""
                       for i in range(4):
                           t.forward(sz)
                           t.left(90)

                   def main():
                       wn = turtle.Screen()       # Set up the window and its attributes
                       wn.bgcolor("lightgreen")

                       alex = turtle.Turtle()     # create alex
                       alex.color('hotpink')
                       alex.pensize(3)

                       for i in range(5):
                           draw_square(alex, 20)   # Call the function to draw the square
                           alex.penup()
                           alex.forward(40)       # move alex to the starting position for the next square
                           alex.pendown()

                       wn.exitonclick()

                   if __name__ == "__main__":
                       main()

    #.  Write a program to draw this. Assume the innermost square is 20 units per side and each successive square is 20 units bigger, per side, than the one inside it.

        .. image:: Figures/nested_squares.png


        .. activecode:: ex_5_2


    #.

        .. tabbed:: q3

            .. tab:: Question

                Write a non-fruitful function ``draw_poly(t, sides, side_length)`` which makes a turtle draw a regular polygon. When called with ``draw_poly(tess, 8, 50)``, it will draw a shape like this:

                .. image:: Figures/regularpolygon.png

                .. activecode:: ex_5_3


            .. tab:: Answer

                .. activecode:: q3_answer

                    import turtle

                    def draw_poly(t, sides, side_length):
                        for i in range(sides):
                            t.forward(side_length)
                            t.left(360/sides)

                    def main():
                        wn = turtle.Screen()       # Set up the window and its attributes
                        wn.bgcolor("lightgreen")

                        tess = turtle.Turtle()
                        tess.color('hotpink')
                        tess.pensize(3)

                        draw_poly(tess, 8, 50)

                    if __name__ == "__main__":
                        main()

    #.

        .. tabbed:: q5

            .. tab:: Question

                The two spirals in this picture differ only by the turn angle. Draw both.

                *Note:* Because this program might receive a ``TimeLimitError`` we've added some code to our answer to make the turtle go faster (use its ``speed`` method) and to increase the time the program is allowed to run to 35 seconds. You can do the latter in your code using:

                .. sourcecode:: python

                    import sys
                    sys.setExecutionLimit(35000)

                .. image:: Figures/tess_spirals.png
                   :height: 240

                .. activecode:: ex_5_5

            .. tab:: Answer

                .. activecode:: q5_answer
                   :nocodelens:

                   import turtle
                   import sys

                   sys.setExecutionLimit(35000)

                   def draw_spiral(t, angle):
                       ''' takes a turtle, t, and an angle in degrees '''
                       length = 1
                       for i in range(84):
                           t.forward(length)
                           t.right(angle)
                           length = length + 2

                   def main():
                       wn = turtle.Screen()       # Set up the window and its attributes
                       wn.bgcolor("lightgreen")

                       guido = turtle.Turtle()    # create guido
                       guido.color('blue')
                       guido.speed(10)

                       ## draw the first spiral ##
                       # position guido
                       guido.penup()
                       guido.backward(110)
                       guido.pendown()

                       # draw the spiral using a 90 degree turn angle
                       draw_spiral(guido, 90)

                       ## draw the second spiral ##
                       # position guido
                       guido.penup()
                       guido.home()
                       guido.forward(90)
                       guido.pendown()

                       draw_spiral(guido, 89)

                   if __name__ == "__main__":
                       main()

    #.  Write a non-fruitful function ``draw_equi_triangle(turtle, size)`` which calls ``draw_poly`` from the question above to have its turtle draw an equilateral triangle.

        .. activecode:: ex_5_6


    #.

        .. tabbed:: q7

            .. tab:: Question

                Write a fruitful function ``sum_to(n)`` that returns the sum of all integer numbers up to and including ``n``.  So ``sum_to(10)`` would be ``1+2+3...+10`` which would return the value 55. Use the equation  (n * (n + 1)) / 2.

                .. activecode:: ex_5_7

                    def sum_to(n):
                        # your code here


            .. tab:: Answer

                .. activecode:: q7_answer

                    def sum_to(n):
                        result = (n * (n + 1)) / 2
                        return result

                    def main():
                        # Now lets see how well this works
                        t = sum_to(0)
                        print("The sum from 1 to 0 is",t)
                        t = sum_to(10)
                        print("The sum from 1 to 10 is",t)
                        t = sum_to(5)
                        print("The sum from 1 to 5 is",t)

                    if __name__ == "__main__":
                        main()

    #.

        .. tabbed:: q9

            .. tab:: Question

                Write a non-fruitful function to draw a five pointed star, where the length of each side is 100 units.

                .. image:: Figures/star.png

                .. activecode:: ex_5_9

            .. tab:: Answer

                .. activecode:: q9_answer
                   :nocodelens:

                   import turtle

                   def draw_star(t):
                       for i in range(5):
                           t.forward(100)
                           t.left(216)

                   def main():
                       wolfram = turtle.Turtle()
                       draw_star(wolfram)

                   if __name__ == "__main__":
                       main()

    #.  Extend your program above. Draw five stars, but between each, pick up the pen, move forward by 350 units, turn right by 144, put the pen down, and draw the next star. You'll get something like this (note that you will need to move to the left before drawing your first star in order to fit everything in the window):

        .. image:: Figures/five_stars.png

        What would it look like if you didn't pick up the pen?

        .. activecode:: ex_5_10


    #.

        .. tabbed:: q11

            .. tab:: Question

                Extend the star function to draw an ``n`` pointed star.  (Hint: ``n`` must be an odd number greater or equal to 3).

                .. activecode:: ex_5_11


            .. tab:: Answer

                .. activecode:: q11_answer
                   :nocodelens:

                   import turtle

                   def draw_star(t, n):
                       for i in range(n):
                           t.forward(100)
                           t.left(180 - 180/n)

                   def main():
                       sam = turtle.Turtle()
                       draw_star(sam, 7)

                   if __name__ == "__main__":
                       main()


    #.  Write a function called ``draw_sprite`` that will draw a sprite. The function will need parameters for the turtle, the number of legs, and the length of the legs. Invoke the function to create a sprite  with 15 legs of length 120.

        .. activecode:: ex_5_12


    #.

        .. tabbed:: q13

            .. tab:: Question

                Rewrite the function ``sum_to(n)`` that returns the sum of all integer numbers up to and including ``n``.   This time use the accumulator pattern.

                .. activecode:: ex_5_13

                    def sum_to(n):
                        # your code here


            .. tab:: Answer

                .. activecode:: q13_answer

                    def sum_to(n):
                        sum = 0
                        for i in range(1,n+1):
                            sum = sum + i
                        return sum

                    def main():
                        # Now lets see how well this works
                        t = sum_to(0)
                        print("The sum from 1 to 0 is",t)
                        t = sum_to(10)
                        print("The sum from 1 to 10 is",t)
                        t = sum_to(5)
                        print("The sum from 1 to 5 is",t)

                    if __name__ == "__main__":
                        main()

    #.

        .. tabbed:: q14

            .. tab:: Question

                Write a function called ``fancy_square`` that will draw a square with fancy corners (sprites on the corners).  You should implement and use the ``draw_sprite`` function from above.

                .. activecode:: ex_5_14

            .. tab:: Answer

                .. activecode:: q14_answer
                   :nocodelens:

                   import turtle

                   def draw_sprite(t, legs, leg_length):
                       angle = 360/legs
                       for i in range(legs):
                           t.forward(leg_length)
                           t.backward(leg_length)
                           t.left(angle)

                   def fancy_square(t, sz, lgs, lgl):
                       for i in range(4):
                           t.forward(sz)
                           draw_sprite(t, lgs, lgl)
                           t.left(90)

                   def main():
                       wn = turtle.Screen()
                       wn.bgcolor("lightgreen")

                       alex = turtle.Turtle()
                       fancy_square(alex, 100, 10, 15)

                       wn.exitonclick()

                   if __name__ == "__main__":
                       main()


Weekly Graded Assignment
========================

.. container:: full_width

    Write a function ``area_of_circle(r)`` which returns the area of a circle of radius ``r``

    As a refresher, the area of any circle is equal to the radius squared, multiplied by pi (where pi is 3.14159....).

    Don't forget to include the ``math`` module, where pi is defined.

    .. activecode:: ex_5_8

        # TODO: use def to define a function called area_of_circle which takes an argument called r

            # TODO implement your function to return the area of a circle whose radius is r


        # Below are some tests which can give you an indication that your code seems to be correct.

        # IMPORTANT: You should NOT include this part when you submit in Vocareum.
        # When you submit, only include the function above.
        from test import testEqual

        t = area_of_circle(0)
        testEqual(t, 0)
        t = area_of_circle(1)
        testEqual(t,math.pi)
        t = area_of_circle(100)
        testEqual(t, 31415.926535897932)
        t = area_of_circle(-1)
        testEqual(t, math.pi)
        t = area_of_circle(-5)
        testEqual(t, 25 * math.pi)
        t = area_of_circle(2.3)
        testEqual(t, 16.61902513749)
