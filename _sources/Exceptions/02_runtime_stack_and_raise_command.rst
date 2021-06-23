..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: exceptions-2-
   :start: 1

Runetime Stack and ``raise`` command
====================================

There are cases where the sequential flow-of-control does
not work well. An example will best explain this.

Let's suppose that a program contains complex logic that is appropriately
subdivided into functions. The program is running and it currently is executing
function D, which was called by function C, which was called by function B,
which was called by function A, which was called from the main function. This
is illustrated by the following simplistic code example:

.. code-block:: python

  def main()
    A()

  def A():
    B()

  def B():
    C()

  def C():
    D()

  def D()
    # processing

Function D determines that the current processing won't work for some reason
and needs to send a message to the main function to try something different.
However, all that function D can do using normal flow-of-control is to return
a value to function C. So function D returns a special value to function C
that means "try something else". Function C has to recognize this value,
quit its processing, and return the special value to function B. And so forth
and so on. It would be very helpful if function D could communicate directly
with the main function (or functions A and B) without sending a special value
through the intermediate calling functions. Well, that is exactly what an
*exception* does. An *exception* is a message to any function currently on the
executing program's "run-time-stack". (The "run-time-stack" is what keeps track
of the active function calls while a program is executing.)

In Python, your create an *exception* message using the ``raise`` command. The
simplest format for a ``raise`` command is the keyword ``raise`` followed by
the name of an exception. For example:

.. code-block:: Python

  raise ExceptionName

So what happens to an *exception* message after it is created? The normal
flow-of-control of a Python program is interrupted and Python starts looking
for any code in its run-time-stack that is interested in dealing with the
message. It always searches from its current location at the bottom of the
run-time-stack, up the stack, in the order the functions were originally
called. A ``try: except:`` block is used to say "hey,
I can deal with that message." The first ``try: except:`` block that Python
finds on its search back up the run-time-stack will be executed. If there
is no ``try: except:`` block found, the program "crashes" and prints its
run-time-stack to the console.

Let's take a look at several code examples to illustrate this process. If
function D had a ``try: except:`` block around the code that ``raised`` a
``MyException`` message, then the flow-of-control would be passed to the
local ``except`` block. That is, function D would handle it's own issues.

.. code-block:: python

  def main()
    A()

  def A():
    B()

  def B():
    C()

  def C():
    D()

  def D()
    try:
      # processing code
      if something_special_happened:
        raise MyException
    except MyException:
      # execute if the MyException message happened

But perhaps function C is better able to handle the issue, so you could put
the ``try: except:`` block in function C:

.. code-block:: python

  def main()
    A()

  def A():
    B()

  def B():
    C()

  def C():
    try:
      D()
    except MyException:
      # execute if the MyException message happened

  def D()
    # processing code
    if something_special_happened:
      raise MyException

But perhaps the main function is better able to handle the issue, so you
could put the ``try: except:`` block in the main function:

.. code-block:: python

  def main()
    try:
      A()
    except MyException:
      # execute if the MyException message happened

  def A():
    B()

  def B():
    C()

  def C():
    D()

  def D()
    # processing code
    if something_special_happened:
      raise MyException

Summary
=======

Let's summarize our discussion. An *exception* is a message that something
"out-of-the-ordinary" has happened and the normal flow-of-control needs to
be abandoned. When an *exception* is ``raised``, Python searches its run-time-stack
for a ``try: except:`` block that can appropriately deal with the condition.
The first ``try: except:`` block that knows how to deal with the issue is
executed and then flow-of-control is returned to its normal sequential execution.
If no appropriate ``try: except:`` block is found, the program "crashes" and
prints its run-time-stack to the console.

As our final example, here is a program that crashes because no valid
``try: except:`` block was found to process the ``MyException`` message.
Notice that the ``try: except:`` block in the main function only knows how
to deal with ``ZeroDivisonError`` messages, not ``MyException`` messages.

.. code-block:: python

  def main()
    try:
      A()
    except ZeroDivisonError:
      # execute if a ZeroDivisonError message happened

  def A():
    B()

  def B():
    C()

  def C():
    D()

  def D()
    # processing code
    if something_special_happened:
      raise MyException


.. index:: exception, flow-of-control, raise, try: except:


