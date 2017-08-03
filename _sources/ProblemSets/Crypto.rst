Crypto
===================

In contrast with the small isolated exercises you have been doing so far, the goal of this assignment is to give you the opportunity to create something a little larger and more complex.

This assignment consists of 4 parts [1]_:

1. **Caesar**: An encryption algorithm.
2. **Vigenere**: An even cooler encryption algorithm.
3. **Refactoring Shared Code:** Make some improvements to the way your code is structured.
4. **Bonus Missions**: Add a couple of additional features to improve user experience and prevent against crashes. (This section is optional).

Setup
-----

For this assignment, you’ll be writing code locally on your own machine, and running your code at the command line.

First, open up a terminal window on your computer, and use the ``cd`` command to navigate to your main parent folder for assignments in this class (e.g. `lc101/`):

::

    $ cd ~/lc101/


Once you are inside your directory for the class, create a new sub-directory for this assignment called ``crypto/``, and then ``cd`` into it:

::

    $ mkdir crypto
    $ cd crypto

Finally, go ahead and create two python source files, one for each of the two main parts of the assignment:

::

    $ touch caesar.py
    $ touch vigenere.py

.. note::
    Double-check your spelling! Both of these names are easy to misspell.

Part 1: Caesar
--------------

Now it's time for some encryption!

In chapter 9, you might have worked on an exercise that asked you write a function called ``rot13``, which used the `Caesar Cipher`_ to encrypt a message. If you need a refresher, this is what the exercise said:

    Write a function called ``rot13`` that uses the Caesar cipher to encrypt a message. The Caesar cipher works like a substitution cipher but each character is replaced by the character 13 characters to “its right” in the alphabet. So for example the letter “a” becomes the letter “n”. If a letter is past the middle of the alphabet then the counting wraps around to the letter “a” again, so “n” becomes “a”, “o” becomes “b” and so on. *Hint*: Whenever you talk about things wrapping around its a good idea to think of modulo arithmetic (using the remainder operator).

The idea is to iterate over the message character by character, rotating each letter 13 places to the right. So for example:

- **a** becomes **n**
- **b** becomes **o**,
- **c** becomes **p**
- ... and so on.

At the end of the alphabet we wrap back around to a, so that:

- **m** shifts to **z**
- **n** shifts to **a**
- **o** shifts to **b**
- ...etc

The end result is a *super secret coded message* that looks like gibberish to any outsiders.

We're going to build a more general version of the rot13 algorithm that allows a message to be encrypted using *any* rotation amount, not just 13. Ultimately, users will be able to type a message in the terminal, and specify a rotation amount (13, 4, 600, etc), and your program will print the resulting encrypted message.

The final interactive program will run like this:

::

    $ python caesar.py
    Type a message:
    Hello, World!
    Rotate by:
    5
    Mjqqt, Btwqi!


We are going to do this in a few steps, using some helper functions. This will help break the problem down into manageable steps. Furthermore, you will be able to reuse the same helper functions when you move on to Part 2.

alphabet_position
~~~~~~~~~~~~~~~~~

Open up your ``caesar.py`` file in Visual Studio Code. In that file, write a function ``alphabet_position(letter)``, which receives a letter (that is, a string with only one alphabetic character) and returns the 0-based numerical position of that letter within the alphabet.

Here are some example input parameter values, with the corresponding return
values.

+--------------------+--------------+
| ``letter``         | Return value |
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

.. note::
    The function should be case-insensitive.

.. note::
    You can assume that your input will definitely be a letter. Don't worry about what might happen if somebody tries to use your function with an input parameter that is something other than a single letter, like ``alphabet_position("grandpa22!")``

When (you think) you are finished, the best way to test your function is to fire up the Python shell in your terminal, and then import your file as a module:

::

    $ python
    >>> import caesar
    >>> caesar.alphabet_position("a")
    0
    >>> caesar.alphabet_position("E")
    4
    # ... etc

.. warning::
    It is important that you test your function to make sure it works **before moving on**. This practice of testing each little piece of your code in isolation before trying to put all the pieces together will save you a lot of time and headaches.

rotate_character
~~~~~~~~~~~~~~~~

Next, write another helper function ``rotate_character(char, rot)`` which receives
a character ``char`` (that is, a string of length 1), and an integer ``rot``.
Your function should return a new string of length 1, the result of rotating ``char``
by ``rot`` number of places to the right.

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
| c        | 26      | c            |
+----------+---------+--------------+
| c        | 27      | d            |
+----------+---------+--------------+
| A        | 13      | N            |
+----------+---------+--------------+
| z        | 1       | a            |
+----------+---------+--------------+
| Z        | 2       | B            |
+----------+---------+--------------+
| z        | 37      | k            |
+----------+---------+--------------+
| !        | 37      | !            |
+----------+---------+--------------+
| 6        | 13      | 6            |
+----------+---------+--------------+

.. note::
    The upper or lower case of the letter should be preserved. For example, ``rotate_character("A", 13)`` results in ``"N"``, rather than ``"n"``

.. note::
    For non-alphabetical characters, you should ignore the ``rot`` argument and simply return ``char`` untouched. For example, see ``"!"`` and ``"6"`` in the table above.

Ok, go code like a champ.

.. hint::
    You should make use of your own ``alphabet_position`` function! If feeling confused, you may want to re-read about how `Functions Can Call Other Functions`_

.. warning::
    Once again, before moving on to the next stage, make sure to test ``rotate_character`` with a wide variety of input values (beyond just the examples we provide).

encrypt
~~~~~~~

Now let's get to the heart of the matter. Write one more function called ``encrypt(text, rot)``, which receives as input a string and an integer. This is just like the ``rot13`` function, but instead of hardcoding the number 13, your function should receive a second argument, `rot` which specifies the rotation amount. Your function should return the result of rotating each letter in the ``text`` by ``rot`` places to the right.

Here are some example input values, with the corresponding return values:

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

.. note::
    The ``text`` argument might contain non-alphabetic characters (spaces, numbers, symbols). You should leave these as they are.

.. hint::
    You should make use of your own ``rotate_character`` function (which should make it very easy to satisfy the condition above).

.. warning::
    Don't forget to test!

Make It Interactive
~~~~~~~~~~~~~~~~~~~~~~~~

You're almost done with Caesar! The last step is simply to write some ``print`` and ``input`` statements so the user can run your program from the terminal. Remember, you should ask the user for their message and rotation amount, and then print the encrypted message:

::

    $ python caesar.py
    Type a message:
    Hello, World!
    Rotate by:
    5
    Mjqqt, Btwqi!

Recall that, `as described`_ in the *Initials* assignment, you should place everything "loose" inside a ``main`` function, like this:

.. code-block:: python

    # ... the functions you wrote ...


    def main():
        # your main code (input and print statements)

    if __name__ == "__main__":
        main()


Part 2: Vigenere
----------------

If you're trying to pass notes in the back of class with your best friend Suzie, the Caesar cipher would be fairly easy for a nosy outsider to decode. Let's implement a more complicated cipher algorithm.

First, watch `this short video`_ on the Vigenere cipher, courtesy of the CS50 folks at Harvard.

As you can see in the video, Vigenere uses a word as the encryption key, rather than an integer. Your finished program will behave like this:

::

    $ python vigenere.py
    Type a message:
    The crow flies at midnight!
    Encryption key:
    boom
    Uvs osck rmwse bh auebwsih!


Above, the user entered a message of "The crow flies at midnight" and an encryption key of "boom", and the program printed “Uvs osck rmwse bh auebwsih!”.

How did we arrive at that result? Here is a detailed breakdown:

+--------------------------+-----------------+-----------------+--------------+
| char from input string   | char from key   | rotation amount | result char  |
+==========================+=================+=================+==============+
| T                        | b               | 1               | U            |
+--------------------------+-----------------+-----------------+--------------+
| h                        | o               | 14              | v            |
+--------------------------+-----------------+-----------------+--------------+
| e                        | o               | 14              | s            |
+--------------------------+-----------------+-----------------+--------------+
| (space)                  | n/a             | n/a             | (space)      |
+--------------------------+-----------------+-----------------+--------------+
| c                        | m               | 12              | o            |
+--------------------------+-----------------+-----------------+--------------+
| r                        | b               | 1               | s            |
+--------------------------+-----------------+-----------------+--------------+
| o                        | o               | 14              | c            |
+--------------------------+-----------------+-----------------+--------------+
| w                        | o               | 14              | k            |
+--------------------------+-----------------+-----------------+--------------+
| (and so on …)            |                 |                 |              |
+--------------------------+-----------------+-----------------+--------------+

.. note::
    As with Caesar, the upper or lower case of each character should be preserved, and non-alphabetical characters like ``" "`` and ``"!"`` should not get encrypted.

.. note::
    When we encounter a non-alphabetical character in the message, the encryption key *does not* use up another letter. For example, notice how the ``"m"`` in ``"boom"`` does not get "wasted", so to speak, on the space character. Instead, it is "saved" for the next alphabetical character, the ``"c"`` in ``"crow"``.

.. note::
    Whenever we reach the end of the encryption key ("boom") before reaching the end of the message, the encryption key wraps back around to the beginning again (the letter "b").

.. note::
    You may assume that the encryption key ("boom") will not contain any numbers or special characters. Letters only.

Reusing your Caesar code
~~~~~~~~~~~~~~~~~~~~~~~~~

You probably noticed that Vigenere is very similar to Caesar. The only difference is that the rotation amount varies throughout the course of the message.

Whenever you find yourself in a situation like this -- faced with a coding task that is very similar to one you did previously -- your instinct should be to sniff around for ways to reuse the code you have already written. Ideally, all the work that is required by both tasks should be factored out into reusable components (like functions).

In this case, the majority of the logic that Vigenere has in common with Caesar is encapsulated in those two helper functions you wrote, ``alphabet_position`` and ``rotate_character``. Indeed, that is why we intentionally guided you down the path of writing those functions. You are going to find both of those functions equally helpful for implementing Vigenere.

Go ahead and copy / paste those functions into ``vigenere.py`` so you can use them. (In reality, copy / pasting is not a very smart thing to do here, and there is a better way, which you will see farther down in this assignment. But for now, just do it.)

encrypt
~~~~~~~

Now that you have your helper functions, go ahead and write a new version of the ``encrypt`` function which uses the Vigenere cipher rather than Caesar.

Your first step is to figure out what the function signature should say. How should it be different from the Caesar version, ``def encrypt(text, rot)``?

As usual, don't move on until you have tested your function against a lot of different inputs and seen the results you expect.

Make It Interactive
~~~~~~~~~~~~~~~~~~~~~~~

Finally, add the appropriate ``print`` and ``input`` statements inside a ``main`` function so that your program behaves as specified:

::

    $ python vigenere.py
    Type a message:
    The crow flies at midnight!
    Encryption key:
    boom
    Uvs osck rmwse bh auebwsih!


Part 3: Refactoring Shared Code
--------------------------------

Remember when we said that copy / pasting those helper functions is not a smart thing to do? Now let's do something better.

The reason that copy / pasting is a bad idea is that now you have two copies of the same exact code lying around. What happens if you realize you need to change the function? You will have to remember to make the same change in both copies. That might not sound so bad, but imagine if you had not two, but three copies, or six, or eleven? Given that you want to use the same function everywhere, that function should only ever be defined once.


Import to the Rescue
~~~~~~~~~~~~~~~~~~~~~~

If a function is only defined in one place, a particular file somewhere, then how can some other file use it? It is actually quite easy: the other file simply needs to ``import`` the function. You have already used the ``import`` keyword throughout this course, whenever you wanted to access code written by other people, such as the ``math`` and ``random`` modules. It is also possible to create and import your own code. Here's how:

#. In your editor, open up a new file called ``helpers.py``. Paste both helper functions, ``alphabet_position`` and ``rotate_character`` into this new file.

#. Next, open up ``caesar.py``, and delete both of those functions.

#. Finally, add this line to the top of ``caesar.py``:

   .. sourcecode:: python

       from helpers import alphabet_position, rotate_character

   This says that we want to import code from a module ``helpers``, but that we only want to import particular pieces of that module, specificially the functions ``alphabet_position`` and ``rotate_character``.

Now we should be able to use those functions! Try running ``python caesar.py`` again, and you should find that it works just like it did before.

.. note::
    In order for this to work, it is essential that ``helpers.py`` be in the same directory as ``caesar.py``.

.. note::
    The technique we are using here is a little simpler than the way this is normally done. For larger projects, where the structure is a tree of folders within folders, there is a slightly more involved procedure for reusing code, which does not require both modules to live together in the same folder. If you're curious, you can read up more about creating modules in Python in the `Python module documentation`_.

Once you have Caesar working, do the same thing for Vigenere: simply delete the two helper functions, and ``import`` them from ``helpers.py``.

Now your helper functions are defined only once, and your code remains nice and DRY (Don't Repeat Yourself)!

Bonus Missions
--------------

Congrats! You have created two very cool encryption programs.

If you want an extra challenge, keep reading here. Otherwise, you can skip to the `Submission`_ section below. This section is entirely optional.

Let's make a few improvements to the project by adding two new features:

1. **Command-line Arguments**

   Add a feature that improves the user experience by allowing the user to type their rotation amount as a *command-line argument* rather than waiting for a prompt.

2. **Validation**

   Add some validation on user input, so that if the user types something dumb, your program handles it gracefully, rather than crashing.


Bonus Mission 1: Command-line Arguments
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Each of our programs requires two pieces of input from the user:

- Caesar requires a message and a rotation amount.
- Vigenere requires a message and an encryption key-word.

Let's now make the following tweak: instead of prompting the user for both pieces of info, let's allow the user to include the second value right away at the beginning.

For example, rather than Caesar behaving like this:

::

    $ python caesar.py
    Type a message:
    Hello, World!
    Rotate by:
    5
    Mjqqt, Btwqi!

... we want Caesar to instead behave like this:

::

    $ python caesar.py 5
    Type a message:
    Hello, World!
    Mjqqt, Btwqi!


Notice how, on the first line, the user included the number ``5`` as an *argument* when running the program. This means that the program only needed to make one additional input prompt, asking for the text message. This makes for a slightly nicer user experience.

In order to implement this feature, you obviously need some way of knowing, inside your ``caesar.py`` script, that the user typed the number ``5`` as a command-line argument.

Conveniently enough, it just so happens that inside any Python program, you *do* have access to a list containing each of the words the user typed on the command line. This list of strings lives in a module called ``sys``, and has the variable name ``argv``, short for "argument vector" ("vector" is another word for a list).

Try adding the following two lines to the beginning of your ``main`` function in your ``caesar.py`` file:

.. sourcecode:: python

    def main():
        from sys import argv
        print("This is what the user typed on the command line:", argv)
        # ... the rest of your code ...

Now run your program, and you should see output like this:

::

    $ python caesar.py 5
    This is what the user typed on the command line: ['caesar.py', '5']
    Type a message:
    ... etc

The important part is the second line.

Notice that:

- The word ``'python'`` is **not** included.
- The first item, ``argv[0]`` is always the name of your script (in this case, ``'caesar.py'``).
- The other arguments follow. (In this case, we only have one additional argument, ``'5'``).

Ok! Now you have all the tools you need to implement this feature. Remember that the ``argv`` variable is just a normal list like any other. The rotation number (5 or whatever it is), is sitting there inside that list, waiting for you.

First, modify ``caesar.py`` to match the behavior specified above, which, once again for easy reference, looks like this:

::

    $ python caesar.py 5
    Type a message:
    Hello, World!
    Mjqqt, Btwqi!

Once you have finished Caesar, make similar changes to Vigenere so that the user can specify their encryption key on the command-line while typing the program command. Vigenere should behave like this:

::

    $ python vigenere.py boom
    Type a message:
    The crow flies at midnight!
    Uvs osck rmwse bh auebwsih!

Bonus Mission 2: Validation
~~~~~~~~~~~~~~~~~~~~~~~~~~~

You may or may not have noticed that if the user types certain things, your program will freak out.

There are two main cases to handle:

1. **User fails to type a number when specifying rotation amount.**

   ::

       $ python caesar.py grandpa

   If the user gives you something like "grandpa" instead of "5", your program will crash, probably with this error:

   ::

       ValueError: invalid literal for int() with base 10: 'grandpa' on line X

2. **User fails to provide a command-line argument.**

   Now that you are expecting the user to specify the rotation amount via a command-line argument, there is a danger that the user will fail to type anything at all, i.e.:

   ::

       $ python caesar.py

   In this case, you will probably see:

   ::

       IndexError: list index out of range

   because you are trying to read from ``argv`` at an index that does not exist, since ``argv`` only contains one string, rather than two.

Rather than simply crash whenever one of these things happens, your program should handle it more gracefully, by printing a helpful "usage" message (explaining how to properly use your program), and then exiting immediately, rather than continuing on and crashing.

Caesar Validation
......................

Below is an example of the Caesar program you are trying to achieve. In the example, Caesar repeatedly exits gracefully as the user messes up, re-runs the program, messes up again, etc, before finally getting it right:

::

    $ python caesar.py
    usage: python caesar.py n
    $ python caesar.py grandpa
    usage: python caesar.py n
    $ python caesar.py 5.0
    usage: python caesar.py n
    $ python caesar.py 5
    Type a message:
    Hello, World!
    Mjqqt, Btwqi!

4th time is the charm!

To check if the argument is an integer, there is a string method called ``isdigit`` which you should use. It works just like ``isalpha``, but checks for integers rather than alphabetic characters:

::

    $ python
    >>> "grandpa".isdigit()
    False
    >>> "5.0".isdigit()
    False
    >>> "5".isdigit()
    True

To exit your program early, you can invoke the ``exit`` function, which is part of the ``sys`` module. Simply import the function by adding ``exit`` to your previous ``import`` statement:

.. sourcecode:: python

    from sys import argv, exit

and then invoke the function like this:

.. sourcecode:: python

    exit()

Ok, go validate that input!

Vigenere Validation
......................

After Caesar, make similar changes to Vigenere by validating the encryption key. Recall that previously, we said you could assume the encryption key (e.g. ``"boom"``) would contain letters only, no numbers or special characters. Now, you may no longer make that assumption. The user could type any crazy thing. You must enforce the letters-only rule yourself.

Your Vigenere program should behave like this:

::

    $ python vigenere.py
    usage: python vigenere.py keyword
    $ python vigenere.py boom!
    usage: python vigenere.py keyword
    $ python vigenere.py boom52
    usage: python vigenere.py keyword
    $ python vigenere.py boom
    Type a message:
    The crow flies at midnight!
    Uvs osck rmwse bh auebwsih!

.. note::
    You might have noticed that in this case, our usage message could certainly stand to be a little more helpful. If the user types an invalid encryption key, the current usage message doesn't really explain *why* their attempt was rejected.

    If you want a *Bonus* Bonus Mission (and why not, since you have already come this far), you can beef up the usage message like so:

    ::

        $ python vigenere.py boom!
        usage: python vigenere.py keyword
        Arguments:
        -keyword : The string to be used as a "key" to encrypt your message. Should only contain alphabetic characters-- no numbers or special characters.
        $ python vigenere.py boom52
        usage: python vigenere.py keyword
        Arguments:
        -keyword : The string to be used as a "key" to encrypt your message. Should only contain alphabetic characters-- no numbers or special characters.
        $ python vigenere.py boom
        Type a message:
        The crow flies at midnight!
        Uvs osck rmwse bh auebwsih!

Submitting Your Work
-----------------------

To submit your work, you must upload your files directly, using the *Upload* button in the top-left of the Vocareum window. Upload all 3 files:

- caesar.py
- vigenere.py
- helpers.py

Finally, as usual, click Submit!

.. warning::
    Remember that you should not have any ``input`` statements anywhere outside of your ``main`` function. This is true for both Caesar and Vigenere. If you find yourself waiting a very long time (30 seconds or more) for your grade, then this is the reason why.

.. note::
    If you completed the Bonus Mission, you are eligible to receive one *Pat on the Head* from your TF. In order to redeem your *Pat on the Head*, you must demo your code in front of the TF, and show him or her that your program behaves as specified in the instructions.

----

.. [1] This problem set is inspired by the original Crypto Pset in CS50, adopted for Python rather than C.

.. _Caesar Cipher: https://en.wikipedia.org/wiki/Caesar_cipher#History_and_usage
.. _The Accumulator Pattern: ../Strings/Loopingandcounting.html/#the-accumulator-pattern-with-strings
.. _Functions Can Call Other Functions: ../Functions/Functionscancallotherfunctions.html
.. _official documentation: https://docs.python.org/3/library/sys.html
.. _this short video: https://www.youtube.com/watch?v=9zASwVoshiM&feature=youtu.be
.. _Python module documentation: https://docs.python.org/3/tutorial/modules.html
.. _Using Python Locally: ../ProblemSets/LocalPython.html
.. _ASCII: http://www.asciitable.com
.. _Submission: #submitting-your-work
.. _as described: ../ProblemSets/Initials.html#make-it-importable
