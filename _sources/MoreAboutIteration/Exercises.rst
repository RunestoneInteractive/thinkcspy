..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell. Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".


Exercises
---------

.. container:: full_width


    #. Write a function ``print_triangular_numbers(n)`` that prints out the first ``n`` triangular numbers. A call to ``print_triangular_numbers(5)`` would produce the following output::

           1
           3
           6
           10
           15

       (*Hint: use a web search to find out what a triangular number is.*)

       .. activecode:: ex_iter_triangle


    #. Modify the walking turtle program so that rather than a 90 degree left or right turn the angle of the turn is determined randomly at each step.

        .. activecode:: ex_turtle_modify_walk
           :nocodelens:


    #.

        .. tabbed:: q3

            .. tab:: Question

               Modify the turtle walk program so that you have two turtles each with a random starting location. Keep the turtles moving until one of them leaves the screen.

               .. activecode:: ex_turtle_two_walk
                  :nocodelens:

            .. tab:: Answer

                .. activecode:: q3_answer
                    :nocodelens:

                    import random
                    import turtle

                    def move_random(wn, t):
                        coin = random.randrange(0,2)
                        if coin == 0:
                            t.left(90)
                        else:
                            t.right(90)

                        t.forward(50)

                    def are_colliding(t1, t2):
                        if t1.distance(t2) < 2:
                            return True
                        else:
                            return False

                    def is_in_screen(w, t):
                        left_bound = - w.window_width() / 2
                        right_bound = w.window_width() / 2
                        top_bound = w.window_height() / 2
                        bottom_bound = -w.window_height() / 2

                        turtleX = t.xcor()
                        turtleY = t.ycor()

                        still_in = True
                        if turtleX > right_bound or turtleX < left_bound:
                            still_in = False
                        if turtleY > top_bound or turtleY < bottom_bound:
                            still_in = False
                        return still_in

                    def main():
                        t1 = turtle.Turtle()
                        t2 = turtle.Turtle()
                        wn = turtle.Screen()

                        t1.shape('turtle')
                        t2.shape('circle')

                        left_bound = -wn.window_width() / 2
                        right_bound = wn.window_width() / 2
                        top_bound = wn.window_height() / 2
                        bottom_bound = -wn.window_height() / 2

                        t1.up()
                        t1.goto(random.randrange(left_bound, right_bound),
                                random.randrange(bottom_bound, top_bound))
                        t1.setheading(random.randrange(0, 360))
                        t1.down()

                        t2.up()
                        t2.goto(random.randrange(left_bound, right_bound),
                                random.randrange(bottom_bound, top_bound))
                        t2.setheading(random.randrange(0, 360))
                        t2.down()

                        while is_in_screen(wn, t1) and is_in_screen(wn, t2):
                            move_random(wn, t1)
                            move_random(wn, t2)

                        wn.exitonclick()

                    if __name__ == "__main__":
                        main()


    #. Modify the previous turtle walk program so that the turtle turns around when it hits the wall or when one turtle collides with another turtle.

       .. activecode:: ex_turtle_walk_turn
          :nocodelens:

    #.

        .. tabbed:: q5

            .. tab:: Question

               Here's the start of a program for a weight training app that coaches users on how much weight they should lift for each of these three lifts: squat, bench, and deadlift. The program begins by having the user lift only 10 pounds for each lift. Each time they complete a set for a particular lift and say they are ready for the next set, add 10 pounds to the weight of their previous set and print a message that this is the new weight they should lift. The sets are all done for one lift at a time. So, for example, a user might squat 10 pounds, then 20 pounds, then 30 pounds and then say they don't want to keep doing that lift. In this case, they'll now get a printed message to bench 10 pounds, and so on and so forth.

               Some of the code is already included below, but you will need to fill in the rest of the ``main`` function to produce the following functionality:

               * For each lift, beginning with the squat, the function ``workout_coach`` should be called with the name of the lift and the current weight. This function prints a message to the user like the following::

                   Time to squat 10 pounds! You got this!

               * Keep calling ``workout_coach`` for *as long as* the user answers "yes" to the following question: "Keep doing the squat? Enter yes for the next set." (Note that you will need to fill in the name of the lift depending on which lift in the iteration they are on.) You can do something like the following to combine strings and a variable to create the prompt string:

               .. code-block:: Python

                   input_prompt = "Keep doing the " + lift + "? Enter yes for the next set."

               * If the user answers with anything besides "yes" to the above question, then *stop* calling ``workout_coach`` for that particular lift and move on to repeat the above process for the next lift (unless it is the deadlift, which is the last lift and thus once the user decides to stop at this point the program quits).

               * There is one special case where you should *stop* calling ``workout_coach`` --- no matter what the user responds --- and that is when the current weight is greater than 200 pounds for the bench. You have not yet talked with a lawyer about your app and you don't want to get sued if anyone has a mishap, so you're not going to encourage them to lift more than that amount of weight on the bench press (which is the exercise that, done improperly and without a spotter, causes most gym accidents). It is okay to keep encouraging users to lift more than 200 pounds for the squat and the deadlift, though, so you don't need to set an upper limit for those lifts.

               Here is some example output from a program run::

                   Time to squat 10 pounds! You got this!
                   Time to squat 20 pounds! You got this!
                   Time to bench 10 pounds! You got this!
                   Time to bench 20 pounds! You got this!
                   Time to bench 30 pounds! You got this!
                   Time to deadlift 10 pounds! You got this!
                   Time to deadlift 20 pounds! You got this!
                   Time to deadlift 30 pounds! You got this!
                   Time to deadlift 40 pounds! You got this!

               .. activecode:: ex_workout_coach
                  :nocodelens:

                  import sys

                  def workout_coach(lift_name, wt):
                      print("Time to", lift_name, wt, "pounds! You got this!")

                  def main():
                      sys.setExecutionLimit(120000) # keep program from timing out
                      lifts = ["squat", "bench", "deadlift"]
                      # Your code here

                  if __name__ == "__main__":
                      main()

            .. tab:: Answer

                .. activecode:: q5_answer
                    :nocodelens:

                    import sys

                    def workout_coach(lift_name, wt):
                        print("Time to", lift_name, wt, "pounds! You got this!")

                    def main():
                        sys.setExecutionLimit(120000)
                        lifts = ["squat", "bench", "deadlift"]
                        for lift in lifts:
                            keep_lifting = "yes"
                            weight = 0
                            input_prompt = "Keep doing the " + lift + "? Enter yes for the next set."
                            while keep_lifting == "yes":
                                weight = weight + 10
                                if lift == "bench" and weight > 200:
                                    break
                                else:
                                    workout_coach(lift, weight)
                                keep_lifting = input(input_prompt)

                    if __name__ == "__main__":
                        main()

    #.

        .. tabbed:: q6

            .. tab:: Question

               Write a program to remove all the red from an image.

               .. raw:: html

                   <img src="../_static/LutherBellPic.jpg" id="luther.jpg">
                   <h4 style="text-align: left;">For this and the following exercises, use the
                   luther.jpg photo.</h4>

               .. activecode:: ex_iter_luther
                  :nocodelens:

            .. tab:: Answer

                .. activecode:: q6_answer
                    :nocodelens:

                    import image

                    img = image.Image("luther.jpg")
                    new_img = image.EmptyImage(img.getWidth(), img.getHeight())
                    win = image.ImageWin(img.getWidth(), img.getHeight())

                    for col in range(img.getWidth()):
                        for row in range(img.getHeight()):
                            p = img.getPixel(col, row)

                            new_red = 0
                            green = p.getGreen()
                            blue = p.getBlue()

                            new_pixel = image.Pixel(new_red, green, blue)

                            new_img.setPixel(col, row, new_pixel)

                    new_img.draw(win)
                    win.exitonclick()


    #. Write a function to convert the image to grayscale.

        .. activecode:: ex_7_16
           :nocodelens:

    #.

        .. tabbed:: q8

            .. tab:: Question

               Write a function to convert an image to black and white.

               .. activecode:: ex_7_17
                  :nocodelens:

            .. tab:: Answer

                .. activecode:: q8_answer
                    :nocodelens:

                    import image

                    def convert_black_white(input_image):
                        grayscale_image = image.EmptyImage(input_image.getWidth(), input_image.getHeight())

                        for col in range(input_image.getWidth()):
                            for row in range(input_image.getHeight()):
                                p = input_image.getPixel(col, row)

                                red = p.getRed()
                                green = p.getGreen()
                                blue = p.getBlue()

                                avg = (red + green + blue) / 3.0

                                new_pixel = image.Pixel(avg, avg, avg)
                                grayscale_image.setPixel(col, row, new_pixel)

                        black_white_image = image.EmptyImage(input_image.getWidth(), input_image.getHeight())
                        for col in range(input_image.getWidth()):
                            for row in range(input_image.getHeight()):
                                p = grayscale_image.getPixel(col, row)
                                red = p.getRed()
                                if red > 140:
                                    val = 255
                                else:
                                    val = 0

                                new_pixel = image.Pixel(val, val, val)
                                black_white_image.setPixel(col, row, new_pixel)
                        return black_white_image

                    def main():
                        img = image.Image("luther.jpg")
                        win = image.ImageWin(img.getWidth(), img.getHeight())

                        bw_img = convert_black_white(img)
                        bw_img.draw(win)

                        win.exitonclick()

                    if __name__ == "__main__":
                        main()

    #. Sepia Tone images are those brownish colored images that may remind you of times past. The formula for creating a sepia tone is as follows:

       ::

            new_r = (R × 0.393 + G × 0.769 + B × 0.189)
            new_g = (R × 0.349 + G × 0.686 + B × 0.168)
            new_b = (R × 0.272 + G × 0.534 + B × 0.131)

       Write a function to convert an image to sepia tone. *Hint:* Remember that RGB values must be integers between 0 and 255.

        .. activecode:: ex_7_18
           :nocodelens:

    #.

        .. tabbed:: q10

            .. tab:: Question

               Write a function to uniformly enlarge an image by a factor of 2 (in other words, make the image twice as wide and twice as tall).

               .. activecode:: ex_7_19
                  :nocodelens:

            .. tab:: Answer

                .. activecode:: q10_answer
                  :nocodelens:

                  import image

                  def double(old_image):
                      old_w = old_image.getWidth()
                      old_h = old_image.getHeight()

                      new_img = image.EmptyImage(old_w * 2, old_h * 2)
                      for row in range(old_h):
                          for col in range(old_w):
                              old_pixel = old_image.getPixel(col, row)

                              new_img.setPixel(2*col, 2*row, old_pixel)
                              new_img.setPixel(2*col+1, 2*row, old_pixel)
                              new_img.setPixel(2*col, 2*row+1, old_pixel)
                              new_img.setPixel(2*col+1, 2*row+1, old_pixel)

                      return new_img

                  def main():
                      img = image.Image("luther.jpg")
                      win = image.ImageWin(img.getWidth() * 2, img.getHeight() * 2)

                      big_img = double(img)
                      big_img.draw(win)

                      win.exitonclick()

                  if __name__ == "__main__":
                       main()

    #.   After you have scaled an image too much it looks blocky. One way of reducing the blockiness of the image is to replace each pixel with the average values of the pixels around it. This has the effect of smoothing out the changes in color. Write a function that takes an image as a parameter and smooths the image. Your function should return a new image that is the same as the old one but smoothed.

           .. activecode:: ex_7_20
              :nocodelens:


    #. When you scan in images using a scanner they may have lots of noise due to dust particles on the image itself or the scanner itself, or the images themselves may be damaged. One way of eliminating this noise is to replace each pixel by the median value of the pixels surrounding it. Write a program to do this.

        .. activecode:: ex_7_22
           :nocodelens:



Weekly Graded Assignment
========================

.. container:: full_width

    Write a ``course_grader`` function that takes a list of test scores as its parameter. It will add up these test scores and calculate an average score. It should then return a message of ``"pass"`` or ``"fail"`` depending on these two conditions:

    * If the average score is greater than or equal to 70 *and* no single test score is below 50, then return a message of ``"pass"``.
    * If the average score is lower than 70 *or* at least one test score is below 50, then return a message of ``"fail"``.

    Some sample function calls with comments on what should be printed out are included in ``main`` for testing purposes. You should only put the code for the ``course_grader`` function into Vocareum.


    .. activecode:: ex_course_grader

        def course_grader(test_scores):
            # Your code here

        def main():
            print(course_grader([100,75,45]))     # "fail"
            print(course_grader([100,70,85]))     # "pass"
            print(course_grader([80,60,60]))      # "fail"
            print(course_grader([80,80,90,30,80]))  # "fail"
            print(course_grader([70,70,70,70,70]))  # "pass"

        if __name__ == "__main__":
            main()
