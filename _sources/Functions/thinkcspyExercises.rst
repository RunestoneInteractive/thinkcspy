..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".


Exercises
---------

.. question:: functions_ex_1

   :number: 1

   .. tabbed:: q1

        .. tab:: Question

            .. actex:: ex_5_1

                Use the drawsquare function we wrote in this chapter in a program to draw
                the image shown below.
                Assume each side is 20 units.
                (Hint: notice that the turtle has already moved away from the ending point of the last
                square when the program ends.)

                .. image:: Figures/five_squares.png
                ~~~~

                import turtle

                def drawSquare(t, sz):
                    """Get turtle t to draw a square of sz side"""

                    for i in range(4):
                        t.forward(sz)
                        t.left(90)

                wn = turtle.Screen()
                wn.bgcolor("lightgreen")

                alex = turtle.Turtle()
                alex.color("pink")

                drawSquare(alex,20)

                wn.exitonclick()


        .. tab:: Answer

            .. activecode:: q1_answer

                import turtle

                def drawSquare(t, sz):
                    """Make turtle t draw a square of with side sz."""
                    for i in range(4):
                        t.forward(sz)
                        t.left(90)

                wn = turtle.Screen()       # Set up the window and its attributes
                wn.bgcolor("lightgreen")

                alex = turtle.Turtle()     # create alex
                alex.color('hotpink')
                alex.pensize(3)

                for i in range(5):
                    drawSquare(alex, 20)   # Call the function to draw the square
                    alex.penup()
                    alex.forward(40)       # move alex to the starting position for the next square
                    alex.pendown()

                wn.exitonclick()

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: a2ac86a8d0524fc6830aefb785199048

.. question:: functions_ex_2

    .. actex:: ex_5_2

       Write a program to draw this. Assume the innermost square is 20 units per side,
       and each successive square is 20 units bigger, per side, than the one inside it.

       .. image:: Figures/nested_squares.png
       ~~~~


.. question:: functions_ex_3

   .. tabbed:: q3

        .. tab:: Question

            .. actex:: ex_5_3

               Write a non-fruitful function ``drawPoly(someturtle, somesides, somesize)`` which makes a turtle
               draw a regular polygon.
               When called with ``drawPoly(tess, 8, 50)``, it will draw a shape like this:

               .. image:: Figures/regularpolygon.png
               ~~~~


        .. tab:: Answer

            .. activecode:: q3_answer

                import turtle

                def drawPoly(t, num_sides, side_length):
                    for i in range(num_sides):
                        t.forward(side_length)
                        t.left(360/num_sides)

                wn = turtle.Screen()       # Set up the window and its attributes
                wn.bgcolor("lightgreen")

                tess = turtle.Turtle()
                tess.color('hotpink')
                tess.pensize(3)

                drawPoly(tess, 8, 50)

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: ba2f11265c524c7581bf7cf25d23bf3a

.. question:: functions_ex_4

   .. actex:: ex_5_4

      Draw this pretty pattern.

      .. image:: Figures/tess08.png
      ~~~~

.. question:: functions_ex_5

   .. tabbed:: q5

        .. tab:: Question

            .. actex:: ex_5_5

               The two spirals in this picture differ only by the turn angle.  Draw both.

               .. image:: Figures/tess_spirals.png
                  :height: 240
               ~~~~

        .. tab:: Answer

            .. activecode:: q5_answer

                import turtle

                def drawSpiral(t, angle):
                    ''' takes a turtle, t, and an angle in degrees '''
                    length = 1
                    for i in range(84):
                        t.forward(length)
                        t.right(angle)
                        length = length + 2


                wn = turtle.Screen()       # Set up the window and its attributes
                wn.bgcolor("lightgreen")

                guido = turtle.Turtle()    # create guido
                guido.color('blue')

                ## draw the first spiral ##
                # position guido
                guido.penup()
                guido.backward(110)
                guido.pendown()

                # draw the spiral using a 90 degree turn angle
                drawSpiral(guido, 90)


                ## draw the second spiral ##
                # position guido
                guido.home()
                guido.penup()
                guido.forward(90)
                guido.pendown()

                drawSpiral(guido, 89)


        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: c587119991344db988f8fb37c8c9a31e

.. question:: functions_ex_6

   .. actex:: ex_5_6

      Write a non-fruitful function ``drawEquitriangle(someturtle, somesize)`` which calls ``drawPoly`` from the
      previous question to have its turtle draw a equilateral triangle.
      ~~~~


.. question:: functions_ex_7

   .. tabbed:: q7

        .. tab:: Question

            .. actex:: ex_5_7

               Write a fruitful function ``sumTo(n)`` that returns the sum of all integer numbers up to and
               including `n`.   So ``sumTo(10)`` would be ``1+2+3...+10`` which would return the value 55.  Use the
               equation  (n * (n + 1)) / 2.
               ~~~~

                def sumTo(n):
                    # your code here

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertAlmostEqual(sumTo(15),120.0,0,"Tested sumTo on input 15")
                        self.assertAlmostEqual(sumTo(0),0.0,0,"Tested sumTo on input 0")
                        self.assertAlmostEqual(sumTo(25),325.0,0,"Tested sumTo on input 25")
                        self.assertAlmostEqual(sumTo(7),28.0,0,"Tested sumTo on input 7")

                myTests().main()


        .. tab:: Answer

            .. activecode:: q7_answer

                from test import testEqual

                def sumTo(n):
                    result = (n * (n + 1)) / 2
                    return result

                # Now lets see how well this works
                t = sumTo(0)
                print("The sum from 1 to 0 is",t)
                t = sumTo(10)
                print("The sum from 1 to 10 is",t)
                t = sumTo(5)
                print("The sum from 1 to 5 is",t)

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: d6ba37a51d09845f39c96d4d4ef1d6f45

.. question:: functions_ex_8

    .. actex:: ex_5_8

       Write a function `areaOfCircle(r)` which returns the area of a circle of radius `r`.  Make sure you use the math module in your solution.
       ~~~~

        def areaOfCircle(r):
            # your code here

        ====
        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertAlmostEqual(areaOfCircle(5.0),78.53981633974483,5,"Tested input: areaOfCircle(5.0)")
                self.assertEqual(areaOfCircle(5.0),78.53981633974483,"Tested input: areaOfCirlce(5.0)")
                self.assertEqual(areaOfCircle(0),0.0,"Tested input: areaOfCirlce(0)")
                self.assertAlmostEqual(areaOfCircle(31415.926535897932),3100627668.0299816,5,"Tested input: areaOfCirlce(31415.926535897932)")


        myTests().main()


.. question:: functions_ex_9

   .. tabbed:: q9

        .. tab:: Question

            .. actex:: ex_5_9

               Write a non-fruitful function to draw a five pointed star, where the length of each side is 100 units.

               .. image:: Figures/star.png
               ~~~~

        .. tab:: Answer

            .. activecode:: q9_answer

                import turtle

                def drawFivePointStar(t):
                    for i in range(5):
                        t.forward(100)
                        t.left(216)

                wolfram = turtle.Turtle()
                drawFivePointStar(wolfram)

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: e757873187bb4581bffecdad449b5f61

.. question:: functions_ex_10

   .. actex:: ex_5_10

      Extend your program above.  Draw five stars, but between each, pick up the pen,
      move forward by 350 units, turn right by 144, put the pen down, and draw the next star.
      You'll get something like this (note that you will need to move to the left before drawing your first star in order to fit everything in the window):

      .. image:: Figures/five_stars.png

      What would it look like if you didn't pick up the pen?
      ~~~~


.. question:: functions_ex_11

   .. tabbed:: q11

        .. tab:: Question

            .. actex:: ex_5_11

               Extend the star function to draw an n pointed star.  (Hint: n must be an odd number greater or
               equal to 3).
               ~~~~


        .. tab:: Answer

            .. activecode:: q11_answer

                import turtle

                def drawStar(t, n):
                    for i in range(n):
                        t.forward(100)
                        t.left(180 - 180/n)

                stroustrup = turtle.Turtle()
                drawStar(stroustrup, 7)

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: f2f8ff1b301e4d99bd4ac52e68c8c1ed

.. question:: functions_ex_12

   .. actex:: ex_5_12

      Write a function called drawSprite that will draw a sprite.  The function will need parameters for
      the turtle, the number of legs, and the length of the legs.  Invoke the function to create a sprite
      with 15 legs of length 120.
      ~~~~


.. question:: functions_ex_13

   .. tabbed:: q13

        .. tab:: Question

            .. actex:: ex_5_13

               Rewrite the function ``sumTo(n)`` that returns the sum of all integer numbers up to and
               including `n`.   This time use the accumulator pattern.
               ~~~~

                def sumTo(n):
                    # your code here

                ====
                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):
                        self.assertEqual(sumTo(15),120,"Tested sumTo on input 15")
                        self.assertEqual(sumTo(0),0,"Tested sumTo on input 0")
                        self.assertEqual(sumTo(25),325,"Tested sumTo on input 25")
                        self.assertEqual(sumTo(7),28,"Tested sumTo on input 7")

                myTests().main()


        .. tab:: Answer

            .. activecode:: q13_answer

                def sumTo(n):
                    sum = 0
                    for i in range(1,n+1):
                        sum = sum + i
                    return sum

                # Now lets see how well this works
                t = sumTo(0)
                print("The sum from 1 to 0 is",t)
                t = sumTo(10)
                print("The sum from 1 to 10 is",t)
                t = sumTo(5)
                print("The sum from 1 to 5 is",t)

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: eda665389fda49a584b128cc30515595

.. question:: functions_ex_14

    .. actex:: ex_5_14

       Write a function called ``mySqrt`` that will approximate the square root of a number, call it n, by using
       Newton's algorithm.
       Newton's approach is an iterative guessing algorithm where the initial guess is n/2 and each subsequent guess
       is computed using   the formula:  newguess = (1/2) * (oldguess + (n/oldguess)).
       ~~~~

        def mySqrt(n):
            # your code here

        ====
        from unittest.gui import TestCaseGui

        class myTests(TestCaseGui):

            def testOne(self):
                self.assertAlmostEqual(mySqrt(4.0),2.0,0,"Tested mySqrt on input 4.0")
                self.assertAlmostEqual(mySqrt(9.0),3.0,4,"Tested accuracy of mySqrt on input 3.0")
                self.assertAlmostEqual(mySqrt(36.0),6.0,5,"Tested accuracy of mySqrt on input 6.0")
                self.assertAlmostEqual(mySqrt(100.0),10.0,4,"Tested accuracy of mySqrt on input 10.0. Try iterating more times.")

        myTests().main()


.. question:: functions_ex_15

   .. tabbed:: q15

        .. tab:: Question

            .. actex:: ex_5_15

               Write a function called ``myPi`` that will return an approximation of PI (3.14159...).  Use the `Leibniz <http://en.wikipedia.org/wiki/Leibniz_formula_for_%CF%80>`_ approximation.
               ~~~~

                def myPi(iters):
                    # Calculate an approximation of PI using the Leibniz
                    # approximation with iters number of iterations

                    # your code here


        .. tab:: Answer

            .. activecode:: q15_answer

                def myPi(iters):
                    ''' Calculate an approximation of PI using the Leibniz
                    approximation with iters number of iterations '''
                    pi = 0
                    sign = 1
                    denominator = 1
                    for i in range(iters):
                        pi = pi + (sign/denominator)
                        sign = sign * -1  # alternate positive and negative
                        denominator = denominator + 2

                    pi = pi * 4.0
                    return pi

                pi_approx = myPi(10000)
                print(pi_approx)

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: b699e4b7bad44db6bd788c795c124b23

.. question:: functions_ex_16

    .. actex:: ex_5_16

       Write a function called `myPi` that will return an approximation of PI (3.14159...).  Use the `Madhava <http://en.wikipedia.org/wiki/Madhava_of_Sangamagrama>`_ approximation.
       ~~~~

        def myPi(iters):
            # Calculate an approximation of PI using the Madhava
            # approximation with iters number of iterations

            #your code here

.. question:: functions_ex_17

   .. tabbed:: q17

        .. tab:: Question

            .. actex:: ex_5_17

               Write a function called `fancySquare` that will draw a square with fancy corners (sprites on the corners).  You should
               implement and use the `drawSprite` function from above.  For an even more interesting look, how about adding small
               triangles to the ends of the sprite legs.
               ~~~~

        .. tab:: Answer

            .. activecode:: q17_answer

                import turtle

                def drawSprite(t, numlegs, leglength):
                   angle = 360/numlegs
                   for i in range(numlegs):
                      t.forward(leglength)
                      t.backward(leglength)
                      t.left(angle)

                def drawFancySquare(t, sz, lgs, lgl):
                   for i in range(4):
                       t.forward(sz)
                       drawSprite(t, lgs, lgl)
                       t.left(90)

                wn = turtle.Screen()
                wn.bgcolor("lightgreen")

                alex = turtle.Turtle()
                drawFancySquare(alex, 100, 10, 15)

                wn.exitonclick()

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: db5d8808bf5749579718bdd2088b539f

.. question:: functions_ex_18

    .. actex:: ex_5_18

       There was a whole program in :ref:`bar_chart` to create a bar chart with specific data.  Creating a bar chart is a useful idea in general.  Write a non-fruitful function called barChart, that takes the numeric list of data as a parameter, and draws the bar chart.  Write a full program calling this function.
       The current version of the ``drawBar`` function unfortuately draws the top of the bar through the bottom of the label.  A nice elaboration is to make the label appear completely above the top line.  To keep the spacing consistent you might pass an extra parameter to ``drawBar`` for the distance to move up.  For the ``barChart`` function make that parameter be some small fraction of ``maxheight+border``.  The fill action makes this modification particularly tricky:  You will want to move past the top of the bar and write before or after drawing and filling the bar.
       ~~~~

        import turtle

        def drawBar(t, height):
            """ Get turtle t to draw one bar, of height. """
            t.begin_fill()               # start filling this shape
            t.left(90)
            t.forward(height)
            t.write(str(height))
            t.right(90)
            t.forward(40)
            t.right(90)
            t.forward(height)
            t.left(90)
            t.end_fill()                 # stop filling this shape



        xs = [48, 117, 200, 240, 160, 260, 220]  # here is the data
        maxheight = max(xs)
        numbars = len(xs)
        border = 10

        wn = turtle.Screen()             # Set up the window and its attributes
        wn.setworldcoordinates(0-border, 0-border, 40*numbars+border, maxheight+border)
        wn.bgcolor("lightgreen")

        tess = turtle.Turtle()           # create tess and set some attributes
        tess.color("blue")
        tess.fillcolor("red")
        tess.pensize(3)



        for a in xs:
            drawBar(tess, a)

        wn.exitonclick()



