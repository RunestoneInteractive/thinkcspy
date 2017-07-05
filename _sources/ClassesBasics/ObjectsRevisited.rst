..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell. Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. index:: state, method, object

Objects Revisited
-----------------

In Python, every value is actually an object. Whether it be a turtle, a list, or even an integer, they are all objects. Programs manipulate those objects, either by performing computation with them or by asking them to perform methods.

You can think of an object as consisting of two things: an internal **state**, and a collection of **methods** that it can perform.

The **state** of an object represents those things that the object knows about itself. For example, as we have seen with turtle objects, each turtle has a state consisting of the turtle's position, its color, its heading and so on.

The **methods** of an object are functions that allow you to change its state or ask questions about its state. Methods are like the actions that an object is able to do, or the questions that an object is able to answer about itself. For example, each turtle has the ability to go forward, backward, or turn right or left, via methods like ``.forward``, ``.backward``, etc. Each of these methods, when invoked, cause the turtle to change its internal state. Other methods, such as ``.position``, don't cause anything to change but simply return a value to report back to you some information about its current state. For example, if you invoke ``tess.position()``, then the ``position()`` method will execute and return tess's current position (i.e. the (x,y) coordinates of her location).

Individual turtles are different in that even though they are all turtles, they differ in the specific values of the individual state attributes (maybe they are in a different location or have a different heading).

.. image:: Figures/objectpic1.png
   :alt: Simple object has state and methods
