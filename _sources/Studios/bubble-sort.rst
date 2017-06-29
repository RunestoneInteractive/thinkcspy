Bubble Sort
===========

*Studios are in-class activities to give you hands-on practice with new concepts. The first half is the Walkthrough, an instructor-led programming problem. The second half is for you to work on individually or in pairs in class.*

*These problems are not graded, and you are not obligated to finish them. Get as far as you can while in class, and use them as an opportunity to play with and solidify new concepts.*

Walkthrough
-----------

For the walkthrough, we'll write a function that takes two parameters: a sorted list of numbers and a new number. The function should return a new list that is the result of inserting the new number into the sorted list in the correct, sorted order.

.. activecode:: bubble_sort_walkthrough

    from test import testEqual

    def insert(sorted_list, num):

        new_idx = 0

        while new_idx < len(sorted_list) and num > sorted_list[new_idx]:
            new_idx += 1

        new_sorted_list = sorted_list[:new_idx]
        new_sorted_list.append(num)

        for item in sorted_list[new_idx:]:
            new_sorted_list.append(item)

        return new_sorted_list


    testEqual(insert([2,3], 1), [1,2,3])
    testEqual(insert([1,3], 2), [1,2,3])
    testEqual(insert([1,2], 3), [1,2,3])


Studio
------

One rite-of-passage in your programming life is to learn a bunch of canonical *sorting algorithms*: procedures for taking a jumbled list of numbers (or anything "sortable"), and putting all the numbers in order.

The simplest such algorithm is called "Bubble Sort". The main idea of Bubble Sort is to swap any two successive elements in a list if they are not in order.

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

    function bubble_sort (list)
        is_sorted = False
        while is_sorted is False
            num_swaps = 0 ## Number of swaps made
            for each pair, a b,  of sequential numbers in list
                if a is greater than b
                    swap a and b
                    num_swaps = num_swaps + 1
            if num_swaps is still 0, then set is_sorted to True
        return list


Your job is to turn that pseudocode into real code!

.. activecode:: bubble_sort_studio

    # Sorts a list using bubble sort.
    def bubble_sort(alist):
        # TODO your code here



    from test import testEqual
    testEqual(bubble_sort([0]), [0])  # Sorts a single element, returns same list
    testEqual(bubble_sort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5])  # Sorted list is the same
    testEqual(bubble_sort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5])
    testEqual(bubble_sort([4, 5, 3, 1, 2]), [1, 2, 3, 4, 5])
