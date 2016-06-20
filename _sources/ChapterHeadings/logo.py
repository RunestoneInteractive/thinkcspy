__author__ = "Jack Burns"
__version__ = "1.0"

#Create a custom animated logo for the python curriculum website

#import lines
import turtle
import random

#Hard coded variables
IMAGE1 = "logo.gif"
IMAGE2 = "stars2.gif"

#new class
def main():

    #array to hold turtle and display text
    tList = []

    #create the screen
    wn = turtle.Screen()
    turtle.colormode(255)

    #set the window size
    wn.setup(575, 800)

    #add the background image
    wn.bgpic(IMAGE2)

    #add the spaceship image
    wn.addshape(IMAGE1)

    #create a new turtle object
    boxy = turtle.Turtle()

    #set the pen colors
    boxy.color('yellow',(238, 232, 170))
    boxy.begin_fill()

    #speed it up because it takes forever
    boxy.speed(8)

    #pick the starting position for boxy
    boxy.penup()
    boxy.setposition(-150, 275)
    boxy.pendown()

    #hide the turtle cursor
    boxy.hideturtle()

    #loop the same drawing all the way around
    for i in range(180):

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
        wn.tracer(1,0)
        tList.append(boxy)

    #fills boxy
    boxy.end_fill()

    #create a new turtle
    nt = turtle.Turtle()
    nt.hideturtle()
    nt.speed(1)

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

    #display the text
    w = tList[0]
    w.up()
    w.goto(0, 15)
    w.write("LaunchCode", move=True, align="center", font=("Times New Roman", 40, "bold"))
    w.goto(0, -55)
    w.write("Summer of Code", move=True, align="center", font=("Times New Roman", 50, "bold"))

    #create a new turtle instance and set its starting position
    imageDrawer = turtle.Turtle()
    imageDrawer.penup()
    imageDrawer.setposition(0, -300)
    imageDrawer.pendown()

    #load image, set the heading and speed
    imageDrawer.shape(IMAGE1)
    imageDrawer.setheading(90)
    imageDrawer.speed("slowest")
    imageDrawer.tracer(1,20)

    #move the image forward
    imageDrawer.penup()
    imageDrawer.forward(125)
    imageDrawer.pendown()

    # keep the turtle window open
    turtle.mainloop()

#draw a start
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

#launch the main
main()



