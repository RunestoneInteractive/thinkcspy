..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell. Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: strings-7-
   :start: 1

.. index:: looping, in, counting, accumulator pattern, concatenation

Looping and Counting
--------------------

If you want to find out if a particular character is in a string, you could iterate through the string and compare each character to the desired character and then return a boolean value indicating if it was found or not.

.. activecode:: loop_char

    def find_char(text):
        char_exists = False

        for char in "Go Spot Go":
            if char == text:
                char_exists = True

        return char_exists

    print(find_char("S"))
    print(find_char("f"))

But you could also just use the convenient ``in`` operator (or its opposite, ``not in``) and it will return the same information. The ``in`` operator tests if one string is a substring of another:

.. activecode:: chp8_in1

    print('p' in 'apple')
    print('i' in 'apple')
    print('ap' in 'apple')
    print('pa' in 'apple')

Note that a string is a substring of itself, and the empty string is a substring of any other string. (Also note that computer scientists like to think about these edge cases quite carefully!)

.. activecode:: chp8_in2

    print('a' in 'a')
    print('apple' in 'apple')
    print('' in 'a')
    print('' in 'apple')

The ``not in`` operator returns the logical opposite result of ``in``.

.. activecode:: chp8_in3

    print('x' not in 'apple')
    print('a' not in 'apple')


The Accumulator Pattern with Strings
====================================

Let's work through a more complex string looping example. Combining the ``in`` operator with string concatenation using ``+`` and the accumulator pattern, we can write a function that removes all the vowels from a string and returns a new string consisting of only the non-vowel characters.

The idea is to start with a string and iterate over each character, checking to see if the character is a vowel. As we process the characters, we will build up a new string consisting of only the non-vowel characters. To do this, we use the accumulator pattern which allows us to keep a "running total". But in this case we are not accumulating a numeric total. Instead we are accumulating the non-vowel characters onto a string.

.. activecode:: ch08_acc1

    def remove_vowels(s):
        vowels = "aeiouAEIOU"
        no_vowels = ""
        for each_char in s:
            if each_char not in vowels:
                no_vowels = no_vowels + each_char
        return no_vowels

    def main():
        print(remove_vowels("compsci"))
        print(remove_vowels("aAbEefIijOopUus"))

    if __name__ == "__main__":
        main()

Line 5 uses the ``not in`` operator to check whether the current character is not in the string ``vowels``. Look carefully at line 6 in the above program (``no_vowels = no_vowels + each_char``). We will do this for every character that is not a vowel. This should look very familiar. As we were describing earlier, it is an example of the accumulator pattern, this time using a string to "accumulate" the final result. In other words it says that the new value of ``no_vowels`` will be the old value of ``no_vowels`` *concatenated* with the value of ``each_char``. Thus, we are building the result string character by character.

Take a close look also at the initialization of ``no_vowels``.  We start with an empty string and then begin adding new characters to the end. Otherwise we would get an error at line 6 if we tried to use the variable before initializing it.

Step through the function using codelens to see the accumulator variable grow.

.. codelens:: ch08_acc2
    :python: py3

    def remove_vowels(s):
        vowels = "aeiouAEIOU"
        no_vowels = ""
        for each_char in s:
            if each_char not in vowels:
                no_vowels = no_vowels + each_char
        return no_vowels

    def main():
        print(remove_vowels("compsci"))

    if __name__ == "__main__":
        main()

Let's look at another example of the accumulator pattern, but this one does calculate a numeric value. The following program counts the number of times a particular letter, ``char``, appears in a string.

.. activecode:: chp08_fun2

    def count(text, char):
        letter_count = 0
        for c in text:
            if c == char:
                letter_count = letter_count + 1
        return letter_count

    def main():
        print(count("banana","a"))

    if __name__ == "__main__":
        main()

The function ``count`` takes a string as its parameter. The ``for`` statement iterates through each character in the string and checks to see if the character is equal to the value of ``char``. If so, the counting variable, ``letter_count``, is incremented by one. When all characters have been processed, the ``letter_count`` is returned. (Note that ``str`` does have a ``count`` method that you can use to perform the same task.)

**Check your understanding**

.. mchoice:: test_question8_11_1
   :answer_a: Ball
   :answer_b: BALL
   :answer_c: LLAB
   :correct: c
   :feedback_a: Each item is converted to upper case before concatenation.
   :feedback_b: Each character is converted to upper case but the order is wrong.
   :feedback_c: Yes, the order is reversed due to the order of the concatenation.

   What is printed by the following statements:

   .. code-block:: python

      s = "ball"
      r = ""
      for item in s:
          r = item.upper() + r
      print(r)
