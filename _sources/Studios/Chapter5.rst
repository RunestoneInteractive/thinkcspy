:orphan:

..  Copyright (C) 2011  Brad Miller and David Ranum
    Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".


Studio: Wagon Wheel
===================

Pre-studio
----------

For the pre-studio, we wrote a program that used functions to draw a line star with a chosen number of lines.

.. raw:: html

    <div style="text-align:center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/5FscOAPDkAQ" frameborder="0" allowfullscreen></iframe></div>

.. activecode:: prestudio_4

    import turtle

    def draw_line(length, angle):
        mike = turtle.Turtle()
        mike.left(angle)
        mike.forward(length / 2)
        mike.forward(-length)
        mike.forward(length / 2)

    def star(nlines):
        for angle in range(0, 180, int(180/nlines)):
            draw_line(200, angle)

    star(10)

Studio
------

Draw this pretty pattern.

.. image:: Figures/tess08.png

.. activecode:: ex_5_4
