Exercises
---------


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

#.  Picture a compass where north represents 0 degrees, east represents, 90 degrees, and so on, all the way around to 360 degrees, which is again the same as 0 degrees: true north.

    The program below envisions the scenario in which a person is facing north (aka 0 degrees) and spins some number of rotations, either clockwise or counter-clockwise (-1 represents a full counter-clockwise spin, 1 a full clockwise spin). It calculates the direction they end up facing in degrees. However, it doesn't work properly. Find and fix the error in the program.

    .. activecode:: lc_ex_1_2

        spins = input("How many times did you spin? (Enter a negative number for couter-clockwise spins) ")

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

#.  You've written a program to convert degrees celsius to degrees fahrenheit. The program below makes the conversion in the opposite direction, from fahrenheit to celsius. However, it doesn't work properly. Find and fix the error in the program.

    .. activecode:: lc_ex_1_3

        currentTemp_string = input("Enter a temperature in degrees fahrenheit: ")
        currentTemp = int(currentTemp_string)

        currentTmpCelsius = (currentTmp - 32) * (5/9)
        print("The temperature in Celsius is:", currentTmpCelsius)

    .. mchoice:: lc_question1_1_3
       :answer_a: Syntax error
       :answer_b: Runtime error
       :answer_c: Semantic error
       :correct: a
       :feedback_a: You got it!
       :feedback_b: Runtime errors occur when syntax is well-formed, but an error occurs when the program is run. That's not the case here.
       :feedback_c: A semantic error occurs when a program runs, but gives the wrong results or behavior. This program doesn't run, as written.

       What type of error did the above program have?

#.  **Football Scores** Suppose you've written the program below. The given program asks the user to input the number of touchdowns and field goals scored by a (American) football team, and prints out the team's score. (We assume that for each touchdown, the team always makes the extra point.)

    The European Union has decided that they want to start an American football league, and they want to use your killer program to calculate scores, but they like things that are multiples of 10 (e.g. the Metric System), and have decided that touchdowns will be worth 10 points and field goals are worth 5 points. Modify the program below to work on both continents, and beyond. It should ask the user how many points a touchdown is worth and how many points a field goal is worth. Then it should ask for the number of each touchdowns / field goals scored, and print the team's total score.

    .. activecode:: lc_ex_1_4

        num_touchdowns = input("How many touchdowns were scored? ")
        num_field_goals = input("How many field goals were scored? ")

        total_score = 7 * int(num_touchdowns) + 3 * int(num_field_goals)

        print("The team has", total_score, "points")


#.  (GRADED) This is a tricky one!

    You have a thermostat that allows you to set the room to any temperature between 40 and 90 degrees.

    The thermostat can be adjusted by turning a circular dial. If you turn the dial all the way to the left, you will set the temperature to 40 degrees. If you turn to the right by one click, you will get 41 degrees. As you continue to turn to the right, the temperature goes up, and the temperature gets closer and closer to 90 degrees. But as soon as you complete one full rotation (50 clicks), the temperature cycles back around to 40 and starts over.

    Write a program that calculates the temperature based on how much the dial has been rotated. You should prompt he user for a number of clicks-to-the-right. Then you should print the current temperature.

    Here is an example of how your program should behave (When you see `>>>`, that line represents what the user is typing in):

    .. sourcecode:: python

        By how many clicks has the dial been rotated?
        >>> 0
        The temperature is 40

        By how many clicks has the dial been rotated?
        >>> 24
        The temperature is 64

        By how many clicks has the dial been rotated?
        >>> 74
        The temperature is 64

        By how many clicks has the dial been rotated?
        >>> 49
        The temperature is 89

        By how many clicks has the dial been rotated?
        >>> 51
        The temperature is 41

        By how many clicks has the dial been rotated?
        >>> -1
        The temperature is 89

    .. activecode:: lc_ex_1_5

        clicks = input("By how many clicks has the dial been rotated?")

        # TODO calculate the temperature, and report it back to the user
        
