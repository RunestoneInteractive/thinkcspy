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

.. container:: full_width

	#.

		.. tabbed:: q1

			.. tab:: Question

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

			   .. activecode:: ex_11_01

			.. tab:: Answer

				.. activecode:: q1_answer

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
					keys.sort()
					for char in keys:
						print(char, letter_count[char])


	#. Give the Python interpreter's response to each of the following from a
	   continuous interpreter session:

	   a.
		  .. sourcecode:: python

			>>> d = {'apples': 15, 'bananas': 35, 'grapes': 12}
			>>> d['bananas']

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
			>>> sorted(fruits)
			>>> print(fruits)

	   g.
		  .. sourcecode:: python

			  >>> del d['apples']
			  >>> 'apples' in d


	   Be sure you understand why you get each result. Then apply what you
	   have learned to fill in the body of the function below:

	   .. activecode:: q2_dict_answer

		   from test import testEqual
		   
		   #Note: The pass is a placeholder to allow
		   #the code to compile. Remove it when you
		   #begin coding.
		   def add_fruit(inventory, fruit, quantity=0):
			pass

		   # make these tests work...
		   # new_inventory = {}
		   # add_fruit(new_inventory, 'strawberries', 10)
		   # test.Equal('strawberries' in new_inventory, True)
		   # test.Equal(new_inventory['strawberries'], 10)
		   # add_fruit(new_inventory, 'strawberries', 25)
		   # test.Equal(new_inventory['strawberries'] , 25)


	#. Here's a table of English to Pirate translations:

		==========  ==============
		English     Pirate
		==========  ==============
		sir	        matey
		hotel	    fleabag inn
		student	    swabbie
		boy	        matey
		madam	    proud beauty
		professor	foul blaggart
		restaurant	galley
		your	    yer
		excuse	    arr
		students	swabbies
		are	        be
		lawyer	    foul blaggart
		the	        th'
		restroom	head
		my	        me
		hello	    avast
		is	        be
		man	        matey
		==========  ==============

		Write a program that asks the user for a sentence in English and then translates that sentence to Pirate.

		.. activecode:: ex_11_04

			from test import testEqual

			def translate(text):
				# your code here!


			text = "hello my man, please excuse your professor to the restroom!"
			testEqual(translate(text), "avast me matey, please arr your foul blaggart to the head!")
