How to Think Like a Computer Scientist: Interactive Edition
===========================================================

This project began with the original How to Think Like a Computer Scientist text by Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris  Meyers, and Dario Mitchell.  Since 2011 Brad Miller, David Ranum, Barbara Ericson, Mark Guzdial, and many others have built on the text making it interactive.

Programming is not a "spectator sport".  It is something you do,
something you participate in. It would make sense, then,
that the book you use to learn programming should allow you to be active.
That is our goal.

This book is meant to provide you with an interactive experience as you learn
to program in Python.  You can read the text, watch videos,
and write and execute Python code.  In addition to simply executing code,
there is a unique feature called 'codelens' that allows you to control the
flow of execution in order to gain a better understanding of how the program
works.

.. image:: https://travis-ci.org/RunestoneInteractive/thinkcspy.svg?branch=master
    :target: https://travis-ci.org/RunestoneInteractive/thinkcspy
    
Getting Started
===============

We have tried to make it as easy as possible for you to build and use this book.  

You can see and read this book online at `runestone.academy <http://runestone.academy/ns/books/published/thinkcspy/index.html?mode=browsing>`_

.. important:: The restructuredText version of this book is deprecated!

Building with PreTeXt
---------------------

1. Create a virtual environment
2. pip install pretextbook
3. To build run: pretext build --input pretext/thinkcspy.ptx --output output --format html --publication pretext/publication-rs-for-all.xml
4. pretext view html

Note: The pretext sources are in the pretext folder, we will keep the _sources folder until we are 100% sure that the book has been converted correctly and as thoroughly as possible.


Building with runestone
-----------------------
As mentioned above this method is deprecated, but will still work.  
Any updates to this book should be made in PreTeXt NOT RST.

You can build it and host it yourself in just a few simple steps:

    1.  ``pip install -r requirements.txt``  -- Should install everything you need
    2.  ``runestone build`` -- will build the html and put it in ``./build/thinkcspy``
    3.  ``runestone serve``   -- will start a webserver and serve the pages locally from ``./build/thinkcspy``


