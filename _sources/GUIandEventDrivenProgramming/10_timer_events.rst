..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: gui-10-
   :start: 1


Timer Events
============

GUI programs run an "event loop" that continuously receive events from the
operating system and "dispatches" those events to appropriate callback
functions. Nothing happens in a GUI program without an event. The application
logic for some problems requires that specific events happen at some
specific times. For this reason ``tkinter`` includes a feature to generate
events under software control. These are often refered to as *timer events*.

Every widget has an ``after`` method that will generate an event at a
specific time interval from the time it is called. The method takes at
least 2 arguments: the amount of time (in milliseconds) to wait before
generating the event, and the callback function to call after the time
has elapsed. In the example below, the function ``a_callback_function``
will be called one second (1000 milliseconds) after the timer-event was created.

.. code-block:: python

  def a_callback_function():
      print("a_callback_function was called.")

  my_button = tk.Button(application_window, text="Example")
  my_button.after(1000, a_callback_function)


Animations and Repeated Tasks
-----------------------------

If you want a specific task to be repeated on a regular interval, then
the callback function that performs the task should create a new timer event
each time it is called. The following example creates a callback function
that is called 30 times per second. (Note that 1/30th of a second is 0.033
seconds, or 33 milliseconds.)

.. code-block:: python

  def animate():
      # Draw something
      my_button.after(33, animate)

  my_button = tk.Button(application_window, text="Example")
  my_button.after(33, animate)

A widget can have more than one timer event active at any time. In fact there
is no limit to the number of timer events you can create.

Note that you should never use a loop to repeat a task in a GUI program. If
you use a loop, the event-loop will be prevented from execution and no
events will be processed while the loop is running. Always use a timer event
for repeating a task, especially if a single execution of the task takes
a considerable amount of CPU time.

Canceling Timer Events
----------------------

In some cases you may need to cancel a timer event to prevent it from
executing. This is straightforward using the ``after_cancel`` method.
Remember that a widget can have multiple active timers, so the
``after_cancel`` method requires one parameter which specifies which timer
event to cancel. If you need to cancel an event, you must capture
the return value from the call to ``after`` when you created the event. Here
is an example:

.. code-block:: python

  def do_something():
    # Some processing

  my_button = tk.Button(application_window, text="Example")
  timer_object = my_button.after(1000, do_something)
  ...

  my_button.after_cancel(timer_object)

Multiple Parameters to Timer Callbacks
--------------------------------------

Timer callback function can have zero or more arguments passed to them when
they are called. You specify the arguments when you create the event. This
makes timer callback functions extremely flexible. Below is an example
of three different callback functions, each of which receives a different
number of arguments. You must specify the correct number of arguments for
the callback function when you create the timer event.

.. code-block:: python

  def task1():
    # Do some processing

  def task2(alpha):
    # Do some processing

  def task3(beta, gamma):
    # Do some processing

  my_button = tk.Button(application_window, text="Example")
  my_button.after(1000, task1)
  my_button.after(2000, task2, 3)     # 3 gets passed to the parameter alpha
  my_button.after(5000, task3, a, b)  # a gets passed to the parameter beta
                                      # b gets passed to the parameter gamma


.. index:: timer events, after method, after_cancel method


