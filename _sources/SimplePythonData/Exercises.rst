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


    1.

        .. tabbed:: q1

            .. tab:: Question

                Evaluate the following numerical expressions in your head, then use the active code window to check your results:

                #. ``5 ** 2``
                #. ``9 * 5``
                #. ``15 / 12``
                #. ``12 / 15``
                #. ``15 // 12``
                #. ``12 // 15``
                #. ``5 % 2``
                #. ``9 % 5``
                #. ``15 % 12``
                #. ``12 % 15``
                #. ``6 % 6``
                #. ``0 % 7``

                .. activecode:: ch02_ex1

                   print(5 ** 2)

            .. tab:: Answer

                #. ``5 ** 2  = 25``
                #. ``9 * 5 = 45``
                #. ``15 / 12 = 1.25``
                #. ``12 / 15 = 0.8``
                #. ``15 // 12 = 1``
                #. ``12 // 15 = 0``
                #. ``5 % 2 = 1``
                #. ``9 % 5 = 4``
                #. ``15 % 12 = 3``
                #. ``12 % 15 = 12``
                #. ``6 % 6 = 0``
                #. ``0 % 7 = 0``

    #.

        What is the order of the arithmetic operations in the following expression? Evaluate the expression by hand and then check your work.

        ::

            2 + (3 - 1) * 10 / 5 * (2 + 3)

        .. activecode:: ex_2_2



    #.

        .. tabbed:: q3

            .. tab:: Question

                Many people keep time using a 24 hour clock (11 is 11am and 23 is 11pm, 0 is midnight).

                If it is currently 13 and you set your alarm to go off in 50 hours, the hour will be 15 (3pm). Write a program to solve the general version of the above problem. Ask the user for the current time (in hours), and then ask for the number of hours to wait for the alarm.

                Your program should output what the hour will be on the clock when the alarm goes off.

                .. activecode:: ex_2_3

            .. tab:: Answer

                .. activecode:: q3_answer
                    :nocanvas:

                    ## question 3 solution ##

                    current_time_string = input("What is the current time (in hours)? ")
                    waiting_time_string = input("How many hours do you have to wait? ")

                    current_time_int = int(current_time_string)
                    waiting_time_int = int(waiting_time_string)

                    hours = current_time_int + waiting_time_int

                    timeofday = hours % 24

                    print(timeofday)


    #.

        .. tabbed:: q5

            .. tab:: Question

                Take the sentence: *All work and no play makes Jack a dull boy.* Store each word in a separate variable, then print out the sentence on one line using ``print``.

                .. activecode:: ex_2_5

            .. tab:: Answer

                .. activecode:: q5_answer
                    :nocanvas:

                    ## question 5 solution ##

                    word_1 = "All"
                    word_2 = "work"
                    word_3 = "and"
                    word_4 = "no"
                    word_5 = "play"
                    word_6 = "makes"
                    word_7 = "Jack"
                    word_8 = "a"
                    word_9 = "dull"
                    word_10 = "boy."

                    print(word_1, word_2, word_3, word_4, word_5, word_6, word_7, word_8, word_9, word_10)


    #.

        Add parenthesis to the expression ``6 * 1 - 2`` to change its value from 4 to -6.

        .. activecode:: ex_2_6


    #.

        .. tabbed:: q7

            .. tab:: Question

                The formula for computing the final amount if one is earning compound interest is given on Wikipedia as

                .. image:: Figures/compoundInterest.png
                    :alt: formula for compound interest

                Write a Python program that assigns the principal amount of 10000 to variable `P`, assign to `n` the value 12, and assign to `r` the interest rate of 8% (0.08).  Then have the program prompt the user for the number of years, `t`, that the money will be compounded for. Calculate and print the final amount after `t` years.

                .. activecode:: ex_2_7

            .. tab:: Answer

                .. activecode:: q7_answer
                    :nocanvas:

                    ## question 7 solution ##

                    P = 10000
                    n = 12
                    r = 0.08

                    t = int(input("Compound for how many years? "))

                    final = P * ( ((1 + (r/n)) ** (n * t)) )

                    print ("The final amount after", t, "years is", final)


    #.

        Write a program that will compute the area of a circle. Prompt the user to enter the radius, and then print the answer, like this:

        ::

            What is the radius of your circle?
            >>> 7.8
            191.0376

        .. activecode:: ex_2_8


    #.

        .. tabbed:: q9

            .. tab:: Question

                Write a program that will compute the area of a rectangle. Prompt the user to enter the width and height of the rectangle. Print a nice message with the answer.

                .. activecode:: ex_2_9

            .. tab:: Answer

                .. activecode:: q9_answer
                    :nocanvas:

                    ## question 9 solution

                    width = int(input("Width? "))
                    height = int(input("Height? "))

                    area = width * height

                    print("The area of the rectangle is", area)


    #.

        Write a program that will compute MPG for a car. Prompt the user to enter the number of miles driven and the number of gallons used. Print a nice message with the answer, like this:

        ::

            How many miles have you driven?
            >>> 150
            How many gallons have you used?
            >>> 5
            Your car gets 30 miles per gallon.

        .. activecode:: ex_2_10


    #.

        .. tabbed:: q11

            .. tab:: Question

                Write a program that will convert degrees Celsius to degrees Fahrenheit.

                .. activecode:: ex_2_11

            .. tab:: Answer

                .. activecode:: q11_answer
                    :nocanvas:

                    ## question 11 solution ##

                    deg_c = int(input("What is the temperature in Celsius? "))

                    # formula to convert C to F is: (degrees Celsius) times (9/5) plus (32)
                    deg_f = deg_c * (9 / 5) + 32

                    print(deg_c, " degrees Celsius is", deg_f, " degrees Fahrenheit.")



    #.

        Write a program that will convert degrees Fahrenheit to degrees Celsius, like this:

        ::

            What is the temperature in Fahrenheit?
            >>> 32
            32.0 degrees Fahrenheit is 0.0 degrees Celsius.

        .. activecode:: ex_2_12
