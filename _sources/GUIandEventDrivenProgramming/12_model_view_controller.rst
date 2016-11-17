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

* Model - the *model* directly manages the data, logic, and rules of the application.
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

The MVC design pattern has simply renamed the pieces and restricted which part
can talk to the other parts. For MVC design:

.. code-block:: python

  controller (input) --> model (processing) --> view (output)



Summary
-------



.. index:: model-view-controller design pattern, MVC, MVC version of Whack-a-mole game

.. _whack_a_mole_v1.py: Programs/whack_a_mole_v1.py
.. _whack_a_mole_v2.py: Programs/whack_a_mole_v2.py
.. _whack_a_mole_v3.py: Programs/whack_a_mole_v3.py
.. _whack_a_mole_v4.py: Programs/whack_a_mole_v4.py
.. _whack_a_mole_v5.py: Programs/whack_a_mole_v5.py

