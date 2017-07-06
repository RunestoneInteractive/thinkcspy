..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell. Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. index:: fraction, class design

Fractions
---------

We have all had to work with fractions when we were younger. Perhaps you continue to use them regularly for work or a hobby (like cooking, which uses fractions for ingredients). In any case, fractions are something that we are familiar with. In this chapter we will develop a class to represent a fraction including some of the most common methods that we would like fractions to be able to do.

A fraction is most commonly thought of as two integers, one over the other, with a line separating them. The number on the top is called the numerator and the number on the bottom is called the denominator. Sometimes people use a slash for the line and sometimes they use a straight line. The fact is that it really does not matter so long as you know which is the numerator and which is the denominator.

To design our class, we simply need to use the analysis above to realize that the *state* of a fraction object can be completely described by representing two integers. We can begin by implementing the ``Fraction`` class and the ``__init__`` method which will allow the user to provide a numerator and a denominator for the fraction being created.

.. activecode:: fractions_init

    class Fraction:

        def __init__(self, top, bottom):

            self.num = top        # the numerator is on top
            self.den = bottom     # the denominator is on the bottom

        def __repr__(self):
            return str(self.num) + "/" + str(self.den)

        def get_numerator(self):
            return self.num

        def get_denominator(self):
            return self.den

    def main():
        myfraction = Fraction(3, 4)
        print(myfraction)

        print(myfraction.get_numerator())
        print(myfraction.get_denominator())

    if __name__ == "__main__":
        main()

Note that the ``__repr__`` method provides a "typical" looking fraction using a slash between the numerator and denominator. The figure below shows the state of ``myfraction``. We have also added a few simple accessor methods, ``get_numerator`` and ``get_denominator``, that can return the state values for the fraction.

.. image:: Figures/fractionpic1.png
