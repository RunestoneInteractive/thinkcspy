Exercises
---------
.. container:: full_width

1.

    .. tabbed:: q1

        .. tab:: Question

            Solve the following non-coding problem to practice your problem solving skills.

            A farmer is on his way to market with a fox, a chicken, and a bag of corn. He must cross a river to get there. On the bank of the river is a boat that is big enough only for the farmer and one additional item, so he must take the three across one at a time.

            * If the farmer takes the fox first, the chicken will eat the corn.
            * If the farmer takes the corn first, the fox will eat the chicken.
            * If the farmer takes the chicken first, the fox *will not* eat the corn. However, he'll then have to take either the fox or corn on the next trip, and when left alone to return for the final item one of the first two situations will occur.

            How can the farmer get all three across without losing one?

        .. tab:: Answer

            We know that the following pairs can't be left alone: fox and chicken, chicken and corn. Therefore, we have to start with the chicken. If the farmer takes the chicken across, the corn and fox will be left alone, which is fine.

            When the farmer returns for the next item, he can choose either fox or corn next. Let's say he chooses the fox. The farmer takes the fox across the river. But then he can't leave the fox and chicken alone, so *he must take the chicken back with him*. This is the crucial detail to solve this problem.

            The farmer returns the chicken, picks up the bag of corn to take it across and leave with the fox, and then returns for the chicken.

2.

    .. tabbed:: q2

        .. tab:: Question

            Solve the following non-coding problem to practice your problem solving skills.

            You have three boxes that contain some combination of apples and oranges:

            * One has only apples
            * One has only oranges
            * One has both apples and oranges

            The boxes have labels signifying each of the three, but *each box is mislabeled*.

            You may ask for one item from one of the boxes to be shown to you. This item will be randomly pulled from the box.

            How can you figure out the correct labeling of the boxes?

        .. tab:: Answer

            Let's imagine the boxes lined up side-by-side. For convenience in discussing them, let's say box #1 is on the left, box #2 in the middle, and box #3 is on the right. Let's also assume that the labels are as follows:

            +-------+--------------------+
            | Box # | Label              |
            +-------+--------------------+
            | 1     | Apples             |
            +-------+--------------------+
            | 2     | Apples and Oranges |
            +-------+--------------------+
            | 3     | Oranges            |
            +-------+--------------------+

            The most important detail in the problem statement is that *all of the boxes are mislabeled*. This gives us the following options.

            +-------+--------------------+-----------------------------+
            | Box # | Label              | Possible Correct Labels     |
            +-------+--------------------+-----------------------------+
            | 1     | Apples             | Oranges, Apples and Oranges |
            +-------+--------------------+-----------------------------+
            | 2     | Apples and Oranges | Apples, Oranges             |
            +-------+--------------------+-----------------------------+
            | 3     | Oranges            | Apples, Apples and Oranges  |
            +-------+--------------------+-----------------------------+

            The next key observation is that if we determine the correct label for any one of the boxes, we'll know the correct label for the others by elimination. For example, if we know that box #1 actually contains Oranges only, then that will eliminate Oranges as the possible label for box 2, which will in turn eliminate Apples as the possibility for box #3.

            Therefore we want to find a strategy that allows us to determine the correct label for a single box. Since we're only given one choice of box to see one item from, the only choice that will work is box #2. If we're shown one item from box #2 and it is an orange, we'll know that it must contain oranges only. On the other hand, were we to ask for one item from box #1 and be given an orange, we would still be left with the 2 possibilities listed.

            So our strategy is to ask for an item from box #2. For the sake of example, let's assume we're given an orange. Then we know that the correct labels have to be:

            +-------+--------------------+---------------------+
            | Box # | Label              | Correct Labels      |
            +-------+--------------------+---------------------+
            | 1     | Apples             | Apples and Oranges  |
            +-------+--------------------+---------------------+
            | 2     | Apples and Oranges | Oranges             |
            +-------+--------------------+---------------------+
            | 3     | Oranges            | Apples              |
            +-------+--------------------+---------------------+

            If we're given an apple from box #2, a similar scenario plays out and the correct labels are:

            +-------+--------------------+---------------------+
            | Box # | Label              | Correct Labels      |
            +-------+--------------------+---------------------+
            | 1     | Apples             | Oranges             |
            +-------+--------------------+---------------------+
            | 2     | Apples and Oranges | Apples              |
            +-------+--------------------+---------------------+
            | 3     | Oranges            | Apples and Oranges  |
            +-------+--------------------+---------------------+

3.

    .. tabbed:: q3

        .. tab:: Question

            Solve the following non-coding problem to practice your problem solving skills.

            You have a job in the quality control department at a ball factory. A coworker left behind 10 boxes of balls. You know that each normal ball weighs 10g, and each defective ball weighs 9g. There are nine boxes consisting of only normal balls, and one box of only defective balls.

            You have a digital scale and can take only one measurement. How can you determine which box contains the defective balls?

        .. tab:: Answer

            This one requires a much higher degree of creativity than the previous problems. Many students find this extremely difficult.

            Since we only have one chance to use the scale, we must think of a technique that will work no matter which box has the defective/lighter balls.

            Suppose we line up the boxes left-to-right, numbered 1-10. Let's take one ball from box #1, two balls from box #2, three balls from box #3, and so on. This will give us 55 balls.

            If we weigh them, we will get a measurement ``w`` that is some number of grams less than 550g, since that would be the weight if all of the balls weighed 10g. Consider the difference:

              ``d = 550 - w``

            This difference will be between 1 and 10, since only one box has 9g balls, and we took between 1 and 10 balls from that box. In fact, this difference tells us which box has the 9g balls. For example, if the difference is 5g, then we know that there were 5 9g balls in the group that we weighted, and thus those balls came from box #5. In general, the difference ``d`` indicates the number of the box containing the defective balls.

4.

    .. tabbed:: q4

        .. tab:: Question

            Fill out the ``main`` function below so that you handle two exceptions that may be raised by your call to ``some_function``. If this function raises a ``ValueError``, print "value error happening now"; if this function raises a ``UnicodeError``, print "unicode error happening now". Make sure your code can handle both errors. (Note: since ``some_function`` isn't filled out, neither exception will be raised when you run the program.)

            .. activecode:: exceptions_ex4

              def some_function():
                  # Imagine code that could raise value or unicode errors
                  pass

              def main():
                  # Put your exception handling code below
                  some_function()

              if __name__ == "__main__":
                  main()

        .. tab:: Answer

            .. activecode:: exceptions_answer4

              def some_function():
                  # Imagine code that could raise value or unicode errors
                  pass

              def main():
                  try:
                      some_function()
                  except UnicodeError:
                      print("unicode error happening now")
                  except ValueError:
                      print("value error happening now")

              if __name__ == "__main__":
                  main()

These next several problems are variations on a theme. Each will have you return a string that consists of a shape built out of ``#`` (hash) characters. It is left up to you to add the code you would need to run your functions (i.e., adding a ``main`` function and calling the respective function). These problems build in difficulty, and are examples in how solving smaller problems can lead you to incrementally build the solutions to larger problems.

5.

    .. tabbed:: q5

        .. tab:: Question

            Write a function ``line(n)`` that returns a line with exactly ``n`` hashes.

            **Example:**
              ``print(line(5))``

            **Output:**
              ``#####``

            .. activecode:: exceptions_ex5



        .. tab:: Answer

            .. activecode:: exceptions_answer5

              def line(n):
                  line_str = ''
                  for i in range(n):
                      line_str = line_str + '#'

                  return line_str

              def main():
                  print(line(5))

              if __name__ == "__main__":
                  main()

6.

    .. tabbed:: q6

        .. tab:: Question

            Write a function ``square(n)`` that returns an ``n`` by ``n`` square of hashes. Utilize your ``line`` function.

            **Example:**
              ``print(square(5))``

            **Output:**

            .. code-block:: Python

              #####
              #####
              #####
              #####
              #####

            .. activecode:: exceptions_ex6


        .. tab:: Answer

            .. activecode:: exceptions_answer6

              def line(n):
                  line_str = ''
                  for i in range(n):
                      line_str = line_str + '#'

                  return line_str

              def square(n):
                  square_str = ''
                  for i in range(n):
                      square_str += (line(n) + '\n')
                  return square_str

              def main():
                  print(square(5))

              if __name__ == "__main__":
                  main()

7.

    .. tabbed:: q7

        .. tab:: Question

            Write a function ``rectangle(width, height)`` that returns a rectangle of the width and height given by the parameters. Again, utilize your ``line`` function to do this.

            **Example:**
              ``print(rectangle(5, 3))``

            **Output:**

            .. code-block:: Python

              #####
              #####
              #####

            .. activecode:: exceptions_ex7


        .. tab:: Answer

            .. activecode:: exceptions_answer7

              def line(n):
                  line_str = ''
                  for i in range(n):
                      line_str = line_str + '#'

                  return line_str

              def rectangle(width, height):
                  rectangle_str = ''
                  for i in range(height):
                      rectangle_str += (line(width) + '\n')

                  return rectangle_str

              def main():
                  print(rectangle(5, 3))

              if __name__ == "__main__":
                  main()

8.

    .. tabbed:: q8

        .. tab:: Question

            Write a function ``stairs(n)`` that prints the pattern shown below, with height ``n``.  Again, utilize your ``line`` function to do this.

            **Example:**
              ``stairs(5))``

            **Output:**

            .. code-block:: Python

              #
              ##
              ###
              ####
              #####

            .. activecode:: exceptions_ex8


        .. tab:: Answer

            .. activecode:: exceptions_answer8

              def line(n):
                  line_str = ''
                  for i in range(n):
                      line_str = line_str + '#'

                  return line_str

              def stairs(n):
                  stair_str = ''
                  for level_len in range(n):
                      stair_str += (line(level_len+1) + '\n')

                  return stair_str

              def main():
                  print(stairs(5))

              if __name__ == "__main__":
                  main()

9.

    .. tabbed:: q9

        .. tab:: Question

            Write a function ``space_line(spaces, hashes)`` that returns a line with exactly the specified number of spaces, followed by the specified number of hashes.

            **Example:**
              ``print(space_line(3,5))``

            **Output:**

            .. code-block:: Python

              #This is where the edge is, so there's 3 spaces before hashes
                 #####

            .. activecode:: exceptions_ex9


        .. tab:: Answer

            .. activecode:: exceptions_answer9

              def space_line(spaces, hashes):
                  return spaces * ' ' + hashes * '#'

              def main():
                  print(space_line(3, 5))

              if __name__ == "__main__":
                  main()

10.

    .. tabbed:: q10

        .. tab:: Question

            Write a function ``triangle(n)`` that returns an upright triangle of height ``n``.

            **Example:**
              ``print(triangle(5))``

            **Output:**

            .. code-block:: Python

                    #
                   ###
                  #####
                 #######
                #########

            .. activecode:: exceptions_ex10


        .. tab:: Answer

            .. activecode:: exceptions_answer10

              def space_line(spaces, hashes):
                  return spaces * ' ' + hashes * '#'

              def triangle(n):
                  triangle_str = ''
                  for i in range(n):
                      triangle_str += (space_line(n-i-1, 2*i+1) + '\n')
                  return triangle_str

              def main():
                  print(triangle(5))

              if __name__ == "__main__":
                  main()

11.

    .. tabbed:: q11

        .. tab:: Question

            Write a function ``diamond(n)`` that returns a diamond where the triangle formed by the top portion has height ``n``. Notice that this means the diamond has ``2n - 1`` rows.

            **Example:**
              ``diamond(5))``

            **Output:**

            .. code-block:: Python

                    #
                   ###
                  #####
                 #######
                #########
                 #######
                  #####
                   ###
                    #

            .. activecode:: exceptions_ex11


        .. tab:: Answer

            .. activecode:: exceptions_answer11

              def space_line(spaces, hashes):
                  return spaces * ' ' + hashes * '#'

              def triangle(n):
                  triangle_str = ''
                  for i in range(n):
                      triangle_str += (space_line(n-i-1, 2*i+1) + '\n')
                  return triangle_str

              def diamond(n):
                  diamond_str = triangle(n)
                  for i in range(n-2, -1, -1):
                      diamond_str += (space_line(n-i-1, 2*i+1) + '\n')
                  return diamond_str

              def main():
                  print(diamond(5))

              if __name__ == "__main__":
                  main()
