
.. _operator-summary:

Operator precedence table
==========================

.. index:: 
   operator; precedence
   precedence

The following table summarizes the operator precedence of Python operators *in this book*, from lowest
precedence (least binding) to highest precedence (most binding).  Operators in
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
| ``or``                                        | Boolean OR                          |
+-----------------------------------------------+-------------------------------------+
| ``and``                                       | Boolean AND                         |
+-----------------------------------------------+-------------------------------------+
| ``not x``                                     | Boolean NOT                         |
+-----------------------------------------------+-------------------------------------+
| ``in``, ``not in``, ``is``, ``is not``,       | Comparisons, including membership   |
| ``<``, ``<=``, ``>``, ``>=``, ``!=``, ``==``  | tests and identity tests            |
+-----------------------------------------------+-------------------------------------+
| ``+``, ``-``                                  | Addition and subtraction            |
+-----------------------------------------------+-------------------------------------+
| ``*``, ``/``, ``//``, ``%``                   | Multiplication,                     |
|                                               | real and integer division,          |
|                                               | remainder                           |
+-----------------------------------------------+-------------------------------------+
| ``-x``                                        | Negation                            |
+-----------------------------------------------+-------------------------------------+
| ``**``                                        | Exponentiation                      |
|                                               | (groups right to left)              |
+-----------------------------------------------+-------------------------------------+
| ``x[index]``, ``x[index:index]``,             | Subscription, slicing,              |
| ``x(arguments...)``, ``x.attribute``          | call, attribute reference           |
+-----------------------------------------------+-------------------------------------+
| ``(expressions...)``,                         | Binding or tuple display,           |
| ``[expressions...]``,                         | list display,                       |
| ``{key: value...}``,                          | dictionary display,                 |
| ``{expressions...}``                          | set display                         |
+-----------------------------------------------+-------------------------------------+

