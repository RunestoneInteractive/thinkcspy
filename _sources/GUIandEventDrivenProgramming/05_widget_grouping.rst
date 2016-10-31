..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: gui-5-
   :start: 1


Widget Groupings
================

You will design a more user friendly interface if you group and organize
your widgets in a coherent design. Tkinter has four basic ways to group
widgets which are described in the following table.

Widgets to organize and control the display of other widgets:

===================  =============================================================================
Widget               Purpose
===================  =============================================================================
``tkk.Frame``        Create a container for a set of widgets to be displayed as a unit.
``tkk.LabelFrame``   Group a number of related widgets using a border and a title.
``tk.PanedWindow``   Group one or more widgets into “panes”, where the "panes"
                     can be re-sized by the user by dragging separator lines.
``tkk.Notebook``     A tabbed set of frames, only one of which is visible at any given time.
===================  =============================================================================

Widgets are always organized as a hierarchy, where the main
application window is the root of the hierarchy. Typically, the child widgets
of an application window are a combination of "frames". The "frames" hold
other widgets. A "frame" will not be visible until it is assigned a size
and location using a layout manager.

.. figure:: Figures/Grouping_examples.png
  :align: center

  Examples of grouping widgets

For ``Frame`` and ``LabelFrame`` groups, you make the frame be the parent of
a set of widgets.

For the ``PanedWindow`` and ``Notebook`` groups, you use an ``.add(widget)``
function to add your widgets to the group.


.. index:: Tkinter, widget, widget hierarchy, Frame, LabelFrame, PanedWindow, Notebook


