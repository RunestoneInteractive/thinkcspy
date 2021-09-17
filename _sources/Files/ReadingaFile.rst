..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: file-3-
   :start: 1

Reading a File
~~~~~~~~~~~~~~

As an example, suppose we have a text file called ``ccdata.txt`` that contains
the following data representing statistics about climate change. Although it
would be possible to consider entering this data by hand each time it is used,
you can imagine that it would be time-consuming and error-prone to do this. In
addition, it is likely that there could be data from more sources and
other years. The format of the data file is as follows:
::

    Year, Global Average Temperature, Global Emmision of CO2

.. datafile:: ccdata.txt

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

To open this file, we would call the ``open`` function. The variable,
``fileref``, now holds a reference to the file object returned by
``open``. When we are finished with the file, we can close it by using
the ``close`` method. After the file is closed any further attempts to
use ``fileref`` will result in an error.

::

            >>>fileref = open("ccdata.txt", "r")
            >>>
            >>>fileref.close()
            >>>

