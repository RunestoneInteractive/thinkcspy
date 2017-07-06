..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell. Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. index:: object-oriented programming

A Change of Perspective
-----------------------

Throughout the earlier chapters, we wrote functions and called them using a syntax such as ``draw_circle(tess)``. This suggests that the function is the active agent. Invoking a function in this style is like you are speaking to the function, saying something like:

  "Hey you, ``draw_circle`` function! Please draw a circle for me. Here's a turtle object for you to use to draw with."

In object-oriented programming, the objects are considered the active agents. For example, in our early introduction to turtles, we actually used an object-oriented style. We said ``tess.forward(100)``, which instructs the **turtle to move itself** forward by the given number of steps. This is like we are addressing the turtle, saying:

  "Hey tess! Move yourself forward by 100 steps."

A more procedural syntax would have been ``forward(tess, 100)``, which says:

  "Hey, ``forward`` function! Please take this turtle and move it forward by 100 steps."

Going back to our ``draw_circle`` function, switching its invocation into an OOP style would look like this: ``tess.draw_circle()``. This says:

  "Hey tess! Please use your ``draw_circle`` method!"

As it turns out, turtle objects *do* have a built-in method for drawing circles, but it is actually just called ``circle``, so the invocation looks like ``tess.circle()``.

This change in perspective is sometimes considered to be a more "polite" way to write programming instructions. It may not initially be obvious that it is useful. But it turns out that often times *shifting responsibility from the functions onto the objects* makes it possible to write more versatile functions and makes it easier to maintain and reuse code.

The most important advantage of the object-oriented style is that it fits our mental chunking and real-life experience more accurately. In real life our ``cook`` method is part of our microwave oven --- we don't have a ``cook`` function sitting in the corner of the kitchen, into which we pass the microwave! Similarly, we use the cellphone's own methods to send an sms, or to change its state to silent. The functionality of real-world objects tends to be tightly bound up inside the objects themselves. OOP allows us to accurately mirror this when we organize our programs.
