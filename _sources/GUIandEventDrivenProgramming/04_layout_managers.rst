..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: gui-4-
   :start: 1


Layout Mangers
==============

A widget will not be visible in a window until you assign it a size and location
within it's parent widget. Assigning a specific size and location to every widget
is tedious and error-prone. In addition, the desired behaviour for most GUI
interfaces is that the widgets resize and relocate in reasonable ways if
their parent window is re-sized. Trust me, you don't what to write code to
resize and relocate widgets every time you develop a GUI program! Therefore,
``layout managers`` are included in the Tkinter module to do this work
for you. You just have to give some basic positioning information to a
``layout manager`` so it can calculate a position and a size for each widget.

There are three ``layout managers`` in the ``Tkinter`` module:

==============  =============================================================================
Layout Manager  Description
==============  =============================================================================
place           You specify the exact size and position of each widget.
pack            You specify the size and position of each widget *relative to each other*.
grid            You place widgets in a cell of a 2-dimensional table defined by rows and columns.
==============  =============================================================================

You should **never** mix and match these layout managers. Use only one of them
for the widget layout within a particular "parent widget". (Widgets are organized
in a hierarchy, which is explained in the next lesson.)

Specifying Dimensions
=====================

By default, a size or position value specified as an integer is in pixel units.
If a different unit of measurement is desired, you can use a string and
append an appropriate unit symbol. The following units are recognized:

=========  ====================================================================
Example         Units
=========  ====================================================================
37              pixels
"37c"           centimeters
"37i"           inches
"37m"           millimeters
"37p"           "points" (as in a 12 point font). (One point is approximately 1/72 of an inch.)
=========  ====================================================================

Please note that some of the widgets change the meaning of their ``width``
and ``height`` based on the widget's configuration. For example, if you have
a ``Button`` with text on it, and you set the button's width and
height, the size values are considered to be in ``text`` units. However, if
you have a ``Button`` with an image on its face, the button's width and
height values are interpreted as pixels. If you have a widget whose size is
not acting as you would expect, it may be because the units are different than
you expect.

In general use, you rarely specify the size of widgets. Your ``layout manager``
will set the size of a widget based on the contents of the widget and if you
want the widget to be larger, you added some ``padding`` around it.

*Place* Layout Manager
======================

All widgets have a :code:`.place(x, y, width, height)` method that can be used
to specify the exact location and size of a widget. You can use this method
to create a static interface that will always look the same regardless of the
parent's window size. This layout method is rarely used because the GUI window
can't be easily re-sized in user-friendly ways.

*Grid* Layout Manager
=====================

All widgets have a :code:`.grid(row=r, column=c)` method that will place a
widget in the cell (r,c) of a 2-D table. By default the widget is rendered
in the middle of the cell and as small as possible. This can be changed using
other optional parameters. The ``sticky`` option allows you to move or
stretch a widget to the borders of a cell. There are 4 options, ``tk.E``,
``tk.W``, ``tk.N``, and ``tk.S``, which are abbreviations for **east**,
**west**, **north**, and **south** respectively. These options are 'bit flags'
that can be combined in any combination using simple addition. When you
specify opposing cell edges, the widget will stretch to reach both boundaries.
Here are some examples:

=============================  ====================================================================
``sticky`` Parameter           Description
=============================  ====================================================================
``tk.W``                       Move the widget to the left cell boundary.
``tk.W + tk.N``                Move the widget left and up so that it is in the upper-left corner.
``tk.E + tk.W``                Stretch the widget so that it fills the cell horizontally.
``tk.E + tk.W + tk.S``         Stretch the widget so that it fills the cell horizontally and move it
                               down to the bottom cell boundary.
``tk.E + tk.W + tk.N + tk.S``  Stretch the widget so it fills the entire cell.
=============================  ====================================================================

In addition, if you do not want the widget to be rendered as small as possible,
you can add space to the widget using ``ipadx`` and ``ipady``, which makes
the widget itself larger. (The "i" stands for internal padding.) Or you can
add space around the widget to force a cell to be larger using ``padx`` and ``pady``.
This makes the area inside the table cell larger.
You can also have a widget span more than one cell in the grid using ``columnspan``
and ``rowspan`` parameters. Here is an example grid command that stretches a
button widget to the full width of a grid cell and adds extra space vertically
to the grid cell:

.. code-block:: python

  my_button = tk.Button(application_window, text="Example")
  my_button.grid(row=3, column=1, sticky=tk.E + tk.W, pady=10)

One final note about grid layouts. You might think that you need to
tell ``tkinter`` how big your grid layout is -- but you don't. It will figure
out how big the grid table is by simply examining all of the widgets inside
a container widget. If there are cells that were not assigned a widget,
those cells will be empty in the interface.

To accomplish a desired interface design using a ``grid`` ``layout manager``
is typically a process of experimentation. Don't expect to get your desired
layout on the first try.

*Pack* Layout Manager
=====================

The ``pack`` layout manager tries to place each widget "next to" the
previous widget in a container. You can call it without any arguments and it
will try to position and size a widget in reasonable ways. To control
the exact rendering of a widget using ``pack`` is more complex than the ``grid``
layout and therefore you are encouraged to use the ``grid`` layout manager
for most interface design problems.

For situations where you want to have a series of widgets in a vertical or
horizontal row, the ``pack`` layout manager is fairly simple to use. The
``side`` parameter can be ``TOP``, ``BOTTOM``, ``LEFT``, or ``RIGHT`` and
specifies which side of the container to "pack" the widget against. You
also use the ``ipadx``, ``ipady``, ``padx`` and ``pady`` parameters to add
extra space around a widget. The parameter ``fill``
can be ``X``, ``Y``, or ``BOTH`` to specify whether a widget stays as
small as possible or whether if expands to fill all available space
inside it's parent widget. If you want the widget to stretch to fill the
available space, you also have to set the ``expand`` parameter to ``True``.

Here is an example ``pack`` command for a button widget:

.. code-block:: python

  my_button = tk.Button(application_window, text="Example")
  my_button.pack(side=tk.TOP, fill=tk.Y, expand=True, pady=10)

To accomplish a desired interface design using a ``pack`` ``layout manager``
is typically a process of experimentation. Don't expect to get your desired
layout on the first try.

Summary
-------

To summarize, let's review two very important rules:

* A widget will not be visible in a window until you assign it a size and
  location within it's parent widget.
* You should **never** mix and match ``layout managers``; use only one type of
  layout manager for the widgets within a particular parent widget.

.. index:: layout manager, place, grid, pack

