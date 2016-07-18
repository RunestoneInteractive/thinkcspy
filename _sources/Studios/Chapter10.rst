Studio: Bubble Sort
===================

One rite-of-passage in your programming life is to learn a bunch of canonical "sorting" algorithms: procedures for taking a jumbled list of numbers (or anything "sortable"), and putting all the numbers in order.

The simplest such algorithm is called Bubble Sort.

The Algorithm
-------------

The main idea of Bubble Sort is to swap any two successive elements in a list if they are not in order.

For example, the list ``[2, 1]`` would be sorted by swapping the ``1`` and ``2`` yielding ``[1, 2]``.

For a larger list, the swapping is done from front to back with each sequential pair.

Let's sort the list ``[3, 5, 2]``:

- We first take the ``3, 5`` pair and compare them. Since ``3 < 5``, we don't do anything.
- Our list is still ``[3, 5, 2]``.
- The next pair is ``5, 2``. Since ``5 > 2`` we swap them in the list.
- Our list is now ``[3, 2, 5]``.
- Starting from the beginning again, we have the pair ``3, 2``, thus we swap again.
- Our list is now ``[2, 3, 5]``.
- At this point, the list is fully sorted, but we don't know that until we actually check.
- So we start from the beginning yet again, but this time, we iterate over the entire list without ever having to perform any swaps. This is how we know the list is fully sorted.
- Done!


The pseudo code for the algorithm is as follows:

::

    function bubbleSort (list)
        is_sorted = False
        while is_sorted is False
            nswaps = 0 ## Number of swaps made
            for each pair, a b,  of sequential numbers in list
                if a is greater than b
                    swap a and b
                    nswaps = nswaps + 1
            if nswaps is still 0, then set is_sorted to True
        return list


Your job is to turn that pseudocode into real code!

.. activecode:: studio9_0

    def bubble_sort(lst):
       """Sorts a list using bubble sort.
          Does not alter the original list but returns a sorted version of it.
       """
       # TODO your code here


    from test import testEqual

    testEqual(bubble_sort([0]), [0])  # Sorts a single element, returns same list
    testEqual(bubble_sort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5])  # Sorted list is the same
    testEqual(bubble_sort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5])
    testEqual(bubble_sort([4, 5, 3, 1, 2]), [1, 2, 3, 4, 5])
