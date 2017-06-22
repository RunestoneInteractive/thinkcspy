Holiday
=======

*Studios are in-class activities to give you hands-on practice with new concepts. The first half is the Walkthrough, an instructor-led programming problem. The second half is for you to work on individually or in pairs in class.*

*These problems are not graded, and you are not obligated to finish them. Get as far as you can while in class, and use them as an opportunity to play with and solidify new concepts.*

Walkthrough
-----------

For the walkthrough in class, we will create a tip calculator. This will allow us to work with input and output, and type conversion functions. We'll also use comments to stub out our file before coding.

The program should prompt the user for the subtotal for their meal, along with the tip percentage, and print out the calculated tip.

.. activecode:: holiday_walkthrough

    #prompt the user for meal subtotal
    subtotal = input("Meal subtotal: ")
    subtotal = float(subtotal)

    # prompt the user for tip %
    tip_pct = input("Tip %: ")

    # convert % value to decimal value
    tip_pct = float(tip_pct) * 0.01

    #calculate the tip amount
    tip = subtotal * tip_pct

    # print tip amount
    print("Tip:",tip)


Studio
------

It is possible to name the days 0 through 6, where day 0 is Sunday and day 6 is Saturday. If you go on a wonderful holiday leaving on day 3 (a Wednesday) and you return home after 10 nights, you arrive home on day 6 (a Saturday).

Write a general version of the program which asks for the day number that your vacation starts on and the length of your holiday, and then tells you the number of the day of the week you will return on.

.. activecode:: holiday_studio
