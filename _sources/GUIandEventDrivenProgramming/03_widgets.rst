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


GUI Widgets
===========

As we discussed in the introduction, a GUI program allows a user
to interact with a computer program using a pointing device that manipulates
small pictures called ``icons`` or ``widgets``. The first task of a GUI
program is to create the widgets need for a program's interface. Each widget
is designed for specific purposes and your program will be more
user friendly if you use each widget according to its intended purpose.

Widgets are basically images on a computer screen and they have a
"look-and-feel" depending on the details of how the image is drawn.
The "look-and-feel" of a widget is typically controlled by the operating system.
For example, GUI programs on a Macintosh computer typically look different than GUI
programs on a Microsoft Windows computer. The ``tkinter`` module implements
two versions of widgets: one is "generic," which makes widgets look the same
regardless of what computer your program is running on, and the other
implements widgets that emulate the your computer's "look-and-feel".
How you import the ``tkinter`` module determines which widgets are defined.
Using the import statements shown below, the standard convention uses the
name ``tk`` to access the "generic" widgets and the name ``ttk`` to access
the stylized, "look-and-feel" widgets. For these lessons we will predominantly
discuss the ``ttk`` widgets.

.. code-block:: python

  # To use the "generic" widgets
  import tkinter as tk

  # To use the stylized "look-and-feel" widgets
  from tkinter import ttk


The following three charts list the standard, pre-defined widgets in the
``tkinter`` module.

Widgets for user input:

===================  =============================================================================
Widget               Purpose
===================  =============================================================================
``tkk.Button``       Execute a specific task; “do this now”.
``tk.Menu``          Implements toplevel, pulldown, and popup menus.
``tkk.Menubutton``   Displays popup or pulldown menu items when activated.
``tk.OptionMenu``    Creates a popup menu, and a button to display it.
``tkk.Entry``        Enter one line of text.
``tk.Text``          Display and edit formatted text, possibly with multiple lines.
``tkk.Checkbutton``  Set on-off, True-False selections.
``tkk.Radiobutton``  Allow one-of-many selections.
``ttkListbox``       Choose one or more alternatives from the list.
``tkk.Combobox``     Combines a text field with a pop-down list of values.
``tkk.Scale``        Select a numerical value by moving a “slider” knob along a scale.
===================  =============================================================================

Widgets to organize and control the display of other widgets:

===================  =============================================================================
Widget               Purpose
===================  =============================================================================
``tkk.Frame``        Group other widgets into complex layouts.
``tkk.LabelFrame``   Group a number of related widgets using a border and a title
``tkk.PanedWindow``  Group one or more widgets into “panes”, where the "panes"
                     can be re-sized by the user by dragging separator lines.
``tkk.Notebook``     A tabbed set of frames, only one of which is visible at any given time.
``tkk.Scrollbar``    Implement scrolled listboxes, canvases, and text fields.
``tk.Sizegrip``      Allows a user to re-size the containing toplevel window by pressing and dragging a grip.
===========  =============================================================================

Widgets that display information to a user, but have no user interaction:

===================  =============================================================================
Widget               Purpose
===================  =============================================================================
``tkk.Label``        Display static text or an image.
``tk.Message``       Display static multi-line text.
``tkk.Separator``    Displays a horizontal or vertical separator bar.
``tkk.Progressbar``  Shows the status of a long-running operation.
``ttk.Treeview``     Displays a hierarchical collection of items.
===================  =============================================================================

You do not need to memorize the above lists, but you should probably re-read
the lists again so that you are familiar with what is possible in a
TKinter GUI interface. (Note that the TKinter module is customizable, which
means that you can create your own widgets, but that is beyond what we will
study in these lessons.)

Widget Organization
===================

A GUI interface is defined by creating a group of widgets and displaying them
inside a window. Widgets are always organized as a hierarchy, where the main
application window is the root of the hierarchy. Therefore, all widgets have
a parent widget that they fit inside. The first parameter of all functions that
create a widget is the parent of the widget.

You can group widgets by creating a ``Frame``, ``LabelFrame``, ``PanedWindow``,
or ``PanedWindow`` widget and then add widgets to it. This is the standard
way to "layout" a GUI interface. This will become clearer as you build
interfaces in the next several lessons.

Creating Widgets
================

To create Tkinter widgets, you need to import the TKinter module. The standard
import looks like this:

.. code-block:: python

  import tkinter as tk

All functionality of the TKinter module can be accessed as methods of the ``tk`` object.

The first thing you need to do is create a window for your application. This
is done by creating a ``Tk`` object:

.. code-block:: python

  application_window = tk.Tk()

Then you create widgets and add them to the window's widget
hierarchy. For example, to create a button, you would call the tk ``Button``
method and send the ``application_window`` as the first argument:

.. code-block:: python

  cmd_button = tk.Button(application_window, text="Example")

The parameters needed to correctly create each widget varies, so you will need to
refer to the Python documentation for each specific widget type. As of fall
2016, the most current version of the TKinter module is version 25 and its
documentation can be found at https://docs.python.org/3/library/tkinter.ttk.html

Notice that in the above code ``Tk()`` and ``Button()`` are both capitalized.
By convention, this indicates that the window and the button are instances
of a Python class. The Tkinter module is entirely object-oriented and makes
extensive use of object-oriented language features.

.. index:: Tkinter, widget, widget hierarchy

