.. index:: testing, unit test, equivalence class

Unit Testing
------------

A **test case** expresses requirements for a program, in a way that can be checked automatically. Specifically, a test
asserts something about the state of the program at a particular point in its execution. A **unit test** is an automatic 
procedure used to validate that individual units of code are working properly. A function is one form of a unit.
A collection of these unit tests is called a **test suite**.

We have previously suggested that it's a good idea to first write down comments about what your code is supposed to do, 
before actually writing the code. It is an even better idea to write down some test cases before writing a program.

There are several reasons why it's a good habit to write test cases.

* Before we write code, we have in mind what it *should* do, but those thoughts may be a little vague. Writing down test cases forces us to be more concrete about what should happen.
* As we write the code, the test cases can provide automated feedback. You've actually been the beneficiary of such automated feedback via test cases throughout this book in some of the activecode windows and almost all of the exercises. We wrote the code for those test cases but kept it hidden, so as not to confuse you and also to avoid giving away the answers. You can get some of the same benefit from writing your own test cases.
* In larger software projects, the set of test cases can be run every time a change is made to the code base. **Unit tests** check that small bits of code are correctly implemented. 

One way to implement unit tests in Python is with ``assert``.

- Following the word assert there will be a python expression.
- If that expression evaluates to the Boolean ``False``, then the interpreter will raise a runtime error.
- If the expression evaluates to ``True``, then nothing happens and the execution goes on to the next line of code.

Take a look at the way assert is used in the following code.

.. activecode:: ch04_ut2

   assert type(9//5) == int
   assert type(9.0//5) == int

In the code above, we explicitly state some natural assumptions about how truncated division might work in python. 
It turns out that the second asumption is wrong: ``9.0//5`` produces ``2.0``, a floating point value!

The python interpreter does not enforce restrictions about the data types of objects that can be bound to particular 
variables; however, type checking could alert us that something has gone wrong in our program execution. If we are 
assuming at that ``x`` is a list, but it's actually an integer, then at some point later in the program execution, 
there will probably be an error. We can add ``assert`` statements that will cause an error to be flagged sooner rather 
than later, which might make it a lot easier to debug.

**Check your understanding**

.. mchoice:: assertch6_3_1
   :answer_a: A runtime error will occur
   :answer_b: A message is printed out saying that the test failed.
   :answer_c: x will get the value that y currently has
   :answer_d: Nothing will happen
   :answer_e: A message is printed out saying that the test passed.
   :correct: d
   :feedback_a: The expression ``x==y`` evaluates to ``True``
   :feedback_b: The expression ``x==y`` evaluates to ``True``
   :feedback_c: ``x==y`` is a Boolean expression, not an assignment statement
   :feedback_d: The expression ``x==y`` evaluates to ``True``
   :feedback_e: When an assertion test passes, no message is printed.
   :practice: T

   When ``assert x==y`` is executed and x and y have the same values, what will happen?

``assert`` with ``for`` loops
=============================

Why would you ever want to write a line of code that can never compute anything useful for you, but sometimes causes 
a runtime error? For all the reasons we described above about the value of automated tests. You want a test that 
will alert that you that some condition you assumed was true is not in fact true. It's much better to be alerted to 
that fact right away than to have some unexpected result much later in your program execution, which you will have 
trouble tracing to the place where you had an error in your code.

Why doesn't ``assert`` print out something saying that the test passed? The reason is that you don't want to clutter 
up your output window with the results of automated tests that pass. You just want to know when one of your tests 
fails. In larger projects, other testing harnesses are used instead of ``assert``, such as the python ``unittest`` 
module. Those provide some output summarizing tests that have passed as well as those that failed. In this textbook, 
we will just use simple ``assert`` statements for automated tests.

In the code below, ``lst`` is bound to a list object. In python, not all the elements of a list have to be of the 
same type. We can check that they all have the same type and get an error if they are not. Notice that with ``lst2``, 
one of the assertions fails.

.. activecode:: ch04_ut3

   lst = ['a', 'b', 'c']
   first_type = type(lst[0])
   for item in lst:
       assert type(item) == first_type

   lst2 = ['a', 'b', 'c', 17]
   first_type = type(lst2[0])
   for item in lst2:
       assert type(item) == first_type

Return Value Tests
==================

Testing whether a function returns the correct value is the easiest test case to define. You simply check whether the 
result of invoking the function on a particular input produces the particular output that you expect. Take a look at 
the following code.

.. activecode:: ch04_ut1

   def square(x):
   #raise x to the second power
       return x*x
   print('testing square function')
   assert square(3) == 9

Because each test checks whether a function works properly on specific inputs, the test cases will never be complete: in 
principle, a function might work properly on all the inputs that are tested in the test cases, but still not work 
properly on some other inputs. That's where the art of defining test cases comes in: you try to find specific inputs that 
are representative of all the important kinds of inputs that might ever be passed to the function.

.. mchoice:: question19_1_3
    :answer_a: assert blanked('under', 'du', 'u_d__') == True
    :answer_b: assert blanked('under', 'u_d__') == 'du'
    :answer_c: assert blanked('under', 'du') == 'u_d__'
    :correct: c
    :feedback_a: blanked only takes two inputs; this provides three inputs to the blanked function
    :feedback_b: The second argument to the blanked function should be the letters that have been guessed, not the blanked version of the word
    :feedback_c: This checks whether the value returned from the blanked function is 'u_d__'.
    :practice: T

    For the hangman game, this 'blanked' function takes a word and some letters that have been guessed, and returns a version 
    of the word with _ for all the letters that haven't been guessed. Which of the following is the correct way to write 
    a test to check that 'under' will be blanked as ``'u_d__'`` when the user has guessed letters d and u so far?