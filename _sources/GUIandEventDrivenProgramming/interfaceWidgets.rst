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
intended purpose. The following charts list the ``tkinter`` widgets and their
intended usage. Some widgets are designed for user input, others are designed
to organize and control the display of other widgets, and some widgets are
designed strictly for presenting information on the screen. Therefore, the
charts below are separated into three groups.

Widgets for user input are:

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

Widgets to organize and control the display of other widgets are:

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

Widgets that display information to a user are:

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
the charts above (right now) so that you are familiar with what is possible in a
TKinter GUI interface. (Note that the TKinter module is customizable, which
means that you can create your own widgets, but that is beyond what we will
study in these lessons.)

Creating Widgets
================

To create Tkinter widgets, you need to import the TKinter module. The standard
import looks like this:

.. code-block:: python

  import tkinter as ttk

All functionality of TKinter module can be accessed as methods of the ttk object.
For example, to create a button, you would call the ``button`` method like this:

.. code-block:: python

  cmd_button = ttk.button("Example")

An event-driven program has the following structure:

* Create the icons and widgets that are displayed to a user and organize
  them inside a window.
* Define functions that will process application events.
* Associate each function with a related user event.
* Start an infinite event-loop that processes user events. When a user
  event happens, the event-loop calls the function associated with that
  event.

A GUI program's interface is composed of ``widgets`` displayed in a window.
Your computer's **operating system** controls the creation and manipulation
of windows on your computer's display screen. The operating system also
controls the pointing devices on your computer, such as a mouse or a touch
screen. Therefore, your computer's operating system has control of the events
that happen in a window. The operating system sends events to your program in
the order they are generated by a user. Your program's event-loop responds to
those events. All event-loops are basically the same, so there is a
generic event-loop that all programs use and it looks something like this:

.. code-block:: python

  while True:
    # Get the next event from the operating system
    event = get_next_event()

    # Get the function that is assigned to handle this event
    a_function_to_handle_the_event = event-handlers{event}

    # If a function has been assigned to handle this event, call the function
    if a_function_to_handle_the_event:
      a_function_to_handle_the_event()  # Call the event-handler function

    # Stop processing events if the user gives a command to stop the application
    if window_needs_to_close:
      break  # out of the event-loop

Again, you do not implement an event-loop in a GUI program. The event
loop already exists. To make this event-loop work in a generic fashion you
only need to associate a function (which is called an event-handler) to a
specific event. We will show you how to do that in a few lessons. First,
let's learn how to create a GUI interface.

GUI Programming Options
=======================

Python does not implement GUI, event-driven programming in its core
functionality. GUI programming is implemented using imported modules which
are often referred to as "toolkits." Anyone can implement external modules
that facilitate GUI programming and many people have. Therefore you have
many options available to you for GUI programming. A partial list of options
can be found at https://docs.python.org/3/faq/gui.html. The following lessons
explain how to use the Tkinter toolkit to create GUI programs. Once you
understand how GUI programming works, you should be able to learn
how to use any of the other available toolkits.

.. index:: graphical user interface, GUI, event-driven programming, event loop, event-handler

