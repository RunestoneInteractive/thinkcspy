
.. _operator-summary:

Operator precedence table
==========================

.. index:: 
   operator; precedence
   precedence

The following table summarizes the operator precedence of Python operators *in this book*, from 
highest precedence (most binding) to lowest
precedence (least binding).  Operators in
the same box have the same precedence.  Unless syntax is explicitly given,
operators are binary.  Operators in the same box group left to right (except for
exponentiation, which groups from right to left).  
This is many of the entries from the complete Python table at 
https://docs.python.org/3/reference/expressions.html#operator-precedence.

In the row for comparisons, membership tests, and identity tests, all have the same
precedence and have a left-to-right chaining feature; for example ``3 < x <= y != z``.

+-----------------------------------------------+-------------------------------------+
| Operator                                      | Description                         |
+===============================================+=====================================+
| ``(expressions...)``,                         | Binding or tuple display,           |
| ``[expressions...]``,                         | list display,                       |
| ``{key: value...}``,                          | dictionary display,                 |
| ``{expressions...}``                          | set display                         |
+-----------------------------------------------+-------------------------------------+
| ``x[index]``, ``x[index:index]``,             | Subscription, slicing,              |
| ``x(arguments...)``, ``x.attribute``          | call, attribute reference           |
+-----------------------------------------------+-------------------------------------+
| ``**``                                        | Exponentiation                      |
|                                               | (groups right to left)              |
+-----------------------------------------------+-------------------------------------+
| ``-x``                                        | Negation                            |
+-----------------------------------------------+-------------------------------------+
| ``*``, ``/``, ``//``, ``%``                   | Multiplication,                     |
|                                               | real and integer division,          |
|                                               | remainder                           |
+-----------------------------------------------+-------------------------------------+
| ``+``, ``-``                                  | Addition and subtraction            |
+-----------------------------------------------+-------------------------------------+
| ``in``, ``not in``, ``is``, ``is not``,       | Comparisons, including membership   |
| ``<``, ``<=``, ``>``, ``>=``, ``!=``, ``==``  | tests and identity tests            |
+-----------------------------------------------+-------------------------------------+
| ``not x``                                     | Boolean NOT                         |
+-----------------------------------------------+-------------------------------------+
| ``and``                                       | Boolean AND                         |
+-----------------------------------------------+-------------------------------------+
| ``or``                                        | Boolean OR                          |
+-----------------------------------------------+-------------------------------------+
