..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell. Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. index:: Python Style Guide

Python Style Guidelines
-----------------------

Each programming language has certain style conventions that programmers should follow. By following these standards you ensure that your code will be readable and maintainable by other developers. This is an important consideration as you will frequently be working on a team developing large programs collectively, so the code you write is not for your eyes alone.

There is another reason to familiarize yourself with the style conventions for Python, and that is to avoid errors that can occur when certain standards aren't followed. Some examples of conventions that can cause bugs when not followed are: mixing tabs with spaces, improper naming of files, and misplaced line breaks. These will be described in more detail below.

The official `Style Guide for Python Code`_ is an excellent resource for learning about these coding conventions. Refer to it any time you have a question about how your code should look. Below are some highlights of particularly important concepts from the style guide.

Indentation
===========

Use spaces, **not tabs**, to indent your code. Each level of indentation should consist of 4 spaces. *If you mix tabs and spaces you'll get an error from Python!*

File and Directory Naming
=========================

Files and directories (or modules and packages, as they are called in the Python Style Guide) should be all lowercase, with an underscore separating words, e.g., ``my_file.py``. You should aim to keep these names as short yet descriptive as possible. You should never use spaces or dashes in your file or directory names, as these can cause problems when you want to import a class or module (something you will learn more about later).

Function and Class Naming
=========================

Functions should be named in the same manner as files and directories, all lowercase with an underscore between words, e.g. ``find_square``.

Classes, which you will learn about later, should be written in PascalCase (also called upper camel case, or CapWords), meaning that they should look like the following: ``MyClass``.

Line Continuation
=================

Long lines (greater than 80 characters) should be broken into multiple lines by wrapping expressions in parentheses and indenting the continued line using a hanging indent. An example:
::

   # Instead of writing a line like this:
   string = "This is a very long string that you can imagine going on and on..."

   # Write it like this:
   string = ("This is a very long string that you can imagine "
          "going on and on...")

If the line you are wrapping involves an operator, break the line before the operator.
::

   # Instead of writing a line like this:
   income = (gross_wages + taxable_interest + (dividends - qualified_dividends) -
          ira_deduction - student_loan_interest)

   # Write it like this:
   income = (gross_wages
          + taxable_interest
          + (dividends - qualified_dividends)
          - ira_deduction
          - student_loan_interest)

.. _Style Guide for Python Code: https://www.python.org/dev/peps/pep-0008
