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


#. (GRADED) Write a function ``analyze_text`` that receives a string as input. Your function should count the number of alphabetic characters (a through z, or A through Z) in the text and also keep track of how many are the letter ``'e'`` (upper or lowercase).

   Your function should return an analysis of the text, something like this:

      The text contains 240 alphabetic characters, of which 105 (43.75%) are 'e'.

   You will need to make use of the ``isalpha`` function, which can be used like this

   .. code-block:: python

      "a".isalpha() # => evaluates to True
      "3".isalpha() # => evaluates to False
      "&".isalpha() # => False
      " ".isalpha() # => False

      mystr = "Q"
      mystr.isalpha() # => True

   .. activecode:: ex_8_3

      def analyze_text(text):
          # your code here


      # Don't copy these tests into Vocareum
      from test import testEqual

      text1 = "Eeeee"
      answer1 = "The text contains 5 alphabetic characters, of which 5 (100.0%) are 'e'."
      testEqual(analyze_text(text1), answer1)

      text2 = "Blueberries are tasteee!"
      answer2 = "The text contains 21 alphabetic characters, of which 7 (33.3333333333%) are 'e'."
      testEqual(analyze_text(text2), answer2)

      text3 = "Wright's book, Gadsby, contains a total of 0 of that most common symbol ;)"
      answer3 = "The text contains 55 alphabetic characters, of which 0 (0.0%) are 'e'."
      testEqual(analyze_text(text3), answer3)

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



#. Write a function that removes all occurrences of a string from another string.

   .. activecode:: ex_8_11

      from test import testEqual

      def remove_all(substr,theStr):
          # your code here

      testEqual(remove_all('an', 'banana'), 'ba')
      testEqual(remove_all('cyc', 'bicycle'), 'bile')
      testEqual(remove_all('iss', 'Mississippi'), 'Mippi')
      testEqual(remove_all('eggs', 'bicycle'), 'bicycle')
