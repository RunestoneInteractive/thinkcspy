..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell. Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: strings-3-
   :start: 1

.. index:: index, characters, len

Index Operator: Working with the Characters of a String
-------------------------------------------------------

The **indexing operator**, ``[ ]``, selects a single character from a string. The characters are accessed by their position or index value. For example, in the string shown below, the 14 characters are indexed left to right from position 0 to position 13.

.. image:: Figures/indexvalues.png
   :alt: index values

It is also the case that the positions are named from right to left using negative numbers where -1 is the rightmost index and so on. Note that the character at index 6 (or -8) in the image above is the space character.

.. activecode:: chp08_index1

    school = "LaunchCode LC101"
    a_character = school[3]
    print(a_character)

    first_char = school[0]
    print(first_char)

    last_char = school[-1]
    print(last_char)

The expression ``school[3]`` selects the character at index 3 from ``school``, and creates a new string containing just this one character. The variable ``a_character`` refers to the result.

Remember that computer scientists often start counting from zero. The letter at index 0 of ``"LaunchCode LC101"`` is ``L``.  So at position ``[3]`` we have the letter ``n``.

The expression in brackets is called an **index**. An index specifies a member of an ordered collection. In this case, the collection of characters in the string. The index *indicates* which character you want. It can be any integer expression so long as it evaluates to a valid index value.

Note that indexing returns a *string* --- Python has no special type for a single character. It is just a string of length 1.

When you are going to be indexing into a string, it is useful to know the length of the string. The ``len`` function, when applied to a string, returns the number of characters in a string.

.. activecode:: chp08_len1

    fruit = "Banana"
    print(len(fruit))


To get the last letter of a string, you might be tempted to try something like this:

.. activecode:: strings_len2

    fruit = "Banana"
    sz = len(fruit)
    last = fruit[sz]       # ERROR!
    print(last)

That won't work. It causes the runtime error ``IndexError: string index out of range``. The reason is that there is no letter at index position 6 in ``"Banana"``. Since we started counting at zero, the six indexes are numbered 0 to 5. To get the last character, we have to subtract 1 from ``length``.  Give it a try in the example above by changing line 3 as follows: ``last = fruit[sz - 1]``.

Typically, a Python programmer will access the last character by combining the lines 2 and 3 from above.

.. sourcecode:: python

    last = fruit[len(fruit)-1]

**Check your understanding**

.. mchoice:: test_question8_2_1
   :answer_a: t
   :answer_b: h
   :answer_c: c
   :answer_d: Error, you cannot use the [ ] operator with a string.
   :correct: b
   :feedback_a: Index locations do not start with 1, they start with 0.
   :feedback_b: Yes, index locations start with 0.
   :feedback_c: s[-3] would return c, counting from right to left.
   :feedback_d: [ ] is the index operator


   What is printed by the following statements?

   .. code-block:: python

      s = "python rocks"
      print(s[3])


.. mchoice:: test_question8_2_2
   :answer_a: tr
   :answer_b: ps
   :answer_c: nn
   :answer_d: Error, you cannot use the [ ] operator with the + operator.
   :correct: a
   :feedback_a: Yes, indexing operator has precedence over concatenation.
   :feedback_b: p is at location 0, not 2.
   :feedback_c: n is at location 5, not 2.
   :feedback_d: [ ] operator returns a string that can be concatenated with another string.


   What is printed by the following statements?

   .. code-block:: python

      s = "python rocks"
      print(s[2] + s[-5])

.. mchoice:: test_question8_4_1
   :answer_a: 11
   :answer_b: 12
   :correct: b
   :feedback_a: The blank counts as a character.
   :feedback_b: Yes, there are 12 characters in the string.


   What is printed by the following statements?

   .. code-block:: python

      s = "python rocks"
      print(len(s))


.. mchoice:: test_question8_4_2
   :answer_a: o
   :answer_b: r
   :answer_c: s
   :answer_d: Error, len(s) is 12 and there is no index 12.
   :correct: b
   :feedback_a: Take a look at the index calculation again, len(s)-5.
   :feedback_b: Yes, len(s) is 12 and 12-5 is 7. Use 7 as index and remember to start counting with 0.
   :feedback_c: s is at index 11
   :feedback_d: You subtract 5 before using the index operator so it will work.


   What is printed by the following statements?

   .. code-block:: python

      s = "python rocks"
      print(s[len(s)-5])
