Searching
=========

*Studios are in-class activities to give you hands-on practice with new concepts. The first half is the Walkthrough, an instructor-led programming problem. The second half is for you to work on individually or in pairs in class.*

*These problems are not graded, and you are not obligated to finish them. Get as far as you can while in class, and use them as an opportunity to play with and solidify new concepts.*

Walkthrough
-----------

For the walkthrough, we will write a function called ``any`` that will tell us if any booleans in a given list are ``True``.

.. activecode:: searching_walkthrough

    list_of_bools = [False, True, False]

    def any(a_list):
        """Return True if any item in the list is True, False otherwise"""
        for x in a_list:
            if x:
                return True

        return False

Studio
------

Write a function that takes two arguments: a list of numbers (floats, integers, or mixed), along with a single number. The function should return ``True`` if the number is in the list, and ``False`` otherwise.

If you solve that problem with time to spare, modify your function so that it takes the same arguments, but returns the *number of times* that the number appears in the list.

.. activecode:: searching_studio

    def contains_n(numbers, n):
        # Your code here, to replace this non-working version
        return False

    # Be sure to test your function with various inputs

Bonus Missions
--------------

*We know from experience that when a coin is flipped it has a 50% chance of coming up heads and a 50% chance of coming up tails. You could then infer that if I flip a coin 200 times, 100 of those flips would be heads and 100 of those flips would be tails. In practice however, these numbers would not be exact - I might see 95 heads and 105 tails, for example.

Write a function called ``flips`` that accepts the number of coin flips as a parameter. Your function should flip a "coin" that many times (using random numbers to simulate the coin flip) then return the number of times that the coin came up heads. Try out your function a few times - do you notice a difference in the number of heads for small numbers of flips vs. large numbers of flips?

*Write a program that counts from 0 to 100. If the current number is divisible by 3, have your program print out the word "fizz." If the current number is divisible by 5, have your program print out the word "buzz." If the current number is divisible by 3 and divisible by 5, have your program print out the word "fizzbuzz." If the current number is not divisible by 3 or 5, simply print out the number.
