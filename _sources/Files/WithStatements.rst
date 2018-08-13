With Statements
---------------

.. note:: 
   This section is a bit of an advanced topic and can be easily skipped.  But with statements are becoming very common and it doesn't hurt to know about them in case you run into one in the wild.

Now that you have seen and practiced a bit with opening and closing files, there is another mechanism that Python provides for us that cleans up the often forgotten close.  Forgetting to close a file does not necessarily cause a runtime error in the kinds of programs you typically write in an introductory CS course.  However if you are writing a program that may run for days or weeks at a time that does a lot of file reading and writing you may run into trouble. 

In version 2.5 Python introduced the concept of a context manager.  The context manager automates the process of doing common operations at the start of some task, as well as automating certain operations at the end of some task.  In the context of reading and writing a file, the normal operation is to open the file and assign it to a variable.  At the end of working with a file the common operation is to make sure that file is closed.

The Python with statement makes using context managers easy.  The general form of a with statement is::

    with <create some object that understands context> as <some name>:
        do some stuff with the object
        ...

When the program exits the with block, the context manager handles the common stuff that normally happens.  For example closing a file.  A simple example will clear up all of this abstract discussion of contexts.


.. datafile:: mydata.txt

   1 2 3
   4 5 6


.. activecode:: with_ex1
   :nocodelens:
   
   with open('mydata.txt') as md:
       print(md)
       for line in md:
           print(line)
   print(md)        

The first line of the `with` statement opens the file and assigns it to `md`  then we can iterate over the file in any of the usual ways. and when we are done we simply stop indenting and let Python take care of closing the file and cleaning up.
