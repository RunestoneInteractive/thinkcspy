..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: gui-8-
   :start: 1

The Design of GUI Programs
==========================

For very simple GUI programs, no special program design is needed, as
demonstrated in the previous "Hello World" example programs. However, any
non-trivial GUI program will require extensive use of global variables if
the structure of the code does not use a Python ``class``. You have learned
in previous lessons that global variables are bad because they make
debugging programs more difficult. Therefore we want a design for GUI
programs that avoids global variables as much as possible.

To demonstrate this, let's look at two versions of a simple program that
increments a counter each time a user clicks a button. The first version
of this code does not use a ``class`` definition and requires that a
global variable called my_counter be used. This is because the label that
represents the counter is created in the ``create_user_interface`` function
but it must be accessed in the event handler function ``increment_counter``.
In fact, the event handlers of a GUI program almost always need access to multiple
widgets in the program's interface and the values can't be passed as
parameters because an ``command`` ``event handler`` function receives no
parameters and a ``bind`` ``event handler`` function receives exactly one
parameter -- an ``event object``. Study the following example and
pay close attention to where the ``my_counter`` global variable is used.

.. code-block:: python

  import tkinter as tk
  from tkinter import ttk

  global my_counter


  def create_user_interface(application_window):
      global my_counter

      my_counter = ttk.Label(application_window, text="0")
      my_counter.grid(row=0, column=0)

      increment_button = ttk.Button(application_window, text="Add 1 to counter")
      increment_button.grid(row=1, column=0)
      increment_button['command'] = increment_counter

      quit_button = ttk.Button(application_window, text="Quit")
      quit_button.grid(row=2, column=0)
      quit_button['command'] = window.destroy


  def increment_counter():
      global my_counter
      my_counter['text'] = str(int(my_counter['text']) + 1)

  # Create the application window
  window = tk.Tk()

  create_user_interface(window)

  # Start the GUI event loop
  window.mainloop()

Let's compare the above program to an identical application that is designed
as a Python ``class``. The ``class`` encapsulates all of the values needed
for the GUI interface and the ``event handlers`` and we don't need global
variables!

.. code-block:: python

  import tkinter as tk
  from tkinter import ttk

  def main():
      # Create the entire GUI program
      program = CounterProgram()

      # Start the GUI event loop
      program.window.mainloop()

  class CounterProgram:

      def __init__(self):
          self.window = tk.Tk()
          self.my_counter = None  # All attributes should be initialize in init
          self.create_widgets()

      def create_widgets(self):
          self.my_counter = ttk.Label(self.window, text="0")
          self.my_counter.grid(row=0, column=0)

          increment_button = ttk.Button(self.window, text="Add 1 to counter")
          increment_button.grid(row=1, column=0)
          increment_button['command'] = self.increment_counter

          quit_button = ttk.Button(self.window, text="Quit")
          quit_button.grid(row=2, column=0)
          quit_button['command'] = self.window.destroy

      def increment_counter(self):
          self.my_counter['text'] = str(int(self.my_counter['text']) + 1)

  if __name__ == "__main__":
      main()

Notice the following about this design:

* The application's window is created in the constructor (``__init__``) of
  the ``CounterProgram`` class and then the interface widgets are created
  by a call to ``create_widgets``.
* The event handler, ``increment_counter`` can access the label
  ``self.my_counter`` using the object's attributes.
* The code creates an instance of the class ``CounterProgram`` and
  starts the GUI event-loop.

It is recommended that you develop all of your GUI programs as Python Classes.
For complex designs, a Python ``Class`` can help manage the complexity of
the code and the scoping of variables.

.. index:: graphical user interface, GUI, event-driven programming, event loop, event-handler, TKinter, dialog box

