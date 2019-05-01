Composition vs. Inheritance
---------------------------

Now you have seen two ways for a class to reuse code in another class. So,
is one better than the other? When do you use inheritance, and when is 
composition the better choice?

Although the subject of this chapter is inheritance, the truth is that 
composition is usually a better choice than inheritance to reuse code.
Perhaps 95% of cases where you are debating about choosing inheritance or
composition, you should choose composition. It's hard to go wrong with
composition, but you can get into all kinds of trouble if you go with
inheritance and inheritance is not an appropriate choice. 

So, it's easier to address the question of which technique to use by
defining when inheritance is an appropriate choice.
Inheritance is appropriate when the proposed child class (the one reusing
the functionality in its parent) represents a *specialization* of its parent.
Class A is a specialization of Class B if class A represents a specific type of 
class B. This is generally the case if you can fill in the following sentence
with the names of the proposed child and parent classes: 

**(child class) is a type of (parent class).**

Let's try some examples. Using the LabeledPoint example from the previous
section: "``LabeledPoint`` is a type of ``Point``." Since a 
LabeledPoint is a specific type of Point--a Point that has a label--that 
sentence makes sense. LabeledPoint is a specialization of Point, and 
inheritance is an appropriate choice.

Now, suppose you wanted to define a class that represents a rectangle. 
Like a Point, a Rectangle would need to keep track of an x and y location
to determine its position, and might also have a width and a height.
You're thinking about defining Rectangle to inherit from Point, so that it
reuses all of Point's functionality (like knowing its position and calculating its
distance from origin), and adding just the two new instance variables it
needs for its width and height. From a pure code reuse standpoint, 
inheritance seems plausible. But wait--let's apply the "is-a" linguistic test.
Filling in the blanks in the sentence template above, we get: "Rectangle
is a type of Point." Most people would feel there is something wrong with
that statement. A rectangle is *not* a more specific type of a point.
A rectangle *contains* points and *consists of* points, but is not itself
a point. Thus, it fails the linguistic test; composition is the better
choice here.

So what happens if you decide to ignore the linguistic test and go ahead 
and make Rectangle inherit from Point? In some cases, you won't run into
trouble right away. Often, the difficulties don't start to crop up until
later, when you decide to add more methods to Point (the parent) that 
aren't appropriate for Rectangle (the child). This leads to a program
that is confusing to understand and contains bugs that occur when
methods intended for Point are invoked on Rectangle instances by 
mistake. Also, since inheritance is the strongest form of relationship
between classes, changes to code in a parent class have a stronger
likelihood of breaking code in its children than would tend to occur
if composition were used.

Inheritance is a powerful feature and, when used appropriately, a 
terrific way to reuse code. But, like most power tools, it can cut
you up pretty badly if you don't know what you are doing. 
Use it with caution and respect.


