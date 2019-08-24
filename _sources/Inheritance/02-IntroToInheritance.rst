Introduction to Inheritance
---------------------------

Recall the Point class from earlier in the book:

.. activecode:: pointclass_1

    class Point:
        
        def __init__(self, initX, initY):
            self.x = initX
            self.y = initY
            
        def distanceFromOrigin(self):
            return ((self.x ** 2) + (self.y ** 2)) ** 0.5            

        def __str__(self):
            return "x=" + str(self.x) + ", y=" + str(self.y)
        
    p = Point(7, 6)
    print(p)

Now, suppose we want to create a class that works like ``Point`` 
in every respect, but also keeps track of a short description for the point.
We could create a ``LabeledPoint`` class by copying and pasting the definition for 
``Point``,
changing the name to ``LabeledPoint``, and modifying the class to suit our
purposes. However, any time you copy and paste code, keep in mind that
you are copying and pasting bugs that may exist in the code. Inheritance
provides a way to reuse the definition of Point without having to copy and
paste.

We begin like this:

.. activecode:: labeledpoint
    :include: pointclass_1

    class LabeledPoint(Point):
        pass

This example defines a class named ``LabeledPoint`` that inherits from the ``Point`` class.
Putting the name ``Point`` in parenthesis tells Python that the new class, 
``LabeledPoint``, begins with all of the methods defined in its parent, ``Point``.
For example, we can instantiate LabeledPoint using the Point constructor, and
invoke any Point methds we want to on it:

.. sourcecode:: python

    p = LabeledPoint(7,6)
    dist = p.distanceFromOrigin()

Now, let's refine LabeledPoint so that it holds a label, along with the x and y 
coordinates:

.. activecode:: labeledpoint_2
    :include: pointclass_1
   
    class LabeledPoint(Point):

        def __init__(self, initX, initY, label):
            self.x = initX
            self.y = initY
            self.label = label
            
        def __str__(self):
            return "x=" + str(self.x) + ", y=" + str(self.y) + " (" + self.label + ")"            

    labeledPt = LabeledPoint(7,6,"Here")
    print(labeledPt)
    
Here, we have redefined two of the methods that LabeledPoint inherits from Point: 
``__init__()`` and ``__str__()``. 
This is called *overriding*. When a child class redefines methods that are defined
in its parent, we say that the child *overrides* the functionality inherited from
its parent. When both the parent class and child class have a method with the
same name, an invocation of the method on an instance of the child class 
executes code in the child's class; an invocation of the method on an instance
of the parent class executes code in the parent's class. For example,
consider the following:

.. activecode:: combinedpts
    :include: pointclass_1, labeledpoint_2

    pt = Point(5,10)
    labeledPt = LabeledPoint(7, 6, "Here")
    
    ptStr = str(pt)
    labeledPtStr = str(labeledPt)

In Line 4, the call to ``str(pt)`` invokes the ``__str__()`` method in ``Point``, because
pt refers to an instance of ``Point``. In Line 5, the call to ``str(labeledPt)``
invokes the ``__str__()`` method in ``LabeledPoint``, because ``labeledPt``
refers to an instance of ``LabeledPoint``.

