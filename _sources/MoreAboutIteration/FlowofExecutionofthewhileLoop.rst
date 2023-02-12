..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: turtle-5-
   :start: 1

.. index:: control flow, flow of execution



Flow of Execution of the while Loop
---------------------------------

As a program executes, the interpreter always keeps track of which statement is
about to be executed.  We call this the **control flow**, or the **flow of
execution** of the program.  When humans execute programs, they often use their
finger to point to each statement in turn.  So you could think of control flow
as "Python's moving finger".

Control flow until now has been strictly top to bottom, one statement at a
time.  We call this type of control **sequential**.  In Python flow is sequential as long as
successive statements are indented the *same* amount.  The ``while`` statement 
introduces indented sub-statements after the while-loop heading.

Flow of control is often easy to visualize and understand if we draw a flowchart.
This flowchart shows the exact steps and logic of how the ``while`` statement executes.

.. image:: Figures/while_flow.png
      :width: 300px
      :align: center


A codelens demonstration is a good way to help you visualize exactly how the flow of control
works with the while loop.  Try stepping forward and backward through the program by pressing
the buttons.  You can see the value of ``count`` change as the loop iterates through the values from 10 to 0.

.. codelens:: vtest

    count = 10
	while count > 0:
		print(count)
		count = count - 1
	print("Blastoff!")


