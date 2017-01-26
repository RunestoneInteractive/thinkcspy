Initials
=============

The main goal of this assignment is to remove you from the comfortable sandbox of the Active Code editors in this online book, and introduce you to the tools you need to start writing Python code locally on your own computer. By the end of the assignment, you will have written a small text-based program that tells the user the initials of his or her name.

The assignment is broken into 2 parts:

1. `Using Python Locally`_
    In part 1, we will guide you through all the setup work necessary for writing and executing Python code on your machine:

    - Learn how to use the *command line* interface on your computer
    - Install Python
    - Install a text editor
    - Use your text editor to write Python code in a ``.py`` file
    - Execute your Python file on the command line.

2. `Initials`_
    In part 2, you will get down to business creating the program described above. This will be just like one of the typical Exercises at the end of the chapters in this book. The only differences will be:

    - You will be writing your code in a text editor and saving it locally on your computer.
    - You will learn how to use a special function called ``__main__`` so that your program is organized with a clean separation of responsibilities.


Part 1: Using Python Locally
----------------------------

Blah blah

If that sounds intimidating, don't worry. While learning how to use the command line can seem scary, it's not bad at all if you learn it in steps and practice regularly. Before you know it, you'll find interacting with your computer via the command line to be super useful, maybe even fun!

Getting Familiar with the Command Line
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Before we install Python on our computers, let's get familiar with the command line. We're going to use Appendix A from the online book *Learn Python the Hard Way* (don't worry, the book is more approachable than the title makes it it sound). This section is called `Command Line Crash Course`_ and it contains 15 short tutorials teaching you the basics of how to interact with your computer's file system and operating system using a "terminal" or "shell". **Do all 15!**

Installing and Running Python Locally
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Follow along with the video tutorial below, where we will install Atom, a general-purpose code editor, along with *both* Python 2 and Python 3. We've been using Python 3 thus far, but we'll need to use Python 2 a bit later in the class. After installing Python, we will create a simple "Hello World" Python program and run it on the command-line.

The installation process will be a little different for each operating system, so find the appropriate video below and follow along.

Mac OS X
@@@@@@@@@

If you are on a Mac, follow along to this video:

.. raw:: html

    <div style="text-align:center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/DZmkImpGSAU" frameborder="0" allowfullscreen></iframe></div>

Linux
@@@@@@

This video walks through the process in Ubuntu 16.04.

.. note::
    If you're using a different version of Linux, it may be slightly different, and we encourage you to Google for answers to anything that may not be covered here.

.. raw:: html

    <div style="text-align:center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/ypXJ1kwF7s4" frameborder="0" allowfullscreen></iframe></div>

.. _Command Line Crash Course: http://learnpythonthehardway.org/book/appendixa.html

Windows
@@@@@@@@

This video walks through the details for Windows 10.

.. note::
    If you're using Windows 7 or 8, see the notes below on a few things that will be slightly different for you.

    If you have an even older version of Windows, such as Windows Vista or Windows XP, you may have a very different experience getting these tasks going. We encourage you to do some research of your own or work with a fellow student or TF. And after a bit of that, you may be ready to spring for that Windows upgrade!

.. raw:: html

    <div style="text-align:center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/zNHqcy6ZguQ" frameborder="0" allowfullscreen></iframe></div>

Windows 7 and 8: Editing the Path Environment Variable
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

This occurs around 24:30 of the video.

When editing the Path environment variable after installing Python 2, you will see a slightly different dialog.

.. image::  Figures/win7-win8-path-dialog.png
    :scale: 50 %
    :align: center

Rather than the dialog pictured in the video, you'll see the more condensed dialog, shown above. To add Python 2 to your path, you need to manually type in the new location at the end of the existing path. *Be careful not to delete any of the path entries that are already there!*

To the end of the text that is already present in the Path dialog, add (note the semicolon): ``;C:\Python27\``

Accessing Folder Options in Windows 7
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

This occurs around 26:50 of the video.

To access the Folder Options dialog and allow viewing of file extensions, you'll need to do the following:

1. Open the Windows menu at the bottom left and search for "folder options"

2. Open the result named "Folder Options" that is displayed under "Control Panel"

.. image::  Figures/win7-folder-options.png
    :scale: 50 %
    :align: center

The rest of the process of changing this setting is the same as in the video.

Part 2: Initials
-----------------

Now that you have a little practice using the command-line, and have installed Python and a text editor, it is time to create your program.

Setup
~~~~~

First, you must create a new folder for the project, and a new file within the folder. And while we're here, let's make sure you set up your overall directory structure in a nice, organized way for future assignments.

Open up a terminal window on your computer. After completing the installation video tutorial above, you should already have a broad parent folder with a name like ``lc101/`` or ``code/``, where you save all your assignments for this class.

But if you do *not* yet have such a class parent folder on your file system, then create one now:

::

    $ mkdir lc101

.. note::
    Remember that in the example above, you should not actually type the dollar sign ``$``. We use that symbol just as a convention to indicate that the example takes place at the command-line prompt in a terminal window.

Next, use the ``cd`` command to navigate so that you are inside that parent folder:

::

    $ cd lc101

Once you are inside your directory for the class, create a new sub-directory for this assignment called ``initials/``, and then ``cd`` into it:

::

    $ mkdir initals
    $ cd initals

In general, for the remainder of LC 101, you should follow this same pattern for every new assignment:

1. Navigate into the parent folder (e.g. ``lc101``).
2. Create a new subfolder for the new assignment.
3. Navigate into that new subfolder.
4. Start coding!

For example, if you are starting an assignment called *Hungry Hungry Hippos*, then you should do this:

::

    $ cd lc101
    $ mkdir hungry-hungry-hippos
    $ cd hungry-hungry-hippos

And your overall directory structure will look like this:

::

    lc101/
        |
        +------ using-python-locally/
        |           |
        |           +----- hello.py
        |
        +------ initals/
        |           |
        |           +----- # initals stuff
        |
        +------ hungry-hungry-hippos/
        |           |
        |           +----- # hippo stuff
        ... etc

The Initials Program
~~~~~~~~~~~~~~~~~~~~~

Now you are finally ready to get started coding! Inside your ``initials/`` folder, create a new file called ``initials.py``:

::

    $ touch initials.py

Open up that file in a text editor, such as Atom, and complete the following function:

.. sourcecode:: python

    def get_initials(fullname):
        """ Given a person's name, returns the person's initials (uppercase) """
        # TODO your code here

Your function will receive one argument, ``fullname``, a string representing someone's name, and should return a string with that name's capitalized initials. You may assume that the name will contain only letters (uppercase and/or lowercase) plus single spaces between words. This means you don’t have to worry about Conan O’Brien, T.S. Eliot, or Cee-Lo Green.

Here are some examples of what your function should return for various ``fullname`` arguments:

+------------------+-----------------+
| ``fullname``     | return value    |
+==================+=================+
| Ozzie Smith      | OS              |
+------------------+-----------------+
| bonnie blair     | BB              |
+------------------+-----------------+
| George           | G               |
+------------------+-----------------+
| Daniel Day Lewis | DDL             |
+------------------+-----------------+

.. note::
    Even if the name starts with a lowercase letter, you should always capitalize the initials. For example, if ``fullname == "ozzie smith"``, you should still return ``"OS"``

If you were to invoke your function, it would look something like this:

.. sourcecode:: python

    answer = get_initials("Ozzie Smith")
    print("The initials of 'Ozzie Smith' are", answer)
    # => prints "The initials of 'Ozzie Smith' are OS"

Notes, Tips and Hints
~~~~~~~~~~~~~~~~~~~~~

- You'll need to collect the initials as you find them, and return them all together at the end. You may want to re-read about `The Accumulator Pattern`_.


Testing
~~~~~~~

When you (think you) are finished writing your ``get_initials`` function, you should test it to make sure it works. There are a few ways to do this:

1. You can import your script into a REPL (Python shell), and then feed various inputs into your function.
2. You can just add some print statements (like the example above) to ``initials.py`` script.

Technique 1 looks something like this:

::

    $ python3
    Python 3.5.0 (v3.5.0:374f501f4567, Sep 12 2015, 11:00:19)
    [GCC 4.2.1 (Apple Inc. build 5666) (dot 3)] on darwin
    Type "help", "copyright", "credits" or "license" for more information.
    >>> from initials import get_initials
    >>> get_initials("Ozzie Smith")
    OS
    >>> get_initials("bonnie blair")
    BB
    >>> get_initials("Daniel Day Lewis")
    DDL
    ... etc
    quit()

That looks complicated but its actually very easy. Try typing ``python3`` into your terminal and you'll see. Technique 1 is definitely recommended, because writing and changing bunch of print statements starts to get annoying very quickly.

But if you prefer Technique 2, here's how that works: Simply add print statements to your file, and then run your script on the command-line:

::

    $ python3 caesar.py
    The initials of 'Ozzie Smith' are OS
    The initials of 'bonnie blair' are BB
    The initials of 'Daniel Day Lewis' are DDL
    ... etc

After running your script, just test by hand that the output matches what you expected to see.

.. note::
    Remember that we’ve been using Python 3 in this class. So when you try to run your program, make sure you type ``python3 initials.py``, rather than simply ``python initials.py``, which would run the Python 2 interpreter.

Either way, whether using the REPL or print statements, make sure to test your function against a healthy variety of inputs.

Make It Interactive
~~~~~~~~~~~~~~~~~~~~

Just for fun, let's turn this into an interactive program that a user can run from the terminal. All you have to do is add an ``input`` statement to ask the user for his/her name, and then a ``print`` statement to report the results back to him/her. Your program should work like this:

::

    $ python3 initials.py
    What is your full name?
    Ozzie Smith
    OS

Just to be clear about the example above:

- The user typed the first line, causing the program to run.
- Then, the program printed the second line asking for their name.
- Then the user typed the third line ("Ozzie Smith").
- Finally, the program printed the initials ("OS").
