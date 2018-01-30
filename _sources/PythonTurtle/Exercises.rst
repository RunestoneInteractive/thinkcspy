..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell. Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

Exercises
---------

.. container:: full_width

    #.

        .. tabbed:: q1

            .. tab:: Question

               Write a program that prints ``We like Python's turtles!`` 1000 times.

               Now, update that program to prompt the user for an integer and then print the same message the given number of times.

               .. activecode:: ex_3_1

            .. tab:: Answer

                .. activecode::  q1_answer
                    :nocanvas:

                    num_messages = int(input("Number of messages to print"))

                    for i in range(num_messages):
                        print("We like Python's turtles!")



    #. Write a program that prints out the lyrics to the song "99 Bottles of Beer on the Wall"

       .. activecode:: ex_3_2


    #. Write a program that prints even integers from 0 to 50.


       .. activecode:: ex_3_evens



    #.

        .. tabbed:: q3

            .. tab:: Question

               Write a program that uses a for loop to print
                 |  ``One of the months of the year is January``
                 |  ``One of the months of the year is February``
                 |  ``One of the months of the year is March``
                 |  etc ...

               .. activecode:: ex_3_3

            .. tab:: Answer

                .. activecode:: q3_answer


                    for month in ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December']:
                        print("One of the months of the year is", month)


    #.

        .. tabbed:: q5

            .. tab:: Question

               Use ``for`` loops to make a turtle draw these regular polygons
               (regular means all sides the same lengths, all angles the same):

               * An equilateral triangle
               * A square
               * A hexagon (six sides)
               * An octagon (eight sides)

               .. activecode:: ex_3_5
                  :nocodelens:

            .. tab:: Answer

                .. sourcecode:: python

                    # draw an equilateral triangle
                    import turtle

                    wn = turtle.Screen()
                    norvig = turtle.Turtle()

                    for i in range(3):
                        norvig.forward(100)

                        # the angle of each vertice of a regular polygon
                        # is 360 divided by the number of sides
                        norvig.left(360/3)

                    wn.exitonclick()

                .. sourcecode:: python

                    # draw a square
                    import turtle

                    wn = turtle.Screen()
                    kurzweil = turtle.Turtle()

                    for i in range(4):
                        kurzweil.forward(100)
                        kurzweil.left(360/4)

                    wn.exitonclick()

                .. sourcecode:: python

                    # draw a hexagon
                    import turtle

                    wn = turtle.Screen()
                    dijkstra = turtle.Turtle()

                    for i in range(6):
                        dijkstra.forward(100)
                        dijkstra.left(360/6)

                    wn.exitonclick()

                .. sourcecode:: python

                    # draw an octogon
                    import turtle

                    wn = turtle.Screen()
                    knuth = turtle.Turtle()

                    for i in range(8):
                        knuth.forward(75)
                        knuth.left(360/8)

                    wn.exitonclick()



    #.  Write a program that asks the user for the number of sides, the length of the side, the color, and the fill color of a
        regular polygon.



        .. activecode:: ex_3_6
           :nocodelens:


    #.
        .. tabbed:: q7

           .. tab:: Question

                A drunk pirate makes a random turn and then takes 100 steps forward, makes another random turn, takes another 100 steps, turns another random amount, etc. A social science student records the angle of each turn before the next 100 steps are taken. Her experimental data is ``160, -43, 270, -97, -43, 200, -940, 17, -86``. (Positive angles are counter-clockwise.)  Use a turtle to draw the path taken by our drunk friend.

                .. activecode:: ex_3_7
                   :nocodelens:

           .. tab:: Answer

               .. activecode:: q7_answer
                  :nocodelens:

                  import turtle

                  wn = turtle.Screen()
                  lovelace = turtle.Turtle()

                  # move the turtle forward a little so that the whole path fits on the screen
                  lovelace.penup()
                  lovelace.forward(60)

                  # now draw the drunk pirate's path
                  lovelace.pendown()
                  for angle in [160, -43, 270, -97, -43, 200, -940, 17, -86]:

                      # we use .left() so that positive angles are counter-clockwise
                      # and negative angles are clockwise
                      lovelace.left(angle)
                      lovelace.forward(100)

                  wn.exitonclick()


    #. On a piece of scratch paper, trace the the path of the turtle in the following program. When you are done, press ``run``
       and check your answer.

       .. activecode:: ex_3_8
          :nocodelens:

          import turtle
          wn = turtle.Screen()
          tess = turtle.Turtle()
          tess.speed(5)
          tess.right(90)
          tess.left(3600)
          tess.right(-90)
          tess.left(3600)
          tess.forward(-100)


    #.

        .. tabbed:: q9

            .. tab:: Question

               Write a program to draw a shape like this:

               .. image:: Figures/star.png

               .. activecode:: ex_3_9
                  :nocodelens:

            .. tab:: Answer

                .. activecode:: q9_answer
                   :nocodelens:

                   import turtle

                   turing = turtle.Turtle()

                   for i in range(5):
                       turing.forward(110)
                       turing.left(216)


    #. Write a program to draw a face of a clock that looks something like this:

       .. image:: Figures/tess_clock1.png

       .. activecode:: ex_3_10
          :nocodelens:

    #.

        .. tabbed:: q11

            .. tab:: Question

               Write a program to draw some kind of picture. Be creative and experiment
               with the turtle methods provided in :ref:`turtle_methods`.

               .. activecode:: ex_3_11
                  :nocodelens:

            .. tab:: Answer

                .. activecode:: q11_answer
                   :nocodelens:

                   import turtle

                   tanenbaum = turtle.Turtle()
                   tanenbaum.hideturtle()
                   tanenbaum.speed(20)

                   for i in range(350):
                       tanenbaum.forward(i)
                       tanenbaum.right(98)


    #. Create a turtle and assign it to a variable. When you print its type, what do you get?

       .. activecode:: ex_3_12
          :nocodelens:

    #.

        .. tabbed:: q13

            .. tab:: Question

                A sprite is a simple spider shaped thing with n legs coming out from a center
                point. The angle between each leg is 360 / n degrees.

                Write a program to draw a sprite where the number of legs is provided by the user.

                .. activecode:: ex_3_13
                   :nocodelens:

            .. tab:: Answer

                .. activecode:: q13_answer
                   :nocodelens:

                   import turtle

                   wn = turtle.Screen()

                   babbage = turtle.Turtle()
                   babbage.shape("triangle")

                   n = int(input("How many legs should this sprite have? "))
                   angle = 360 / n

                   for i in range(n):
                       # draw the leg
                       babbage.right(angle)
                       babbage.forward(65)
                       babbage.stamp()

                       # go back to the middle and turn back around
                       babbage.right(180)
                       babbage.forward(65)
                       babbage.right(180)

                   babbage.shape("circle")

                   wn.exitonclick()


    #.

        .. tabbed:: q14

            .. tab:: Question

               Use a ``for`` statement to print 10 random numbers.

               .. activecode:: ex_3_14

            .. tab:: Answer

                .. activecode:: q14_answer
                  :nocodelens:

                  import random

                  for i in range(10):
                      num = random.randrange(1, 200)
                      print(num)


    #.

        Repeat the above exercise but this time print 10 random numbers between 25 and 35.

        .. activecode:: ex_mod_2

    #.

        .. tabbed:: q16

            .. tab:: Question

               The **Pythagorean Theorem** tells us that the length of the hypotenuse of a right triangle is related to the lengths of the other two sides. Look through the ``math`` module and see if you can find a function that will compute this relationship for you. Once you find it, write a short program to try it out.

                       .. activecode:: ex_3_16

            .. tab:: Answer

                .. activecode:: q16_answer

                   import math

                   side1 = 3
                   side2 = 4
                   hypotenuse = math.hypot(side1,side2)
                   print(hypotenuse)


    #.  Search on the internet for a way to calculate an approximation for **pi**.  There are many that use simple arithmetic. Write a program to compute the approximation and then print that value as well as the value of ``math.pi`` from the math module.

        .. activecode:: ex_mod_4



Weekly Graded Assignment
========================

.. container:: full_width

    Assume you have a list of numbers ``nums = [12, 10, 32, 3, 66, 17, 42, 99, 20]``

    a. Write a loop that prints each of the numbers on a new line, like this: ::

        12
        10
        ...etc


    b. Write a second loop that prints each number and its square on a new line, precisely like this: ::

        The square of 12 is 144
        The square of 10 is 100
        ...etc

    .. activecode:: ex_3_4

        nums = [12, 10, 32, 3, 66, 17, 42, 99, 20]
