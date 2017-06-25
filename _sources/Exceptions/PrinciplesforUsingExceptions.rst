..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: exceptions-3-
   :start: 1

.. index:: exceptions,

Principles for Using Exceptions
===============================

There are many bad examples of *exception* use on the Internet. The purpose of an exception is to modify the flow of control, not to catch simple errors. If your ``try: except:`` block is in the same function that ``raises`` the exception, you are probably misusing exceptions.

.. topic:: Principle 1:

  If a condition can be handled using the normal flow of control, don't use an exception!

Example 1:

+--------------------------------------------+----------------------------------------------+
| **DON'T DO THIS**:                         | When you can just as easily test for no      |
|                                            | items in the list doing this:                |
+--------------------------------------------+----------------------------------------------+
| .. code-block:: Python                     | .. code-block:: Python                       |
|                                            |                                              |
|   try:                                     |   if len(a_list) > 0:                        |
|       avg = sum(a_list) / len(a_list)      |       avg = sum(a_list) / len(a_list)        |
|   except ZeroDivisionError:                |   else:                                      |
|       avg = 0                              |       avg = 0                                |
+--------------------------------------------+----------------------------------------------+

Example 2:

+--------------------------------------------+---------------------------------------------+
| **DON'T DO THIS**:                         | When you can just as easily test for a      |
|                                            | valid index doing this:                     |
+--------------------------------------------+---------------------------------------------+
| .. code-block:: Python                     | .. code-block:: Python                      |
|                                            |                                             |
|   try:                                     |   if 0 <= index < len(my_list):             |
|       value = my_list[index]               |       value = my_list[index]                |
|   except IndexError:                       |   else:                                     |
|       value = -1                           |       value = -1                            |
+--------------------------------------------+---------------------------------------------+

You'll learn more about lists soon, but here just note that a list can hold many values and the length of a list can be determined using the function ``len``. Therefore, in Example 1, you can test to make sure a list is not empty before using its length as a divisor (in case its length is 0).

Also note that a value in a list can be accessed as shown above in Example 2, and an ``IndexError`` will occur if you try to access a value using an index greater than *the length of the list minus 1*.


.. topic:: Principle 2:

  If you call a function that potentially raises exceptions, and you can do something appropriate to deal with the exception, then surround the code that contains the *function call* with a ``try: except:`` block.

Example: Suppose you have a function that determines how many slices of pizza each guest at a party may have. The user enters how many people will be at the party. If the user enters ``0``, not only would that make for a very sad party, but it would raise an exception in the ``slices_per_person`` function. So it makes sense to wrap the call to that function inside a ``try: except:`` block in ``main``. That way we can give the user a useful error message and re-prompt them for valid input until they enter a number besides zero.

.. activecode:: exception_example

  def slices_per_person(num_people):
      num_slices = 8
      slices_per_person = num_slices / num_people
      return slices_per_person

  def main():
      num_people_str = input("Number of people attending the pizza party: ")
      num_people_int = int(num_people_str)
      try:
          print("Each person gets", slices_per_person(num_people_int), "slices")
      except ZeroDivisionError:
          print("You must enter a number other than zero. Don't make me sad.")
          main()

  if __name__ == "__main__":
      main()


.. topic:: Principle 3:

  If you call a function that potentially raises exceptions, and you can't do anything meaningful about the conditions that are raised, then don't catch the exception message(s).

At this point in time, we haven't learned enough Python to demonstrate an application of this principle in code. But one scenario we can imagine is if you have a program that utilizes a database and for some reason (usually because of the wrong user and password in the connection string) the program is not able to connect to the database, then there is no point in catching that error. After all, the program *should* crash at that point, since it won't be able to do any meaningful work if it can't access the data in the database. And by crashing, it will signal to the developer (or the user will signal to the developer or tech support team via an angry email) that it needs immediate attention.

A useful, if graphic, metaphor for this principle is that if you have a life-threatening wound, you don't want to just put a band-aid on it, or otherwise hide or downplay it. You want it to be clear that it needs serious attention pronto, and that is the kind of message a crashed program sends.
