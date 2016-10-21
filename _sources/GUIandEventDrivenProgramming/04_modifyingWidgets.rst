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

Common Widget Properties
========================

Each widget has a set of properties that define its visual appearance on the
computer screen and how it responds to user events. There is a common set
of properties that all widgets have in common. Some of these are shown in
the following table:

========================   =============================================================================
Common Widget Properties   Description
========================   =============================================================================
``bg``                     Background color.
``fg``                     Foreground color.
``width``                  Width in pixels
``height``                 Height in pixels
``text``                   Text displayed on the widget. (This
``cursor``                 The shape of the cursor when it is over the widget.
``activeforeground``       The color of the text when the widget is activated.
``borderwidth``            The size of the border in pixels.
``underline``              Make the text underlined. (Requires a underline-able font.)
``font``                   The font used for text on the widget.
``activebackground``       The color of the background when the widget is activated.
``image``                  An image to be displayed on the widget.
=======================  =============================================================================

You can treat a widget object as a dictionary and use the property names
as keys to access and change the property values. For example, to change the
background color and width of a widget whose object variable is named ``sam``,
you could do this:

.. code-block:: python

  sam['bg'] = 'red'
  sam['width'] = 60  # pixels

Specific Widget Properties
==========================

Each type of widget has properties specific to its intended use. For example,
widgets that allow user clicks, such as a ``Button`` or a ``Checkbutton``, have
a ``command`` property can be set to the widget's event handler. For widgets
that have a value you want to access, you must create a special object that
stores the widget's value. You can access the widget's value through
``.set(new_value)`` and ``.get()`` methods on the value object. This can be
very confusing without an example,

==========================   =============================================================================
Specific Widget Properties   Description
==========================   =============================================================================
``variable``                 An Tk object that will be changed by interaction with the widget.
===========================  =============================================================================

.. index:: widget properties

