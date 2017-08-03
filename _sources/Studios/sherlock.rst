Sherlock
=========

*Studios are in-class activities to give you hands-on practice with new concepts. The first half is the Walkthrough, an instructor-led programming problem. The second half is for you to work on individually or in pairs in class.*

*These problems are not graded, and you are not obligated to finish them. Get as far as you can while in class, and use them as an opportunity to play with and solidify new concepts.*

Walkthrough
-----------

In this walkthrough we'll practice the problem solving skill of breaking down a large task into smaller subproblems and solving these on our way to finding the ultimate solution.

The problem we are assigned is the following:

    Write a function that takes a list of integers, along with a string with a value of "positive" or "negative". Based on this second argument, print all of the integers that are positive or negative.

We'll break this problem into three levels of difficulty and solve each one in turn:

* **Level 1** Write a function that takes an integer and prints "positive" if it's positive, "negative" if it's negative, and prints nothing if it's 0.
* **Level 2** Write a function that takes a list of integers and prints only the positive ones.
* **Level 3** Write a function that takes a list of integers, along with a string with a value of "positive" or "negative". Based on this second argument, print all of the integers that are positive or negative.

.. activecode:: sherlock_walkthrough

    def pos_or_neg(num):
        if num > 0:
            print('positive')
        elif num < 0:
            print('negative')


    def print_positives(the_ints):
        for num in the_ints:
            if num > 0:
                print(num)


    def print_signed_integers(the_ints, the_sign):
        if the_sign == 'positive':
            for i in the_ints:
                if i > 0:
                    print(i)
        elif the_sign == 'negative':
            for i in the_ints:
                if i < 0:
                    print(i)

Studio
------

For this studio, we are going to hone our detective skills by finding and fixing the bugs in the following program.

  Sherlock Holmes, in one of his famous "black moods", has locked himself in his Baker Street flat. There are only two people on his list of who may enter, Dr. Watson and Inspector Lestrade. Everyone else he wants to send away.

We've written a program to reflect his wishes, but the code doesn't seem to work at all. In fact, it's a hot mess of errors!

Work through the code to debug all the errors. You have the error messages and your knowledge of coding "right and wrong" to guide you. You might want to look for obvious errors first and fix those; then proceed to fix the remaining errors by looking at the exceptions you get. But follow whatever process you think best. We'll give you one clue to start: only the ``sherlock`` function code has errors; the rest of the program is correct.

In the end, running this program --- with the code included in ``main`` --- should yield these results::

    Go Away! (sound of violin music...)
    Go Away! (sound of violin music...)
    Go Away! (sound of violin music...)
    Go Away! (sound of violin music...)
    Enter

.. activecode:: sherlock_studio

    def sherlock(guests)
       for guest in press:
            if guest = "Dr Watson" and "Inspector Lestrade":
                return "Enter";
            else
                return "Go Away! (sound of violin music...)"

    def main():
        press = ["a reporter from the Times", "a reporter from the Observer"]
        family_etc = ["Mycroft Holmes", "Mrs. Hudson"]
        enemies = ["Professor Moriarty", "Charles Augustus Milverton", "John Woodley"]
        potential_love_interest = ["Irene Adler"]
        friends = ["Inspector Lestrade", "Dr. Watson"]
        print(sherlock(press))
        print(sherlock(family_etc))
        print(sherlock(enemies))
        print(sherlock(potential_love_interest))
        print(sherlock(friends))

    if __name__ == "__main__":
        main()
