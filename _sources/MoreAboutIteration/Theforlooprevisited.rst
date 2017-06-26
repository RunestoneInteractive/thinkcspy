..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell. Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. index:: for loop, accumulator pattern, assignment

The for Loop Revisited
--------------------------

Recall that the ``for`` loop processes each item in a list. Each item in turn is assigned to the loop variable --- also called the iterator variable --- and the body of the loop is executed. We saw this example in an earlier chapter.

.. activecode:: iteration_for1

    for guest in ["Joe", "Amy", "Brad", "Angelina", "Zuki", "Thandi", "Paris"]:
        print("Hi", guest, ". Please come to my party on Saturday")


We have also seen iteration and variable updating in the form of the accumulator pattern. For example, to compute the sum of the first ``n`` integers, we could create a ``for`` loop using the ``range`` function to produce the numbers 1 through ``n``. Using the accumulator pattern, we can start with a running total variable initialized to 0 and on each iteration, add the current value of the loop variable to the total. A function to compute this sum is shown below.

.. activecode:: iteration_summation

    def sum_to(n):
        sum = 0
        for num in range(1, n+1):
            sum = sum + num

        return sum

    print(sum_to(4))

    print(sum_to(1000))

To review, the variable ``sum`` is called the accumulator. It is initialized to zero before we start the loop. The loop variable, ``num`` will take on the values produced by the ``range(1, n+1)`` function call. Note that this produces all the integers from 1 up to the value of ``n``.  If we had not added 1 to ``n``, the range would have stopped one value short since ``range`` does not include the upper bound in the returned list.

The assignment statement, ``sum = sum + num``, updates ``sum`` each time through the loop. This accumulates the running total. Finally, we return the value of the accumulator.
