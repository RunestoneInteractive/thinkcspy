..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell. Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: func-8-
   :start: 1

.. index:: input, output, processing, program development, incremental development

Program Development
-------------------

At this point, you should be able to look at complete functions and tell what they do. Also, if you have been doing the exercises, you have already written some small functions. As you write larger functions, you might start to have more difficulty, especially with runtime and semantic errors.

To deal with increasingly complex programs, we are going to suggest a technique called **incremental development**. The goal of incremental development is to avoid long debugging sessions by adding and testing only a small amount of code at a time.

Let's first demonstrate this technique using a simple example. Suppose you want to write a program that calculates the average daily miles traveled on a road trip using the readings from the odometer from before and after the journey, and how many days were spent driving.

The first step is to consider what a ``daily_miles_traveled`` function should look like in Python. In other words, what is the input (parameters), what is the output (return value), and what kind of processing do you need to do with the input to produce that output?

In this case, the two odometer readings and the number of days traveled are the inputs, which we can represent using three parameters. The return value is the average miles traveled, which is a floating-point value. We'll tackle the processing part of this program in a moment.

Already we can write an outline of the function that captures our thinking so far.

.. sourcecode:: python

    def daily_miles_traveled(before, after, days):
        return 0.0

Obviously, this version of the function doesn't compute an actual average; it always returns zero. But it is syntactically correct, and it will run, which means that we can test it before we make it more complicated by adding the processing logic.

To test the new function, we call it with sample values.

.. activecode:: ch06_distance1

    def daily_miles_traveled(before, after, days):
        return 0.0

    def main():
        print(daily_miles_traveled(1000.0, 1500.5, 5))

    if __name__ == "__main__":
        main()


We chose these values because they are easy to work with. We can quickly figure out in our head that the total miles traveled are *500.5* and since there are 5 days spent driving, that equals an average of *100.1* miles traveled per day. When testing a function, it is useful to know what the right answer will be so you can quickly tell if your program is producing the correct output.

At this point we have confirmed that the function is syntactically correct, and we can start adding lines of code to do the processing (computing). After each incremental change, we test the function again. If an error occurs at any point, we know where it must be --- in the last line we added.

A logical first step in the computation is to find the difference between the two odometer readings, ``before`` and ``after``.

.. sourcecode:: python

    def daily_miles_traveled(before, after, days):
        total_miles = after - before
        return total_miles

    def main():
        print(daily_miles_traveled(1000.0, 1500.5, 5))

    if __name__ == "__main__":
        main()

At this point, we return the total miles traveled just to check that we are getting the expected result of *500.5*. Next we can compute our desired final output, the average miles traveled per day.

.. sourcecode:: python

    def daily_miles_traveled(before, after, days):
        total_miles = after - before
        average_miles = total_miles / days
        return average_miles

    def main():
        print(daily_miles_traveled(1000.0, 1500.5, 5))

    if __name__ == "__main__":
        main()


.. activecode:: ch06_milestraveledfinal

    def daily_miles_traveled(before, after, days):
        total_miles = after - before
        average_miles = total_miles / days
        return average_miles

    def main():
        print(daily_miles_traveled(1000.0, 1500.5, 5))

    if __name__ == "__main__":
        main()

Test this with a few different values to make sure it is working consistently. If that works correctly, you are done. Otherwise, examine the last line you added to confirm that the logic is correct and that it is free of typos.

When you start out, you might add only a line or two of code at a time. As you gain more experience, you might find yourself writing and debugging bigger conceptual chunks. As you improve your programming skills you should find yourself managing bigger and bigger chunks: this is very similar to the way we learned to read letters, syllables, words, phrases, sentences, paragraphs, etc., or the way we learn to chunk music --- from individual notes to chords, bars, phrases, and so on.

The key aspects of the process are:

#. Start with a working skeleton program and make small incremental changes. At any point, if there is an error, you will know exactly where it is.
#. Use temporary variables to hold intermediate values so that you can easily inspect and check them.
#. Once the program is working, you might want to consolidate multiple statements into compound expressions, but only do this if it does not make the program more difficult to read.
