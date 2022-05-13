..  Copyright (C)  Stephen Schaub.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

Exercises
---------

    .. tabbed:: tab_ut_reverse

        .. tab:: Question 

           .. actex:: ac_ut_reverse
                :autograde: unittest
      
                A function named ``reverse`` takes a string argument, reverses it, and returns the result:
                
                .. sourcecode::

                    def reverse(astring):
                        """Returns the reverse of `astring`"""
                
                Complete the assert statements in the ActiveCode editor below to create a unit test for ``reverse``.
                Your asserts should check that ``reverse`` works properly for the following test cases ("Input"
                refers to the value passed as a parameter, and "Expected Output" is the result returned from
                ``reverse``)::

                                 Input    Expected Output
                                 -------- ---------------
                    Test Case 1: 'abc'    'cba'
                    Test Case 2: 'b'      'b'
                    Test Case 3: ''       ''

                ~~~~
                def test_reverse():
                    # Complete the assert statements below

                    assert ________________
                    assert ________________
                    assert ________________
                ====

                from unittest.gui import TestCaseGui

                testABC = False
                testB = False
                testEmpty = False

                def reverse(astring):
                    """Returns the reverse of `astring`"""
                    global testABC, testB, testEmpty

                    if astring == 'abc':
                        testABC = True
                    elif astring == 'b':
                        testB = True
                    elif astring == '':
                        testEmpty = True

                    l = list(astring)
                    l.reverse()
                    return ''.join(l)


                class myTests(TestCaseGui):

                    def testOne(self):
                        test_reverse()
                        code = self.getEditorText().replace(' ','').replace('"', '').replace("'", '')
                        self.assertTrue(testABC and '==cba' in code, "Assert tested 'abc'")
                        self.assertTrue(testB and '==b' in code, "Assert tested 'b'")
                        self.assertTrue(testEmpty and '==\n' in code, "Assert tested ''")

                myTests().main()

        .. tab:: Tip

            If you're not sure how to get started with this one, review :ref:`writing_unit_tests`.

        .. tab:: Answer

            .. sourcecode:: 
                
                assert reverse('abc') == 'cba'
                assert reverse('b') == 'b'
                assert reverse('') == ''
                

    .. tabbed:: tab_ut_testable

        .. tab:: Question 

           .. actex:: ac_ut_testable
                :autograde: unittest
      
                A function named ``stripletters`` takes a string argument, removes all letters from it, and
                displays the result (see below). However, this function is not testable.

                Modify the function so that it can be tested with the assert statements that follow.
                ~~~~

                def stripletters(msg):
                    result = ''
                    for ch in msg:
                        if not ch.isalpha():
                            result += ch

                    print(result)
                
                assert stripletters('ab12c') == '12'
                assert stripletters('12') == '12'
                    
                ====

                from unittest.gui import TestCaseGui

                class myTests(TestCaseGui):

                    def testOne(self):                        
                        self.assertEqual(stripletters('ab12c'), '12', "stripletters('ab12c') == '12'")
                        self.assertEqual(stripletters('12'), '12', "stripletters('12') == '12'")

                myTests().main()

        .. tab:: Tip

            Review :ref:`designing_testable_functions`.

        .. tab:: Answer

            .. sourcecode:: 
                
                def stripletters(msg):
                    result = ''
                    for ch in msg:
                        if not ch.isalpha():
                            result += ch

                    return result
