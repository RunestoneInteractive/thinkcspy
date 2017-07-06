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

              We can represent a rectangle by knowing three things: the location of its lower left corner, its width, and its height. Create a class definition for a Rectangle class using this idea. For instance, to create a Rectangle object at location (4,5) with width 6 and height 5, we would do the following::

                  r = Rectangle(Point(4, 5), 6, 5)

              .. activecode:: classes_deeper_q1

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

                .. activecode:: ch_cl2_answer1

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


                    class Rectangle:
                        """Rectangle class using Point, width and height"""

                        def __init__(self, init_p, init_w, init_h):

                            self.location = init_p
                            self.width = init_w
                            self.height = init_h

                        def __repr__(self):
                            return "I'm a rectangle with width {} and height {}".format(self.width, self.height)

                    def main():
                        loc = Point(4, 5)
                        r = Rectangle(loc, 6, 5)
                        print(r)

                    if __name__ == "__main__":
                        main()

    #. Add the following accessor methods to the Rectangle class: ``get_width`` and ``get_height``.

       .. activecode:: ch_cl2_q2

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


    #.

        .. tabbed:: q3

            .. tab:: Question

               Add a method ``area`` to the Rectangle class that returns the area of any instance::

                  r = Rectangle(Point(0, 0), 10, 5)
                  testEqual(r.area(), 50)

               .. activecode:: ch_cl2_q3

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

                    from test import testEqual
                    r = Rectangle(Point(0, 0), 10, 5)
                    testEqual(r.area(), 50)

            .. tab:: Answer

                .. activecode:: ch_cl2_q3answer

                    from test import testEqual

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


                    class Rectangle:
                        """Rectangle class using Point, width and height"""

                        def __init__(self, init_p, init_w, init_h):

                            self.location = init_p
                            self.width = init_w
                            self.height = init_h

                        def __repr__(self):
                            return "I'm a rectangle with width {} and height {}".format(self.width, self.height)

                        def area(self):
                            return self.width * self.height

                    r = Rectangle(Point(0, 0), 10, 5)
                    testEqual(r.area(), 50)

                    r1 = Rectangle(Point(0,0), 4, 5)
                    testEqual(r1.area(), 20)

                    r2 = Rectangle(Point(0,0), 12, 3)
                    testEqual(r2.area(), 36)


    #. Write a ``perimeter`` method in the Rectangle class so that we can find the perimeter of any rectangle instance::

          r = Rectangle(Point(0, 0), 10, 5)
          testEqual(r.perimeter(), 30)


       .. activecode:: ch_cl2_q4

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

          from test import testEqual
          r = Rectangle(Point(0, 0), 10, 5)
          testEqual(r.perimeter(), 30)

    #.

        .. tabbed:: q5

            .. tab:: Question

              Write a ``transpose`` method in the Rectangle class that swaps the width and the height of any rectangle instance::

                  r = Rectangle(Point(100, 50), 10, 5)
                  testEqual(r.width, 10)
                  testEqual(r.height, 5)
                  r.transpose()
                  testEqual(r.width, 5)
                  testEqual(r.height, 10)

              .. activecode:: ch_cl2_q5

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

                  from test import testEqual
                  r = Rectangle(Point(100, 50), 10, 5)
                  testEqual(r.width, 10)
                  testEqual(r.height, 5)
                  r.transpose()
                  testEqual(r.width, 5)
                  testEqual(r.height, 10)


            .. tab:: Answer

                .. activecode:: ch_cl2_q5answer

                    from test import testEqual

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


                    class Rectangle:
                        """Rectangle class using Point, width and height"""

                        def __init__(self, init_p, init_w, init_h):

                            self.location = init_p
                            self.width = init_w
                            self.height = init_h

                        def __repr__(self):
                            return "I'm a rectangle with width {} and height {}".format(self.width, self.height)

                        def transpose(self):
                            temp = self.width
                            self.width = self.height
                            self.height = temp

                    r = Rectangle(Point(100, 50), 10, 5)
                    testEqual(r.width, 10)
                    testEqual(r.height, 5)
                    r.transpose()
                    testEqual(r.width, 5)
                    testEqual(r.height, 10)


    #. Write a new method called ``contains`` in the Rectangle class to test if a Point falls within the rectangle. For this exercise, assume that a rectangle at (0,0) with width 10 and height 5 has *open* upper bounds on the width and height, i.e. it stretches in the x direction from [0 to 10), where 0 is included but 10 is excluded, and from [0 to 5) in the y direction. So it does not contain the point (10, 2). These tests should pass::

          r = Rectangle(Point(0, 0), 10, 5)
          testEqual(r.contains(Point(0, 0)), True)
          testEqual(r.contains(Point(3, 3)), True)
          testEqual(r.contains(Point(3, 7)), False)
          testEqual(r.contains(Point(3, 5)), False)
          testEqual(r.contains(Point(3, 4.99999)), True)
          testEqual(r.contains(Point(-3, -3)), False)

       .. activecode:: ch_cl2_q6

            from test import testEqual

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


            r = Rectangle(Point(0, 0), 10, 5)
            testEqual(r.contains(Point(0, 0)), True)
            testEqual(r.contains(Point(3, 3)), True)
            testEqual(r.contains(Point(3, 7)), False)
            testEqual(r.contains(Point(3, 5)), False)
            testEqual(r.contains(Point(3, 4.99999)), True)
            testEqual(r.contains(Point(-3, -3)), False)

    #.

        .. tabbed:: q7

            .. tab:: Question

               Write a new method called ``diagonal`` that will return the length of the diagonal that runs from the lower left corner to the opposite corner.

               .. activecode:: ch_cl2_q7

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

                  from test import testEqual
                  r = Rectangle(Point(0, 0), 10, 5)
                  testEqual(r.diagonal(), 11.1803398875)

                  r1 = Rectangle(Point(0,0), 12, 4)
                  testEqual(r1.diagonal(), 12.6491106407)

                  r2 = Rectangle(Point(0,0), 1,2)
                  testEqual(r2.diagonal(), 2.2360679775)

            .. tab:: Answer

                .. activecode:: ch_cl2_answer7

                    from test import testEqual

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


                    class Rectangle:
                        """Rectangle class using Point, width and height"""

                        def __init__(self, init_p, init_w, init_h):

                            self.location = init_p
                            self.width = init_w
                            self.height = init_h

                        def __repr__(self):
                            return "I'm a rectangle with width {} and height {}".format(self.width, self.height)

                        def diagonal(self):
                            d = (self.width ** 2 + self.height ** 2) ** 0.5
                            return d

                    r = Rectangle(Point(0, 0), 10, 5)
                    testEqual(r.diagonal(), 11.1803398875)

                    r1 = Rectangle(Point(0,0), 12, 4)
                    testEqual(r1.diagonal(), 12.6491106407)

                    r2 = Rectangle(Point(0,0), 1,2)
                    testEqual(r2.diagonal(), 2.2360679775)

    #.  There are some games where we put a rectangular "bounding box" around our sprites in the game. We can then do *collision detection* between, say, bombs and spaceships, by comparing whether their rectangles overlap anywhere.

        Write a function to determine whether two rectangles collide. *Hint: this might be quite a tough exercise! Think carefully about all the cases as you code.*

        .. activecode:: ch_cl2_q8


Weekly Graded Assignment
========================

.. container:: full_width

    The code below contains a ``Chatbot`` class. A ``Chatbot`` is an object that can engage in rudimentary conversation with a human. You will be asked to define a subclass that inherits from this ``Chatbot`` superclass.

    First, run the code below to talk to the chatbot. Then look over the code to make sure you understand it.

    .. activecode:: chatbot

        class Chatbot:
            """ An object that can engage in rudimentary conversation with a human. """

            def __init__(self, name):
                self.name = name

            def greeting(self):
                """ Returns the Chatbot's way of introducing itself. """
                return "Hello, my name is " + self.name

            def response(self, prompt_from_human):
                """ Returns the Chatbot's response to something the human said. """
                return "It is very interesting that you say: '" + prompt_from_human + "'"

        # make a chatbot
        sally = Chatbot("Sally")
        # introduce the chatbot and allow the user to say something
        human_message = input(sally.greeting())
        # respond to the user
        print(sally.response(human_message))

        # TODO: keep reading! see below

    Your job is to make a subclass called ``BoredChatbot`` that inherits from ``Chatbot``, but acts a little differently, in the following way:

    * A bored chatbot has a short attention span. When the human says something that is longer than 20 characters, it should respond by saying:

        "zzz... Oh excuse me, I dozed off reading your essay."

    * If, on the other hand, the human says something with a length of 20 characters or less, then the bored chatbot should respond just like a normal chatbot would.

    Note that we are requiring you to use **inheritance**. Your new ``BoredChatbot`` class must be a **subclass** of the ``Chatbot`` class, and your subclass should only implement the things that make it distinct. (See the *Inheritance* chapter for a review of how this works.)

    .. activecode:: bored_chatbot

        class Chatbot:
            """ An object that can engage in rudimentary conversation with a human. """

            def __init__(self, name):
                self.name = name

            def greeting(self):
                """ Returns the Chatbot's way of introducing itself. """
                return "Hello, my name is " + self.name

            def response(self, prompt_from_human):
                """ Returns the Chatbot's response to something the human said. """
                return "It is very interesting that you say: '" + prompt_from_human + "'"


        # TODO define a class called BoredChatbot

    When you think your code is correct, test it yourself by creating a few different instances and printing their responses to various inputs.
