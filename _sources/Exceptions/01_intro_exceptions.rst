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

What is an exception?
=====================

An *exception* is a signal that a condition has occurred that can't be easily
handled using the normal flow-of-control of a Python program. *Exceptions*
are often defined as being "errors" but this is not always the case. All
errors in Python are dealt with using *exceptions*, but not all
*exceptions* are errors.

Exception Handling Flow-of-control
==================================

To explain what an *exception* does, let's review the normal "flow of control"
in a Python program. In normal operation Python executes statements sequentially,
one after the other. For three constructs, if-statements, loops and function
invocations, this sequential execution is interrupted.

* For *if-statements*, only one of several statement blocks is executed and
  then flow-of-control jumps to the first statement after the if-statement.
* For *loops*, when the end of the loop is reached, flow-of-control jumps back
  to the start of the loop and a test is used to determine if the loop needs
  to execute again. If the loop is finished, flow-of-control jumps to the
  first statement after the loop.
* For *function invocations*, flow-of-control jumps to the first statement in
  the called function, the function is executed, and the flow-of-control
  jumps back to the next statement after the function call.

Do you see the pattern? If the flow-of-control is not purely sequential, it
always executes the first statement immediately following the altered
flow-of-control. That is why we can say that Python flow-of-control is
sequential.


Raising and Catching Errors with ``try`` and ``except``
-------------------------------------------------------

.. index:: try, except, Exception

The try/except control structure provides a way to process a run-time error 
and continue on with program execution. Until now, any run-time error, such asking 
for the 8th item in a list with only 3 items, or dividing by 0, has caused the 
program execution to stop. In the browser ActiveCode windows, you get an error 
message in a box below. When you are executing python programs from the command-line, 
you also get an error message saying something about what went wrong and what line it occurred on. After the run-time error is encountered, the python interpreter does not try to execute the rest of the code. You have to make some change in your code and rerun the whole program.

With try/except, you tell the python interpreter:

* Try to execute a block of code, the "try" clause.
   * If the whole block of code executes without any run-time errors, just carry on with the rest of the program after the try/except statement.

* If a run-time error does occur during execution of the block of code:
   * skip the rest of that block of code (but don't exit the whole program)
   * execute a block of code in the "except" clause
   * then carry on with the rest of the program after the try/except statement

.. sourcecode:: python

   try:
      <try clause code block>
   except <ErrorType>:
      <exception handler code block>

The syntax is fairly straightforward. The only tricky part is that after the word except, there can optionally be a specification of the kinds of errors that will be handled. The catchall is the class Exception. If you write ``except Exception:`` all runtime errors will be handled. If you specify a more restricted class of errors, only those errors will be handled; any other kind of error will still cause the program to stop running and an error message to be printed.

The code below causes an error of type IndexError, by trying to access the third element of a two-element list.

.. activecode:: exceptions_1
   :nocanvas:

   items = ['a', 'b']
   third = items[2]
   
   
The code below causes an error of type ZeroDivisionError, or less specifically ArithmeticError.

.. activecode:: exceptions_2
   :nocanvas:

   x = 5
   y = x/0

Let's see what happens if we wrap some of this problematic code in a try/except statement. Note that ``this won't print`` doesn't print: when the error is encountered, the rest of the try block is skipped and the exception block is executed. When the except block is done, it continues on with the next line of code that's outdented to the same level as the try: ``continuing`` is printed.

.. activecode:: exceptions_3
   :nocanvas:
   
   try:
       items = ['a', 'b']
       third = items[2]
       print("This won't print")
   except Exception:
       print("got an error")
   
   print("continuing")

 
If we catch only IndexEror, and we actually have a divide by zero error, the program does stop executing.   
   
.. activecode:: exceptions_4
   :nocanvas:
   
   try:
       items = ['a', 'b']
       third = items[2]
       print("This won't print")
   except IndexError:
       print("error 1")
      
   print("continuing")
   
   try:
       x = 5
       y = x/0
       print("This won't print, either")
   except IndexError:
       print("error 2")
       
       
   print("continuing again")
   
   
There's one other useful feature. The exception code can access a variable that contains information about exactly what the error was. Thus, for example, in the except clause you could print out the information that would normally be printed as an error message but continue on with execution of the rest of the program. To do that, you specify a variable name after the exception class that's being handled. The exception clause code can refer to that variable name.

.. activecode:: exceptions_5
   :nocanvas:
   
   try:
       items = ['a', 'b']
       third = items[2]
       print("This won't print")
   except Exception as e:
       print("got an error")
       print(e)
   
   print("continuing")




.. index:: exception, flow-of-control, raise, try: except:


