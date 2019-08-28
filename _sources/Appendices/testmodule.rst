..  Copyright (C)  Michael Haugrud

.. _test-module:

``test`` module source code
===========================

Starting in the Functions chapter, we have written unit tests using the ``testEqual`` function from
the ``test`` module. This test module is not included in the standard Python distribution. (There is
a standard test module but it is different from this.) What follows is the source code for this ``test`` module.


.. sourcecode:: python
    
    def testEqual(actual,expected,places=5):
        '''
        Does the actual value equal the expected value?
        For floats, places indicates how many places, right of the decimal, must be correct
        '''
        if isinstance(expected,float):
            if abs(actual-expected) < 10**(-places):
                print('\tPass')
                return True
        else:
            if actual == expected:
                print('\tPass')
                return True
        print('\tTest Failed: expected {} but got {}'.format(expected,actual))
        return False

To use this module when programming on your own computer, save the above code with the name **test.py** in the same folder as the python program you want to test.
