.. index:: inheritance, object-oriented programming, DRY, superclass, subclass, override

Inheritance
-----------

Object-oriented programming is a large topic. In this book we have only scratched the surface. Some of LaunchCode's later Skill Track courses cover OOP in detail, so you will learn a lot more later if you take one of those courses. For now, the main goal was simply to give you a taste for the topic, and to equip you with enough basic knowledge that if you see objects and classes in the wild, you will have some understanding of what is going on. Toward that end, there is one more concept that we need to mention, because it will make an appearance in Unit 2. That concept is called **inheritance**.

Let's say we have a class called ``Cat`` to represent cats. Cats can eat, sleep and make noise:

.. activecode:: cat_class

    class Cat:

        def __init__(self):
            # every Cat comes into this world tired and hungry
            self.tired = True
            self.hungry = True

        def sleep(self):
            self.tired = False
            # a Cat always wakes up hungry
            self.hungry = True

        def eat(self):
            if self.hungry:
                self.hungry = False
            else:
                # eating when already full makes a Cat sleepy
                self.tired = True

        def noise(self):
            # sleepy cats say prrrr, energized cats say meow!
            if self.tired:
                return "prrrr"
            else:
                return "meow!"
    def main():
        tom = Cat()
        print("tom says:", tom.noise())
        tom.sleep()
        print("After sleeping, tom says:", tom.noise())
        tom.eat()
        print("After eating, tom still says:", tom.noise())
        tom.eat()
        print("After eating again, tom says:", tom.noise())

    if __name__ == "__main__":
        main()

In the above example, we create a ``Cat`` instance and store it in the variable ``tom``. After sleeping, ``tom``'s ``noise()`` method stops returning ``"prrrr"`` and starts returning ``"meow!"``. After eating twice, he becomes tired again and switches back to ``"prrrr"``.

So far so good. Now let's say we want to create another class to represent a tiger. Tigers will be pretty similar to cats, except for the following additions:

* tigers can be *angry*. Specifically, a tiger is angry whenever it is both hungry and tired.
* If a tiger is angry, its noise is ``"GRRRR!"``.

How should we go about implementing this ``Tiger`` class?

A Naive Tiger
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The naive solution would be to copy and paste our ``Cat`` class, and then modify things as necessary:

.. activecode:: tiger_naive

    class Cat:

        def __init__(self):
            # every Cat comes into this world tired and hungry
            self.tired = True
            self.hungry = True

        def sleep(self):
            self.tired = False
            # a Cat always wakes up hungry
            self.hungry = True

        def eat(self):
            if self.hungry:
                self.hungry = False
            else:
                # eating when already full makes a Cat sleepy
                self.tired = True

        def noise(self):
            # sleepy cats say prrrr, energized cats say meow!
            if self.tired:
                return "prrrr"
            else:
                return "meow!"

    class Tiger:

        def __init__(self):
            # every Tiger comes into this world tired and hungry
            self.tired = True
            self.hungry = True

        def sleep(self):
            self.tired = False
            # a Tiger always wakes up hungry
            self.hungry = True

        def eat(self):
            if self.hungry:
                self.hungry = False
            else:
                # eating when already full makes a Tiger sleepy
                self.tired = True

        def angry(self):
            # a Tiger is angry whenever it is both hungry and tired
            return self.tired and self.hungry

        def noise(self):
            if self.angry():
                # angry Tigers say GRRRR!
                return "GRRRR!"
            elif self.tired:
                return "prrrr"
            else:
                return "meow!"

    def main():
        hobbes = Tiger()
        print("hobbes says:", hobbes.noise())
        hobbes.sleep()
        print("After sleeping, hobbes says:", hobbes.noise())
        hobbes.eat()
        print("After eating, hobbes still says:", hobbes.noise())
        hobbes.eat()
        print("After eating again, hobbes says:", hobbes.noise())

    if __name__ == "__main__":
        main()

The above code works fine, but the problem with this naive solution is that we end up repeating ourselves in dozens of places. Remember that one of the core principles of good program design is that you should strive to repeat yourself as little as possible. We called this principle DRY (Don't Repeat Yourself).

A Better Tiger
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Ideally there should be some way of defining a ``Tiger`` class without having to repeat all the aspects that we already defined in the ``Cat`` class. We want to be able to say "A Tiger is exactly like a Cat, except for a few additions and modifications, which are: [blah blah blah]".

This is exactly what inheritance allows us to do. Inheritance is a syntax for defining a custom class that *inherits* much of its structure and behavior from some other class. In our example, the ``Tiger`` class inherits much of its structure and behavior from the ``Cat`` class. Here's how we can implement that relationship in Python:

.. activecode:: tiger_inheritance

    class Cat:

        def __init__(self):
            # every Cat comes into this world tired and hungry
            self.tired = True
            self.hungry = True

        def sleep(self):
            self.tired = False
            # a Cat always wakes up hungry
            self.hungry = True

        def eat(self):
            if self.hungry:
                self.hungry = False
            else:
                # eating when already full makes a Cat sleepy
                self.tired = True

        def noise(self):
            # sleepy cats say prrrr, energized cats say meow!
            if self.tired:
                return "prrrr"
            else:
                return "meow!"


    class Tiger(Cat): # notice the (Cat) in parentheses

        def angry(self):
            # a Tiger is angry whenever it is both hungry and tired
            return self.tired and self.hungry

        def noise(self):
            if self.angry():
                # an angry Tiger says GRRRR!
                return "GRRRR!"
            else:
                # a non-angry Tiger behaves like a Cat
                return Cat.noise(self)

    def main():
        hobbes = Tiger()
        print("hobbes says:", hobbes.noise())
        hobbes.sleep()
        print("After sleeping, hobbes says:", hobbes.noise())
        hobbes.eat()
        print("After eating, hobbes still says:", hobbes.noise())
        hobbes.eat()
        print("After eating again, hobbes says:", hobbes.noise())

    if __name__ == "__main__":
        main()

A few key things to notice:

* We define the inheritance relationship by writing ``class Tiger(Cat)``. In general, the syntax for any subclass that inherits from some **superclass** is:

    .. sourcecode:: python

        class Subclass(Superclass):

            # method definitions for Subclass

* Our ``Tiger`` definition is very short. This is because we *only* needed to define the things that distinguish a ``Tiger`` from a ``Cat``. Specifically, we added a new method, ``angry``, and we modified an existing method, ``noise``. That's all. The important point is that we were able to create a ``Tiger`` named ``hobbes`` and command him to eat and sleep, *without* having to write any code in our ``Tiger`` class to define the ``eat``, ``sleep`` or ``__init__`` methods, or the ``tired`` and ``hungry`` attributes. We get to use all those methods and attributes "for free" just by virtue of inheriting from the ``Cat`` class.

* The ``Tiger`` class *overrides* the ``noise`` method. When we invoke ``hobbes.noise()``, we are invoking the ``Tiger.noise`` function. This gives our tiger the opportunity to return something different than a cat would. But notice that if the tiger is not angry, then our ``else`` branch contains this line:

    .. sourcecode:: python

        else:
            return Cat.noise(self)

  That code essentially says: "I'm not angry, so I will just return whatever a Cat would normally return here." In other words, the tiger *defers responsibility* to its cat superclass. You might say the tiger allows its more basic cat instincts to take over.

To recap: inheritance allows you to define new types like ``Tiger`` by **extending** the code from previously defined types like ``Cat``. A subclass like ``Tiger`` inherits all the functionality of its superclass, but can additionally define its own new attributes and methods (such as the ``angry`` method), and can override the implementation of preexisting methods (such as the ``noise`` method).

Another Cat Subclass
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Let's see another cat example: Let's define a house cat to represent a more domesticated pet. A house cat will be just like a normal cat, except that:

* Each house cat has a name.
* A house cat is "satisfied" whenever it is not hungry or tired.
* If a house cat is satisfied, then it is able to speak English! Specifically, it can recite "Hello, my name is ___!". Very domesticated.

.. activecode:: housecat

    class Cat:

        def __init__(self):
            # every Cat comes into this world tired and hungry
            self.tired = True
            self.hungry = True

        def sleep(self):
            self.tired = False
            # a Cat always wakes up hungry
            self.hungry = True

        def eat(self):
            if self.hungry:
                self.hungry = False
            else:
                # eating when already full makes a Cat sleepy
                self.tired = True

        def noise(self):
            # sleepy cats say prrrr, energized cats say meow!
            if self.tired:
                return "prrrr"
            else:
                return "meow!"

    class HouseCat(Cat):

        def __init__(self, name):
            # first, initialize as a normal Cat
            Cat.__init__(self)
            # then set the name attribute
            self.name = name

        def satisfied(self):
            return not self.hungry and not self.tired

        def noise(self):
            if self.satisfied():
                return "Hello, my name is " + self.name + "!"
            else:
                return Cat.noise(self)

    def main():
        garfield = HouseCat("Garfield")
        print("garfield says:", garfield.noise())
        garfield.sleep()
        print("After sleeping, garfield says:", garfield.noise())
        garfield.eat()
        print("After eating, garfield says:", garfield.noise())
        garfield.eat()
        print("After eating again, garfield says:", garfield.noise())

    if __name__ == "__main__":
        main()

This is fairly similar to the ``Tiger`` subclass. The one new thing to notice here is that the ``HouseCat`` class has a new attribute, ``.name``. Notice that we needed to override the ``__init__`` method so that we could set the ``.name`` attribute equal to whatever name argument was passed in.

Inheriting from Someone Else's Class
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

One final important thing to consider is that you will often use inheritance just to customize a preexisting class that someone else created.

For example, you might decide it would be really nice if every ``Turtle`` instance had a method called ``star``, which would draw a star in its current location. You can make that happen!

.. activecode:: turtle_inheritance

    import turtle

    class StarTurtle(turtle.Turtle):

        def star(self, numpoints, radius):
            for i in range(0, numpoints):
                self.forward(radius)
                self.back(radius)
                self.left(360 / numpoints)

    def main():
        wn = turtle.Screen()
        wn.bgcolor("lightgreen")

        tess = StarTurtle()
        tess.color("hotpink")

        # draw a star
        tess.star(7, 60)

        # move somewhere else
        tess.penup()
        tess.forward(30)
        tess.left(45)
        tess.pendown()

        # draw another star
        tess.color("blue")
        tess.star(15, 45)

        # and one more
        tess.color("yellow")
        tess.star(15, 30)

    if __name__ == "__main__":
        main()


As you can see, all we need to do is create a new class that inherits from ``turtle.Turtle``, and then define the new method we wish to see.
