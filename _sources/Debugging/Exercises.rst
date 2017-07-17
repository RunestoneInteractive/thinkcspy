Exercises
---------

.. container:: full_width

    #.  Below is a short program that prompts the user to input the number of miles they are to drive on a given trip and converts their answer to kilometers, printing the result. However, it doesn't work properly. Find and fix the error in the program.

        .. activecode:: lc_ex_1_1

            miles = input("How many miles do you have to drive? ")

            kilometers = miles * 1.60934

            print("That distance is equal to", kilometers, "kilometers")

        .. mchoice:: lc_question1_1_1
           :answer_a: Syntax error
           :answer_b: Runtime error
           :answer_c: Semantic error
           :correct: b
           :feedback_a: As written, the program is syntactically correct.
           :feedback_b: You got it!
           :feedback_c: A semantic error occurs when a program runs, but gives the wrong results or behavior. This program doesn't run, as written.

           What type of error did the above program have?

    #.  Picture a compass where 0 degrees represents North, 90 degrees represents East, and so on, all the way around to 360 degrees, which is again the same as 0 degrees: true north.

        The program below envisions the scenario in which a person is facing North (aka 0 degrees) and spins some number of rotations, either clockwise or counter-clockwise (-1 represents a full counter-clockwise spin and 1 represents a full clockwise spin). It calculates the direction they end up facing in degrees. However, it doesn't work properly. Find and fix the error in the program.

        .. activecode:: lc_ex_1_2

            spins = input("How many times did you spin? (Enter a negative number for counter-clockwise spins) ")

            degrees = float(spins) * 360

            print("You are facing", degrees, "degrees relative to north")


        .. mchoice:: lc_question1_1_2
           :answer_a: Syntax error
           :answer_b: Runtime error
           :answer_c: Semantic error
           :correct: c
           :feedback_a: As written, the program is syntactically correct.
           :feedback_b: As written, there are no runtime errors.
           :feedback_c: You got it!

           What type of error did the above program have?

    #.  You've written a program to convert degrees Celsius to degrees Fahrenheit. The program below makes the conversion in the opposite direction, from Fahrenheit to Celsius. However, it doesn't work properly. Find and fix the error in the program.

        .. activecode:: lc_ex_1_3

            current_temp_string = input("Enter a temperature in degrees Fahrenheit: ")
            current_temp = int(current_temp_string)

            current_temp_celsius = (current_tmp - 32) * (5/9)
            print("The temperature in Celsius is:", current_temp_celsius)

        .. mchoice:: lc_question1_1_3
           :answer_a: Syntax error
           :answer_b: Runtime error
           :answer_c: Semantic error
           :correct: a
           :feedback_a: You got it!
           :feedback_b: Runtime errors occur when syntax is well-formed, but an error occurs when the program is run. That's not the case here.
           :feedback_c: A semantic error occurs when a program runs, but gives the wrong results or behavior. This program doesn't run, as written.

           What type of error did the above program have?

    #.  **Football Scores** Suppose you've written the program below. The given program asks the user to input the number of touchdowns and field goals scored by an American football team, and prints out the team's score. (We generously assume that for each touchdown, the team always makes the extra point.)

        The European Union has decided that they want to start an American football league, and they want to use your killer program to calculate scores, but they like things that are multiples of 10 (e.g. the Metric System), and have decided that touchdowns will be worth 10 points (including the extra point they might score) and field goals are worth 5 points. Modify the program below to work on both continents, and beyond. It should ask the user how many points a touchdown is worth and how many points a field goal is worth. Then it should ask in turn for both the number of touchdowns and the number of field goals scored, and then print the team's total score.

        .. activecode:: lc_ex_1_4

            num_touchdowns = input("How many touchdowns were scored? ")
            num_field_goals = input("How many field goals were scored? ")

            total_score = 7 * int(num_touchdowns) + 3 * int(num_field_goals)

            print("The team has", total_score, "points")

Weekly Graded Assignment
========================

.. container:: full_width

    This is a tricky one!

    You have a thermostat that allows you to set the room to any temperature between 40 and 89 degrees.

    The thermostat can be adjusted by turning a circular dial. For instance, if the temperature is set to 50 degrees and you turn the dial 10 clicks toward the left, you will set the temperature to 40 degrees. But if you keep turning 1 click to the left (represented as -1) it will circle back around to 89 degrees. If you are at 40 degrees and turn to the right by one click, you will get 41 degrees. As you continue to turn to the right, the temperature goes up, and the temperature gets closer and closer to 89 degrees. But as soon as you complete one full rotation (50 clicks), the temperature cycles back around to 40 degrees.

    Write a program that calculates the temperature based on how much the dial has been turned. The number of clicks (from the starting point of 40 degrees) is contained in a variable. You should print the current temperature for each given click variable so that your output is as follows: ::

        The temperature is 40
        The temperature is 89
        The temperature is 64
        The temperature is 41
        The temperature is 89
        The temperature is 40

    .. activecode:: lc_ex_1_5

        #For each click variable, calculate the temperature and print it as shown in the instructions

        click_1 = 0
        # TODO calculate the temperature, and report it back to the user

        click_2 = 49
        # TODO calculate the temperature, and report it back to the user

        click_3 = 74
        # TODO calculate the temperature, and report it back to the user

        click_4 = 51
        # TODO calculate the temperature, and report it back to the user

        click_5 = -1
        # TODO calculate the temperature, and report it back to the user

        click_6 = 200
        # TODO calculate the temperature, and report it back to the user
