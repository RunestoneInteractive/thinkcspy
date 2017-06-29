..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell. Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: list-24-
   :start: 1

.. index:: separator, glue, split, join, delimiter, list, string, type conversion

split and join
----------------

Two of the most useful methods involving lists and strings are the complimentary methods ``split`` and ``join``. The ``split`` method is used on a string and breaks the string into a list of words. By default, any number of whitespace characters is considered a word boundary.

.. activecode:: ch09_split1

    song = "The rain in Spain..."
    words = song.split()
    print(words)

An optional argument called a **delimiter** can be used to specify which characters to use as word boundaries. The following example uses the string ``ai`` as the delimiter:

.. activecode:: ch09_split2

    song = "The rain in Spain..."
    words = song.split('ai')
    print(words)

Notice that the delimiter doesn't appear in the result.

The inverse of the ``split`` method is ``join``, which is used on a list. You choose a desired **separator** string, (often called the *glue*) and join the list with the glue between each of the elements to form a new string.

.. activecode:: ch09_join

    words = ["red", "blue", "green"]
    glue = ';'
    s = glue.join(words)
    print(s)
    print(words)

    print("***".join(words))
    print("".join(words))

The list whose elements you glued together (``words`` in this example) is not itself modified. Also, you can use empty glue or multi-character strings as glue.

List Type Conversion Function
==============================

Python has a built-in type conversion function called ``list`` that tries to turn whatever you give it into a list. For example, try the following:

.. activecode:: ch09_list1

    xs = list("Crunchy Frog")
    print(xs)

The string ``"Crunchy Frog"`` is turned into a list by taking *each character* in the string and placing it in a list. In general, any sequence can be turned into a list using this function. The result will be a list containing the elements in the original sequence. It is not legal to use the ``list`` conversion function on any argument that is not a sequence.

It is also important to point out that the ``list`` conversion function will place each element of the original sequence in the new list. When working with strings, this is very different than the result of the ``split`` method. Whereas ``split`` will break a string into *a list of words*, ``list`` will always break it into *a list of characters*.

**Check your understanding**

.. mchoice:: test_question9_22_1
   :answer_a: Poe
   :answer_b: EdgarAllanPoe
   :answer_c: EAP
   :answer_d: William Shakespeare
   :correct: c
   :feedback_a: Three characters but not the right ones. name_list is the list of names.
   :feedback_b: Too many characters in this case. There should be a single letter from each name.
   :feedback_c: Yes, split creates a list of the three names. The for loop iterates through the names and creates a string from the first characters.
   :feedback_d: That does not make any sense.

   What is printed by the following statements?

   .. code-block:: python

     my_name = "Edgar Allan Poe"
     name_list = my_name.split()
     init = ""
     for name in name_list:
         init = init + name[0]
     print(init)
