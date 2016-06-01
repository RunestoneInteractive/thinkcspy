..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

Exercises
---------

#.

    .. tabbed:: q1

        .. tab:: Question

            What is the result of each of the following:
        
            a. 'Python'[1]
            #. "Strings are sequences of characters."[5]
            #. len("wonderful")
            #. 'Mystery'[:4]
            #. 'p' in 'Pineapple'
            #. 'apple' in 'Pineapple'
            #. 'pear' not in 'Pineapple'
            #. 'apple' > 'pineapple'
            #. 'pineapple' < 'Peach'

        .. tab:: Answer

            a. 'Python'[1] = 'y'
            #. 'Strings are sequences of characters.'[5] = 'g'
            #. len('wonderful') = 9
            #. 'Mystery'[:4] = 'Myst'
            #. 'p' in 'Pineapple' = True
            #. 'apple' in 'Pineapple' = True
            #. 'pear' not in 'Pineapple' = True
            #. 'apple' > 'pineapple' = False
            #. 'pineapple' < 'Peach' = False

        .. tab:: Discussion 

            .. disqus::
                :shortname: interactivepython
                :identifier: disqus_dc2457710a924d9283b12f42a31d2b27

#. (GRADED) Assign to a variable in your program a triple-quoted string that contains your favorite paragraph of text - perhaps a poem, a speech, instructions to bake a cake, some inspirational verses, etc.
        
Write a function that counts the number of alphabetic characters (a through z, or A through Z) in your text and then keeps track of how many are the letter 'e'.  Your function should print an analysis of the text like this::

   Your text contains 243 alphabetic characters, of which 109 (44.8%) are 'e'.      

.. activecode:: ex_8_3

#.

    .. tabbed:: q5

        .. tab:: Question

           Write a function that will return the number of digits in an integer.
        
           .. activecode:: ex_7_10
        

        .. tab:: Answer
            
            .. activecode:: q5_answer

                def findNumDigits(n):
                    n_str = str(n)
                    return len(n_str)


                print(findNumDigits(50))
                print(findNumDigits(20000))
                print(findNumDigits(1))

        .. tab:: Discussion 

            .. disqus::
                :shortname: interactivepython
                :identifier: disqus_bfd6f74a183c4682b29c72c4411200fb


#. Write a function that removes all occurrences of a given letter from a string.

   .. activecode:: ex_8_7
      :nocodelens:

      from test import testEqual

      def remove_letter(theLetter, theString):
          # your code here

      testEqual(remove_letter('a', 'apple'), 'pple')
      testEqual(remove_letter('a', 'banana'), 'bnn')
      testEqual(remove_letter('z', 'banana'), 'banana')



#.

    .. tabbed:: q11

        .. tab:: Question

           Write a function that removes the first occurrence of a string from another string.
        
           .. activecode:: ex_8_10
              :nocodelens:
        
              from test import testEqual
        
              def remove(substr,theStr):
                  # your code here
        
              testEqual(remove('an', 'banana'), 'bana')
              testEqual(remove('cyc', 'bicycle'), 'bile')
              testEqual(remove('iss', 'Mississippi'), 'Missippi')
              testEqual(remove('egg', 'bicycle'), 'bicycle')
        
        

        .. tab:: Answer
            
            .. activecode:: q11_answer
                :nocodelens:

                from test import testEqual

                def remove(substr,theStr):
                    index = theStr.find(substr)
                    if index < 0: # substr doesn't exist in theStr
                        return theStr
                    return_str = theStr[:index] + theStr[index+len(substr):]
                    return return_str

                testEqual(remove('an', 'banana'), 'bana')
                testEqual(remove('cyc', 'bicycle'), 'bile')
                testEqual(remove('iss', 'Mississippi'), 'Missippi')
                testEqual(remove('egg', 'bicycle'), 'bicycle')

        .. tab:: Discussion 

            .. disqus::
                :shortname: interactivepython
                :identifier: disqus_2f2772134b604a6498748138542d312d


#. Write a function that removes all occurrences of a string from another string.
 
   .. activecode:: ex_8_11

      from test import testEqual

      def remove_all(substr,theStr):
          # your code here

      testEqual(remove_all('an', 'banana'), 'ba')
      testEqual(remove_all('cyc', 'bicycle'), 'bile')
      testEqual(remove_all('iss', 'Mississippi'), 'Mippi')
      testEqual(remove_all('eggs', 'bicycle'), 'bicycle')
