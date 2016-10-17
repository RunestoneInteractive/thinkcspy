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
program is to create the widgets need for a program's interface.

Each widget is designed for specific purposes and your program will be more
user friendly if you use each widget according to its
intended purpose. The following 3 charts list the ``tkinter`` widgets and their
intended usage. Some widgets are designed for user input, others are designed
to organize and control the display of widgets, and some widgets are
designed strictly for presenting information on the screen. Therefore, the
charts below are separated into three groups.

Widgets for user input:

===========  =============================================================================
Widget       Purpose
===========  =============================================================================
Button       Execute a specific task; “do this now”.
Entry        Enter one line of text.
Spinbox      Ordinary Entry where the user only has a limited number of ordered values to choose from.
Text         Display and edit formatted text, possibly with multiple lines.
Checkbutton  Set on-off, True-False selections.
Radiobutton  Allow one-of-many selections.
Listbox      Choose one or more alternatives from the list.
Combobox     Combines a text field with a pop-down list of values.
Scale        Select a numerical value by moving a “slider” knob along a scale.
Menu         Implement toplevel, pulldown, and popup menus.
Menubutton   Displays popup or pulldown menu items when activated.
OptionMenu   Creates a popup menu, and a button to display it.
===========  =============================================================================

Widgets to organize and control the display of other widgets:

===========  =============================================================================
Widget       Purpose
===========  =============================================================================
Frame        Group other widgets into complex layouts.
LabelFrame   Group a number of related widgets using a border and a title
PanedWindow  Group one or more child widgets (“panes”), where the child
             widgets can be resized by the user by moving separator lines.
Notebook     A tabbed set of frames, only one of which is visible at any given time.
Toplevel     Much like Frame, except it is displayed in a separate window with
             title bars, borders, and other “window decorations”.
Scrollbar    Implement scrolled listboxes, canvases, and text fields.
Sizegrip     Allows a user to resize the containing toplevel window by pressing and dragging a grip.
===========  =============================================================================

Widgets that display information to a user, but have no user interaction:

===========  =============================================================================
Widget       Purpose
===========  =============================================================================
Label        Display static text or an image.
Message      Display static multi-line text.
Separator    Displays a horizontal or vertical separator bar.
Progressbar  Shows the status of a long-running operation.
Treeview     Displays a hierarchical collection of items.
===========  =============================================================================

You do not need to memorize the above lists, but you should probably re-read
the charts again so that you are familiar with what is possible in a
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

You can group widgets by creating a ``Frame``, ``LabelFrame``, or a ``PanedWindow``
widget and then add widgets to it. This is the standard way to "layout" a GUI
interface. This will become clearer as you build interfaces in the next
several lessons.

Creating Widgets
================

To create Tkinter widgets, you need to import the TKinter module. The standard
import looks like this:

.. code-block:: python

  import tkinter as ttk

All functionality of the TKinter module can be accessed as methods of the ``ttk`` object.

The first thing you need to do is create a window for your application. This
is done by creating a Tk object:

.. code-block:: python

  application_window = ttk.Tk()

Then you create widgets and add them to the window's widget
hierarchy. For example, to create a button, you would call the tkk ``Button``
method and send the ``application_window`` as the first argument:

.. code-block:: python

  cmd_button = ttk.Button(application_window, text="Example")

The parameters needed to correctly create each widget varies, so you will need to
refer to the Python documentation for each specific widget type. As of fall
2016, the most current version of the TKinter module is version 25 and its
documentation can be found at https://docs.python.org/3/library/tkinter.ttk.html

Notice that in the above code ``Tk()`` and ``Button()`` are both capitalized.
By convention, this indicates that the window and the button are instances
of a Python class. The Tkinter module is entirely object-oriented and makes
extensive use of object-oriented language features.

.. index:: Tkinter, widget, widget hierarchy

