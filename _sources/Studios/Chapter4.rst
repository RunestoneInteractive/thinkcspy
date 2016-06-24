:orphan:

..  Copyright (C) 2011  Brad Miller and David Ranum
    Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".


Studio: Turtle Racing
=====================

Pre-studio
----------

For the pre-studio, we wrote a program that allowed us to calculate how many pints of beer would be able to afford in London if we sold a certain quantity of flags. (The problem statement is a bit more complicated than that, so be sure to watch the video.)

.. raw:: html

    <div style="text-align:center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/xOmRXIdxwmk" frameborder="0" allowfullscreen></iframe></div>

.. activecode:: prestudio_4

    import turtle
    import random

    win = turtle.Screen()
    win.bgcolor("lightblue")

    # create 2 turtles
    zach = turtle.Turtle()
    jesse = turtle.Turtle()

    # speed them up!
    zach.speed(10)
    jesse.speed(10)

    jesse.color("turquoise")
    zach.color("orange")

    # make them walk randomly, loop variable represnts distance to travel forward
    for distance in range(0,50,2): # generates [0,2,4,6,8,10,12,...46,48]

        # create a random angle for each turtle
        zach_angle = random.randrange(0,181)
        jesse_angle = random.randrange(0,181)

        # turn each turtle in that random direction
        zach.left(zach_angle)
        jesse.left(jesse_angle)

        # move each turtle forward by distance
        zach.forward(distance)
        jesse.forward(distance)



Studio
------

Turtle Races
------------

In this studio we are going to work step by step through the problem of racing
turtles.  The idea is that we want to create two or more turtles and have
them race across the screen from left to right. The turtle that goes the
farthest is the winner.

There are several different, and equally plausible, solutions to this problem.
Let's look at what needs to be done, and then look at some of the options for
the solution.  To start, let's think about a solution to the simplest form
of the problem, a race between two turtles. We'll look at more complex races
later.

When you are faced with a problem like this in computer science it is
often a good idea to find a solution to a simple problem first and then
figure out how to make the solution more general.

Here is a possible sequence of steps that we will need to accomplish:

#. Import the modules we need

#. Create a screen

#. Create two turtles

#. Move the turtles to their starting positions

#. Send them moving across the screen

Here is the Python code for the first 4 steps above

.. activecode:: lab01_2
   :nocodelens:

   import turtle              # 1.  import the modules
   import random
   wn = turtle.Screen()       # 2.  Create a screen
   wn.bgcolor('lightblue')

   lance = turtle.Turtle()    # 3.  Create two turtles
   andy = turtle.Turtle()
   lance.color('red')
   andy.color('blue')
   lance.shape('turtle')
   andy.shape('turtle')

   andy.up()                  # 4.  Move the turtles to their starting point
   lance.up()
   andy.goto(-100,20)
   lance.goto(-100,-20)

   # your code goes here

   wn.exitonclick()


Now, you have several choices for how to fill in code for step 5. Here are
some possibilities to try.  Try coding each of the following in the box above
to see the different kinds of behavior.

* Use a single call to ``forward`` for each turtle, using a random number as
  the distance to move.

* Create a for loop, using a random number for the parameter passed to the
  range function.  Inside the for loop move one of the turtles forward by
  some number of units.

* Create a single for loop using something like 150 or 200 as the range
  parameter. Then inside the for loop move each turtle forward using a random
  number as the parameter to forward.


So, which of these programs is better?  Which of these programs is most
correct?  These are excellent questions. Program 1 is certainly the simplest,
but it isn't very satisfying as far as a race is concerned.  Each turtle
simply moves their distance on their turn.  That is not very satisfying as far
as a simulated race goes.  Program 2 ends up looking a lot like Program 1
when you run it.  Program 3 is probably the most 'realistic' assuming realism
is very important when we're talking about a simulated race of virtual
turtles.

You may be thinking why can't each turtle just move forward until they cross
some artificial finish line?  Good question!  We'll get to the answer to
this, and look at the program in a later lesson when we learn about something
called the ``while loop``.
