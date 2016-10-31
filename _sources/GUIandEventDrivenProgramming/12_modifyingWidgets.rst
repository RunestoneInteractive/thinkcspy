..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: gui-12-
   :start: 1

Common Widget Properties
========================

Each widget has a set of properties that define its visual appearance on the
computer screen and how it responds to user events. There is a set
of properties that all widgets have in common. Some of these are shown in
the following table:

========================   ==============================================================
Common Widget Properties   Description
========================   ==============================================================
``bg``                     Background color.
``fg``                     Foreground color.
``width``                  Width in pixels
``height``                 Height in pixels
``borderwidth``            The size of the border in pixels.
``text``                   Text displayed on the widget.
``underline``              Make the text underlined. (Requires a underline-able font.)
``font``                   The font used for text on the widget.
``cursor``                 The shape of the cursor when it is over the widget.
``activeforeground``       The color of the text when the widget is activated.
``activebackground``       The color of the background when the widget is activated.
``image``                  An image to be displayed on the widget.
========================   ==============================================================

You can treat a widget object as a dictionary and use the property names
as keys to access and change the property values. For example, to change the
background color and width of a widget whose object variable is named ``sam``,
you could do this:

.. code-block:: python

  sam = tk.Button(application_window, text="Sam's Button")
  sam['bg'] = 'red'
  sam['width'] = 60  # pixels

Specific Widget Properties
==========================

Each type of widget has properties specific to its intended use. Here are
some examples:

==========================  ==========  ==================================================================
Specific Widget Properties  Applies to  Description
==========================  ==========  ==================================================================
``variable``                Checkbutton An Tk object that will be changed by interaction with the widget.
                            Radiobutton
                            Entry
                            Spinbox
                            Text
``from_``                   Scale       The starting value of the scale (or slider)
``to``                      Scale       The ending value of the scale (or slider)
``orient``                  Scale       HORIZONTAL or VERTICAL
``resolution``              Scale       The increment amount along a scale.
                            Listbox
=========================== ==========  ==================================================================

For widgets that have a "value" a user manipulates, you must create a
special Tk object that stores the widget's value. Basically you are creating
a non-visible widget that can have events associated with it. There
You can access the widget's value through
``.set(new_value)`` and ``.get()`` methods on the value object. This can be
very confusing without an example,

====================  ===============================================================
Tk variable object    Description
====================  ===============================================================
``tk.BooleanVar``     A Tk object that holds a single Boolean value
``tk.IntVar``         A Tk object that holds a single integer value
``tk.DoubleVar``      A Tk object that holds a single double value
``tk.StringVar``      A Tk object that holds a single string value
====================  ===============================================================

Widget Attributes
=================

The following web pages provide a good description of the properties that
can be modified for individual widgets:

===================  =============================================================================
Widget               Documentation Resource
===================  =============================================================================
``tk.Button``        http://infohost.nmt.edu/tcc/help/pubs/tkinter/web/button.html
``ttk.Button``       http://infohost.nmt.edu/tcc/help/pubs/tkinter/web/ttk-Button.html
``tk.Menu``          Implements toplevel, pulldown, and popup menus.
``tkk.Menubutton``   Displays popup or pulldown menu items when activated.
``tk.OptionMenu``    Creates a popup menu, and a button to display it.
``tkk.Entry``        Enter one line of text.
``tk.Text``          Display and edit formatted text, possibly with multiple lines.
``tkk.Checkbutton``  Set on-off, True-False selections.
``tkk.Radiobutton``  Allow one-of-many selections.
``ttk.Listbox``      Choose one or more alternatives from a list.
``tkk.Combobox``     Combines a text field with a pop-down list of values.
``tkk.Scale``        Select a numerical value by moving a “slider” along a scale.
===================  =============================================================================

.. index:: widget properties

