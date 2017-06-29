..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell. Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: list-22-
   :start: 1

.. index:: list comprehension

List Comprehensions
-------------------

The previous example creates a list from a sequence of values based on some selection criteria. An easy way to do this type of processing in Python is to use a **list comprehension**.  List comprehensions are concise ways to create lists. The general syntax is::

   [<expression> for <item> in <sequence> if  <condition>]

where the if clause is optional. For example,

.. activecode:: listcomp1

    my_list = [1,2,3,4,5]
    your_list = [item ** 2 for item in my_list]
    print(your_list)

The expression describes each element of the list that is being built. The ``for`` clause iterates through each item in a sequence. The items are filtered by the ``if`` clause if there is one. In the example above, the ``for`` statement lets ``item`` take on all the values in the list ``my_list``.  Each item is then squared before it is added to the list that is being built. The result is a list of squares of the values in ``my_list``.

To write the ``primes_up_to`` function we will use the ``is_prime`` function to filter the sequence of integers coming from the ``range`` function. In other words, for every integer from 2 up to but not including ``n``, if the integer is prime, keep it in the list.

.. sourcecode:: python

	def primes_up_to(n):
	    """ Return a list of all prime numbers less than n using a list comprehension. """

	    result = [num for num in range(2,n) if is_prime(num)]
	    return result



**Check your understanding**

.. mchoice:: test_question9_20_1
   :answer_a: [4,2,8,6,5]
   :answer_b: [8,4,16,12,10]
   :answer_c: 10
   :answer_d: [10].
   :correct: d
   :feedback_a: Items from alist are doubled before being placed in blist.
   :feedback_b: Not all the items in alist are to be included in blist. Look at the if clause.
   :feedback_c: The result needs to be a list.
   :feedback_d: Yes, 5 is the only odd number in alist. It is doubled before being placed in blist.

   What is printed by the following statements?

   .. code-block:: python

     alist = [4,2,8,6,5]
     blist = [num*2 for num in alist if num%2==1]
     print(blist)
