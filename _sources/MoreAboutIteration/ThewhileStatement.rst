.. Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell. Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: iter-3-
   :start: 1

.. index:: while, flow of control, accumulator pattern, loop body, infinite loop, definite iteration, indefinite iteration

The while Statement
-----------------------

There is another Python statement that can also be used for iteration. It is called the ``while`` statement or a ``while`` loop. The ``while`` statement provides a much more general mechanism for iterating. Similar to the ``if`` statement, it uses a boolean expression to control the flow of execution. The body of the ``while`` loop will be repeated as long as the controlling boolean expression evaluates to ``True``.

The following figure shows the flow of control.

.. image:: Figures/while_flow.png

We can use the ``while`` loop to create any type of iteration we wish, including anything that we have previously done with a ``for`` loop. For example, the program in the previous section could be rewritten using ``while`` by taking the following steps.

Instead of relying on the ``range`` function to produce the numbers for our summation, we will need to produce them ourselves. To do this, *before* entering the ``while`` loop, we will create the variable called ``num`` and initialize it to 1, the first number in the summation. Every iteration will add ``num`` to the running total, and increment ``num`` to the next value, until all the desired values have been used.

In order to control the iteration, we must create a boolean expression that evaluates to ``True`` as long as we want to keep adding values to our running total. In this case, as long as ``num`` is less than or equal to the upper bound, we should keep going.

Here is a new version of the summation program that uses a ``while`` statement.

.. activecode:: iteration_while1

    def sum_to(n):
        """ Return the sum of 1+2+3 ... n """

        sum = 0
        num = 0

        while num <= n:
            sum = sum + num
            num = num + 1

        return sum

    print(sum_to(4))

    print(sum_to(1000))

You can almost read the ``while`` statement as if it were in natural language. It means, while ``num`` is less than or equal to ``n``, continue executing the body of the loop. Within the body, each time the loop executes, update ``sum`` using the accumulator pattern and increment ``num``. After the body of the loop finishes, we go back up to the condition of the ``while`` and reevaluate it. When ``num`` becomes greater than ``n``, the condition fails to be ``True`` and flow of control continues to the ``return`` statement, the next statement outside the ``while`` loop.

The same program in codelens will allow you to observe the flow of execution.

.. codelens:: iteration_while2
    :python: py3

    def sum_to(n):
        """ Return the sum of 1+2+3 ... n """

        sum = 0
        num = 0

        while num <= n:
            sum = sum + num
            num = num + 1

        return sum

    print(sum_to(4))


Here is the flow of execution for a ``while`` statement:

1. Evaluate the condition, which yields a value of ``False`` or ``True``.
2. If the condition is ``False``, exit the ``while`` statement and continue execution at the next statement after the loop body.
3. If the condition is ``True``, execute the statements in the body and then go back to step 1.

The body consists of all of the statements below the header and indented at least 4 spaces in from the header of the ``while`` loop.

This type of flow is called a **loop** because the third step loops back around to the top. Notice that if the condition is ``False`` the first time through the loop, the statements inside the loop are never executed.

The body of the loop should change the value of one or more variables so that eventually the condition becomes ``False`` and the loop terminates. Otherwise the loop will repeat forever. When this happens, the loop is called an **infinite loop**.

.. admonition:: Question

   Is it possible for a ``for`` loop to be an infinite loop?

Infinite loops are ubiquitous in programming --- every programmer accidentally writes one from time to time. They're such an established part of computer science history and culture that Apple named the street connecting the buildings on its corporate campus "Infinite Loop".

.. image:: Figures/infinite-loop-street.jpg

In the code shown above, if we had forgotten to increment the value of ``num`` within the loop body, we would wind up with an infinite loop. As it stands, however, we can prove that the loop terminates because we know that the value of ``n`` is finite, and we can see that the value of ``num`` increments each time through the loop, so eventually it will have to exceed ``n``. In other cases, it is not so easy to tell.

The ``for`` statement will always iterate through a sequence of values like a list of names or a list of numbers created by ``range``. Since we know that it will iterate once for each value in the collection, it is often said that a ``for`` loop creates a **definite iteration** because we definitely know how many times we are going to iterate.

On the other hand, the ``while`` statement is *dependent on a condition* that needs to evaluate to ``False`` in order for the loop to terminate. Since we do not necessarily know when (of even if) this will happen, it creates what we call **indefinite iteration**. Indefinite iteration simply means that we don't know how many times we will repeat. We expect that eventually the condition controlling the iteration will evaluate to ``False`` and the iteration will stop. (Unless we have an infinite loop, which is the problem we want to avoid.)

What you will notice here is that the ``while`` loop is more work for you, the programmer, than the equivalent ``for`` loop. When using a ``while`` loop you have to control the loop variable yourself. You give it an initial value, test for completion, and then make sure you update the program state in the body so that the loop eventually terminates.

So why have two kinds of loops if ``for`` looks easier? The short answer is that there are times when your program won't know, in advance of runtime, how many iterations it will need to perform. Later in this chapter we will see an example of indefinite iteration where we need this extra power we get from the ``while`` loop. But first, let's check your understanding.

**Check your understanding**

.. mchoice:: test_question_iteration_2_1
   :answer_a: True
   :answer_b: False
   :correct: a
   :feedback_a: Although the while loop uses a different syntax, it is just as powerful as a for loop and often more flexible.
   :feedback_b: Often a for loop is more natural and convenient for a task, but that same task can always be expressed using a while loop.

   True or False: You can rewrite any ``for`` loop as a ``while`` loop.

.. mchoice:: test_question_iteration_2_2
   :answer_a: n starts at 10 and is incremented by 1 each time through the loop, so it will always be positive
   :answer_b: answer starts at 1 and is incremented by n each time, so it will always be positive
   :answer_c: You cannot compare n to 0 in a while loop. You must compare it to another variable.
   :answer_d: In the while loop body, we must set n to False, and this code does not do that.
   :correct: a
   :feedback_a: The loop will run as long as n is positive. In this case, we can see that n will never become non-positive.
   :feedback_b: While it is true that answer will always be positive, answer is not considered in the loop condition.
   :feedback_c: It is perfectly valid to compare n to 0. Though indirectly, this is what causes the infinite loop.
   :feedback_d: The loop condition must become False for the loop to terminate, but n by itself is not the condition in this case.

   The following code contains an infinite loop. Which is the best explanation for why the loop does not terminate?

   .. code-block:: python

     n = 10
     answer = 1
     while n > 0:
         answer = answer + n
         n = n + 1
     print(answer)
