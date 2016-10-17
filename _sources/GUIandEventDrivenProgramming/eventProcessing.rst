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

First let's define what an event is.

.. sidebar:: Event

   An event is some action that has happened. Events can be caused by a user
   clicking in a window or typing on the keyboard. They can also be generated
   by automated timers that are on some schedule. All events are predefined;
   there is no such thing as a "user defined event."

Events are designated as strings using a pre-defined syntax. Here are the
most widely used events and a brief description of each one. Using the first
six events as examples, you can generalize the remaining events.

=============================  ====================================================================
Pointer Related Events         Description
=============================  ====================================================================
``"<ButtonPress-1>"``          The left mouse button was pressed.
``"<ButtonPress-2>"``          The middle mouse button was pressed.
``"<ButtonPress-3>"``          The right mouse button was pressed.
``"<B1-Motion>"``              With the left mouse button held down, the mouse changed location.
``"<B2-Motion>"``              With the middle mouse button held down, the mouse changed location.
``"<B3-Motion>"``              With the right mouse button held down, the mouse changed location.
``"<ButtonRelease-1>"``        The left mouse button was released.
``"<Double-Button-1>"``        The left mouse button was double-clicked.
``"<Enter>"``                  The mouse pointer just became over a particular widget.
``"<Leave>"``                  The mouse pointer is no longer over a particular widget.
``"<FocusIn>"``                A widget just received the keyboard focus.
``"<FocusOut>"``               A widget just lost the keyboard focus.
``"<Configure>"``              A widget just changed its size or position.
=============================  ====================================================================

=============================  ====================================================================
Keyboard Related Events        Description
=============================  ====================================================================
``"<Key>"``                    The user pressed any key on the keyboard.
``"<Return>"``                 The user pressed the Enter key.
``"<Backspace>"``              The user pressed the Backspace key.
``"<Tab>"``                    The user pressed the Tab key.
``"<Escape>"``                 The user pressed the Escape key.
``"<Prior>"``                  The user pressed the Page-up key.
``"<Next>"``                   The user pressed the Page-down key.
``"<Up>"``                     The user pressed the up arrow key.
``"<Down>"``                   The user pressed the down arrow key.
``"<Left>"``                   The user pressed the left arrow key.
``"<Right>"``                  The user pressed the right arrow key.
``"<F1>"``                     The user pressed the F1 key.
``"<F2>"``                     The user pressed the F2 key.
``"<a>"``                      The user pressed the "a" key.
``"<b>"``                      The user pressed the "b" key.
``"<c>"``                      The user pressed the "c" key.
``"<Shift-Up>"``               The user pressed the up arrow key while the shift key was down.
``"<Alt-Up>"``                 The user pressed the up arrow key while the alt key was down.
``"<Control-Up>"``             The user pressed the up arrow key while the control key was down
=============================  ====================================================================

Binding Events
==============

Events are not passed to your program unless you specifically ask to process
them. For example, your program will not be notified that the mouse has moved
unless you bind the ``"<B1-Motion>"`` event to a widget in your program. Note
that events are always associated with a particular widget, a particular class
of widgets, or your application window.



.. index:: event, event binding, event object

