..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell. Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: list-18-
   :start: 1

.. index:: side effect, modifier, list, reference, pure function, functional programming, parameters, pattern

Using Lists as Parameters
-------------------------

Now that we understand more about the difference between copies and references, we can look at how we use lists as parameters to functions, as well as how we return lists. There are two types of functions that take lists as parameters, modifiers and pure functions.

Modifiers
==========

Functions which take lists as arguments and change them during execution are called **modifiers** and the changes they make are called **side effects**. Passing a list as an argument actually *passes a reference to the list, not a copy of the list*. Since lists are mutable, changes made to the elements referenced by the parameter change the same list that the argument is referencing. For example, the function below takes a list as an argument and multiplies each element in the list by 2:

.. activecode:: chp09_parm1

    def double_stuff(alist):
        """ Overwrite each element in alist with double its value. """
        for position in range(len(alist)):
            alist[position] = 2 * alist[position]

    def main():
        things = [2, 5, 9]
        print(things)
        double_stuff(things)
        print(things)

    if __name__ == "__main__":
        main()

The parameter ``alist`` and the variable ``things`` are aliases for the same object.

.. image:: Figures/references4.png
   :alt: State snapshot for multiple references to a list as a parameter

Since the list object is shared by two references, there is only one copy. If a function modifies the elements of a list parameter, the change also occurs in the original.

This can be easily seen in codelens. Note that after the call to ``double_stuff``, the formal parameter ``alist`` refers to the same object as the actual parameter ``things``.  There is only one copy of the list object itself.


.. codelens:: chp09_parm1_trace
    :python: py3

    def double_stuff(alist):
        """ Overwrite each element in alist with double its value. """
        for position in range(len(alist)):
            alist[position] = 2 * alist[position]

    def main():
        things = [2, 5, 9]
        double_stuff(things)

    if __name__ == "__main__":
        main()

Pure Functions
===============

On the contrary, a **pure function** does not produce side effects. It communicates with the calling program only through parameters (which it does not modify) and a return value. Here is the ``double_stuff`` function from the previous section written as a pure function. To use the pure function version of ``double_stuff`` to modify ``things``, you would assign the return value back to ``things``.

.. activecode:: ch09_mod2

    def double_stuff(alist):
        """ Return a new list in which contains doubles of the elements in alist. """
        new_list = []
        for value in alist:
            new_elem = 2 * value
            new_list.append(new_elem)
        return new_list

    def main():
        things = [2, 5, 9]
        print(things)
        things = double_stuff(things)
        print(things)

    if __name__ == "__main__":
        main()

Once again, codelens helps us to see the actual references and objects as they are passed and returned.

.. codelens:: ch09_mod3
    :python: py3

    def double_stuff(alist):
        """ Return a new list in which contains doubles of the elements in alist. """
        new_list = []
        for value in alist:
            new_elem = 2 * value
            new_list.append(new_elem)
        return new_list

    def main():
        things = [2, 5, 9]
        things = double_stuff(things)

    if __name__ == "__main__":
        main()

Which is Better?
================

Anything that can be done with modifiers can also be done with pure functions. In fact, some programming languages only allow pure functions. There is some evidence that programs that use pure functions are faster to develop and less error-prone than programs that use modifiers. Nevertheless, modifiers are convenient at times, and in some cases, functional programs are less efficient.

In general, we recommend that you write pure functions whenever it is reasonable to do so and resort to modifiers only if there is a compelling advantage. This approach might be called a *functional programming style*.

Functions that Produce Lists
=============================

The pure version of ``double_stuff`` above made use of an  important **pattern** for your toolbox. Whenever you need to write a function that creates and returns a list, the pattern is
usually::

    initialize a result variable to be an empty list
    loop
       create a new element
       append it to result
    return the result

Let us show another use of this pattern. Assume you already have a function ``is_prime(x)`` that can test if ``x`` is a prime number (meaning divisible by only itself and 1). Now, write a function to return a list of all prime numbers less than ``n``::

   def primes_up_to(n):
       """ Return a list of all prime numbers less than n. """
       result = []
       for i in range(2, n):
           if is_prime(i):
               result.append(i)
       return result
