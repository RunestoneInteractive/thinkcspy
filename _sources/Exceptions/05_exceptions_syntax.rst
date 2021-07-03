..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: exceptions-5-
   :start: 1

Exceptions Syntax
=================

There are many variations on the code that catches exceptions. Here is a
brief summary, but other code variations are possible.

Catch All Exceptions
--------------------

Catch all exceptions, regardless of their type. This will prevent
your program from crashing, but this type of exception handling is rarely useful
because you can't do anything meaningful to recover from the abnormal condition.

.. code-block:: Python

  try:
    # Your normal code goes here.
    # Your code should include function calls which might raise exceptions.
  except:
    # If any exception was raised, then execute this code block.

Catch A Specific Exception
--------------------------

This is perhaps the most often used syntax. It catches one specific condition
and tries to re-cover from the condition.

.. code-block:: Python

  try:
    # Your normal code goes here.
    # Your code should include function calls which might raise exceptions.
  except ExceptionName:
    # If ExceptionName was raised, then execute this block.

Catch Multiple Specific Exceptions
----------------------------------

.. code-block:: Python

  try:
    # Your normal code goes here.
    # Your code should include function calls which might raise exceptions.
  except Exception_one:
    # If Exception_one was raised, then execute this block.
  except Exception_two:
    # If Exception_two was raised, then execute this block.
  else:
    # If there was no exception then execute this block.

Clean-up After Exceptions
-------------------------

If you have code that you want to be executed even if exceptions occur, you
can include a ``finally`` code block:

.. code-block:: Python

  try:
    # Your normal code goes here.
    # Your code might include function calls which might raise exceptions.
    # If an exception is raised, some of these statements might not be executed.
  finally:
    # This block of code will always execute, even if there are exceptions raised


An Example of File I/O
----------------------

One place where you will always want to include exception handling is when
you read or write to a file. Here is a typical example of file processing.
Note that the outer ``try: except:`` block takes care of a missing file or
the fact that the existing file can't be opened for writing. The inner
``try: except:`` block  protects against output errors, such as trying to
write to a device that is full. The ``finally`` code guarantees that the
file is closed properly, even if there are errors during writing.

.. code-block:: Python

  try:
     f = open("my_file.txt", "w")
     try:
        f.write("Writing some data to the file")
     finally:
        f.close()
  except IOError:
     print "Error: my_file.txt does not exist or it can't be opened for output."

.. index:: exceptions syntax


