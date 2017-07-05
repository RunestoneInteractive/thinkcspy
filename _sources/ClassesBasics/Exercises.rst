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

.. container:: full_width

    #.

        .. tabbed:: q1

            .. tab:: Question

               Add a ``distance_from_point`` method that works similar to ``distance_from_origin`` except that it takes a ``Point`` as a parameter and
               computes the distance between that point and self.

               .. activecode:: ch_cl_q1

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

            .. tab:: Answer

                .. activecode:: ch_cl_ex_1_answer

                    import math

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

                        def distance_from_point(self, otherP):
                            dx = (otherP.get_x() - self.x)
                            dy = (otherP.get_y() - self.y)
                            return math.sqrt(dy**2 + dx**2)

                    p = Point(3, 3)
                    q = Point(6, 7)
                    print(p.distance_from_point(q))


    #. Add a method ``reflect_x`` to the class ``Point`` which returns a new ``Point``, one which is the
       reflection of the point across the x-axis. For example,
       ``Point(3, 5).reflect_x()`` is (3, -5)

       .. activecode:: ch_cl_02

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

    #.  Add a method ``slope_from_origin``, which returns the slope of the line joining the origin to the point. For example,

        ::

            >>> Point(4, 10).slope_from_origin()
            2.5
            >>> Point(12, -3).slope_from_origin()
            -0.25
            >>> Point(-6, 0).slope_from_origin()
            0

        The equation for calculating slope between any two points is **slope = (Y2 - Y1) / (X2 - X1)**. Remember that dividing by 0 is not allowed, so there are some inputs that will cause your method to fail. Return ``None`` when that happens.


       .. activecode:: ch_cl_04

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

                # TODO define a method called slope_from_origin here


            # some tests to check your code
            from test import testEqual
            testEqual( Point(4, 10).slope_from_origin(), 2.5 )
            testEqual( Point(5, 10).slope_from_origin(), 2 )
            testEqual( Point(0, 10).slope_from_origin(), None )
            testEqual( Point(20, 10).slope_from_origin(), 0.5 )
            testEqual( Point(20, 20).slope_from_origin(), 1 )
            testEqual( Point(4, -10).slope_from_origin(), -2.5 )
            testEqual( Point(-4, -10).slope_from_origin(), 2.5 )
            testEqual( Point(-6, 0).slope_from_origin(), 0 )


    #.

        .. tabbed:: q5

            .. tab:: Question

               Add a method called ``move`` that will take two parameters, call them ``dx`` and ``dy``.  The method will cause the point to move in the x and y direction the number of units given. (Hint: you will change the values of the state of the point)

               .. activecode:: ch_cl_q5

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

            .. tab:: Answer

                .. activecode:: ch_cl_05_answer

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

                        def move(self, dx, dy):
                            self.x = self.x + dx
                            self.y = self.y + dy


                    p = Point(7, 6)
                    print(p)
                    p.move(5, 10)
                    print(p)



Weekly Graded Assignment
========================

.. container:: full_width

    Create a ``Car`` class that has the following characteristics:

    * It has an ``oil_level`` attribute and a ``gas_level`` attribute.
    * It has a constructor (``__init__`` method) that sets the default oil and gas levels to *5.0* and *12.0* respectively.
    * It has the following methods: ``get_oil_level``, ``get_gas_level``, ``set_oil``, and ``set_gas``. The first two do not have parameters and will return a float representing how much oil or gas is currently in the car. The latter two each take a parameter of a single float value and set the ``oil_level`` and ``gas_level`` attributes, respectively, to that value
    * It has a ``__repr__`` method that returns ...

    ::

        example?


    .. activecode:: ch_cl_q3

        class Point:

            def __init__(self, init_x, init_y):
                """ Create a new point at the given coordinates. """
                self.x = init_x
                self.y = init_y
