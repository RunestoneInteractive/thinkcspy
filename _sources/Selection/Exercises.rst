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

                What do these expressions evaluate to?

                #.  ``3 == 3``
                #.  ``3 != 3``
                #.  ``3 >= 4``
                #.  ``not (3 < 4)``

                    .. activecode:: ex_6_1


            .. tab:: Answer

                #. True
                #. False
                #. False
                #. False


    #.

        .. tabbed:: q2

            .. tab:: Question

                Write a function which is given an exam score, and it returns the corresponding letter grade as a string according to this scheme:

                .. table::

                   =======   =====
                   score      Grade
                   =======   =====
                   >= 90     A
                   [80-90)   B
                   [70-80)   C
                   [60-70)   D
                   < 60      F
                   =======   =====

                The square and round brackets denote closed and open intervals, respectively. A closed interval *includes* the number, an open interval *excludes* it. So 79.99999 gets grade C , but 80 gets grade B.

                Test your function by printing the score and the grade for a number of different scores.

                .. activecode:: ex_6_2

            .. tab:: Answer

                .. activecode:: q2_question

                    def grade(score):
                        if score >= 90:
                            return "A"
                        else:
                            if score >= 80:
                                return "B"
                            else:
                                if score >= 70:
                                    return "C"
                                else:
                                    if score >= 60:
                                        return "D"
                                    else:
                                        return "F"
                    def main():
                        score = 83
                        print( "Score:", str(score), "Grade:", grade(score))

                    if __name__ == "__main__":
                        main()

    #.  Modify the turtle bar chart program from the previous chapter so that the bar for any value of 200 or more is filled with red, values between [100 and 200) are filled yellow, and bars representing values less than 100 are filled green.

        .. activecode:: ex_6_3
           :nocodelens:

    #.

        .. tabbed:: q4

            .. tab:: Question

                In the `Turtle bar chart <https://runestone.launchcode.org/runestone/static/thinkcspy/Functions/ATurtleBarChart.html>`_ program, what do you expect to happen if one or more of the data values in the list is negative?   Go back and try it out. Then change the program so that when it prints the text value for the negative bars, it puts the text above the base of the bar (on the 0 axis).

                .. activecode:: ex_6_4
                   :nocodelens:

            .. tab:: Answer

                .. activecode:: answer_ex_6_4
                        :nocodelens:

                        import turtle

                        def draw_bar(t, height):
                            """ Get turtle t to draw one bar, of height. """
                            t.begin_fill()               # start filling this shape
                            if height < 0:
                                t.write(str(height))
                            t.left(90)
                            t.forward(height)
                            if height >= 0:
                                t.write(str(height))
                            t.right(90)
                            t.forward(40)
                            t.right(90)
                            t.forward(height)
                            t.left(90)
                            t.end_fill()                 # stop filling this shape

                        def main():
                            data = [48, -50, 200, 240, 160, 260, 220]
                            max_height = max(data)
                            min_height = min(data)
                            num_bars = len(data)
                            border = 10

                            tess = turtle.Turtle()           # create tess and set some attributes
                            tess.color("blue")
                            tess.fillcolor("red")
                            tess.pensize(3)

                            wn = turtle.Screen()             # Set up the window and its attributes
                            wn.bgcolor("lightgreen")
                            if min_height > 0:
                                bottom = 0
                            else:
                                bottom = min_height - border

                            wn.setworldcoordinates(0-border, bottom, 40 * num_bars + border, max_height + border)

                            for x in data:
                                draw_bar(tess, x)

                            wn.exitonclick()

                        if __name__ == "__main__":
                            main()

    #.

        .. tabbed:: q5

            .. tab:: Question

               Write a function called ``is_even(n)`` that takes an integer as an argument and returns ``True`` if the argument is an **even number** and ``False`` if it is **odd**. Note that instead of printing out the results we are using test statements. The goal is to pass all the tests that are listed underneath the function you will write. You do **not** need to add a ``main`` function to this code to run it.

               .. activecode:: ex_6_5
                   :nocodelens:

                   from test import testEqual

                   def is_even(n):
                       # your code here

                   testEqual(is_even(10), True)
                   testEqual(is_even(5), False)
                   testEqual(is_even(1), False)
                   testEqual(is_even(0), True)

            .. tab:: Answer

                .. activecode:: q5_answer
                    :nocodelens:

                    from test import testEqual

                    def is_even(n):
                        if n % 2 == 0:
                            return True
                        else:
                            return False

                    testEqual(is_even(10), True)
                    testEqual(is_even(5), False)
                    testEqual(is_even(1), False)
                    testEqual(is_even(0), True)


    #. Now write the function ``is_odd(n)`` that returns ``True`` when ``n`` is odd
       and ``False`` otherwise.

       .. activecode:: ex_6_6
           :nocodelens:

           from test import testEqual

           def is_odd(n):
               # Your code here

           testEqual(is_odd(10), False)
           testEqual(is_odd(5), True)
           testEqual(is_odd(1), True)
           testEqual(is_odd(0), False)

    #.

        .. tabbed:: q7

            .. tab:: Question

               Modify ``is_odd`` so that it uses a call to ``is_even`` to determine if its argument is an odd integer.

               .. activecode:: ex_6_7
                   :nocodelens:

                   from test import testEqual

                   def is_odd(n):
                       # your code here

                   testEqual(is_odd(10), False)
                   testEqual(is_odd(5), True)
                   testEqual(is_odd(1), True)
                   testEqual(is_odd(0), False)


            .. tab:: Answer

                .. activecode:: q7_answer
                    :nocodelens:

                    from test import testEqual

                    def is_even(n):
                        if n % 2 == 0:
                            return True
                        else:
                            return False

                    def is_odd(n):
                        if is_even(n):
                            return False
                        else:
                            return True

                    testEqual(is_odd(10), False)
                    testEqual(is_odd(5), True)
                    testEqual(is_odd(1), True)
                    testEqual(is_odd(0), False)

    #.

        .. tabbed:: q8

            .. tab:: Question

                Write a fruitful function called ``pick_activity`` to help you pick an activity to engage in based on the current weather. It has two parameters, one for how hot it is and one for how wet it is. If it is hot and wet, it should tell you to watch Netflix. If it hot and dry, it should tell you to go swimming. If it is cold and wet, it should tell you to paint. If it is cold and dry, it should tell you to go to a cafe and read. Use the ``elif`` construct.

                .. activecode:: ex_6_8

            .. tab:: Answer

                .. activecode:: q8_question

                    def pick_activity(temp, damp):
                        if temp == "hot" and damp == "wet":
                            message = "Watch Netflix"
                        elif temp == "hot" and damp == "dry":
                            message = "Go swimming"
                        elif temp == "cold" and damp == "wet":
                            message = "Paint!"
                        elif temp == "cold" and damp == "dry":
                            message = "Got to a cafe and read"
                        else:
                            message = "Invalid input. Enter hot or cold, wet or dry."
                        return message

                    def main():
                        print(pick_activity("hot", "wet"))

                    if __name__ == "__main__":
                        main()

    #.  Write a function ``is_rightangled`` which, given the length of three sides of a triangle, will determine whether the triangle is right-angled. Assume that the third argument to the function is always the longest side. It will return ``True`` if the triangle is right-angled, or ``False`` otherwise.

        Hint: floating point arithmetic is not always exactly accurate, so it is not safe to test floating point numbers for equality. If a good programmer wants to know whether ``x`` is equal or close enough to ``y``, they would probably code it up using the ``abs()`` function like so:

        .. sourcecode:: python

          if  abs(x - y) < 0.001:      # if x is approximately equal to y
              ...

        .. activecode:: ex_6_9
            :nocodelens:

            from test import testEqual

            def is_rightangled(a, b, c):
                # your code here

            testEqual(is_rightangled(1.5, 2.0, 2.5), True)
            testEqual(is_rightangled(4.0, 8.0, 16.0), False)
            testEqual(is_rightangled(4.1, 8.2, 9.1678787077), True)
            testEqual(is_rightangled(4.1, 8.2, 9.16787), True)
            testEqual(is_rightangled(4.1, 8.2, 9.168), False)
            testEqual(is_rightangled(0.5, 0.4, 0.64031), True)

    #.

        .. tabbed:: q10

            .. tab:: Question

                Extend the above program so that the sides can be given to the function in any order.

                .. activecode:: ex_6_10
                    :nocodelens:

                    from test import testEqual

                    def is_rightangled(a, b, c):
                        # your code here

                    testEqual(is_rightangled(1.5, 2.0, 2.5), True)
                    testEqual(is_rightangled(16.0, 4.0, 8.0), False)
                    testEqual(is_rightangled(4.1, 9.1678787077, 8.2), True)
                    testEqual(is_rightangled(9.16787, 4.1, 8.2), True)
                    testEqual(is_rightangled(4.1, 8.2, 9.168), False)
                    testEqual(is_rightangled(0.5, 0.64031, 0.4), True)

            .. tab:: Answer

                .. activecode:: q10_answer
                    :nocodelens:

                    from test import testEqual

                    def is_rightangled(a, b, c):
                        rightangled = False

                        if a > b and a > c:
                            rightangled = abs(b**2 + c**2 - a**2) < 0.001
                        elif b > a and b > c:
                            rightangled = abs(a**2 + c**2 - b**2) < 0.001
                        else:
                            rightangled = abs(a**2 + b**2 - c**2) < 0.001
                        return rightangled

                    testEqual(is_rightangled(1.5, 2.0, 2.5), True)
                    testEqual(is_rightangled(4.0, 8.0, 16.0), False)
                    testEqual(is_rightangled(4.1, 8.2, 9.1678787077), True)
                    testEqual(is_rightangled(4.1, 8.2, 9.16787), True)
                    testEqual(is_rightangled(4.1, 8.2, 9.168), False)
                    testEqual(is_rightangled(0.5, 0.4, 0.64031), True)

    #.

        .. tabbed:: q11

            .. tab:: Question

                Implement the calculator for the date of Easter.

                The following algorithm computes the date for Easter Sunday for any year between 1900 to 2099.

                Ask the user to enter a year. Compute the following:

                1. a = year % 19
                #. b = year % 4
                #. c = year % 7
                #. d = (19 * a + 24) % 30
                #. e = (2 * b + 4 * c + 6 * d + 5) % 7
                #. date = 22 + d + e


                Special note: The algorithm can give a date greater than 31 (the number of days in March). When this happens, it signifies a date in April. Thus, 32 is April 1, 35 is April 4, and so on. Also, if the year is one of four special years (1954, 1981, 2049, or 2076) then subtract 7 from the date.

                Your program should print an error message if the user provides a date that is out of range.

                .. activecode:: ex_6_11

                    def date_of_easter(year):
                        # Your code here

                    def main():
                        # Your code here

                    if __name__ == "__main__":
                        main()

            .. tab:: Answer

                .. activecode:: answer_ex_6_11

                    def date_of_easter(year):
                        if year >= 1900 and year <= 2099:
                            a = year % 19
                            b = year % 4
                            c = year % 7
                            d = (19*a + 24) % 30
                            e = (2*b + 4*c + 6*d + 5) % 7
                            date = 22 + d + e

                            if year == 1954 or year == 1981 or year == 2049 or year == 2076:
                                date = date - 7

                            if date > 31:
                                return("April " + str(date - 31))
                            else:
                                return("March " + str(date))
                        else:
                            return("ERROR...year out of range")

                    def main():
                        year = int(input("Please enter a year"))
                        print(date_of_easter(year))

                    if __name__ == "__main__":
                        main()




Weekly Graded Assignment
========================

.. container:: full_width

    A year is a **leap year** if it is divisible by 4, unless it is a century that is not divisible by 400.

    For example:

    - 1956 is a leap year because 1956 is divisible by 4.
    - 1957 is not a leap year, because it is not divisible by 4.
    - 1900 is not a leap year, despite the fact that it is divisible by 4, because 1900 is a century and 1900 is not divisible by 400.
    - 1600 is a leap year, because 1600 is divisible by 4 and 1600 is divisible by 400

    Write a function ``is_leap`` that takes a year as a parameter and returns ``True`` if the year is a leap year, ``False`` otherwise.

    .. activecode:: ex_6_12
        :nocodelens:

        def is_leap(year):
            # your code here

        # Below is a set of tests so you can check if your code is correct.
        # Do not copy this part into Vocareum.
        from test import testEqual

        testEqual(is_leap(1944), True)
        testEqual(is_leap(2011), False)
        testEqual(is_leap(1986), False)
        testEqual(is_leap(1956), True)
        testEqual(is_leap(1957), False)
        testEqual(is_leap(1800), False)
        testEqual(is_leap(1900), False)
        testEqual(is_leap(1600), True)
        testEqual(is_leap(2056), True)
