Exercises
---------

.. container:: full_width


    #.  Find and fix the error in the program.

        .. activecode:: lc_ex_1_1

            miles = input("How many miles do you have to drive? ")

            kilometers = miles * 1.60934

            pring("That distance is equal to", kilometers, "kilometers")

        .. mchoice:: lc_question1_1_1
           :answer_a: Syntax error
           :answer_b: Runtime error
           :answer_c: Semantic error
           :correct: b
           :feedback_a:
           :feedback_b:
           :feedback_c:

           What type of error did this program have?

    #.  Find and fix the error in the program.

        .. activecode:: lc_ex_1_2

            spins = input("How many times did you spin? (Enter a negative number for couterclockwise spins) ")

            degrees = float(spins) * 360

            print("You are facing", degrees, "degrees relative to north")


        .. mchoice:: lc_question1_1_2
           :answer_a: Syntax error
           :answer_b: Runtime error
           :answer_c: Semantic error
           :correct: c
           :feedback_a:
           :feedback_b:
           :feedback_c:

           What type of error did this program have?

    #.  Find and fix the error in the program. syntax error - mispelled variable name

        .. activecode:: lc_ex_1_3

        .. mchoice:: lc_question1_1_3
           :answer_a: Syntax error
           :answer_b: Runtime error
           :answer_c: Semantic error
           :correct: a
           :feedback_a:
           :feedback_b:
           :feedback_c:

           What type of error did this program have?

    #.  **Football Scores** Suppose you've written the program below. The given program asks the user to input the number of touchdowns and field goals scored by a (American) football team, and prints out the team's score. (We assume that for each touchdown, the team always makes the extra point.)

    The European Union has decided that they want to start a football league, and they want to use your killer program to calculate scores, but they like things that are multiples of 10 (e.g. the Metric System), and have decided that touchdowns will be worth 10 points and field goals are worth 5 points. Modify the program below to work on both continents, and beyond. It should ask the user how many points a touchdown is worth and how many points a field goal is worth. Then it should ask for the number of each touchdowns / field goals scored, and print the team's total score.

        .. activecode:: lc_ex_1_4

            num_touchdowns = input("How many touchdowns were scored? ")
            num_field_goals = input("How many field goals were scored? ")

            total_score = 7 * int(num_touchdowns) + 3 * int(num_field_goals)

            print("The team has", total_score, "points")


    #.  (GRADED) jesse problem

        .. activecode:: lc_ex_1_5
