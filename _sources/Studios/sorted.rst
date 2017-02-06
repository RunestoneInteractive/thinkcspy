Sorted
======

*Studios are in-class activities to give you hands-on practice with new concepts. The first half is the Walkthrough, an instructor-led programming problem. The second half is for you to work on individually or in pairs in class.*

*These problems are not graded, and you are not obligated to finish them. Get as far as you can while in class, and use them as an opportunity to play with and solidify new concepts.*

Walkthrough
-----------

Write a function ``remove_char`` that takes two string arguments, ``a_str`` and ``a_char``. The first argument should be a string and the second should be a character (i.e. a string of length one). The function should return a new string, the result of which is ``a_str`` with each instance of ``a_char`` removed.

.. activecode:: sorted_walkthrough

    from test import testEqual

    def remove_char(a_str, a_char):

        new_str = ''

        for idx in range(len(a_str)):
            if a_str[idx] != a_char:
                new_str = new_str + a_str[idx]

        return new_str

    testEqual(remove_char('aardvark', 'a'), 'rdvrk')
    testEqual(remove_char('aardvark', 'k'), 'aardvar')
    testEqual(remove_char('asdf', 'z'), 'asdf')
    testEqual(remove_char('', 'a'), '')

Here's another, slightly different solution that uses the fact that a string is a list. This one is generally a better way to loop over strings than what we did above, if you don't need to use the index of the current character.

.. activecode:: sorted_walkthrough_alt

    from test import testEqual

    def remove_char(a_str, a_char):

        new_str = ''

        for this_char in a_str:
            if this_char != a_char:
                new_str = new_str + this_char

        return new_str

    testEqual(remove_char('aardvark', 'a'), 'rdvrk')
    testEqual(remove_char('aardvark', 'k'), 'aardvar')
    testEqual(remove_char('asdf', 'z'), 'asdf')
    testEqual(remove_char('', 'a'), '')

Studio
------

Since a string is just a sequence of characters, they can be sorted from least to greatest. Sorting can be hard so we're just going to check if a string is sorted. Write a function which returns a boolean indicating if the string is sorted or not.

Here's an example of how your function should behave. (Recall that the order operators are case-sensitive, so that ``"A" < "a"`` evaluates to `True`.)

.. sourcecode:: python

    is_sorted("ABC") == True
    is_sorted("aBc") == False
    is_sorted("dog") == False

.. activecode:: sorted_studio

    def is_sorted(string):
        """Returns True if string is sorted from least to greatest
           False otherwise.
        """
        # TODO: Fill in details
        return False

Bonus Missions
--------------

Bonus 1
~~~~~~~

Write a function that takes in a float and returns the number of digits that occur after the decimal point. For example, 3.14 should return 2, 9.876543 should return 6, and 9825 should return 0.

.. activecode:: sorted_bonus_1


Bonus 2
~~~~~~~

Write a function that takes in a string and converts that string to pig latin. Pig latin involves moving the first letter of a word to the end, then appending "ay." For example, the phrase "python code wins" would turn into "ythonpay odecay insway."

For an extra challenge, handle the case where a word starts with a vowel. In this case, the word should be unmodified except for adding "ay" at the end. For example, "all open androids" would become "allay openay androidsay."

.. activecode:: sorted_bonus_2
