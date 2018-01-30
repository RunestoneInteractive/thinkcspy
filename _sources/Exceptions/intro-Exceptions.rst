..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: exceptions-1-
   :start: 1

.. index:: exceptions, flow of control, raise, try, except, run-time stack

Intro to Exceptions
--------------------

An **exception** is a signal that a condition has occurred that can't easily be handled using the normal flow of control of a Python program. Recall that in our Debugging chapter we mentioned exceptions when describing **runtime errors**:

  "The second type of error is a runtime error, so called because the error does not appear until you run the program. These errors are also called exceptions because they usually indicate that something exceptional (and bad) has happened."

*Exceptions* are often defined as being "errors" but that is not always the case. Programmers can create exceptions in response to any special situation --- not just an error --- that they think it would be useful to change the flow of control to handle. In other words, all errors in Python are dealt with using exceptions, but not all exceptions are errors.

Exception Handling Flow of Control
===================================

To explain what an exception does, let's review the normal **flow of control** in a Python program. The normal flow of execution is for Python to execute statements sequentially, one after the other. For three constructs, ``if`` statements, loops, and function invocations, this sequential execution is interrupted.

* For ``if`` statements, *only one* of several statement blocks is executed, then flow of control jumps to the first statement after the ``if`` statement.
* For loops, when the end of the loop is reached, flow of control jumps back to the start of the loop and a condition is used to determine if the loop needs to execute again. If the loop is finished, flow of control jumps to the first statement after the loop.
* For function invocations, flow of control jumps to the first statement in the called function, the function is executed, and the flow of control jumps back to the next statement after the function call.

Do you see the pattern? Even when the flow of control is not *purely* sequential, it always executes the first statement *immediately following* the altered flow of control. That is why we can still say that Python flow of control is sequential. But there are cases where this sequential flow of control does not work well. An example will best demonstrate this.

Let's suppose that a program contains complex logic that is appropriately subdivided into functions. The program is running and it currently is executing function ``d``, which was called by function ``c``, which was called by function ``b``, which was called by function ``a``, which was called from the ``main`` function. This is illustrated by the following simplistic code example:

.. code-block:: python

  def a():
      b()

  def b():
      c()

  def c():
      d()

  def d()
      # processing

  def main()
      a()

Now say function ``d`` determines that the current processing won't work for some reason and needs to send a message to the ``main`` function to try something different. However, all that ``d`` can do using normal flow of control is to return a value to function ``c``. So ``d`` returns a special value to ``c`` that means "try something else". Now ``c`` has to recognize this value, quit its processing, and return the special value to function ``b``. And so on and so forth. It would be very helpful if function ``d`` could communicate directly with ``main`` (or any other function) without having to send a special value through the intermediate calling functions.

Well, that is exactly what an exception does. An exception is a message to any function currently on the executing program's **run-time stack**. (The run-time stack is what keeps track of the active function calls while a program is executing. It is also known as a `call stack <https://en.wikipedia.org/wiki/Call_stack>`_.)

In Python, you create an exception message using the ``raise`` command. The simplest format for a ``raise`` command is the keyword ``raise`` followed by the name of an exception. Notice that the Pythonic naming convention for exceptions is to use the *CapWords* case. It is also conventional for the last word of the exception name to be "Error", if the exception is indeed an error.

.. code-block:: Python

  raise ExceptionName

So what happens to an exception message after it is created? The normal flow of control of a Python program is interrupted and Python starts looking for any code in its run-time stack that is interested in dealing with the message. It always searches from its current location at the bottom of the run-time stack, up the stack, in the order the functions were originally called. A ``try: except:`` block is used to say "hey, I can deal with that message." The first ``try: except:`` block that Python finds on its search back up the run-time stack will be executed. If there is no ``try: except:`` block found, the program "crashes" and prints its run-time stack to the console.

Let's take a look at several code examples to illustrate this process. If function ``d`` had a ``try: except:`` block around the code that raised a ``MyError`` message, then the flow of control would be passed to the local ``except`` block. That is, ``d`` would handle its own issues.

.. code-block:: python

  def a():
      b()

  def b():
      c()

  def c():
      d()

  def d()
      try:
          # processing code
          if special_error_happened:
              raise MyError
      except MyError:
          # execute if the MyError message happened

  def main()
      a()

But perhaps function ``c`` is better able to handle the issue, so you could put the ``try: except:`` block in ``c``:

.. code-block:: python

  def a():
      b()

  def b():
      c()

  def c():
      try:
          d()
      except MyError:
          # execute if the MyError message happened

  def d()
        # processing code
        if special_error_happened:
            raise MyError

  def main()
      a()

But perhaps the ``main`` function is better able to handle the issue, so you could put the ``try: except:`` block in ``main``:

.. code-block:: python

  def a():
      b()

  def b():
      c()

  def c():
      d()

  def d()
    # processing code
    if special_error_happened:
        raise MyError

  def main()
      try:
          a()
      except MyError:
          # execute if the MyError message happened

Summary
=======

Let's summarize our discussion. An *exception* is a message that something "out-of-the-ordinary" has happened and the normal flow of control needs to be circumvented. When an exception is raised, Python searches its run-time stack for a ``try: except:`` block that can appropriately deal with the situation. The first ``try: except:`` block that knows how to deal with the issue is executed, and then flow of control is returned to its normal sequential execution. If no appropriate ``try: except:`` block is found, the program "crashes" and prints its run-time stack to the console.

As our final example, here is a program that crashes because no valid ``try: except:`` block was found to process the ``MyError`` message. Notice that the ``try: except:`` block in the main function only knows how to deal with ``ZeroDivisonError`` messages, not ``MyError`` messages.

.. code-block:: python

  def a():
      b()

  def b():
      c()

  def c():
      d()

  def d()
    # processing code
    if special_error_happened:
        raise MyError

  def main()
      try:
          a()
      except ZeroDivisonError:
          # execute if a ZeroDivisonError message happened
