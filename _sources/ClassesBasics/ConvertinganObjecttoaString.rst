..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell. Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. index:: type conversion, override, __repr__, __str__, print, dunder, string

Converting an Object to a String
--------------------------------

When we're working with classes and objects, it is often necessary to print an object (that is to print the state of an object). Consider the example below.

.. activecode:: chp13_classesstr1

    class Point:
        """ Point class for representing and manipulating x,y coordinates. """

        def __init__(self, init_x, init_y):
            """ Create a new point at the given coordinates. """
            self.x = init_x
            self.y = init_y

        def get_x(self):
            return self.x

        def get_y(self):
            return self.y

        def distance_from_origin(self):
            return ((self.x ** 2) + (self.y ** 2)) ** 0.5

    def main():
        p = Point(7, 6)
        print(p)

    if __name__ == "__main__":
        main()

The ``print`` function shown above produces a string representation of the Point ``p``. The default functionality provided by Python tells you that ``p`` is an object of type ``Point``. However, it does not tell you anything about the specific state of the point.

We can improve on this representation if we include a special method call ``__repr__``. Notice that this method uses the same naming convention as the constructor: two underscores before and after the name. It is common that Python uses this naming technique for special methods. In fact, there's even a special name for it, **dunder**, a shortening of "double underscore".

The ``__repr__`` method is responsible for returning a string representation as defined by the class creator. In other words, you as the programmer get to choose what a ``Point`` should look like when it gets printed. In this case, we have decided that the string representation will include the values of x and y as well as some identifying text. It is required that the ``__repr__`` method create and *return* a string.

.. activecode:: chp13_classesstr2

    class Point:
        """ Point class for representing and manipulating x,y coordinates. """

        def __init__(self, init_x, init_y):
            """ Create a new point at the given coordinates. """
            self.x = init_x
            self.y = init_y

        def get_x(self):
            return self.x

        def get_y(self):
            return self.y

        def distance_from_origin(self):
            return ((self.x ** 2) + (self.y ** 2)) ** 0.5

        def __repr__(self):
            return "x=" + str(self.x) + ", y=" + str(self.y)

    def main():
        p = Point(7, 6)
        print(p)

    if __name__ == "__main__":
        main()

When we run the program above you can see that the ``print`` function now shows the string that we chose. This is because the ``print`` function invokes the ``__repr__`` method.

It is also possible to define a ``__str__`` method for the object which does essentially the same thing as the ``__repr__`` method. If we were to do this, then the ``print`` function would invoke the ``__str__`` method. Technically, this is the first thing it tries to do, and then it falls back on invoking the ``__repr__`` method.

.. activecode:: chp13_classesstr3

    class Point:
        """ Point class for representing and manipulating x,y coordinates. """

        def __init__(self, init_x, init_y):
            """ Create a new point at the given coordinates. """
            self.x = init_x
            self.y = init_y

        def get_x(self):
            return self.x

        def get_y(self):
            return self.y

        def distance_from_origin(self):
            return ((self.x ** 2) + (self.y ** 2)) ** 0.5

        def __str__(self):
            return "x=" + str(self.x) + ", y=" + str(self.y)

    def main():
        p = Point(7, 6)
        print(p)

    if __name__ == "__main__":
        main()

You may be wondering, why create a ``__str__`` method in our class when Python already provides one which we've used via ``str()``. But, as we saw earlier, these automatic mechanisms do not do exactly what we want. Python provides many default implementations for methods that we as programmers will probably want to change. When a programmer changes the meaning of a special method we say that we **override** the method. Now the ``str()`` type converter function will use whatever ``__str__`` method we provide.
