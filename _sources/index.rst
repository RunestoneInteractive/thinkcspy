Think Python - LaunchCode Edition
=============================================

Welcome to LaunchCode's *Think Python* course!

This course is built around an interactive e-textbook hosted here on this website. You will do most of your learning and working directly inside the book.

* :ref:`t_o_c`


.. activecode:: welcome
    :above:
    :autorun:
    :hidecode:
    :nocodelens:

    __author__ = "Jack Burns"
    __version__ = "1.0"

    # import lines
    import turtle
    import random

    #final variables
    PXCORD = 58.4743409445
    NXCORD = -58.4743409445
    YCORD = -33.7390488074
    PANGLE = 17
    NANGLE = -17
    PCURVE = 0.8
    NCURVE = -0.8
    RANGE = 62
    DIST = 2.3
    COLOR = 'white'
    BGCOLOR = (72, 61, 139)
    INIT_LENGTH = 200
    CIRCLE_CORDS = (10.66, -30)
    RADIUS = 19

    # main def
    def main():

        #print the message
        print_message()

        # make the turtle screen
        wn = turtle.Screen()
        wn.setup(575, 800)

        #change the background color
        wn.bgcolor(BGCOLOR)

        # create a new turtle object
        boxy = turtle.Turtle()
        boxy.speed(8)

        # new turtle for draw init
        nt1 = turtle.Turtle()
        nt1.speed(10)

        # new turtle for the flame
        flame = turtle.Turtle()
        flame.speed(10)

        # call the draw_init method
        draw_init(nt1)

        # call the draw_flame method
        draw_flame(flame)

        # call the second main method
        main2(wn, boxy)

        # this is for testing purposes, will be taken out in live version
        wn.exitonclick()

    #draws the porthole window
    def draw_circle(turtle):

        #make the fill and change the starting position of the turtle
        turtle.penup()
        turtle.setposition(CIRCLE_CORDS)
        turtle.pendown()

        turtle.begin_fill()
        turtle.fillcolor('yellow')

        #draw the circle
        turtle.circle(RADIUS)
        turtle.end_fill()


    # draw the curve on the top of the rocket
    def draw_curve(turtle, angle, dist):

        #create a loop for the curve
        for i in range(RANGE):

            turtle.forward(dist)
            turtle.right(angle)

    # draw_init draw the initial outline
    def draw_init(nt1):

        nt1.pencolor(COLOR)
        nt1.width(12)
        nt1.penup()
        nt1.setposition(0, -225)
        nt1.setheading(90)
        nt1.pendown()

        # begin drawing
        nt1.right(PANGLE)
        nt1.forward(INIT_LENGTH)

        # print the cords for testing
        # print((str)(nt1.xcor()) + ", " + (str)(nt1.ycor()))

        #draw the right fin
        nt1.setheading(0)
        nt1.right(55)
        nt1.forward(45)
        nt1.right(55)
        nt1.forward(80)
        nt1.right(130)
        nt1.forward(40)

        nt1.penup()
        nt1.setposition(PXCORD, YCORD)
        nt1.setheading(90)
        nt1.pendown()
        draw_curve(nt1, NCURVE, DIST)

        # draw the other half of the flame
        nt1.penup()
        nt1.setposition(0, -225)
        nt1.setheading(90)
        nt1.pendown()

        # begin drawing
        nt1.right(NANGLE)
        nt1.forward(INIT_LENGTH)

        # print the cords for testing
        # print((str)(nt1.xcor()) + ", " + (str)(nt1.ycor()))

        #draw the left fin
        nt1.setheading(180)
        nt1.left(55)
        nt1.forward(45)
        nt1.left(55)
        nt1.forward(80)
        nt1.left(130)
        nt1.forward(40)

        # draw the left curve
        nt1.penup()
        nt1.setposition(NXCORD, YCORD)
        nt1.setheading(90)
        nt1.pendown()

        #draw the curves
        draw_curve(nt1, PCURVE, DIST)

        #draw the circle
        draw_circle(nt1)

        nt1.hideturtle()



    # draw_flame
    def draw_flame(flame):

        # specify color and width
        flame.pencolor(COLOR)
        flame.width(12)

        # set the position
        flame.penup()
        flame.setposition(-35, -115)
        flame.pendown()

        # begin the fill and set the fill color
        flame.begin_fill()
        flame.fillcolor(COLOR)

        flame.forward(65)

        flame.width(1)
        flame.setheading(270)
        flame.penup()
        flame.setposition(15, -115)
        flame.pendown()

        # start drawing half of the flame
        flame.right(17.5)
        flame.forward(50)

        flame.penup()
        flame.setposition(-15, -115)
        flame.setheading(270)
        flame.pendown()
        flame.end_fill()

        # start drawing half of the flame
        flame.right(-17.5)
        flame.forward(50)
        flame.penup()

        flame.hideturtle()

    def main2(tscreen, boxy):

        #pick the starting position for boxy
        boxy.penup()
        boxy.setposition(-150, 275)
        boxy.pendown()

        # set the pen colors
        boxy.color('yellow', (238, 232, 170))
        boxy.begin_fill()

        #loop the same drawing all the way around
        for i in range(180 + 1):

            #shape of the line
            boxy.forward(50)
            boxy.right(30)
            boxy.forward(20)
            boxy.left(60)
            boxy.forward(50)
            boxy.right(30)

            #back to the center
            boxy.penup()
            boxy.setposition(-150, 275)
            boxy.pendown()

            #shift angle to the right and throw a tracer to slow the process down
            boxy.right(2)
            tscreen.tracer(25,0)

        #fills boxy
        boxy.end_fill()

        #create a new turtle
        nt = turtle.Turtle()
        nt.hideturtle()
        nt.speed(5)

        #draw some stars
        draw_star(nt, random.randrange(8, 20), (random.randrange(256), random.randrange(256), random.randrange(256)), 100, 200)
        draw_star(nt, random.randrange(8, 20), (random.randrange(256), random.randrange(256), random.randrange(256)), 175, 300)
        draw_star(nt, random.randrange(8, 20), (random.randrange(256), random.randrange(256), random.randrange(256)), -125, 100)
        draw_star(nt, random.randrange(8, 20), (random.randrange(256), random.randrange(256), random.randrange(256)), -200, -100)
        draw_star(nt, random.randrange(8, 20), (random.randrange(256), random.randrange(256), random.randrange(256)), -180, -175)
        draw_star(nt, random.randrange(8, 20), (random.randrange(256), random.randrange(256), random.randrange(256)), -210, -300)
        draw_star(nt, random.randrange(8, 20), (random.randrange(256), random.randrange(256), random.randrange(256)), 150, -200)
        draw_star(nt, random.randrange(8, 20), (random.randrange(256), random.randrange(256), random.randrange(256)), 0, -325)
        draw_star(nt, random.randrange(8, 20), (random.randrange(256), random.randrange(256), random.randrange(256)), 225, -325)
        draw_star(nt, random.randrange(8, 20), (random.randrange(256), random.randrange(256), random.randrange(256)), 235, 50)
        draw_star(nt, random.randrange(8, 20), (random.randrange(256), random.randrange(256), random.randrange(256)), -200, 50)
        draw_star(nt, random.randrange(8, 20), (random.randrange(256), random.randrange(256), random.randrange(256)), 250, -150)

        # change the color for text
        boxy.pencolor(255, 215, 0)
        boxy.hideturtle()

    #draw_star method
    def draw_star(turtle, size, color, xcoord, ycoord):

        #pick up the pen and place it
        turtle.penup()
        turtle.setposition(xcoord, ycoord)
        turtle.pendown()

        #start the drawing
        angle = 120
        turtle.fillcolor(color)
        turtle.begin_fill()

        for side in range(5):
            turtle.forward(size)
            turtle.right(angle)
            turtle.forward(size)
            turtle.right(72 - angle)

        turtle.end_fill()

    def print_message():

        #print some lines to the console
        print("Welcome to:\nLaunchCode's Think Python")

    # execute main method
    main()



.. toctree::
   :hidden:

   index
   navhelp
