..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: modules-2-
   :start: 1

More About Using Modules
------------------------

Before we move on to exploring other modules, we should say a bit more about what modules are and how we
typically use them.  One of the most important things to realize about modules is the fact that they are data objects, just
like any other data in Python.  Module objects simply contain other Python elements.


The first thing we need to do when we wish to use a module is perform an ``import``.  In the example above, the statement
``import math`` creates a new name, ``math``, and makes it refer to a `module object`.  This looks very much like
the reference diagrams we saw earlier for simple variables.

In order to use something contained in a module, we use the `dot` notation, providing the module name and the specific item joined together with a "dot".  For example, to use the ``sqrt`` function, we say ``math.sqrt``.  You should read
this as: "In the module math, access the Python element called sqrt".
