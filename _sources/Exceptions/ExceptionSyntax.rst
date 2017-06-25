..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: exceptions-4-
   :start: 1

Exception Syntax
=================

There are many variations on the code that catches exceptions. Here is a brief summary, but other code variations are possible.

Catch All Exceptions
--------------------

Catch all exceptions, regardless of their type. This will prevent your program from crashing, but this type of exception handling is rarely useful because you can't do anything meaningful to recover from the abnormal condition. In fact, you don't even know what the abnormal condition is since it could be *any* exception.

.. code-block:: Python

  try:
      # Your normal code goes here.
      # Your code should include function calls which might raise exceptions.
  except:
      # If ANY exception was raised, then execute this code block.

Catch A Specific Exception
--------------------------

This is perhaps the most often used syntax. It catches one specific condition and tries to recover from the condition.

.. code-block:: Python

  try:
      # Your normal code goes here.
      # Your code should include function calls which might raise exceptions.
  except ExceptionName:
      # If ExceptionName was raised, then execute this block.

Catch Multiple Specific Exceptions
----------------------------------

If you are writing a code block that contains calls to functions that may raise multiple different exceptions, then you can write separate ``except`` clauses to handle each. You may also include an ``else`` clause after your ``except`` clauses to contain any code that you want to run in case the ``try`` clause does *not* raise an exception.

.. code-block:: Python

  try:
      # Your normal code goes here.
      # Your code should include function calls which might raise exceptions.
  except ExceptionOne:
      # If ExceptionOne was raised, then execute this block.
  except ExceptionTwo:
      # If ExceptionTwo was raised, then execute this block.
  else:
      # If there was no exception then execute this block.

Be aware that when you have more than one ``except`` clause in a ``try: except;`` block, it is only *the first* matching exception that will be triggered and have its code block executed. Therefore, you want to list the exceptions in the order of more specific to less specific. For example, you saw in the lesson on Standard Exceptions that the ``ZeroDivisionError`` is a "child" of the ``ArithmeticError``. This means that the former is more specific than the latter. So if you want to catch both errors because you want to do different things based on which error it is, then you would want to list the ``except`` clause for the ``ZeroDivisionError`` first.

Clean-up After Exceptions
-------------------------

If you have code that you want to be executed even if exceptions occur, you can include a ``finally`` code block:

.. code-block:: Python

  try:
      # Your normal code goes here.
      # Your code might include function calls which might raise exceptions.
      # If an exception is raised, some of these statements might not be executed.
  finally:
      # This block of code will always execute, even if there are exceptions raised

It's a good idea to review the `Python Tutorial <https://docs.python.org/3/tutorial/errors.html>`_ since there are even more syntactical variations for exception handling than those covered above.

An Example of File I/O
----------------------

Although we will not be covering file input and output in the main text of this course (there is a `Hacker Chapter <https://runestone.launchcode.org/runestone/static/thinkcspy/Files/intro-WorkingwithDataFiles.html>`_ you can work through if you are interested), it is worth noting that one place where you will always want to include exception handling is when you read or write to a file.

Here is a typical example of file processing. Note that the outer ``try: except:`` block takes care of a missing file or the fact that the existing file can't be opened for writing. The inner ``try: except:`` block  protects against output errors, such as trying to write to a device that is full. The ``finally`` code guarantees that the file is closed properly, even if there are errors during writing.

.. code-block:: Python

  try:
      f = open("my_file.txt", "w")
      try:
          f.write("Writing some data to the file")
      finally:
          f.close()
  except IOError:
      print "Error: my_file.txt does not exist or it can't be opened for output."

.. index:: exception syntax, exception
