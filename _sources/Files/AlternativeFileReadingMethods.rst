..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: file-5-
   :start: 1

Alternative File Reading Methods
--------------------------------

Again, recall the contents of the ccdata.txt file.

.. datafile:: ccdata2.txt

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

In addition to the ``for`` loop, Python provides three methods to read data
from the input file. The ``readline`` method reads one line from the file and
returns it as a string. The string returned by ``readline`` will contain the
newline character at the end. This method returns the empty string when it
reaches the end of the file. The ``readlines`` method returns the contents of
the entire file as a list of strings, where each item in the list represents
one line of the file. It is also possible to read the entire file into a
single string with ``read``. :ref:`Table 2 <filemethods2a>` summarizes these methods
and the following session shows them in action.

Note that we need to reopen the file before each read so that we start from
the beginning. Each file has a marker that denotes the current read position
in the file. Any time one of the read methods is called the marker is moved to
the character immediately following the last character returned. In the case
of ``readline`` this moves the marker to the first character of the next line
in the file. In the case of ``read`` or ``readlines`` the marker is moved to
the end of the file.


::

    >>> infile = open("ccdata.txt", "r")
    >>> aline = infile.readline()
    >>> aline
    '1850\-0.37\2.24E-7\n'
    >>>
    >>> infile = open("ccdata.txt", "r")
    >>> linelist = infile.readlines()
    >>> print(len(linelist))
    18
    >>> print(linelist[0:4])
    ['1850\-0.37\2.24E-7\n',
     '1860\-0.34\3.94E-7\n',
     '1870\-0.28\6.6E-7\n',
     '1880\-0.24\1.1\n']
    >>>
    >>> infile = open("ccdata.txt", "r")
    >>> filestring = infile.read()
    >>> print(len(filestring))
    1282
    >>> print(filestring[:256])
    1850  -0.37  2.24E-7
    1860  -0.34  3.94E-7
    1870  -0.28  6.6E-7
    1880  -0.24
    >>>

.. _filemethods2a:

======================== =========================== =====================================
**Method Name**           **Use**                     **Explanation**
======================== =========================== =====================================
``write``                 ``filevar.write(astring)``  Add astring to the end of the file.
                                                      filevar must refer to a file that has
                                                      been  opened for writing.
``read(n)``               ``filevar.read()``          Reads and returns a string of ``n``
                                                      characters, or the entire file as a
                                                      single string if  n is not provided.
``readline(n)``           ``filevar.readline()``      Returns the next line of the file with
                                                      all text up to and including the
                                                      newline character. If n is provided as
                                                      a parameter than only n characters
                                                      will be returned if the line is longer
                                                      than ``n``.
``readlines(n)``          ``filevar.readlines()``     Returns a list of strings, each
                                                      representing a single line of the file.
                                                      If n is not provided then all lines of
                                                      the file are returned. If n is provided
                                                      then n characters are read but n is
                                                      rounded up so that an entire line is
                                                      returned.
======================== =========================== =====================================

Now let's look at another method of reading our file using a ``while`` loop.  This is important because many other programming languages do not support the ``for`` loop style for reading files but they do support the pattern we'll show you here.

.. activecode:: files_while
    :nocodelens:

    infile = open("ccdata.txt", "r")
    line = infile.readline()
    while line:
        values = line.split()
        print('In', values[0], 'the average temp. was', values[1], '°C and CO2 emmisions were', values[2], 'gigatons.')
        line = infile.readline()

    infile.close()

There are several important things to notice in this code:

On line 2 we have the statement ``line = infile.readline()``.  
We call this initial read the **priming read**.
It is very important because the while condition needs to have a value for the ``line`` variable.  

The ``readline`` method will return the
empty string if there is no more data in the file.  
An empty string is an empty sequence of characters.  
When Python is looking for a Boolean condition, as in ``while line:``, 
it treats an empty sequence type as ``False``, and a non-empty sequence as ``True``.  
Remember that a
blank line in the file actually has a single character, the ``\n`` character (newline).  
So, the only way that a line of data from the
file can be empty is if you are reading at the end of the file, and the ``while`` condition becomes ``False``.

Finally, notice that the last line of the body of the ``while`` loop performs another ``readline``.  This statement will reassign the variable ``line`` to the next line of the file.  It represents the `change of state` that is necessary for the iteration to
function correctly.  Without it, there would be an infinite loop processing the same line of data over and over.

