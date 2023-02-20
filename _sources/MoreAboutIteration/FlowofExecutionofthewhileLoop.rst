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
-----------------------------------

As before with ``if``, loops allow us as programmers to manipulate the control flow of a Python program.
We can now possibly skip a portion of code, or choose to repeat it an indefinite number of times.

The flowchart below provides the general sequence of steps that govern execution of a while loop.

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


