..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell. Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. index:: custom class, user defined class, constructor, __init__, class, object, instance, instantiation, class definition

User Defined Classes
--------------------

We've already seen classes like ``str``, ``int``, ``float`` and ``Turtle``. These were defined by Python and made available for us to use.

However, it can be helpful to have data objects that are uniquely tailored to represent concepts related to the specific problem we are trying to solve. For these situations, Python gives us the ability to **create our own custom classes**.

A custom class  (or, *user defined class*) usually comes about when you want to cluster together a few disparate pieces of information into one larger coherent concept. As an example, consider the concept of a mathematical point. In two-dimensional space, a point is two numbers (coordinates) that are treated collectively as a single object. Points are often written in parentheses with a comma separating the coordinates. For example, ``(0, 0)`` represents the origin, and ``(x, y)`` represents the point ``x`` units to the right and ``y`` units up from the origin. This ``(x,y)`` is the state of the point.

Thinking about our diagram above, we could draw a ``point`` object as shown here.

.. image:: Figures/objectpic2.png
   :alt: A point has an x and a y


Some of the typical operations that one associates with points might be to ask the point for its x coordinate, or to ask for its y coordinate. For these operations, we can create methods with names like ``get_x`` and ``get_y``.

.. image:: Figures/objectpic3.png
   :alt: A point also has methods

There are also more interesting questions we might want to ask about a point. You may wish to calculate the distance of a point from the origin, or the distance of a point from another point, or find the midpoint between two points, or answer the question as to whether a point falls within a given rectangle or circle. In a later chapter we will see how we can organize these sorts of computations together with the data.


Syntax for Defining and Using a Class
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Now that we understand what a "point" object might look like conceptually, let's turn to the actual nuts and bolts of defining a point class in Python.

To start off, we will define the simplest possible point class, just a "data cluster" composed of an `x` and a `y`. We will refrain from defining the ``get_x`` and ``get_y`` methods (or any other fancier methods) for now. The code for defining our ``Point`` class looks like this:

.. sourcecode:: python

    # let's define a Point class!
    class Point:
        """ Point class for representing and manipulating x,y coordinates. """

        def __init__(self):
            """ Create a new point at the origin """
            self.x = 0
            self.y = 0

The syntax rules for a class definition are the same as for other compound statements. There is a header which begins with the keyword, ``class``, followed by the name of the class (in this case, ``Point``), and ending with a colon. Notice also that we use a capital "P": the standard convention is that the name of a class should be "CapWords" and start with a capital letter.

Underneath the header, you define the class's methods. Our ``Point`` class has only one method so far, ``__init__``. Any time you create a new class, you should include a method with the special name ``__init__``. This **initializer method** is automatically called whenever a new instance of ``Point`` is created. It gives the programmer (you) the opportunity to set up the attributes required within the new instance by giving them their initial state values. In the case above, our ``__init__`` method causes every newly created Point to start off as ``(0, 0)``, by assigning ``0`` to both ``self.x`` and ``self.y``. The ``self`` parameter (you could choose any other name, but nobody ever does!) is automatically set to reference the newly-created object that needs to be initialized.

All that might sound confusing, but it should become clearer once you see the process in action. We have defined our ``Point`` class, so now let's see what happens once we actually *use* it, by instantiating individual point *objects*:

.. activecode:: chp13_classes1

    class Point:
        """ Point class for representing and manipulating x,y coordinates. """

        def __init__(self):
            """ Create a new point at the origin """
            self.x = 0
            self.y = 0

    # now let's create some Points!
    p = Point() # p is a point
    q = Point() # q is a different point

    print("Nothing seems to have happened with the points")

In the code above, we have added a few lines after the class definition. This code creates a new ``Point`` object and assigns it to the variable ``p``, and then creates another new ``Point`` object and assigns it to the variable ``q``.

You will note that when you run the program, nothing happens. It turns out that this is not quite the case. Something did happen, namely the two ``Point`` instances were created. We don't see any visible result, because we have not yet asked the points to do anything. But the points ``p`` and ``q`` have now "come into existence". A little portion of the computer's memory now looks like this:

.. image:: Figures/objectpic4.png
   :alt: Simple object has state and methods

You can see this for yourself, via codelens:

.. codelens:: chp13_points
    :python: py3

    class Point:
        """ Point class for representing and manipulating x,y coordinates. """

        def __init__(self):
            """ Create a new point at the origin """
            self.x = 0
            self.y = 0

    # now let's create some Points!
    p = Point() # p is a point
    q = Point() # q is a different point

    print("Nothing seems to have happened with the points")

You can see that when we invoke the ``Point()`` function in line 9, Python creates a new "empty" ``point`` object, and then passes that point into our ``__init__`` method. Inside the ``__init__`` method we are able to give that point two attributes called ``x`` and ``y``, and set ``x`` and ``y`` equal to ``0``. Finally, the new point is returned and we assign it to the ``p`` variable. Then the same process occurs for the ``q`` variable and we end up with two different ``Point`` instances.

Classes vs Objects (or Instances)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

It is important to understand the difference between a class, and an individual "instance" of that class. Look at the following program which adds a few additional print statements:

.. activecode:: chp13_classes2

    class Point:
        """ Point class for representing and manipulating x,y coordinates. """

        def __init__(self):
            """ Create a new point at the origin """
            self.x = 0
            self.y = 0

    p = Point()
    q = Point()

    print(p)
    print(q)

    print(p is q)


You can see that the output suggests that each one is a ``Point`` object. However, notice that the ``is`` operator returns ``False`` meaning that they are *different* objects (we will have more to say about this in a later chapter).

This should look familiar --- we've used classes before to create more than one object:

.. sourcecode:: python

    from turtle import Turtle

    # instantiate some turtle objects
    tess = Turtle()
    alex = Turtle()

Just as ``tess`` and ``alex`` refer to two different objects (both of the class ``Turtle``), the variables ``p`` and ``q`` are assigned references to two different objects (both of the class ``Point``).

More on Constructors
~~~~~~~~~~~~~~~~~~~~

A function invocation like ``Turtle()`` or ``Point()``, which creates a new object instance, is called a **constructor**. Every class automatically uses the name of the class as the name of the constructor function. When the constructor function is invoked, a new instance of ``Point`` or ``Turtle`` is created, and then inside the ``__init__`` function you have the opportunity to configure the new instance into some kind of reasonable "default starting state".

It may be helpful to think of a class as *a factory for making objects*. The class itself isn't an instance of a point, but it contains the machinery to make point instances. Every time you call the constructor, you're asking the factory to make you a new object. As the object goes through the production line, its initialization method is executed in order to get the object properly set up with its factory default settings.

The combined process of "make me a new object" and "get its settings initialized to the factory default settings" is called **instantiation**.
