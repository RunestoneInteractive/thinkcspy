..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell. Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. index:: loop body, iteration, flow of control, break, continue

break and continue Statements
------------------------------

Python includes ways to make your loops even more modifiable. There are times when you will want to change the typical flow of control of the loop body itself. For these instances, Python has ``break`` and ``continue`` statements that allow you to precisely tweak the flow of control in both your ``for`` and ``while`` loops.

For example, there are times when you may want to terminate your loop if a given condition --- besides the controlling condition --- is met. This is where the ``break`` statement is useful. Looking at our previous ``while`` loop code, let's say that we want to terminate the loop not only if the value of ``num`` exceeds the value of ``n``, but also if the value of ``num`` exceeds 100. We could amend our code as follows to allow for that condition. (Note that we'll also refactor to include a ``main`` function.)

.. activecode:: iteration_break

    def sum_to(n):
        """ Return the sum of 1+2+3 ... n, up to 100"""

        sum = 0
        num = 0

        while num <= n:
            sum = sum + num
            num = num + 1

            if num > 100:
                break

        return sum

    def main():
        print(sum_to(4))
        print(sum_to(100))
        print(sum_to(500))

    if __name__ == "__main__":
        main()

You can see from the print statements that the last two calls to ``sum_to`` returned the same result. The flow of control for the last function call was to execute the ``while`` loop until, inside the loop body, the ``if num > 100`` condition became ``True``. When that happened, the ``break`` statement executed and the flow of execution moved outside of the while loop and down to the ``return`` statement. Unlike the ``continue`` statement, which we will examine next, the ``break`` statement **did not**  cause the flow of control to return again to the loop header to check the controlling condition of ``num <= n``.

The flow of control for the ``continue`` statement is, like the ``break`` statement, to halt execution of the loop body when a given condition is met. But unlike the ``break`` statement, the flow of execution does not move outside the loop entirely and onto the next statement after it. Instead, the flow of execution "continues" by returning to the loop header and checking the controlling condition again.

Now let's look at a modification we can make to our example that will use the ``continue`` statement. Let's say that we only want to add to the ``sum`` numbers which are odd. We still want the range of numbers to be from 1 up to ``n``, but we only want to add the odd numbers to our running total. Obviously, the ``break`` statement wouldn't be a good choice for this task, since if we make the condition for the break be ``if num % 2 == 0``, then the loop would be exited the first time we encountered an even number. Not at all what we want! Instead, we want to skip adding even numbers to our running total, but we still want to iterate through all the numbers in our range. We can use the ``continue`` statement to accomplish this:

.. activecode:: iteration_continue

    def sum_to(n):
        """ Return the sum of odd numbers from 1 to n """

        sum = 0
        num = 0

        while num <= n:
            if num % 2 == 0:
                num = num + 1
                continue

            sum = sum + num
            num = num + 1

        return sum

    def main():
        print(sum_to(4))
        print(sum_to(100))

    if __name__ == "__main__":
        main()

Note that we have to increment ``num`` inside the ``if`` statement in order to avoid an infinite loop. If we only increment it outside of that statement, then the ``while`` loop would go on "continuing" forever!

**Check your understanding**

.. mchoice:: test_question_iteration_3_1
   :answer_a: a
   :answer_b: b
   :answer_c: c
   :correct: c
   :feedback_a: Since even numbers would result in a True value for this condition, the continue statement would execute and therefore you would not add the even number to the total; you'd only be adding odd numbers to the total.
   :feedback_b: This is the correct testing condition, but you don't want to use a break statement since that would result in not adding any number to the total since the first number that is tested is 1 and then we would break out of the loop entirely.
   :feedback_c: If a number is odd (not evenly divisible by 2), then you want to move back up to the loop controlling condition without adding that number to the running total.

   Which 2 lines of code could you add to the following ``for`` loop, before ``sum = sum + num``, in order to add only *even* numbers in the range to the running total?

   .. code-block:: Python

      def sum_to(n):
          sum = 0
          for num in range(1, n+1):
              sum = sum + num

          return sum

      print(sum_to(500))

    ::

      a. if num % 2 == 0:
             continue

      b. if num % 2 != 0:
             break

      c. if num % 2 != 0:
             continue
