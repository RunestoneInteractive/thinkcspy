Counting Characters
===================

*Studios are in-class activities to give you hands-on practice with new concepts. The first half is the Walkthrough, an instructor-led programming problem. The second half is for you to work on individually or in pairs in class.*

*These problems are not graded, and you are not obligated to finish them. Get as far as you can while in class, and use them as an opportunity to play with and solidify new concepts.*

Walkthrough
-----------

Write a "gradebook" program that takes grade data for a student and prints the resulting GPA. The output should look something like this: ::

    Your grade (0.0-4.0): 4
    # credits: 3
    Enter another grade? [y/n]: y
    Your grade (0.0-4.0): 4
    # credits: 2
    Enter another grade? [y/n]: n
    Your GPA is: 4.0


We'll need to use a while loop for the input portion of the program, and store the entered data in a list that contains dictionaries. Each item in the list should look something like:

.. sourcecode:: python

    { 'grade': '3.0', 'credits': 3}


To calculate the GPA you'll need the idea of a *quality score*. A quality score is the number of credits for the class multiplied by the point score. For example, if you get a B (3.0) in a class worth 3 credits, the quality score is 9.0. The GPA for a student is the sum of the quality scores divided by the total number of credits.

This will be written locally in a code editor, and run at the command line.

.. sourcecode:: python

    """
    A program to take grade input and calculate a student's gpa
    """

    grades = []

    # gather grade information
    while True:
    grade = input("Your grade (0.0-4.0): ")
    credits = input("# credits: ")

    # store grades
    grades.append({'grade': float(grade), 'credits': int(credits)})

    continue_entry = input("Enter another grade? [y/n]: ")
    if continue_entry == 'n':
        break

    # compute GPA
    total_quality_score = 0
    total_credits = 0

    # calculate quality scores and total
    for gradeinfo in grades:
    total_quality_score += (gradeinfo['grade'] * gradeinfo['credits'])
    total_credits += gradeinfo['credits']

    gpa = total_quality_score / total_credits
    print("Your GPA is:", gpa)


Studio
------

You should complete this studio locally on your computer, and *not* in this book. Within your ``lc101`` directory create a new directory named ``counting-characters`` and write your code in this directory in a file ``counting.py``.

To run your program, execute: ::

    $ python3 counting.py

Write a program that calculates the number of times each character occurs in a string and prints these stats to the console. You could get the string as input from the user, but for the sake of simplicity, you may also hard-code the string into your program as the value of a variable. Here's a test string, for your convenience: ::

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan sem ut ligula scelerisque sollicitudin. Ut at sagittis augue. Praesent quis rhoncus justo. Aliquam erat volutpat. Donec sit amet suscipit metus, non lobortis massa. Vestibulum augue ex, dapibus ac suscipit vel, volutpat eget massa. Donec nec velit non ligula efficitur luctus.

For this example string, your output should look something like: ::

    A: 1
    h: 1
    u: 28
    b: 3
    v: 4
    x: 1
    l: 17
    r: 9
    o: 15
    j: 1
    q: 3
    P: 1
    t: 29
    U: 1
    V: 1
    m: 11
    N: 1
    g: 7
     : 50
    n: 14
    d: 4
    D: 2
    e: 26
    p: 7
    f: 2
    i: 27
    s: 29
    L: 1
    c: 17
    a: 22
    ,: 4
    .: 8
