Class Design
============

*Studios are in-class activities to give you hands-on practice with new concepts. The first half is the Walkthrough, an instructor-led programming problem. The second half is for you to work on individually or in pairs in class.*

*These problems are not graded, and you are not obligated to finish them. Get as far as you can while in class, and use them as an opportunity to play with and solidify new concepts.*

Walkthrough and Studio
----------------------

This studio is an exercise in design. This means you will need to think creatively - there is no one "right" solution to these problems, but the choices you make will have an impact on how efficient and easy to use your solution is.

For each problem below, you are presented with a story. Based on this story, you should design an object in the form of a class. Be sure to consider the **has-a** relationship and the **behaviors** for each object you design.

We are not in a rush to implement these objects. Good design takes time. It will help to work out your design before you write code, using paper and pencil if necessary.

Once you have come up with a design for the object, you should implement it. Use your design to help you decide which fields and methods need to be created. Create some simple tests to make sure your implementation behaves as you expect it to.

We'll complete one of these together in class, and you should choose one of the others to complete on your own as the studio portion.

Design Problems
~~~~~~~~~~~~~~~

Rectangle
+++++++++

A rectangle has a length and a width. A rectangle should be able to provide its area and perimeter. A rectangle can indicate whether it is smaller than another rectangle in terms of area. A rectangle can indicate whether it is in fact a square.

.. activecode:: class_design_rectangle


Fraction
+++++++++

A fraction has a numerator and denominator. A fraction should be able to add itself to another fraction, returning a new fraction that represents the sum. A fraction should be able to multiply itself by another fraction, returning a new fraction as the product. A fraction should be able to take the reciprocal of itself, returning that value as a new fraction. A fraction should be able to simplify itself, returning a new fraction as that simplification.

.. activecode:: class_design_fraction


BaseballPlayer
++++++++++++++++++

A baseball player has a name and a jersey number. Most players hit either right or left, but some can hit either way. This object should be able to react when a player completes a game, recording how many hits and RBIs the player earned in that game. A player has a certain number of runs and RBIs he or she has recorded over all games played. A player has a certain number of games he or she has played.

.. activecode:: class_design_baseball_player

Bonus Missions
~~~~~~~~~~~~~~

These classes are a bit more involved than the ones above. You'll need to design and implement a working Student class before the Course class can work appropriately. Make sure to use your Student object within the Course object when it is appropriate to do so!


Student
~~~~~~~~~~~~~~~

A student has a name and student ID number. A student can record grades and will track how many credits they have taken as well as their GPA. A student can also report what their class standing is (Freshman, Sophomore, Junior, Senior, Graduated) based on the number of credits they have taken.

.. activecode:: class_design_student



Course
~~~~~~~~~~~~~~~

A course has a name and course number. A course has a certain number of seats - once those seats are filled, it is not possible for anyone else to take the course. A course has a roster of students (use your student object!). A course can add a student (if there are open seats) or drop a student. A course can report the average GPA of all students currently enrolled in the course.

.. activecode:: class_design_course
