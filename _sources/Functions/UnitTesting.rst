.. index:: testing, unit test, equivalence class

Unit Testing
------------

When we write functions that return values, we intend to use them over and over again. However, we want to be 
certain that they return the correct result. To be more certain these functions work correctly we write unit tests.

To write a **unit test**, we must know the correct result when calling the function with a specific input. 

.. activecode:: ch04_ut1

    def square(x):
        '''raise x to the second power'''
        return x * x
    
    import test
    print('testing square function')
    test.testEqual(square(10), 100)


``testEqual`` (from the ``test`` module) is a function that allows us to perform a unit test. It takes two parameters. The first is a call to the function we want to test (``square`` in this example) with a particular input (10 in this example). The second parameter is the correct result that should be produced (100 in this example). ``test.testEqual`` compares what the function returns with the correct result and displays whether the unit test passes or fails.

.. admonition:: Extend the program ...

   On line 8, write another unit test (that should pass) for the ``square`` function.

.. note::
   The ``test`` module is not a standard Python module. Instead, there are other more powerful and more modern modules. However, the ``test`` module offers a simple introduction to testing that is appropriate at this stage in the interactive text.

Choosing Good Unit Tests
^^^^^^^^^^^^^^^^^^^^^^^^

When we write unit tests, we should consider significantly different valid inputs to the function. 

For example, the input to the ``square`` function could be either a positive or negative value. These two different kinds of inputs give us two **equivalence classes** of inputs. We then choose an input from each of these classes. **It is important to have at least one test for each equivalence class of inputs.**

Semantic errors are often caused by improperly handling the boundaries between equivalence classes. The boundary for this problem is zero. **It is important to have a test at each boundary.**

.. admonition:: Extend the program ...

   Starting on line 9, write two more unit tests (that should pass) so that all input equivalence classes and boundaries are covered.


