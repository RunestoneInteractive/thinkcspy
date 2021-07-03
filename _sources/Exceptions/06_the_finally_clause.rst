..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: exceptions-6-
   :start: 1

The ``finally`` clause of the ``try`` statement
===============================================

A common programming pattern is to grab a resource of some kind — e.g. we 
create a window for turtles to draw on, or we dial up a connection to our 
internet service provider, or we may open a file for writing. Then we perform 
some computation which may raise an exception, or may work without any 
problems.

Whatever happens, we want to “clean up” the resources we grabbed — e.g. close 
the window, disconnect our dial-up connection, or close the file. The ``finally`` 
clause of the ``try`` statement is the way to do just this. Consider this 
(somewhat contrived) example:

.. activecode:: ch13_7_1

    import turtle
    import time

    def show_poly():
      try:
        win = turtle.Screen()   # Grab/create a resource, e.g. a window
        tess = turtle.Turtle()

        # This dialog could be cancelled,
        #   or the conversion to int might fail, or n might be zero.
        n = int(input("How many sides do you want in your polygon?"))
        angle = 360 / n
        for i in range(n):      # Draw the polygon
            tess.forward(35)
            tess.left(angle)
        time.sleep(3)           # Make program wait a few seconds
      except Exception as e:
        print("insufficient number of sides")
        print(e)
      finally:
        win.bye()               # Close the turtle's window

    show_poly()


In lines 20–22, ``show_poly`` is called three times. Each one creates a new 
window for its turtle, and draws a polygon with the number of sides input by 
the user. But what if the user enters a string that cannot be converted to 
an ``int``? What if they close the dialog? We’ll get an exception, *but even though 
we’ve had an exception, we still want to close the turtle’s window*. Lines 17–18 
does this for us. Whether we complete the statements in the ``try`` clause successfully 
or not, the ``finally`` block will always be executed.

Notice that the exception is still unhandled — only an ``except`` clause can 
handle an exception, so our program will still crash. But at least its turtle 
window will be closed before it crashes!

.. index:: exceptions syntax


