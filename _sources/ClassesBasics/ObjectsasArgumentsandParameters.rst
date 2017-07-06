..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell. Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. index:: object, argument, parameter

Objects as Arguments and Parameters
-------------------------------------

You can pass an object as a argument in the usual way. We've already seen this in some of the turtle examples where we passed the turtle to some function like ``draw_rectangle`` so that the function could control and use whatever turtle instance we passed to it.

Here is a simple function called ``distance`` involving our new ``Point`` objects. The job of this function is to figure out the distance between two points.

.. activecode:: chp13_classes6

    import math

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

    def distance(point1, point2):
        x_diff = point2.get_x() - point1.get_x()
        y_diff = point2.get_y() - point1.get_y()

        dist = math.sqrt(x_diff**2 + y_diff**2)
        return dist

    def main():
        p = Point(4, 3)
        q = Point(0, 0)
        print(distance(p, q))

    if __name__=="__main__":
        main()


The function ``distance`` takes two points and returns the distance between them. Note that ``distance`` is **not** a method of the Point class. You can see this by looking at the indentation pattern. It is not inside the class definition. The other way we can know that ``distance`` is not a method of Point is that ``self`` is not included as a formal parameter. In addition, we do not invoke ``distance`` using the dot notation.
