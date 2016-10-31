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


Widget Groupings
================

You will design a more user friendly interface if you group and organize
your widgets in a coherent design. Tkinter has four basic ways to group
widgets: ``Frame``, ``LabelFrame``, ``PaneWindow``, and ``Notebook``. These
are described in the table below.

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

Widgets are always organized as a hierarchy, where the main
application window is the root of the hierarchy. Typically, the child widgets
of a window are a combination of "frames". The "frames" hold other widgets.
A "frame" will not be visible until it is assigned a size and location using
a layout manager.



.. index:: Tkinter, widget, widget hierarchy, Frame, LabelFrame, PanedWindow, Notebook


