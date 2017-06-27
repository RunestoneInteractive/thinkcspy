..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell. Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: strings-2-
   :start: 1

.. index:: string operations, concatenation, repetition, comparison, ordinal value

Operations on Strings
---------------------

In general, you cannot perform mathematical operations on strings, even if the strings look like numbers. The following are illegal (assuming that ``message`` has type ``str``):

.. sourcecode:: python

    message - 1
    "Hello" / 123
    message * "Hello"
    "15" + 2

Interestingly, the ``+`` operator does work with strings, but for strings, the ``+`` operator represents **concatenation**, not addition. Concatenation means joining the two operands by linking them end-to-end. For example:

.. activecode:: strings_add
    :nocanvas:

    fruit = "banana"
    baked_good = " nut bread"
    print(fruit + baked_good)

The output of this program is ``banana nut bread``. The space before the word "nut" is part of the string and is necessary to produce the space between the concatenated strings. Take out the space at the beginning of ``baked_good`` and run it again. You'll see that the resulting output is ``banananut bread``.

The ``*`` operator also works on strings. It performs repetition. For example, ``'Fun'*3`` is ``'FunFunFun'``. One of the operands has to be a string and the other has to be an integer.

.. activecode:: strings_mult
    :nocanvas:

    print("Go" * 6)

    name = "Packers"
    print(name * 3)

    print(name + "Go" * 3)

    print((name + "Go") * 3)

This interpretation of ``+`` and ``*`` makes sense by analogy with addition and multiplication. Just as ``4*3`` is equivalent to ``4+4+4``, we expect ``"Go"*3`` to be the same as ``"Go"+"Go"+"Go"``, and it is. Note also in the last example that the order of operations for ``*`` and ``+`` is the same as it was for arithmetic. The repetition is done before the concatenation. If you want to cause the concatenation to be done first, you will need to use parentheses.

The comparison operators also work on strings. To see if two strings are equal you simply write a boolean expression using the equality operator.

.. activecode:: string_comp1

    word = "banana"
    if word == "banana":
        print("Yes, we have bananas!")
    else:
        print("Yes, we have NO bananas!")

Other comparison operations are useful for putting words in `lexicographical order <http://en.wikipedia.org/wiki/Lexicographic_order>`__. This is similar to the alphabetical order you would use with a dictionary, except that all the uppercase letters come before all the lowercase letters.

.. activecode:: string_comp2

    word = "zebra"

    if word < "banana":
        print("Your word, " + word + ", comes before banana.")
    elif word > "banana":
        print("Your word, " + word + ", comes after banana.")
    else:
        print("Yes, we have no bananas!")

It is probably clear to you that the word "apple" would be less than (come before) the word "banana". After all, "a" is before "b" in the alphabet. But what if we consider the words ``apple`` and ``Apple``? Are they the same?

.. activecode:: string_ord1

    print("apple" < "banana")

    print("apple" == "Apple")
    print("apple" < "Apple")

It turns out, as you recall from our discussion of variable names, that uppercase and lowercase letters are considered to be different from one another. The way the computer knows they are different is that each character is assigned a unique integer value.  "A" is 65, "B" is 66, and "5" is 53. The way you can find out the so-called **ordinal value** for a given character is to using a string method called ``ord``.

.. activecode:: string_ord2

    print(ord("A"))
    print(ord("B"))
    print(ord("5"))

    print(ord("a"))
    print("apple" > "Apple")

When you compare one-character strings to one another, Python converts the characters into their equivalent ordinal values and compares the integers from left to right. As you can see from the example above, "a" is greater than "A" so "apple" is greater than "Apple".

Humans commonly ignore capitalization when comparing two words. However, computers do not. A common way to address this issue is to convert strings to a standard format, such as all lowercase, before performing the comparison.

There is also a similar, but reverse, method called ``chr`` that converts integers into their character equivalent.

.. activecode:: string_ord3

    print(chr(65))
    print(chr(66))

    print(chr(49))
    print(chr(53))

    print("The character for 32 is", chr(32), "!!!")
    print(ord(" "))

One thing to note in the last two examples is the fact that the space character has an ordinal value (32).  Even though you don't see it, it is an actual character. We sometimes call it a *nonprinting* character.

**Check your understanding**

.. mchoice:: test_question8_1_1
   :answer_a: python rocks
   :answer_b: python
   :answer_c: pythonrocks
   :answer_d: Error, you cannot add two strings together.
   :correct: c
   :feedback_a: Concatenation does not automatically add a space.
   :feedback_b: The expression s+t is evaluated first, then the resulting string is printed.
   :feedback_c: Yes, the two strings are glued end to end.
   :feedback_d: The + operator has different meanings depending on the operands, in this case, two strings.


   What is printed by the following statement?

   .. code-block:: python

      s = "python"
      t = "rocks"
      print(s + t)


.. mchoice:: test_question8_1_2
   :answer_a: python!!!
   :answer_b: python!python!python!
   :answer_c: pythonpythonpython!
   :answer_d: Error, you cannot perform concatenation and repetition at the same time.
   :correct: a
   :feedback_a: Yes, repetition has precedence over concatenation
   :feedback_b: Repetition is done first.
   :feedback_c: The repetition operator is working on the excl variable.
   :feedback_d: The + and * operator are defined for strings as well as numbers.


   What is printed by the following statement?

   .. code-block:: python

      s = "python"
      excl = "!"
      print(s + excl * 3)

.. mchoice:: test_question8_6_1
   :answer_a: True
   :answer_b: False
   :correct: a
   :feedback_a: Both match up to the g but Dog is shorter than Doghouse so it comes first in the dictionary.
   :feedback_b: Strings are compared character by character.

   Evaluate the following comparison:

   .. code-block:: python

      "Dog" < "Doghouse"


.. mchoice:: test_question8_6_2
   :answer_a: True
   :answer_b: False
   :answer_c: They are the same word
   :correct: b
   :feedback_a: d is greater than D according to the ord function (68 versus 100).
   :feedback_b: Yes, upper case is less than lower case according to the ordinal values of the characters.
   :feedback_c: Python is case sensitive meaning that upper case and lower case characters are different.

   Evaluate the following comparison:

   .. code-block:: python

      "dog" < "Dog"


.. mchoice:: test_question8_6_3
   :answer_a: True
   :answer_b: False
   :correct: b
   :feedback_a: d is greater than D.
   :feedback_b: The length does not matter. Lower case d is greater than upper case D.

   Evaluate the following comparison:

   .. code-block:: python

      "dog" < "Doghouse"
