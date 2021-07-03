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

Principles for using Exceptions
===============================

There are many bad examples of *exception* use on the Internet. The purpose
of an *exception* is to modify the flow-of-control, not to catch simple errors.
If your ``try: except:`` block is in the same function that ``raises`` the
exception, you are probably mis-using exceptions.

.. topic:: Principle 1:

  If a condition can be handled using the normal flow-of-control, don't
  use an exception!

Example 1:

+------------------------------------------+-------------------------------------------+
| **DON'T DO THIS**:                       | When you can just as easily test for no   |
|                                          | items in the list doing this:             |
+------------------------------------------+-------------------------------------------+
| .. code-block:: Python                   | .. code-block:: Python                    |
|                                          |                                           |
|   try:                                   |   if len(a_list) > 0:                     |
|     average = sum(a_list) / len(a_list)  |     average = sum(a_list) / len(a_list)   |
|   except ZeroDivisionError:              |   else:                                   |
|     average = 0                          |     average = 0                           |
+------------------------------------------+-------------------------------------------+

Example 2:

+------------------------------------------+-------------------------------------------+
| **DON'T DO THIS**:                       | When you can just as easily test for a    |
|                                          | valid index doing this:                   |
+------------------------------------------+-------------------------------------------+
| .. code-block:: Python                   | .. code-block:: Python                    |
|                                          |                                           |
|   try:                                   |   if 0 <= index < len(my_list):           |
|     value = my_list[index]               |     value = my_list[index]                |
|   except IndexError:                     |   else:                                   |
|     value = -1                           |     value = -1                            |
+------------------------------------------+-------------------------------------------+

Example 3:

+------------------------------------------+-------------------------------------------+
| **DON'T DO THIS**:                       | When you can just as easily test          |
|                                          | to see if the key is valid doing this:    |
+------------------------------------------+-------------------------------------------+
| .. code-block:: Python                   | .. code-block:: Python                    |
|                                          |                                           |
|   try:                                   |   if key in my_dictionary.keys():         |
|     value = my_dictionary[key]           |     value = my_dictionary[key]            |
|   except KeyError:                       |   else:                                   |
|     value = -1                           |     value = -1                            |
+------------------------------------------+-------------------------------------------+

.. topic:: Principle 2:

  If you call a function that potentially raises exceptions, and you can do
  something appropriate to deal with the exception, then surround the code
  that contains the function call with a ``try: except:`` block.

Example: Suppose you have a function that reads a file to set the state of
an application when it starts up. You should catch any errors related to
reading the file and set the state of the application to default values if
they can't be set from the file.

.. code-block:: Python

  try:
    load_state('previous_state.txt')
  except OSError:
    set_state_to_defaults()

.. topic:: Principle 3:

  If you call a function that potentially raises exceptions, and you can't do
  anything meaningful about the conditions that are raised, then don't
  catch the exception message(s).


.. index:: principles for using exceptions


