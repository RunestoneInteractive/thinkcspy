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
of properties that all ``tk`` widgets have in common. Some of these are shown in
the following table.

.. sidebar:: ``ttk`` Attributes

  Remember that ``ttk`` widgets match the "look and feel"
  of the computer that is running your program, so there are limited attributes
  you can change for ``tkk`` widgets. See the ``ttk`` ``style`` attribute information
  at http://infohost.nmt.edu/tcc/help/pubs/tkinter/web/ttk-style-layer.html.

========================   ==============================================================
Common Widget Properties   Description
========================   ==============================================================
``bg``                     Background color.
``fg``                     Foreground color.
``width``                  Width in pixels
``height``                 Height in pixels
``borderwidth``            The size of the border in pixels.
``text``                   Text displayed on the widget.
``font``                   The font used for text on the widget.
``cursor``                 The shape of the cursor when the cursor is over the widget.
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

==========================  ===========  ==================================================================
Specific Widget Properties  Applies to   Description
==========================  ===========  ==================================================================
``variable``                Checkbutton  An Tk object that will be changed by interaction with the widget.
                            Radiobutton
                            Entry
                            Spinbox
                            Text
``from_``                   Scale        The starting value of a ``scale`` (i.e., a slider)
``to``                      Scale        The ending value of a ``scale`` (i.e., a slider)
``orient``                  Scale        HORIZONTAL or VERTICAL
``resolution``              Scale        The increment amount along a ``scale`` (i.e., a slider)
==========================  ===========  ==================================================================

For widgets that have a "variable" that a user manipulates, you must create a
special tk object that stores the widget's value. Basically you are creating
a non-visible widget that can have events associated with it.
You can access the widget's value through ``.set(new_value)`` and ``.get()``
methods on the ``variable object``. There are four types of ``variable objects``:

====================  ===============================================================
tk variable object    Description
====================  ===============================================================
``tk.BooleanVar``     A tk object that holds a single Boolean value
``tk.IntVar``         A tk object that holds a single integer value
``tk.DoubleVar``      A tk object that holds a single double value
``tk.StringVar``      A tk object that holds a single string value
====================  ===============================================================

Let's take a ``tk.Checkbutton`` as an example and walk through the steps needed
to get and set its "value". You need to do three things:

#) Create a ``tk.BooleanVar`` object. (Actually any type of ``variable object`` can be used.)
#) Give the ``tk.BooleanVar`` object the initial value you want for the checkbutton.
#) Assign the ``variable`` attribute of the checkbutton to the ``tk.BooleanVar object``.

In code this looks like this:

.. code-block:: python

  checkbutton_value = tk.BooleanVar()
  checkbutton_value.set(True)  # The checkbutton will be "checked"

  my_checkbutton = tk.Checkbutton(parent_widget, text="Example check box")
  my_checkbutton['variable'] = checkbutton_value

If you want the value of the checkbutton at any time while your program is
running, you ``get`` the value of the ``variable object`` like this:

.. code-block:: python

  the_current_value_of_the_checkbutton = checkbutton_value.get()

And you can change the state of the checkbutton at any time using a call to
``.set()`` like this:

.. code-block:: python

  checkbutton_value.set(FALSE)  # set the checkbutton to "un-checked"


Widget Attributes
=================

The following web pages provide a good description of the properties that
can be modified for individual widgets:

===================  =============================================================================
Widget               Documentation Resource
===================  =============================================================================
``tk.Button``        http://infohost.nmt.edu/tcc/help/pubs/tkinter/web/button.html
``ttk.Button``       http://infohost.nmt.edu/tcc/help/pubs/tkinter/web/ttk-Button.html
``tk.Menu``          http://infohost.nmt.edu/tcc/help/pubs/tkinter/web/menu.html
``tk.Menubutton``    http://infohost.nmt.edu/tcc/help/pubs/tkinter/web/menubutton.html
``tkk.Menubutton``   http://infohost.nmt.edu/tcc/help/pubs/tkinter/web/ttk-Menubutton.html
``tk.OptionMenu``    http://infohost.nmt.edu/tcc/help/pubs/tkinter/web/optionmenu.html
``tkk.Entry``        http://infohost.nmt.edu/tcc/help/pubs/tkinter/web/ttk-Entry.html
``tk.Text``          http://infohost.nmt.edu/tcc/help/pubs/tkinter/web/text.html
``tk.Checkbutton``   http://infohost.nmt.edu/tcc/help/pubs/tkinter/web/radiobutton.html
``tkk.Checkbutton``  http://infohost.nmt.edu/tcc/help/pubs/tkinter/web/ttk-Checkbutton.html
``tk.Radiobutton``   http://infohost.nmt.edu/tcc/help/pubs/tkinter/web/radiobutton.html
``tkk.Radiobutton``  http://infohost.nmt.edu/tcc/help/pubs/tkinter/web/ttk-Radiobutton.html
``tk.Listbox``       http://infohost.nmt.edu/tcc/help/pubs/tkinter/web/listbox.html
``tkk.Combobox``     http://infohost.nmt.edu/tcc/help/pubs/tkinter/web/ttk-Combobox.html
``tk.Scale``         http://infohost.nmt.edu/tcc/help/pubs/tkinter/web/scale.html
``tkk.Scale``        http://infohost.nmt.edu/tcc/help/pubs/tkinter/web/ttk-Scale.html
*Container Widgets*
``tk.Frame``         http://infohost.nmt.edu/tcc/help/pubs/tkinter/web/frame.html
``tkk.Frame``        http://infohost.nmt.edu/tcc/help/pubs/tkinter/web/ttk-Frame.html
``tk.LabelFrame``    http://infohost.nmt.edu/tcc/help/pubs/tkinter/web/labelframe.html
``tkk.LabelFrame``   http://infohost.nmt.edu/tcc/help/pubs/tkinter/web/ttk-LabelFrame.html
``tk.PanedWindow``   http://infohost.nmt.edu/tcc/help/pubs/tkinter/web/panedwindow.html
``tkk.PanedWindow``  http://infohost.nmt.edu/tcc/help/pubs/tkinter/web/ttk-PanedWindow.html
``tkk.Notebook``     http://infohost.nmt.edu/tcc/help/pubs/tkinter/web/ttk-Notebook.html
===================  =============================================================================

.. index:: widget attributes

