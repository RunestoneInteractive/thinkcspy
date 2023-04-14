Creating Classes
-----------------------------------------------------------------

Look the code below.  It defines a class.  it also declares *methods* which are
functions that are defined inside of a class.
One of the methods, ``__init__``, is automatically called when a new object is
created by the class.  One of the methods, ``__str__``, is automatically
called when you print an object of the class.  These methods start and end with two underscores.

A Book Class
======================================================

.. activecode:: class_book_ac1_v2
    :caption: A class to represent a book

    Run the following code
    ~~~~
    class Book:
        """ Represents a book object """

        # initializes the values in a new object called self
        def __init__(self, title, author):
            self.title = title   # set title in self to the passed title
            self.author = author # set author in self to the passsed author

        # returns a string with information about the object self
        def __str__(self):
            return "title: " + self.title + " author: " + self.author

    def main():
        # calls the __init__ method
        b2 = Book("A Wrinkle in Time", "M. L'Engle")

        # calls the __str__ method
        print(b2)

        # calls the __init__ method
        b1 = Book("Goodnight Moon", "Margaret Wise Brown")

        # calls the __str__ method
        print(b1)

    main()


Creating More Objects
======================================================

Once you have defined a class you can use it to create many objects.

.. activecode:: class_person_ac2
    :caption: A class to represent a Person

    Change the following main function to add a new person object.
    ~~~~
    class Person:
        """ Represents a person object """

        # initializes the values in a new object called self
        def __init__(self, first, last):
            self.first = first # set first in self to the passed first
            self.last = last   # set last in self to the passed last

        # returns a string with information about the object self
        def __str__(self):
            return self.first + " " + self.last

    def main():
        # calls the __init__ method
        p1 = Person("Barbara", "Ericson")

        # calls the __str__ method
        print(p1)

        # create an object for another person (calls the __init__ method)

        # print the new object (calls the __str__ method)

    main()

Add a Method to a Class
======================================================

You can add a new method to a class by adding a new function inside the class.  For example, you can add the ``initials``
method to the Person class.  The name of the function
doesn't need to have any underscores in it.  It only needs to start and end with double 
underscores if it is a special method like ``__init__`` or ``__str__``.  It does need to take
the current object which is by convention referred to as ``self``.

.. activecode:: class_person_init_ac1_v2
    :caption: A class to represent a Person

    The following Person class has an ``initials`` method that returns
    a string with the first letter in the first name and the first letter in
    the last name in lowercase.
    ~~~~
    class Person:
        """ Represents a person object """
       
        # initializes the values in a new object called self
        def __init__(self, first, last):
            self.first = first # set first in self to the passed first
            self.last = last   # set last in self to the passed last

        # returns a string with information about the object self
        def __str__(self):
            return self.first + " " + self.last

        # returns the first characters of the first and last name in lowercase
        def initials(self):
            return self.first[0].lower() + self.last[0].lower()

    def main():
        # calls the __init__ method
        p1 = Person("Barbara", "Ericson")

        # calls the __str__ method
        print(p1)

        # calls the initials method
        print(p1.initials())

    main()

    ====
    from unittest.gui import TestCaseGui
    class myTests(TestCaseGui):

        def testOne(self):
            p1 = Person("Barbara", "Ericson")
            self.assertEqual(p1.initials(),'be',"testing initials for Barbara Ericson")
            p2 = Person("Enoch", "Obe")
            self.assertEqual(p2.initials(),"eo", "testing initials for Enoch Obe")

    myTests().main()

Feedback
==================================

.. shortanswer:: class-intro-classes-ps-sa

   Please provide feedback here. Please share any comments, problems, or suggestions.

What to do next
============================

.. raw:: html

    <p>Click on the following link to take the pre survey : <b><a id="class-survey"> <font size="+2">Pre Survey</font></a></b></p>

.. raw:: html

    <script type="text/javascript" >

      window.onload = function() {

        a = document.getElementById("class-survey")
        a.href = "class-presurvey.html"
      };

    </script>


