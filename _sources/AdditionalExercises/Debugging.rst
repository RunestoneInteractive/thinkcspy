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


#.  (GRADED) *Coming soon...*

    .. activecode:: lc_ex_1_5
