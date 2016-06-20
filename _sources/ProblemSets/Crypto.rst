Python Crypto
=============

A problem set in Python inspired by CS50’s Crypto pset

Setup
-----

For this problem set, you’ll be writing on your machine, and running your code at the command
line.

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
the user to type in the name. This is so we can more easily test your
code when you turn it in.

Tips and hints
~~~~~~~~~~~~~~

-  You’ll want to print single characters to the same line in
   succession. The ``print`` function inserts a newline at the end of
   everything it prints, which is no good. You’ll want to use the
   ``sys.stdout.write`` function, which will require importing the
   ``sys`` module.

-  Remember that we’ve been using Python 3 in this class. If you use the
   ``input`` function with Python 2 – by calling ``python initials.py``,
   for example – then you’ll run up against some unexpected behavior.

-  When using ``input`` you may either provide the empty string ``''``
   as the parameter, or call it without any parameters and python will
   use the empty string by default.

Caesar
------

In chapter 9, you completed an exercise that had you write a function
called ``rot13`` that used Caesar’s cipher to encrypt a message. We’ll
start with function, and work toward a more user-friendly, and
(slightly) more secure, program. We’ll do this in a few steps.

Prompting for a message
~~~~~~~~~~~~~~~~~~~~~~~

In a file ``caesar.py``, write a program that prompts the user to enter
the string to be encrypted, and then runs it through ``rot23``, printing
the encrypted result. Like above, don’t use any specific prompt.

You’ll want to use your code from the aforementioned exercise as a
starting place. It should work like this:

::

    $ python3 caesar.py
    Be sure to drink your Ovaltine!
    Or fher gb qevax lbhe Binygvar!

Here, the user typed in “Be sure to drink your Ovaltine!” and the
program output “Or fher gb qevax lbhe Binygvar!”.

Getting the rotation key from the command line
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Always using the same rotation of 13 characters isn’t very secure. Let’s
modify the program so that it is able to rotate by any number of
characters, using an integer entered by the user at the command line. It
will work like this:

::

    $ python3 caesar.py 13
    Be sure to drink your Ovaltine!
    Or fher gb qevax lbhe Binygvar!

and this:

::

    $ python3 caesar.py 5
    Be sure to drink your Ovaltine!
    GjsxzwjsytsiwnspsdtzwsTafqynsjt

and this:

::

    $ python3 caesar.py 5
    Hello World
    MjqqtsBtwqi

In python, a list of the command-line arguments is made accessible to
your program in the form of a list of strings: ``sys.argv``. The first
item, ``sys.argv[0]`` is always the name of your script, with the other
arguments following. So, in our first example above ``sys.argv`` would
be ``['caesar.py', '13']``. You can read more about ``sys.argv`` in the
`official documentation`_.

Thus, you’ll need to convert the command-line argument to an integer for
using in your encryption algorithm. For this, use the built-in `int``
function (`read the function reference`_).

Specification
^^^^^^^^^^^^^

-  If the user fails to enter a command-line parameter, you should print
   a helpful message and quit.

-  You need not worry about validating the command-line argument.
   Calling ``int`` with something that can’t neatly be converted to a
   number will raise an error, and your program will die.

-  You should rename your ``rot13`` function to simply ``rot``.
   Furthermore, it should have the following signature:

   .. code:: python

       def rot(p, mess):
            # your code here

   Here, ``p`` is the integer that you’ll rotate by, obtained from
   ``sys.argv`` (and converted to an integer). Obviously, ``mess`` will
   be the string that you are to encrypt, obtained from user input.

Vigenere
--------

The Ceasar cipher still isn’t very secure. (Why?) Let's implement a more complicated cipher algorithm.

In a file ``vigenere.py``, write a program that works as ``caesar.py``
does above, but instead accepts a string that is used to encrypt the
message. To see how this should work, watch `this short video`_ on the
Vigenere cipher courtesy of our pals at Harvard.

Your program should work like this:

::

    $ python3 vigenere.py launchcode
    The crow flies at midnight
    Ehy ptvy tomps ug opfblkst

Here, the user has entered “The crow flies at midnight” and the program
output “Ehy ptvy tomps ug opfblkst”.

Specification
~~~~~~~~~~~~~

-  You may assume that the command-line input consists only of
   alphanumeric characters.
-  If the user fails to enter a command-line parameter, you should print
   a helpful message and quit.
-  You should only apply the cipher to a character that is a letter. For
   example, in the above example, here’s the way it should work:

+--------------------------+---------------+
| char from input string   | cipher char   |
+==========================+===============+
| T                        | l             |
+--------------------------+---------------+
| h                        | a             |
+--------------------------+---------------+
| e                        | u             |
+--------------------------+---------------+
| (none)                   |               |
+--------------------------+---------------+
| c                        | n             |
+--------------------------+---------------+
| r                        | c             |
+--------------------------+---------------+
| o                        | h             |
+--------------------------+---------------+
| w                        | c             |
+--------------------------+---------------+
| (and so on…)             |               |
+--------------------------+---------------+

-  Your program should preserve the case of each letter in the message
   string.

Tips and hints
~~~~~~~~~~~~~~

-  Thank about what happens when you call your function from
   ``caesar.py``, ``rot(p, mess)``, with a message that only has one
   character. How might that be useful to you here?

Turning in your code
~~~~~~~~~~~~~~~~~~~~

When you're done, turn in all 3 files at Vocareum.

.. _official documentation: https://docs.python.org/3/library/sys.html
.. _read the function reference: https://docs.python.org/3/library/functions.html#int
.. _this short video: https://www.youtube.com/watch?v=9zASwVoshiM&feature=youtu.be
