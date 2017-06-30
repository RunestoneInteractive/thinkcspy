..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
	Meyers, and Dario Mitchell. Permission is granted to copy, distribute
	and/or modify this document under the terms of the GNU Free Documentation
	License, Version 1.3 or any later version published by the Free Software
	Foundation; with Invariant Sections being Forward, Prefaces, and
	Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of
	the license is included in the section entitled "GNU Free Documentation
	License".

Exercises
---------

.. container:: full_width

    #.

        .. tabbed:: q1

            .. tab:: Question

                Write a program that allows the user to enter a string. It then prints a table of the letters of the alphabet in alphabetical order which occur in the string together with the number of times each letter occurs. Case should be ignored. A sample run of the program might look this this::

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


    #.

        .. tabbed:: q20

            .. tab:: Question

                Write a program that will function as a grade book, allowing a user (a professor or teacher) to enter the class roster for a course, along with each student's cumulative grade. It then prints the class roster along with the average cumulative grade. Grades are on a 0-100 percentage scale. Use 2 lists (``grades`` and ``students``) and the ``enumerate`` function in your solution.

                A test run of this program would yield the following::

                    Enter your students (or ENTER to finish)
                    Chris
                    Jesse
                    Sally

                    Grade for Chris: 3.0
                    Grade for Jesse: 4.0
                    Grade for Sally: 3.5

                    Class roster:
                    Chris (3.0)
                    Jesse (4.0)
                    Sally (3.5)

                    Average grade: 3.5

                .. activecode:: ex_11_02

            .. tab:: Answer

                .. activecode:: q20_answer

                    def main():

                        students = []

                        # Use a space to allow for the while check below
                        new_student = " "

                        print("Enter your students (or ENTER to finish):")

                        # Get student names
                        while (new_student != ""):
                            new_student = input("Student's name (or press ENTER to finish)")
                            if new_student != "":
                                students.append(new_student)

                        # Get student grades
                        grades = [0]*len(students)
                        for idx, student in enumerate(students):
                            new_grade = float(input("Grade for " + student + ": "))
                            grades[idx] = new_grade

                        # Print class roster
                        print("\nClass roster:")
                        for idx, student in enumerate(students):
                            print(student + " (" + str(grades[idx]) + ")")

                        avg = sum(grades) / len(grades)
                        print("\nAverage grade: " + str(avg))

                    if __name__ == '__main__':
                        main()


    #. Implement the functionality of the above program using a dictionary instead of a list.

        .. activecode:: ex_11_5


    #.

        .. tabbed:: q13

            .. tab:: Question

                Make a dictionary where the key is a worker's name, and the value is a list where the first element is clock in time, second element is clock out time, third element is total hours worked that day. Each worker's list starts at [0, 0, 0]. Create functions for ``clock_in`` and ``clock_out``.

                * ``clock_in`` takes the dictionary of workers, the name of the worker, and the clock in time as params. When the worker clocks in, enter and save their clock in time as the first elem in the associated list value.

                * ``clock_out`` takes same params, but with a clock out time instead of clock in time. When the worker clocks out, enter and save their clock out time and calculate the hours worked for that day and store it as the third element in the list.

                To make this program a little easier, we're entering the clock in and clock out times as integers. As a bonus mission, try adding the times as strings representing the 24 hour clock (e.g., ``"08:00"``), and then figure out how to calculate the time worked. And you can do this exercise either by aliasing or copying the dictionary.

                .. activecode:: ex_11_13

                    def main():
                        workers = {"George Spelvin": [0,0,0], "Jane Doe": [0,0,0], "John Smith": [0,0,0]}
                        print(workers.get("George Spelvin"))   # should print [0,0,0]
                        clock_in(workers, "George Spelvin", 8)
                        clock_out(workers, "George Spelvin", 17)
                        print(workers.get("George Spelvin"))   # should print [8, 17, 9]

                    if __name__ == "__main__":
                        main()

            .. tab:: Answer

                .. activecode:: q13_answer

                    def clock_in(worker_dict, name, clock_in_time):
                        worker_info = worker_dict.get(name)
                        worker_info[0] = clock_in_time
                        worker_dict[name] = worker_info

                    def clock_out(worker_dict, name, clock_out_time):
                        worker_info = worker_dict.get(name)
                        worker_info[1] = clock_out_time
                        worker_info[2] = worker_info[1] - worker_info[0]
                        worker_dict[name] = worker_info

                    def main():
                        workers = {"George Spelvin": [0,0,0], "Jane Doe": [0,0,0], "John Smith": [0,0,0]}
                        print(workers.get("George Spelvin"))   # should print [0,0,0]
                        clock_in(workers, "George Spelvin", 8)
                        clock_out(workers, "George Spelvin", 17)
                        print(workers.get("George Spelvin"))   # should print [8, 17, 9]

                    if __name__ == "__main__":
                        main()


    #. Here's a table of English to Pirate translations:

        ==========  ==============
        English     Pirate
        ==========  ==============
        sir	        matey
        hotel	      fleabag inn
        student	    swabbie
        boy	        matey
        madam	      proud beauty
        professor	  foul blaggart
        restaurant	  galley
        your	        yer
        excuse	      arr
        students	    swabbies
        are	        be
        lawyer	      foul blaggart
        restroom	    th' head
        my	          me
        hello	      avast
        is	          be
        man	        matey
        ==========  ==============

        Write a program that asks the user for a sentence in English and then translates that sentence to Pirate.

        .. activecode:: ex_11_04

            from test import testEqual

            def translate(text):
            # your code here!


            text = "hello my man, please excuse your professor to the restroom!"
            testEqual(translate(text), "avast me matey, please arr yer foul blaggart to th' head!")


    #. Give the Python interpreter's response to each of the following from a continuous interpreter session:

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


    	   Be sure you understand why you get each result. Then apply what you have learned to fill in the body of the function below:

    	   .. activecode:: q2_dict_answer

    		   from test import testEqual

    		   #Note: The pass is a placeholder to allow
    		   #the code to compile. Remove it when you
    		   #begin coding.
    		   def set_inventory(inventory, fruit, quantity=0):
    			     pass

    		   # make these tests work...
    		   # new_inventory = {}
    		   # set_inventory(new_inventory, 'strawberries', 10)
    		   # testEqual('strawberries' in new_inventory, True)
    		   # testEqual(new_inventory['strawberries'], 10)
    		   # set_inventory(new_inventory, 'strawberries', 25)
    		   # testEqual(new_inventory['strawberries'] , 25)


Weekly Graded Assignment
========================

.. container:: full_width

    Write an ``add_contact`` function that modifies a dictionary of contacts. The ``contacts`` dictionary has the contact name as its key, and the value is a tuple containing the phone number and email for the contact.::

        contacts = {name: (phone, email), name: (phone, email), etc.}

    The ``add_contact`` function should do the following:

    1. Take the following three parameters: the contact dictionary to be updated, a string of the contact's name, and the tuple containing the contact's phone and email.
    2. Update the dictionary by adding this new contact to it.
    3. Create a new, **sorted** list of tuples representing *all* of the contact info (one tuple for each contact).
    4. Return this list to the calling function.

    For example, after filling in your code for the ``add_contact`` function, running the program below should print the following::

    [('Almodovar, Pedro', '1-990-622-3892', 'pedro@filmbuffs.com'), ('Freud, Anna', '1-541-754-3010', 'anna@psychoanalysis.com'), ('Rimbaud, Arthur', '1-636-555-5555', 'arthur@notlive.com'), ('Swinton, Tilda', '1-917-222-2222', 'tilda@greatActors.com')]

    .. activecode:: add_contact_assign

        # Create add_contact function


        # The below is just for your testing purposes.
        # In Vocareum, only put code for the function above
        def main():
            contact_dict = {"Rimbaud, Arthur": ("1-636-555-5555", "arthur@notlive.com"),
                "Swinton, Tilda": ("1-917-222-2222", "tilda@greatActors.com"),
                "Almodovar, Pedro": ("1-990-622-3892", "pedro@filmbuffs.com")}
            print(add_contact(contact_dict, "Freud, Anna",
                ("1-541-754-3010", "anna@psychoanalysis.com")))

        if __name__ == "__main__":
            main()
