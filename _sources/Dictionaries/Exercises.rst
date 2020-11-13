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

.. question:: dict_ex_1
   :number: 1

   .. tabbed:: q1

        .. tab:: Question

           .. actex:: ex_11_01

               Write a program that allows the user to enter a string.  It then prints a
               table of the letters of the alphabet in alphabetical order which occur in
               the string together with the number of times each letter occurs. Case should
               be ignored. A sample run of the program might look this this::   
               
                   Please enter a sentence: ThiS is String with Upper and lower case Letters.
                   a  2
                   c  1
                   d  1
                   e  5
                   g  1
                   h  2
                   i  4
                   l  2
                   n  2
                   o  1
                   p  2
                   r  4
                   s  5
                   t  5
                   u  1
                   w  2
                   $
               ~~~~
               
        .. tab:: Answer

            .. activecode:: de_q1_answer

                x = input("Enter a sentence")

                x = x.lower()   # convert to all lowercase

                alphabet = 'abcdefghijklmnopqrstuvwxyz'

                letter_count = {} # empty dictionary
                for char in x:
                    if char in alphabet: # ignore any punctuation, numbers, etc
                        if char in letter_count:
                            letter_count[char] = letter_count[char] + 1
                        else:
                            letter_count[char] = 1

                keys = letter_count.keys()
                for char in sorted(keys):
                    print(char, letter_count[char])

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: disqus_de4f21e35d3a41a4a3ac4ac888f78d1a


.. question:: dict_ex_2



       Give the Python interpreter's response to each of the following from a
       continuous interpreter session:
    
       a.
          .. sourcecode:: python
    
              >>> d = {'apples': 15, 'bananas': 35, 'grapes': 12}
              >>> d['banana']
    
       b.
          .. sourcecode:: python
    
              >>> d['oranges'] = 20
              >>> len(d)
    
       c.
          .. sourcecode:: python
    
              >>> 'grapes' in d
    
       d.
          .. sourcecode:: python
    
              >>> d['pears']
    
       e.
          .. sourcecode:: python
    
              >>> d.get('pears', 0)
    
       f.
          .. sourcecode:: python
    
              >>> fruits = d.keys()
              >>> fruits.sort()
              >>> print(fruits)
    
       g.
          .. sourcecode:: python
    
              >>> del d['apples']
              >>> 'apples' in d
    
    
   Be sure you understand why you get each result. Then apply what you
   have learned to fill in the body of the function below, and add code for
   the tests indicated:


   .. activecode:: q2_dict_answer

       def add_fruit(inventory, fruit, quantity=0):
            pass

       # make these tests work...
       new_inventory = {}
       add_fruit(new_inventory, 'strawberries', 10)
       #  test that 'strawberries' in new_inventory
       #  test that new_inventory['strawberries'] is 10
       add_fruit(new_inventory, 'strawberries', 25)
       #  test that new_inventory['strawberries'] is now 35)

.. question:: dict_ex_3

   .. tabbed:: q3

        .. tab:: Question

           .. actex:: ex_11_02

              Write a program called ``alice_words.py`` that creates a text file named
              ``alice_words.txt`` containing an alphabetical listing of all the words, and the
              number of times each occurs, in the text version of `Alice's Adventures in Wonderland`.
              (You can obtain a free plain text version of the book, along with many others, from
              http://www.gutenberg.org.) The first 10 lines of your output file should look
              something like this
   
               =========== ===========
               Word              Count
               =========== ===========
               a                 631
               a-piece           1
               abide             1
               able              1
               about             94
               above             3
               absence           1
               absurd            2
               =========== ===========
   
              How many times does the word, ``alice``, occur in the book?  If you are writing this
              in the activecode window simply print out the results rather than write them to a file.
              ~~~~   

        .. tab:: Answer

            .. sourcecode:: python

                f = open('alice.txt', 'r')

                count = {}

                for line in f:
                    for word in line.split():

                        # remove punctuation
                        word = word.replace('_', '').replace('"', '').replace(',', '').replace('.', '')
                        word = word.replace('-', '').replace('?', '').replace('!', '').replace("'", "")
                        word = word.replace('(', '').replace(')', '').replace(':', '').replace('[', '')
                        word = word.replace(']', '').replace(';', '')

                        # ignore case
                        word = word.lower()

                        # ignore numbers
                        if word.isalpha():
                            if word in count:
                                count[word] = count[word] + 1
                            else:
                                count[word] = 1

                keys = count.keys()
                keys.sort()

                # save the word count analysis to a file
                out = open('alice_words.txt', 'w')

                for word in keys:
                    out.write(word + " " + str(count[word]))
                    out.write('\n')

                print("The word 'alice' appears " + str(count['alice']) + " times in the book.")

        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: disqus_4f2d7860fc3143339c9c6a533c07b62d


.. question:: dict_ex_4

   .. actex:: ex_11_03

      What is the longest word in Alice in Wonderland? How many characters does it have?
      ~~~~

.. question:: dict_ex_5

   .. tabbed:: q5

        .. tab:: Question

            .. actex:: ex_11_04
               :autograde: unittest

               Here's a table of English to Pirate translations
   
               ==========   ==============
               English      Pirate
               ==========   ==============
               sir	        matey
               hotel	    fleabag inn
               student	    swabbie
               boy	        matey
               madam	    proud beauty
               professor	foul blaggart
               restaurant	galley
               your         yer
               excuse	    arr
               students	    swabbies
               are	        be
               lawyer	    foul blaggart
               the	        th'
               restroom	    head
               my	        me
               hello	    avast
               is	        be
               man	        matey
               ==========   ==============
   
               Write a function named ``translator`` that takes a parameter containing a sentence in English 
               (no punctuation and all words in lowercase) and returns that sentence translated to Pirate.
               
               For example, the sentence "hello there students" should be translated to "avast there swabbies".
               ~~~~
               def translator(english):

                 pirate = {}
                 pirate['sir'] = 'matey'
                 pirate['hotel'] = 'fleabag inn'
                 pirate['student'] = 'swabbie'
                 pirate['boy'] = 'matey'
                 pirate['restaurant'] = 'galley'
                 pirate['hello'] = 'avast'
                 pirate['students'] = 'swabbies'

                 # Complete the function

               ====
               from unittest.gui import TestCaseGui

               class myTests(TestCaseGui):

                   def testOne(self):
                       self.assertEqual(translator("hello there students"),'avast there swabbies','translator("hello there students") yields "avast there swabbies"')
                       self.assertEqual(translator("the boy stayed in the hotel"),'the matey stayed in the fleabag inn','translator("the boy stayed in the hotel") yields "the matey stayed in the fleabag inn"')

               myTests().main()


        .. tab:: Answer

            .. activecode:: ch11_q5_answer

               def translator(sentence):

                 pirate = {}
                 pirate['sir'] = 'matey'
                 pirate['hotel'] = 'fleabag inn'
                 pirate['student'] = 'swabbie'
                 pirate['boy'] = 'matey'
                 pirate['restaurant'] = 'galley'
                 pirate['hello'] = 'avast'
                 pirate['students'] = 'swabbies'

                 psentence = []
                 words = sentence.split()
                 for aword in words:
                    if aword in pirate:
                        psentence.append(pirate[aword])
                    else:
                        psentence.append(aword)

                 return " ".join(psentence)


        .. tab:: Discussion

            .. disqus::
                :shortname: interactivepython
                :identifier: disqus_dd296be40c8643999060129b6d8dc7ae

