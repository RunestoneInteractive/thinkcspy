Extending 
---------

If you compare the code in the __init__ methods of ``Point`` and ``LabeledPoint``, you can
see that there is some duplication--the initialization of x and y. We can 
eliminate the duplication by having ``LabeledPoint``'s ``__init__()`` method invoke
``Point``'s ``__init__()`` method. That way, each class will be responsible for 
initializing its own instance variables. 

A method in a child class that overrides a method in the parent can invoke 
the overridden method using ``super()``, like this:

.. sourcecode:: python
   :emphasize-lines: 4
   :linenos:
   
    class LabeledPoint(Point):

        def __init__(self, initX, initY, label):
            super().__init__(initX, initY)
            self.label = label

In this example, line 4 invokes the ``__init__()`` method in ``Point``, 
passing the values of ``initX`` and ``initY``
to be used in initializing the ``x`` and ``y`` instance variables. 

Here is a complete code listing showing both classes, with a version
of ``__str__()`` for ``LabeledPoint`` that invokes its parent's implementation
using ``super()`` to avoid duplicating the functionality provided in ``Point``.

.. activecode:: combined_pts_1

    class Point:
        
        def __init__(self, initX, initY):
            self.x = initX
            self.y = initY
            
        def distanceFromOrigin(self):
            return ((self.x ** 2) + (self.y ** 2)) ** 0.5            

        def __str__(self):
            return "x=" + str(self.x) + ", y=" + str(self.y)

    class LabeledPoint(Point):

        def __init__(self, initX, initY, label):
            super().__init__(initX, initY)
            self.label = label
            
        def __str__(self):
            return super().__str__() + " (" + self.label + ")"            

    p = LabeledPoint(7,6,"Here")
    print(p)
    print(p.distanceFromOrigin())

