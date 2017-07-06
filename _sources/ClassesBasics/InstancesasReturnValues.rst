..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell. Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. index:: return value, instance

Instances as Return Values
--------------------------

Functions and methods can return objects. This is actually nothing new since everything in Python is an object and we have been returning values for quite some time. The difference here is that we want to have the method *create an object* using the constructor and then return it as the value of the method.

Suppose you have a point object and wish to find the midpoint halfway between it and some other target point. We would like to write a method called ``halfway`` that takes another point object as a parameter and returns a new point object that is halfway between the original point and the target.

.. activecode:: chp13_classesmid1

    class Point:

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

        def halfway(self, target):
            mx = (self.x + target.x) / 2
            my = (self.y + target.y) / 2
            return Point(mx, my)

    def main():
        p = Point(3, 4)
        q = Point(5, 12)
        mid = p.halfway(q)

        print(mid)
        print(mid.get_x())
        print(mid.get_y())

    if __name__ == "__main__":
        main()

The resulting point object, ``mid``, has an x value of 4 and a y value of 8. We can also use any other class methods on it, like ``distance_from_origin`` since ``mid`` is an object of the ``Point`` class.
