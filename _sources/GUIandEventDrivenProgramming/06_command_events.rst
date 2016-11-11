..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: gui-6-
   :start: 1

Command Events
==============

When a user clicks on certain types of widgets, like a button, you typically
want a specific action to be performed.
This is accomplished by setting the ``command`` attribute of a widget to a
specific ``event handler`` function. This can be any function that receives
no arguments as parameters. You can set the ``event handler`` function using
a "named parameter" when you create the widget, or set the widget's ``command``
attribute using a dictionary lookup. For example:

.. code-block:: python

  def my_function():
    print("my_function was called.")

  my_button = tk.Button(application_window, text="Example", command=my_function)

  # or

  my_button = tk.Button(application_window, text="Example")
  my_button['command'] = my_function

Note that you are setting the ``command`` property of the widget to a
*function reference* -- you are not calling the function! Therefore, do not
put parentheses after the function name when you make the assignment.

The following widgets define a ``command`` property which defines a function
that is called from the application's event loop whenever a specific, predefined
event is performed by a user.

===================  =============================================================================
Widget               The user event that causes the ``command`` function to be executed:
===================  =============================================================================
``Button``           The user places their pointing device cursor over the button and
                     presses and releases the left mouse button. The function is
                     actually called on the button release.
``Checkbutton``      If the state of the check box changes, the function is called.
``Radiobutton``      If the state of the radio box changes, the function is called.
``Scale``            The function is called if the slider moves. The function is passed
                     one argument, the new scale value.
===================  =============================================================================

The following widgets do **not** have a ``command`` property, but they use other
properties to respond to user events:

=============  ===================  ========================================================
Widget         Property             User events:
=============  ===================  ========================================================
``Menu``       ``postcommand``      Every time someone brings up this menu.
``Combobox``   ``postcommand``      When the user clicks on the down-arrow.
``Combobox``   ``validatecommand``  Dynamically validate the widget's text content.
``Entry``      ``validatecommand``  Dynamically validate the widget's text content.
=============  ===================  ========================================================

Note that the ``Label``, ``Message``, and ``Separator`` widgets do not respond
to user events and therefore have no associated event handlers.

Hello World Again
=================

As a simple example, here is an enhanced "Hello World" program that contains
a quit button that has a single ``command`` event handler. If the quit
button is pressed by a user, the window's destroy method is called -- which
closes the window.

.. code-block:: python

  import tkinter as tk
  from tkinter import ttk

  # Create the application window
  window = tk.Tk()

  # Create the user interface
  my_label = ttk.Label(window, text="Hello World")
  my_label.grid(row=1, column=1)

  quit_button = ttk.Button(window, text="Quit")
  quit_button.grid(row=2, column=1)
  quit_button['command'] = window.destroy

  # Start the GUI event loop
  window.mainloop()

Other Events
============

Using ``command`` events for simple actions is the easiest way to handle user
events. For more complex situations, the next lesson explains how to associate
"lower level" events with ``event handler`` functions.

.. index:: event, event description, event object, widget command property

