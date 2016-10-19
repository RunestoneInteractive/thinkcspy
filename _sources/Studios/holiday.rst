Holiday
=======

Walkthrough
----------

For the walkthrough in class, we will create a tip calculator. This will allow us to work with input and output, and type conversion functions. We'll also use comments to stub out our file before coding.

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

It is possible to name the days 0 through 6 where day 0 is Sunday and day 6 is Saturday.  If you go on a wonderful holiday leaving on day number 3 (a Wednesday) and you return home after 10 nights.

Write a general version of the program which asks for the starting day number, and the length of your stay, and it will tell you the number of day of the week you will return on.

.. activecode:: holiday_studio
