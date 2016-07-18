Studio: Bubble Sort
===================

.. activecode:: studio9_0

    def bubble_sort(lst):
       """Sorts a list using bubble sort.
          Deos not alter the original list but return a sorted version of it.
       """
       # TODO your code here


    from test import testEqual

    testEqual(bubble_sort([0]), [0])  # Sorts a single element, returns same list
    testEqual(bubble_sort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5])  # Sorted list is the same
    testEqual(bubble_sort([5, 4, 3, 2, 1]), [1, 2, 3, 4, 5])
    testEqual(bubble_sort([4, 5, 3, 1, 2]), [1, 2, 3, 4, 5])
