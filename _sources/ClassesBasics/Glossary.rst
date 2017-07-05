..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell. Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

Glossary
--------

.. glossary::

    class
        A class can also be thought of as a template, or blueprint, for the objects that are instances of it. It contains both the attributes and the methods that each instance of it will have.

    constructor
        The constructor is a "factory" for making new instances of the class. It is called by the same name as the class (e.g., for the Turtle class you call ``Turtle()`` to create a new instance). You can customize the constructor by using an *initializer method* to set up the attributes (i.e. the state) of the new object.

    initializer method
        A special method in Python (``__init__``) that is invoked automatically to set a newly-created object's attributes to its initial (factory-default) state.

    instance
        An object that belongs to a class. The terms *instance* and *object* are used interchangeably.

    instantiate
        To create an instance of a class, and to run its initializer.

    method
        A function that is defined inside a class definition and is invoked on instances of that class.

    object
        A compound data type that is often used to model a thing or concept in the real world. It bundles together data (attributes) and operations on that data (methods).

    object-oriented programming
        A powerful style of programming in which data and the operations that manipulate it are organized into classes with attributes and methods.

    object-oriented language
        A language that provides features, such as user-defined classes and inheritance, that facilitate object-oriented programming.
