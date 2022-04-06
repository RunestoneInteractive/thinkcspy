Reuse Through Composition
-------------------------

Inheritance is not the only way to reuse code. *Composition* occurs when
an object stores a reference to one or more objects in one of its instance
variables. The object is thus able to reuse code in the objects it 
embeds within itself.

For example, our LabeledPoint example could have been implemented as follows:

.. activecode:: pt_composition_1

    class Point:
        
        def __init__(self, initX, initY):
            self.x = initX
            self.y = initY
            
        def distanceFromOrigin(self):
            return ((self.x ** 2) + (self.y ** 2)) ** 0.5            

        def __str__(self):
            return "x=" + str(self.x) + ", y=" + str(self.y)

    class LabeledPoint:

        def __init__(self, initX, initY, label):
            self.point = Point(initX, initY)
            self.label = label
            
        def distanceFromOrigin(self):
            return self.point.distanceFromOrigin()
            
        def __str__(self):
            return str(self.point) + " (" + self.label + ")"            

    p = LabeledPoint(7,6,"Here")
    print(p)
    print(p.distanceFromOrigin())

The first thing to notice about this version of LabeledPoint 
is that it does not inherit from Point. Instead, its constructor 
instantiates a Point and stores a reference to it in its ``point`` 
instance variable so that it can be used by the other methods.

Next, notice how the ``distanceFromOrigin()`` method reuses the code in
``Point` by invoking it. We say that ``LabeledPoint``'s ``distanceFromOrigin()``
delegates its implementation to ``Point``'s implementation.

Finally, notice how the ``__str__()`` method also reuses the code in 
``Point`` by calling ``str(self.point)``. 

