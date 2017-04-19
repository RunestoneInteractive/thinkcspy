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


#.

    .. tabbed:: q13

        .. tab:: Question

           Here is another interesting L-System called a Hilbert curve. Use 90 degrees::

               L
               L -> +RF-LFL-FR+
               R -> -LF+RFR+FL-

           .. actex:: ex_8_12
              :nocodelens:

        .. tab:: Answer

            .. activecode:: q13_answer
                :nocodelens:

                import turtle

                def createLSystem(numIters, axiom):
                    startString = axiom
                    endString = ""
                    for i in range(numIters):
                        endString = processString(startString)
                        startString = endString

                    return endString

                def processString(oldStr):
                    newstr = ""
                    for ch in oldStr:
                        newstr = newstr + applyRules(ch)

                    return newstr

                def applyRules(ch):
                    newstr = ""
                    if ch == 'L':
                        newstr = '+RF-LFL-FR+'   # Rule 1
                    elif ch == 'R':
                        newstr = '-LF+RFR+FL-'
                    else:
                        newstr = ch     # no rules apply so keep the character

                    return newstr

                def drawLsystem(aTurtle, instructions, angle, distance):
                    for cmd in instructions:
                        if cmd == 'F':
                            aTurtle.forward(distance)
                        elif cmd == 'B':
                            aTurtle.backward(distance)
                        elif cmd == '+':
                            aTurtle.right(angle)
                        elif cmd == '-':
                            aTurtle.left(angle)

                def main():
                    inst = createLSystem(4, "L")  # create the string
                    print(inst)
                    t = turtle.Turtle()           # create the turtle
                    wn = turtle.Screen()

                    t.up()
                    t.back(200)
                    t.down()
                    t.speed(9)
                    drawLsystem(t, inst, 90, 5)   # draw the picture
                                                  # angle 90, segment length 5
                    wn.exitonclick()

                main()


#. Here is a dragon curve. Use 90 degrees.::

       FX
       X -> X+YF+
       Y -> -FX-Y

   .. actex:: ex_8_13
      :nocodelens:

#.

    .. tabbed:: ex_8_14

        .. tab:: Question

           Here is something called an arrowhead curve. Use 60 degrees.::

               YF
               X -> YF+XF+Y
               Y -> XF-YF-X

           .. actex:: ex_8_14
              :nocodelens:

        .. tab:: Answer

            .. activecode:: ex_8_14_answer
                :nocodelens:

                import turtle

                def createLSystem(numIters, axiom):
                    startString = axiom
                    endString = ""
                    for i in range(numIters):
                        endString = processString(startString)
                        startString = endString

                    return endString

                def processString(oldStr):
                    newstr = ""
                    for ch in oldStr:
                        newstr = newstr + applyRules(ch)

                    return newstr

                def applyRules(ch):
                    newstr = ""
                    if ch == 'X':
                        newstr = 'YF+XF+Y'   # Rule 1
                    elif ch == 'Y':
                        newstr = 'XF-YF-X'
                    else:
                        newstr = ch     # no rules apply so keep the character

                    return newstr

                def drawLsystem(aTurtle, instructions, angle, distance):
                    for cmd in instructions:
                        if cmd == 'F':
                            aTurtle.forward(distance)
                        elif cmd == 'B':
                            aTurtle.backward(distance)
                        elif cmd == '+':
                            aTurtle.right(angle)
                        elif cmd == '-':
                            aTurtle.left(angle)

                def main():
                    inst = createLSystem(5, "YF")  # create the string
                    print(inst)
                    t = turtle.Turtle()            # create the turtle
                    wn = turtle.Screen()

                    t.speed(9)
                    drawLsystem(t, inst, 60, 5)    # draw the picture
                                                   # angle 90, segment length 5
                    wn.exitonclick()

                main()


#. Try the Peano-Gosper curve. Use 60 degrees.::

       FX
       X -> X+YF++YF-FX--FXFX-YF+
       Y -> -FX+YFYF++YF+FX--FX-Y

   .. actex:: ex_8_15
      :nocodelens:

#.

    .. tabbed:: q17

        .. tab:: Question

            The Sierpinski Triangle. Use 60 degrees.::

               FXF--FF--FF
               F -> FF
               X -> --FXF++FXF++FXF--

           .. actex:: ex_8_16
              :nocodelens:

        .. tab:: Answer

            .. activecode:: q17_answer
                :nocodelens:

                import turtle

                def createLSystem(numIters, axiom):
                    startString = axiom
                    endString = ""
                    for i in range(numIters):
                        endString = processString(startString)
                        startString = endString

                    return endString

                def processString(oldStr):
                    newstr = ""
                    for ch in oldStr:
                        newstr = newstr + applyRules(ch)

                    return newstr

                def applyRules(ch):
                    newstr = ""
                    if ch == 'F':
                        newstr = 'FF'   # Rule 1
                    elif ch == 'X':
                        newstr = '--FXF++FXF++FXF--'
                    else:
                        newstr = ch     # no rules apply so keep the character

                    return newstr

                def drawLsystem(aTurtle, instructions, angle, distance):
                    for cmd in instructions:
                        if cmd == 'F':
                            aTurtle.forward(distance)
                        elif cmd == 'B':
                            aTurtle.backward(distance)
                        elif cmd == '+':
                            aTurtle.right(angle)
                        elif cmd == '-':
                            aTurtle.left(angle)

                def main():
                    inst = createLSystem(5, "FXF--FF--FF")   # create the string
                    print(inst)
                    t = turtle.Turtle()           # create the turtle
                    wn = turtle.Screen()
                    t.up()
                    t.back(200)
                    t.right(90)
                    t.forward(100)
                    t.left(90)
                    t.down()
                    t.speed(9)

                    drawLsystem(t, inst, 60, 5)   # draw the picture
                                                  # angle 90, segment length 5
                    wn.exitonclick()

                main()

#.

    .. tabbed:: q15

        .. tab:: Question

           Here are the rules for an L-system that creates something that resembles
           a common garden herb. Implement the following rules and try it. Use an
           angle of 25.7 degrees.

           ::

               H
               H --> HFX[+H][-H]
               X --> X[-FFF][+FFF]FX


           .. actex:: ex_9_14
              :nocodelens:

        .. tab:: Answer

            .. activecode:: q15_answer
                :nocodelens:

                import turtle

                def createLSystem(numIters, axiom):
                    startString = axiom
                    endString = ""
                    for i in range(numIters):
                        endString = processString(startString)
                        startString = endString

                    return endString

                def processString(oldStr):
                    newstr = ""
                    for ch in oldStr:
                        newstr = newstr + applyRules(ch)

                    return newstr

                def applyRules(ch):
                    newstr = ""
                    if ch == 'H':
                        newstr = 'HFX[+H][-H]'   # Rule 1
                    elif ch == 'X':
                        newstr = 'X[-FFF][+FFF]FX'
                    else:
                        newstr = ch     # no rules apply so keep the character

                    return newstr

                def drawLsystem(aTurtle, instructions, angle, distance):
                    savedInfoList = []
                    for cmd in instructions:
                        if cmd == 'F':
                            aTurtle.forward(distance)
                        elif cmd == 'B':
                            aTurtle.backward(distance)
                        elif cmd == '+':
                            aTurtle.right(angle)
                        elif cmd == '-':
                            aTurtle.left(angle)
                        elif cmd == '[':
                            savedInfoList.append([aTurtle.heading(), aTurtle.xcor(), aTurtle.ycor()])
                            #print(savedInfoList)
                        elif cmd == ']':
                            newInfo = savedInfoList.pop()
                            aTurtle.setheading(newInfo[0])
                            aTurtle.setposition(newInfo[1], newInfo[2])


                def main():
                    inst = createLSystem(4, "H")   # create the string
                    print(inst)
                    t = turtle.Turtle()            # create the turtle
                    wn = turtle.Screen()
                    t.up()
                    t.back(200)
                    t.down()
                    t.speed(9)
                    drawLsystem(t, inst, 27.5, 5)  # draw the picture

                    wn.exitonclick()

                main()


#. Here is another L-System. Use an Angle of 25.

    ::

        F
        F --> F[-F]F[+F]F

    .. actex:: ex_9_16
    	:nocodelens:
