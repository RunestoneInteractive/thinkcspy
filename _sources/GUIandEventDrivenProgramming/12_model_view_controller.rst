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


Managing GUI Program Complexity
===============================

As we explained in a previous lesson, GUI programs are best implemented as
Python classes because it allows you to manage the scope of the variables
in your GUI interface and callback functions. However, as GUI programs
become more complex, it can become overwhelming to implement
them as a single class. If a single class has over than 2,000 lines of code
it is probably getting too big to effectively manage. What are some ways
to effectively break down complex problems into manageable pieces?

One of the most widely used ways to break down a GUI program into manageable
pieces is called the Model-View-Controller software design pattern. This is
often abbreviated as **MVC** (Model-View-Controller). It divides a problem into
three pieces:

* Model - the *model* directly manages an application's data and logic. If
  the model changes, the *model* sends commands to update the user's view.
* View - the *view* presents the results of the application to the user. It is
  in charge of all program output.
* Controller - the *controller* accepts all user input and sends commands
  to the model to change the model's state.

To says this in more general terms, the *controller* manages the applications
input, the *model* manages the application's "state" and enforces application
consistency, and the *view* updates the output,
which is what the user sees on the screen. This is basically identical to
what all computer processing is composed of, which is:

.. code-block:: python

  input --> processing --> output

The MVC design pattern renames the pieces and restricted which part of the code
can talk to the other parts of code. For MVC design:

.. code-block:: python

  controller (input) --> model (processing) --> view (output)

From the perspective of a GUI program, this means that the callback functions,
which are called when a user causes events, are the *controller*,
the *model* should perform all of the application logic, and the building and
modification of the GUI widgets composes the *view*.

Let's develop a Whack-a-mole game program using this design strategy. Instead
of creating one Python Class for the entire game, the code will be developed as
a set of cooperating objects. So where should we begin? I would suggest that
the same stages of development we used in the previous lesson are a good
approach, but we will create a separate Python ``class`` for most of the
stages. Let's walk through the code development.

Creating the *View*
-------------------

Let's create a Python ``class`` that builds the user interface for a
Whack-a-mole game. The emphasis for this code is the creation of the widgets
we need to display to the user. For this version let's allow the moles to
be placed at random locations inside the left frame. To do this we must
specify an exact size for the left frame. Otherwise the code is the same
as the previous version.

.. code:: python

  Code

Creating the *Model*
--------------------

The *model* for this Whack-a-mole game is fairly simple. We need to keep
a counter for the number of user hits on moles that are visible, and a
counter for the number of times a user clicks on a mole that is not visible
(or just clicks on the left frame and not a mole widget.)

Creating the *Controller*
-------------------------

The *controller* receives user events and sends messages to the *controller*
to update the *model*'s state. For our Whack-a-mole game, we have the following
four basic commands we need to send to the *model*:

* A user clicked on something on the left frame.
* The user wants to start a new game. (The user clicked on the "Start" button.)
* The user wants to stop playing a game. (The user clicked on the "Stop" button.)
* The user wants to quit the application. (The user clicked on the "Quit" button.)

The *controller** needs to recognize these events and send them to appropriate
methods in the *model*. The *controller* needs to define callback functions for
these events and register the appropriate event with the appropriate callback.
Therefore, the *controller* needs access to the widgets in the *view* object.
This can easily be accomplished by passing a reference to the *view* object
to the *controller* when it is created.
Summary
-------



.. index:: model-view-controller design pattern, MVC, MVC version of Whack-a-mole game

.. _whack_a_mole_v1.py: ../_static/Programs/whack_a_mole_v1.py
.. _whack_a_mole_v2.py: ../_static/Programs/whack_a_mole_v2.py
.. _whack_a_mole_v3.py: ../_static/Programs/whack_a_mole_v3.py
.. _whack_a_mole_v4.py: ../_static/Programs/whack_a_mole_v4.py
.. _whack_a_mole_v5.py: ../_static/Programs/whack_a_mole_v5.py

