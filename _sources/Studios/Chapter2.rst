:orphan:

..  Copyright (C) 2011  Brad Miller and David Ranum
    Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

Studio: Holiday
===============

Pre-studio
----------

For the pre-studio, we created a tip calculator. This allowed us to work with input and output, and type conversion functions. We also used comments to stub out our file before coding.

.. raw:: html

    <div style="text-align:center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/-dUeQI-3i1I" frameborder="0" allowfullscreen></iframe></div>

.. activecode:: prestudio_2

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

.. activecode:: ex_2_4
