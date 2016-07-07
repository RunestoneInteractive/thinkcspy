Problem Set: Crypto
===================

A problem set in Python inspired by CS50’s Crypto problem set.

Setup
-----

For this problem set, you’ll be writing on your machine, and running your code at the command
line. Create a directory ``python-crypto/`` to store the files for this problem set,
wherever it is convenient for you on your file system.

Initials
--------

In a file ``initials.py``, write a program that prompts the user to
enter their full name at the command line, and then prints out their
capitalized initials. You may assume that the user’s input will contain
only letters (uppercase and/or lowercase) plus single spaces between
words. This means you don’t have to worry about Conan O’Brien, T.S.
Eliot, or Cee-Lo Green.

Here are some example input/output pairs:

+--------------------+----------+
| Input              | Output   |
+====================+==========+
| Ozzie Smith        | OS       |
+--------------------+----------+
| bonnie blair       | BB       |
+--------------------+----------+
| George             | G        |
+--------------------+----------+
| Daniel Day Lewis   | DDL      |
+--------------------+----------+

Your program should work like this:

::

    $ python3 initials.py
    Ozzie Smith
    OS

Note that we’re not using a prompt string, but rather dumbly waiting for
the user to type in the name.

Tips and hints
~~~~~~~~~~~~~~

-  Note that our output is on a single line. This means you'll need to collect the initials
    as you find them, rather than printing each one out. This will look similar to the accumulator
    pattern that we discussed in Chapter 5, but with strings instead of integers.

-  Remember that we’ve been using Python 3 in this class. If you use the
   ``input`` function with Python 2 – by calling ``python initials.py``,
   for example – then you’ll run up against some unexpected behavior.

-  When using ``input``, to prompt without a messages you may either provide the empty string ``''``
   as the parameter, or call it without any parameters and python will
   use the empty string by default.

Caesar
------

In chapter 9, you completed an exercise that had you write a function
called ``rot13`` that used Caesar’s cipher to encrypt a message. It encrypted a message
by character by character, by rotating each letter 13 places to the right. It turned
**a** into **n**, **b** into **o**, **c** into **p** and so on. It wrapped at the end of the
alphabet, so that **m** shifted to **z** and then **n** shifted to **a**. Here's the original problem statement,
if you decided to skip that problem:

    Write a function called ``rot13`` that uses the Caesar cipher to encrypt a message. The Caesar cipher works like a substitution cipher but each character is replaced by the character 13 characters to ‘its right’ in the alphabet. So for example the letter a becomes the letter n. If a letter is past the middle of the alphabet then the counting wraps around to the letter a again, so n becomes a, o becomes b and so on. *Hint*: Whenever you talk about things wrapping around its a good idea to think of modulo arithmetic.


We're going to build a more general version of this algorithm that allows a message to be encrypted
using any rotation amount. We'll do this in a few steps, so you can break the problem down into isolate pieces.

**alphabet_position**

Open up a file ``caesar.py`` in your editor. Write a function ``alphabet_position(character)`` that takes
a letter (that is, a string with only one alphabetic character) and returns the 0-based numerical position of that
letter. It should be case-insensitive.

Here are some example input parameter values, with the corresponding return
values.

+--------------------+--------------+
| ``character``      | Return value |
+====================+==============+
| a                  | 0            |
+--------------------+--------------+
| A                  | 0            |
+--------------------+--------------+
| b                  | 1            |
+--------------------+--------------+
| y                  | 24           |
+--------------------+--------------+
| z                  | 25           |
+--------------------+--------------+
| Z                  | 25           |
+--------------------+--------------+

Don't worry about what might happen if somebody tries to use your function with an input parameter that is
something other than a single letter.

Test ``alphabet_position`` with various inputs before moving on to the next step.
Use more tests than the examples we provide.

Recall that to run your program at the command line, you'll need to type the following. Remember that ``$`` signifies the command prompt in your terminal, whatever it may be.

::

    $ python3 caesar.py

**rotate_string_13**

Now, write a function ``rotate_string_13(text)`` that takes a word -- that is, a string containing
only letters (no spaces, numbers, or symbols) -- as input and returns the result of
rotating each letter in the string 13 places to the right. It should preserve the case of each letter.

Here are some example input values, with the corresponding return values.

+--------------------+--------------+
| ``text``           | Return value |
+====================+==============+
| a                  | n            |
+--------------------+--------------+
| abcd               | nopq         |
+--------------------+--------------+
| LaunchCode         | YnhapuPbqr   |
+--------------------+--------------+

Test ``rotate_string_13`` with various input values before moving on to the next stage.
Use more tests than the examples we provide.

**rotate_character**

Write a function ``rotate_character(char, rot)`` that has as inputs a character ``char``
(that is, a string that consists of only a single letter) and an integer ``rot``. It should return
the result of rotating the character ``rot`` number of places to the right, preserving the case of
the character.

Here are some example input values, with the corresponding return values.

+----------+---------+--------------+
| ``char`` | ``rot`` | Return value |
+==========+=========+==============+
| a        | 13      | n            |
+----------+---------+--------------+
| a        | 14      | o            |
+----------+---------+--------------+
| a        | 0       | a            |
+----------+---------+--------------+
| A        | 13      | N            |
+----------+---------+--------------+
| z        | 1       | a            |
+----------+---------+--------------+
| z        | 2       | b            |
+----------+---------+--------------+
| Z        | 37      | k            |
+----------+---------+--------------+

Test ``rotate_character`` with various input values before moving on to the next stage.
Use more tests than the examples we provide.

**rotate_string**

Write  a function ``rotate_string(text, rot)`` that has as input a string and an integer, and returns
the result of rotating each letter in the string ``rot`` places to the right. The string may contain non-alphabetic characters (spaces, numbers, symbols). It should leave these as they are.

Here are some example input values, with the corresponding return values.

+---------------+---------+---------------+
| ``text``      | ``rot`` | Return value  |
+===============+=========+===============+
| a             | 13      | n             |
+---------------+---------+---------------+
| abcd          | 13      | nopq          |
+---------------+---------+---------------+
| LaunchCode    | 13      | YnhapuPbqr    |
+---------------+---------+---------------+
| LaunchCode    | 1       | MbvodiDpef    |
+---------------+---------+---------------+
| Hello, World! | 5       | Mjqqt, Btwqi! |
+---------------+---------+---------------+

Vigenere
--------

The Ceasar cipher would be fairly easy to break. Let's implement a more complicated cipher algorithm.

In a file ``vigenere.py``, write a program that works similarly to ``caesar.py``
does above, but instead accepts a string at the command line that is used to encrypt the
message. To see how the cipher should work, watch `this short video`_ on the
Vigenere cipher courtesy of the CS50 folks at Harvard.

As you saw in the video, the Vigenere cipher uses a word as a key, rather than an integer.

Your program will work like this:

::

    $ python3 vigenere.py launchcode
    The crow flies at midnight!
    Ehy ptvy tomps ug opfblkst!


Here, the user has entered "The crow flies at midnight" and the program
printed “Ehy ptvy tomps ug opfblkst”.

By typing ``launchcode`` after our file name, that value is provided as a special type of input to our program,
called a **command line argument**. We will have to do some extra work to use this value in our program, which is outlined
outline below.


Reusing your Caesar code
~~~~~~~~~~~~~~~~~~~~~~

You'll find it very useful to have the functions ``alphabet_position`` and ``rotate_character`` from ``caesar.py``,
but rather than copy and paste them into ``vigenere.py`` let's use a better approach.

You've imported modules such as ``math`` and ``random`` before. These modules were provided for you. It's also possible (and
quite useful!) to create and import your own modules.

Let's import the functions we want to reuse from ``caesar.py``. Put the following line at the top of ``vigenere.py``.

.. sourcecode:: python

    from caesar import alphabet_position, rotate_character

This ``import`` syntax may be new to you. It says that we want to import code from a module ``caesar``, but that
we only want to import particular pieces of that module, in this case the functions ``alphabet_position`` and ``rotate_character``.
Since ``caesar.py`` is in the same directory as ``vigenere.py``, the work required to import its code
as a module is much simpler than you'll usually encounter when using your own modules. You can read up on creating
modules in Python in the `Python module documentation`_.

Even though we only have one line of code (the import statement) in our file, let's run it to make sure Python is able to
find and import our Caesar code.

::
    $ python3 vigenere.py

*Note:* If you run ``vigenere.py`` at this point and see output, that means you left test code and print statements
in ``caesar.py``. Go back and clean them up, so only the 4 functions you were to have written remain.

*Another note:* If you receive an error when executing the file, make sure that you're in the correct directory, and
that both of your files are in that directory.

Getting the rotation key from the command line
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In python, a list of the command-line arguments is made accessible to
your program in the form of a list of strings: ``sys.argv``. The first
item, ``sys.argv[0]`` is always the name of your script, with the other
arguments following. So, in our first example above where we ran

::

    $ python3 vigenere.py launchcode

``sys.argv`` would be ``['vigenere.py', 'launchcode']``. To use ``sys.argv``, you need to add ``import sys`` to the top of your file. You can read more about ``sys.argv`` in the `official documentation`_.

With these details, you're ready to tackle the program! Make sure your program
behaves according to these details:

Specification
~~~~~~~~~~~~~

-  You may assume that the command-line input consists only of
   alphabetic characters (no numbers, spaces, or symbols).
-  If the user fails to enter a command-line parameter, you should print
   a helpful message and quit.
-  Your program should preserve the case of each letter in the message string.
-  You should only apply the cipher to a character that is a letter. When you encounter a symbol, space, or number in the string you are encoding you should simply leave it as-is. When this happens, you should remain at the same location in your key string for encoding the next character. For example, in the above example, here’s the way it should work. Notice how the cipher char progresses through the key string, and what happens when we encounter the space in the message string.

+--------------------------+---------------+-----------------+--------------+
| char from input string   | cipher char   | rotation amount | result char  |
+==========================+===============+=================+==============+
| T                        | l             | 11              | E            |
+--------------------------+---------------+-----------------+--------------+
| h                        | a             | 0               | h            |
+--------------------------+---------------+-----------------+--------------+
| e                        | u             | 20              | y            |
+--------------------------+---------------+-----------------+--------------+
| (space)                  | (space)       | n/a             | (space)      |
+--------------------------+---------------+-----------------+--------------+
| c                        | n             | 13              | p            |
+--------------------------+---------------+-----------------+--------------+
| r                        | c             | 2               | t            |
+--------------------------+---------------+-----------------+--------------+
| o                        | h             | 7               | v            |
+--------------------------+---------------+-----------------+--------------+
| w                        | c             | 2               | y            |
+--------------------------+---------------+-----------------+--------------+
| (and so on…)             |               |                 |              |
+--------------------------+---------------+-----------------+--------------+

Turning in your code
~~~~~~~~~~~~~~~~~~~~

When you're done, turn in all 3 files at Vocareum. Be sure to remove any code used for testing first.

.. _official documentation: https://docs.python.org/3/library/sys.html
.. _this short video: https://www.youtube.com/watch?v=9zASwVoshiM&feature=youtu.be
.. _Python module documentation: https://docs.python.org/3/tutorial/modules.html
