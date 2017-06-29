..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell. Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: list-13-
   :start: 1

.. index:: repetition, references, lists

Repetition and References
-------------------------

We have already seen the repetition operator working on strings as well as lists. For example,

.. activecode:: repref1

    orig_list = [45, 76, 34, 55]
    print(orig_list * 3)

With a list, the repetition operator creates copies of the references. Although this may seem simple enough, when we allow a list to refer to *another* list, a subtle problem can arise.

Consider the following extension on the previous example.

.. activecode:: repref2

    orig_list = [45, 76, 34, 55]
    print(orig_list * 3)

    new_list = [orig_list] * 3

    print(new_list)

``new_list`` is a list of three references to ``orig_list`` that were created by the repetition operator. The reference diagram is shown below.

.. image:: Figures/refrep1.png
   :alt: Repetition of a nested list

Now, what happens if we modify a value in ``orig_list``.

.. activecode:: repref3

    orig_list = [45, 76, 34, 55]

    new_list = [orig_list] * 3

    print(new_list)

    orig_list[1] = 99

    print(new_list)

``new_list`` shows the change in three places. This can easily be seen by noting that in the reference diagram, there is only one ``orig_list``, so any changes to it appear in all three references from ``new_list``.

.. image:: Figures/refrep2.png
   :alt: Same reference

Here is the same example in codelens. Step through the code paying particular attention to the result of executing the assignment statement ``orig_list[1] = 99``.

.. codelens:: reprefstep
    :showoutput:
    :python: py3

    orig_list = [45, 76, 34, 55]

    new_list = [orig_list] * 3

    print(new_list)

    orig_list[1] = 99

    print(new_list)

It is worth noting that there is a difference between ``new_list = [orig_list] * 3`` and an assignment statement where ``orig_list`` is not in brackets:  ``another_list = orig_list * 3``. The former creates a list of three references to ``orig_list`` whereas the latter creates a *new object* using the values in ``orig_list``. Note in the example below how ``new_list`` will change when a value in ``orig_list`` changes, but ``another_list`` does not change because it is no longer bound to ``orig_list``.

.. activecode:: repref4

    orig_list = [45, 76, 34, 55]

    new_list = [orig_list] * 3

    another_list = orig_list * 3

    print(new_list)

    print(another_list)

    orig_list[1] = 99

    print(new_list) # Note the change

    print(another_list) # Note the lack of change

**Check your understanding**

.. mchoice:: test_question9_12_1
   :answer_a: [4, 2, 8, 999, 5, 4, 2, 8, 6, 5]
   :answer_b: [4, 2, 8, 999, 5]
   :answer_c: [4, 2, 8, 6, 5]
   :correct: c
   :feedback_a: print(alist) not print(blist)
   :feedback_b: blist is changed, not alist.
   :feedback_c: Yes, alist was unchanged by the assignment statement.

   What is printed by the following statements?

   .. code-block:: python

     alist = [4, 2, 8, 6, 5]
     blist = alist * 2
     blist[3] = 999
     print(alist)

.. mchoice:: test_question9_12_2
   :answer_a: [4, 2, 8, 999, 5, 4, 2, 8, 999, 5]
   :answer_b: [[4, 2, 8, 999, 5], [4, 2, 8, 999, 5]]
   :answer_c: [4, 2, 8, 6, 5]
   :answer_d: [[4, 2, 8, 999, 5], [4, 2, 8, 6, 5]]
   :correct: b
   :feedback_a: [alist] * 2 creates a list containing two lists: alist repeated 2 times
   :feedback_b: Yes, blist is a list containing two references to alist, so changes to alist appear in both.
   :feedback_c: print(blist)
   :feedback_d: blist contains two references, both to alist, so changes to alist appear both times.

   What is printed by the following statements?

   .. code-block:: python

     alist = [4, 2, 8, 6, 5]
     blist = [alist] * 2
     alist[3] = 999
     print(blist)
