..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: gui-1-
   :start: 1


Layout Mangers
==============

A widget will not be visible in a window until you assign it a size and location
within it's parent widget. Assigning a specific size and location to every widget
if tedious and error-prone. In addition, the desired behaviour for most GUI
programs is that the widgets will resize and relocated in reasonable ways if
their parent window is re-sized. Re-sizing and re-locating widgets for any
particular window size is a tedious problem that we don't want to solve every
time we develop a GUI program. Therefore, ``layout managers`` are included
in the Tkinter module to do this work for us. We just have to give some basic
positioning information to a ``layout manager`` so it can calculate
a position and size for each widget.

There are three ``layout managers`` in the ``Tkinter`` module:

==============  =============================================================================
Layout Manager  Description
==============  =============================================================================
place           You specify the exact size and position of each widget. If a window
                is re-sized, the widgets do **not** re-size or re-locate.
pack            You specify the size and position of each widget relative to each other.
grid            You place widgets in a cell of a 2-dimensional table defined by rows and columns.
==============  =============================================================================

You should **never** mix and match these layout managers. Use one consistently
for all of your widget layout.

Specifying Dimensions
=====================

By default, any size or position specified as an integer is in pixels. If a
different unit is desired, you can use a string and append the appropriate
unit symbol. The following units are recognized:

=========  ====================================================================
Example         Units
=========  ====================================================================
37              pixels
"23c"           centimeters
"12i"           inches
"45m"           millimeters
"8p"            "points" (as in a 12 point font). (Approximately 1/72 of an inch.)
=========  ====================================================================

Place
=====

All widgets have a :code:`.place(x, y, width, height)` method that can be used
to specify the exact location and size of a widget. You can use this method
to create a static interface that will always look the same regardless of the
parent's window size. This layout method is rarely used because it is tedious
and the GUI window can't be re-sized in user-friendly ways.

Grid
====

All widgets have a :code:`.grid(row=r, column=c)` method that will place a
widget in the cell (r,c). By default the widget is rendered in the middle
of the cell and as small as possible. This can be changed using these other
optional parameters:

===========  ====================================================================
Parameter    Description
===========  ====================================================================
padx         external padding: add extra space along the x axis
pady         external padding: add extra space along the y axis
ipadx
"23c"           centimeters
"12i"           inches
"45m"           millimeters
"8p"            "points" (as in a 12 point font). (Approximately 1/72 of an inch.)
===========  ====================================================================


Pack
====


.. index:: layout manager, place, pack, grid

