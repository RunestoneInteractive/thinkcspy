..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: list-1-
   :start: 1

Event Processing
================

In the previous lessons you learned how to create widgets and use a layout
manager to size and position them in a window. Now it is time to learn how
to process user events on those widgets.

Events
======

Event Binding
=============

Remember from our previous discussion that the operating system is in control
of your computer's screen, keyboard, mouse, and other input devices. When
the user interacts with these input devices the operating system generates
event objects that capture the event information. You should be well aware
that your computer is running multiple processes at any given time. So how does
the computer know which processes to send an event to? It doesn't. You,
as the programmer, must request that specific types of events be sent
to specific functions in your program. This is called "binding." You are
connecting a specific type of event to a specific function. We call
such functions "event handlers."

In addition, events happen on widgets. For example, we want to know when
the cursor of a pointing device is moved over a widget. So we bind a
``"<Enter>"`` event to the widget and specify a function to call when the
event happens. This is done with the ``.bind(event_description, function_handler)``
method of a widget. Once this bind operation is complete and the
application's main event loop has started,
every time a pointing device is moved over the widget, the event handler will
be called.

It is best practice to stub out event handlers and verify that events are
being processed correctly before you start developing an application's
actual processing code. Here is an example of a stubbed out event handler:

.. code-block:: python

  def process_event(event):
    print("The process_event function was called.")

  my_button = tk.Button(application_window, text="Example")
  my_button.bind("<Enter>", process_event)





.. index:: event binding

