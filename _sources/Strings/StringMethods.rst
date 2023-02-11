..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: strings-5-
   :start: 1

.. _stringMethods:

String Methods
--------------

We previously used a few functions like ``print()`` and ``input()``.  A **method** is a function that is attached to a specific Python object. 
To access this function, we write the object, then a dot ``.``, and then the name of the method.   The "dot notation" is the way we connect the name of an object to the name of a method
it can perform. For example, we can write ``ss.upper()`` when we wanted the string ``ss`` to perform the ``upper()`` method to create an upper-case version of itself.

Remember that Strings are objects.  Each string instance has its own attributes and methods.  The most important attribute of the string is the collection of characters.  There are a wide variety of methods.  Try the following program.

.. activecode:: chp08_upper

    ss = "Hello, World"
    print(ss.upper())

    tt = ss.lower()
    print(tt)


In this example, ``upper`` is a method that can be invoked on any string object
to create a new string in which all the
characters are in uppercase.  ``lower`` works in a similar fashion changing all characters in the string
to lowercase.  (The original string ``ss`` remains unchanged.  A new string ``tt`` is created.)

In addition to ``upper`` and ``lower``, the following table provides a summary of some other useful string methods.  There are a few activecode examples that follow so that you can try them out.

==========  ==============      ==================================================================
Method      Parameters          Description
==========  ==============      ==================================================================
upper       none                Returns a string in all uppercase
lower       none                Returns a string in all lowercase
capitalize  none                Returns a string with first character capitalized, the rest lower

strip       none                Returns a string with the leading and trailing whitespace removed
lstrip      none                Returns a string with the leading whitespace removed
rstrip      none                Returns a string with the trailing whitespace removed
count       item                Returns the number of occurrences of item
replace     old, new            Replaces all occurrences of old substring with new

center      width               Returns a string centered in a field of width spaces
ljust       width               Returns a string left justified in a field of width spaces
rjust       width               Returns a string right justified in a field of width spaces

find        item                Returns the leftmost index where the substring item is found, or -1 if not found
rfind       item                Returns the rightmost index where the substring item is found, or -1 if not found
index       item                Like find except causes a runtime error if item is not found
rindex      item                Like rfind except causes a runtime error if item is not found
format      substitutions       Involved! See :ref:`Format-Strings`, below
==========  ==============      ==================================================================

You should experiment with these
methods so that you understand what they do.  Note once again that the methods that return strings do not
change the original.  You can also consult the `Python documentation for strings <https://docs.python.org/3/library/stdtypes.html#string-methods>`_.

.. activecode:: ch08_methods1

    ss = "    Hello, World    "

    els = ss.count("l")
    print(els)

    print("***" + ss.strip() + "***")
    print("***" + ss.lstrip() + "***")
    print("***" + ss.rstrip() + "***")

    news = ss.replace("o", "***")
    print(news)


.. activecode:: ch08_methods2


    food = "banana bread"
    print(food.capitalize())

    print("*" + food.center(25) + "*")
    print("*" + food.ljust(25) + "*")     # stars added to show bounds
    print("*" + food.rjust(25) + "*")

    print(food.find("e"))
    print(food.find("na"))
    print(food.find("b"))

    print(food.rfind("e"))
    print(food.rfind("na"))
    print(food.rfind("b"))

    print(food.index("e"))


**Check your understanding**

.. mchoice:: test_question8_3_1
   :practice: T
   :answer_a: 0
   :answer_b: 2
   :answer_c: 3
   :correct: c
   :feedback_a: There are definitely o and p characters.
   :feedback_b: There are 2 o characters but what about p?
   :feedback_c: Yes, add the number of o characters and the number of p characters.


   What is printed by the following statements?

   .. code-block:: python

      s = "python rocks"
      print(s.count("o") + s.count("p"))




.. mchoice:: test_question8_3_2
   :practice: T
   :answer_a: yyyyy
   :answer_b: 55555
   :answer_c: n
   :answer_d: Error, you cannot combine all those things together.
   :correct: a
   :feedback_a: Yes, s[1] is y and the index of n is 5, so 5 y characters.  It is important to realize that the index method has precedence over the repetition operator.  Repetition is done last.
   :feedback_b: Close.  5 is not repeated, it is the number of times to repeat.
   :feedback_c: This expression uses the index of n
   :feedback_d: This is fine, the repetition operator used the result of indexing and the index method.


   What is printed by the following statements?

   .. code-block:: python

      s = "python rocks"
      print(s[1] * s.index("n"))


.. index::
   braces; format string
   single: {}; format string
   format string
   string; format method


.. _Format-Strings:

F-Strings
~~~~~~~~~~~~~~~~~~~~~

In grade school quizzes a common convention is to use fill-in-the blanks. For instance,

    Hello _____!


and you can fill in the name of the person greeted, and combine
given text with a chosen insertion. *We use this as an analogy:*
Python has a similar
construction, called a formatted string or an **f-string**. An f-string makes
substitutions into places in a string
enclosed in braces. Run this code:

.. activecode:: ch08_methods3

    person = input('Your name: ')
    greeting = f'Hello {person}!'
    print(greeting)


There are several new ideas here!

The string has been formatted in a new way. We have included an ``f`` before the starting quotation mark.
Such a string is called an *f-string*.  Places where
braces are embedded are replaced by the value of the expression inside the braces. There are many
variations on the syntax between the braces. In this case we use
the syntax where the first (and only) location in the string with
braces has the variable ``person``. When this code is evaluated, the value of the person variable is placed in the string in this location.

In the code above, this new string is assigned to the identifier
``greeting``, and then the string is printed.

The identifier
``greeting`` was introduced to break the operations into a clearer
sequence of steps. However, since the value of ``greeting`` is only
referenced once, it can be eliminated with the more concise
version:

.. activecode:: ch08_methods4

    person = input('Enter your name: ')
    print(f'Hello {person}!')

There can be multiple substitutions, with data of any type.
Next we use floats.  Try original price $2.50  with a 7% discount:

.. activecode:: ch08_methods5

    origPrice = float(input('Enter the original price: $'))
    discount = float(input('Enter discount percentage: '))
    newPrice = (1 - discount/100)*origPrice
    calculation = f'${origPrice} discounted by {discount}% is ${newPrice}.'
    print(calculation)

If you used the data suggested, this result is not satisfying.
Prices should appear with exactly two places beyond the decimal point,
but that is not the default way to display floats.

F-strings can give further information inside the braces
showing how to specially format data.
In particular floats can be shown with a specific number of decimal places.
For two decimal places, put ``:.2f`` inside the braces but after the variable name for the monetary values:

.. activecode:: ch08_methods6

    origPrice = float(input('Enter the original price: $'))
    discount = float(input('Enter discount percentage: '))
    newPrice = (1 - discount/100)*origPrice
    calculation = f'${origPrice:.2f} discounted by {discount}% is ${newPrice:.2f}.'
    print(calculation)

The 2 in the format modifier can be replaced by another integer to round to that
specified number of digits.

A technical point: Since braces have special meaning in a format
string, there must be a special rule if you want braces to actually
be included in the final *formatted* string. The rule is to double
the braces: ``{ {`` and ``}}``. For example mathematical set
notation uses braces. The initial and final doubled
braces in the format string below generate literal braces in the
formatted string::


    a = 5
    b = 9
    setStr =  f'The set is {​{ {a},{b} }​}.'
    print(setStr)

Unfortunately, at the time of this writing, the ActiveCode format implementation has a bug,
printing doubled braces, but standard Python prints ``{5, 9}``.

.. mchoice:: test_question8_3_3
   :practice: T
   :answer_a: Nothing - it causes an error
   :answer_b: sum of {} and {} is {}; product: {}.
   :answer_c: sum of 2 and 6 is 8; product: 12.
   :answer_d: sum of {2} and {6} is {8}; product: {12}.
   :correct: c
   :feedback_a: It is legal format syntax.
   :feedback_b: Put the value of each expression in place of the braces.
   :feedback_c: Yes, correct!
   :feedback_d: Close:  REPLACE the braces.


   What is printed by the following statements?

   .. code-block:: python

       x = 2
       y = 6
       print(f'sum of {x} and {y} is {x+y}; product: {x*y}.')


.. mchoice:: test_question8_3_4
   :practice: T
   :answer_a: 2.34567 2.34567 2.34567
   :answer_b: 2.3 2.34 2.34567
   :answer_c: 2.3 2.35 2.3456700
   :correct: c
   :feedback_a: The numbers before the f in the braces give the number of digits to display after the decimal point.
   :feedback_b: Close, but round to the number of digits and display the full number of digits specified.
   :feedback_c: Yes, correct number of digits with rounding!


   What is printed by the following statements?

   .. code-block:: python

       v = 2.34567
       print(f'{v:.1f} {v:.2f} {v:.7f}')


