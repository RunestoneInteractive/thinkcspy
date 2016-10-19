Searching
=========

Walkthrough
-----------

For the walkthrough, we will write a function called ``any`` that will tell us if any booleans in a given list are ``True``.

.. activecode:: searching_walkthrough

    list_of_boools = [False, True, False]

    def any(list):
        """Return True if any item in the list is True, False otherwise"""
        for x in list:
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
