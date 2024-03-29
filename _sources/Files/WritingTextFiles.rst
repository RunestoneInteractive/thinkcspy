..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: file-6-
   :start: 1

Writing Text Files
------------------

One of the most commonly performed data processing tasks is to read data from a file, manipulate it in some way, and then write the resulting data out to a new data file to be used for other purposes later.  To accomplish this, the ``open`` function discussed above can also be used to create a new file prepared for writing.  Note in :ref:`Table 1<filemethods1a>` above that the only difference between opening a file for writing and  opening a file for reading is the use of the ``'w'`` flag instead of the ``'r'`` flag as the second parameter.  When we open a file for writing, a new, empty file with that name is created and made ready to accept our data. As before, the function returns a reference to the new file object.

:ref:`Table 2 <filemethods2a>` above shows one additional file method that we have not used thus far.  The ``write`` method allows us to add data to a text file.  Recall that text files contain sequences of characters.  We usually think of these character sequences as being the lines of the file where each line ends with the newline ``\n`` character.  Be very careful to notice that the ``write`` method takes one parameter, a string.  When invoked, the characters of the string will be added to the end of the file.  This means that it is the programmers job to include the newline characters as part of the string if desired.

As an example, consider the ``ccdata.txt`` file once again.  Assume that we have been asked to provide 
a file consisting of only the global emission and the year of this climate change. In addition, the year 
should come first followed by the global emmision, separated by space.

To construct this file, we will approach the problem using a similar algorithm as above.  After opening the file, we will iterate through the
lines, break each line into its parts, choose the parts that we need, and then output them.  Eventually, the output will be written to a file.

The program below solves part of the problem. Notice that it reads the data and creates a string consisting of the year of the climate change followed by the global emission. In this example, we simply print the lines as they are created.

.. activecode:: python_cc_example_1

    infile = open("ccdata.txt", "r")
    aline = infile.readline()
    print("Year\tEmmision\n")
    while aline:
        items = aline.split()
        dataline = items[0] + '\t' + items[2]
        print(dataline)
        aline = infile.readline()

    infile.close()

When we run this program, we see the lines of output on the screen.  Once we are satisfied that it is creating the appropriate output, the next step is to add the necessary pieces to produce an output file and write the data lines to it.  To start, we need to open a new output file by adding another call to the ``open`` function, ``outfile = open("emissiondata.txt",'w')``, using the ``'w'`` flag.  We can choose any file name we like.  If the file does not exist, it will be created.  However, if the file does exist, it will be reinitialized as empty and you will lose any previous contents.  

Once the file has been created, we just need to call the ``write`` method passing the string that we wish to add to the file.  In this case, the string is already being printed so we will just change the ``print`` into a call to the ``write`` method.  However, there is one additional part of the data line that we need to include.  The newline character needs to be concatenated  to the end of the line.  The entire line now becomes ``outfile.write(dataline + '\n')``.  We also need to close the file when we are done.

The complete program is shown below.

.. activecode:: python_cc_example_2

    infile = open("ccdata.txt", "r")
    outfile = open("emissiondata.txt", "w")

    aline = infile.readline()
    outfile.write("Year \tEmmision\n")
    while aline:
        items = aline.split()
        dataline = items[0] + '\t' + items[2]
        outfile.write(dataline + '\n')
        aline = infile.readline()

    infile.close()
    outfile.close()

