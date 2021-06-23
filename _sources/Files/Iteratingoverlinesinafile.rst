..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: file-4-
   :start: 1


Iterating over lines in a file
------------------------------

Recall the contents of the ccdata.txt file.

======== ====================================== =============================================
**Year**    **Global Average Temp. (Celcius)**       **Global Emmisions C02 (Giga-tons)**
======== ====================================== =============================================

.. datafile:: ccdata1.txt

    1850                  -0.37                                       2.24E-7
    1860                  -0.34	                                      3.94E-7
    1870                  -0.28	                                      6.6E-7
    1880                  -0.24	                                      1.1
    1890                  -0.42	                                      1.72
    1900                  -0.2	                                      2.38
    1910                  -0.49	                                      3.34
    1920                  -0.25	                                      4.01
    1930                  -0.14	                                      4.53
    1940                   0.01	                                      5.5
    1950                  -0.17	                                      6.63
    1960                  -0.05	                                      10.5
    1970                  -0.03	                                      16
    1980                   0.09	                                      20.3
    1990                   0.3	                                      22.6
    2000                   0.29	                                      24.9
    2010                   0.56	                                      32.7
    2019                   0.74	                                      33.3

We will now use this file as input in a program that will do some data
processing. In the program, we will **read** each line of the file and
print it with some additional text. Because text files are sequences of
lines of text, we can use the *for* loop to iterate through each line of
the file.

A **line** of a file is defined to be a sequence of characters up to and
including a special character called the **newline** character. If you
evaluate a string that contains a newline character you will see the
character represented as ``\n``. If you print a string that contains a
newline you will not see the ``\n``, you will just see its effects. When
you are typing a Python program and you press the enter or return key on
your keyboard, the editor inserts a newline character into your text at
that point.

As the *for* loop iterates through each line of the file the loop
variable will contain the current line of the file as a string of
characters. The general pattern for processing each line of a text file
is as follows:

::

        for line in myFile:
            statement1
            statement2
            ...

To process all of our climate change data, we will use a *for* loop to iterate over the lines of the file. Using
the ``split`` method, we can break each line into a list containing all the fields of interest about climate
change. We can then take the values corresponding to year, global average temperature, and global emmisions to
construct a simple sentence.




.. activecode:: files_for
    :nocodelens:
    :available_files: ccdata.txt

    ccfile = open("ccdata.txt", "r")

    for aline in ccfile:
        values = aline.split()
        print('In', values[0], 'the average temp. was', values[1], '°C and CO2 emmisions were', values[2], 'gigatons.')

    ccfile.close()


.. note::
   You can obtain a line from the keyboard with the ``input`` function, and you can process lines of a file.  
   However "line" is used differently:  With ``input`` Python reads through the newline you enter from the keyboard,
   but the newline (``'\n'``) is *not* included in the line returned by ``input``. It is dropped. 
   When a line is taken from a file, the terminating newline *is* included as the last character (unless you
   are reading the final line of a file that happens to not have a newline at the end).

In the climate change example it is irrelevant whether the final line has a newline character at the end or not, 
since it would be stripped off by the ``split`` method call.
