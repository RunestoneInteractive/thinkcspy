.. index:: debugging, problem solving

Principles of Problem Solving
------------------------------

Problem solving is a skill that gets better with practice. Each problem is different, and will challenge your brain in new ways. While there are approaches and analysis techniques you can use, each problem will have elements that make it unique.

An example of a great problem solver is Sherlock Holmes. Sherlock solves problems by combining analysis with intuition built up over time. To the outsider, Sherlock's skills of deduction seem super-human --- and in the world of fiction, they sometimes are --- but there is always a logic behind his deductions. So let's turn you into a coding Sherlock!

To get started, there are a few principles to keep in mind when solving problems. Some apply to every situation, some apply only to specific situations.

View these as tools and approaches to use when you get stuck. If you can solve a problem without deliberately employing any of these principles, then that's great. But if you get stuck, come back to these in order to find some direction forward.

Don't Panic!
=================

This is the first, second, third, and last principle of problem solving. It's a big one. When we first face a problem a common and natural reaction is for a sense of anxiety to creep up.

  *What if I can't figure this out?*

  *I'm not smart enough to figure this out!*

  *Somebody else in class is going to figure this out before me, because I'm not as smart.*

  *If I can't do this, my teacher/TA/classmates will know that I don't really understand things!*

We've all thought these things, explicitly or implicitly, at some point. We refer to these types of thoughts as our "demons of doubt". We carry them around with us, and occasionally they become louder and need to be squashed.

Panicking, or letting the demons of doubt poke at us, will not make solving the problem any easier. On the contrary, panicking will make finding the solution much harder. Mental energy will be expended in a negative direction, distracting us from the problem at hand, and preventing full mental clarity.

You will sometimes feel anxiety creep in when starting a new problem. This is natural. When this happens, just acknowledge it and put it aside. Remember that almost every problem you face has been faced, and solved or overcome, by others. If you "keep calm and carry on", you, too, will be able to find the solution. Everyone might reach this solution at a different pace, but that is not important; it certainly is no reason to judge yourself or others. Sometimes when it takes you longer to solve a certain problem, it also makes it more likely that you'll remember and be able to utilize that solution in the future, since you took the time to understand the problem so thoroughly.

In fact, the coders you see breezing through problems and easily debugging code have likely spent hours and hours stuck on many small problems and bugs throughout the early years of their career. You get better at problem solving and debugging the more you do it. Like most things, it's practice that makes you improve and eventually excel at coding.

So the next time you encounter a bug in your program, or you face a new problem and have no idea how to begin, remember that this is an opportunity to learn something new that you will be able to use for the rest of your coding career. If you want to be an outstanding programmer, then bugs and difficult problems are your teachers and your best friends.

Restate the Problem
====================

When a problem is presented to you, in writing or verbally, restating the problem ensures that you understand precisely what you're being asked to do.

Here are a few ways you can do this:

1. Restate the problem to yourself, in your head or out loud, without looking at the problem statement.

2. Write the problem down on paper, in your own words, without looking at the problem statement.

3. Restate the problem to a classmate, coworker, friend, or teacher. Again, do this without looking at the problem statement.

These three restatement strategies are not equal. In fact, this list is in order of *increasing effectiveness*. Restating a problem to yourself in your head is useful, but leaves plenty of opportunity for some of the details of the problem to go undiscovered. Something can sound nice and clear to us, only to later seem to become more complicated. In such situations, it's usually not the case that the complexity of the situation has increased, but just that we have uncovered some previously unnoticed complexity.

On the other hand, by stating the problem out loud to another person, your brain will be forced to work through it in new ways. There's a maxim that teachers sometime quote:

  "You don't really understand something until you can teach it to somebody else."

While this idea definitely applies to our problem solution --- we don't really understand our solution unless we can clearly communicate it to somebody else --- it also applies to understanding the problem statement itself. This is even more beneficial when you describe the problem to a person who will ask you questions instead of just listening. A lot of times those questions help tease out complexities you had not thought of; other times just the act of clarifying a detail or aspect of the problem for someone else will give you a completely new idea for how to approach the solution.

.. note::

  This habit of restating a problem to others is related to another excellent study habit, that of explaining everything you are learning to someone else. When you finish reading a chapter, or as you work through the exercises in this book, give a mini-lecture aloud of what the important lessons were, or talk through your problem solving process as you code up your answers. Note that you do not even need for there to be another person listening for this study habit to be effective. Just speaking these things aloud, from memory, is what will help you to really solidify your understanding.

If there is not somebody nearby to restate the problem to, restating the problem in writing can be more effective than simply restating it in your own head. Forcing the problem out of your brain, through your fingers, and onto the page (or computer screen) will cause neurons to fire in new ways.

This step is crucial. If you cannot clearly restate the problem, then you should not begin an attempt to solve it. Doing so would be like trying to drive somewhere without knowing the destination. You might end up at your destination by sheer luck, but even if you do, would you know for sure you were at the right place? We will rarely be in a situation where we are presented with a detailed map, but we must at least start out with a clear idea of where we want to end up.

Outline the Problem
====================

Once you understand the situation at hand, and the desired outcome, you need to understand the elements at play. At this point, the approach you use will depend on the dynamics of the problem, but here are two strategies for outlining the problem in a bit more detail.

1. **Write down what you know.** Given the problem statement, what facts do you have at hand? Are there any basic inferences that you can make from the given facts?

2. **Subdivide the problem.** Are there any subtasks or subproblems that will need to be carried out or solved in order to reach the ultimate solution? Write these down. This needn't be an exhaustive list of every step, or every line of code, but it should contain a level of detail beyond the problem statement itself.

  Think of what we learned about functions. Each function should ideally handle one task, so if there are a lot of tasks involved in solving this problem, start dividing them up into separate functions. Sometimes just naming each little task is all you need do to know what to name the function handling it and what it should basically do.

Examining the problem at this additional level of detail will often expose specific areas that will be particularly challenging. Sometimes, you will even find one or more pieces that you do not fully understand. This is a chance to review those pieces before diving into the nitty gritty of the problem.

Reduce the Problem
===================

When it's not clear how to approach a problem, make the problem smaller. This will give you a stepping stone on the path to the ultimate solution. Solving a smaller version of the problem can often reveal an approach that can be generalized to the larger problem. Below are a few examples.

.. topic::
  **Problem:** Write a function that checks if three different conditions are true

  **Reduced Problem 1:** Write a function that checks if the first condition is true

  **Reduced Problem 2:** Write a function that checks if the second condition is true

  **Reduced Problem 3:** Write a function that checks if the third condition is true

.. topic::
  **Problem:** Write a program that makes an image darker.

  **Reduced Problem 1:** Write a program that makes a pixel-by-pixel copy of an image

  **Reduced Problem 2:** Write a program that makes a single pixel darker.

.. topic::
  **Problem:** Write a function that takes a list of integers, and returns the largest integer in the list.

  **Reduced Problem:** Write a function that takes a list with exactly two integers, and returns the larger of the two.

Look for Similarities
=====================

Have you solved a problem that has some similarities to the one at hand? If so, go back and review that solution. Think about how the problems are similar, and how they are different. Are any of the techniques you used then applicable now? What new techniques will you need to learn or utilize to solve this new problem?

Don't Panic!
============

It's worth saying again. For a difficult problem, you will need all of your mental energy to work out a solution, and anxiety will not help you arrive at a solution.

When this feeling starts to creep in, come back to these principles, and just take it one step at a time.
