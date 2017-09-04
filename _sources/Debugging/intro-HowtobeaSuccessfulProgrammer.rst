..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. index:: problem solving strategy

.. _learn-solve:

How to be a Successful Programmer
==================================

This section might have been placed earlier, 
but from reading all the way to here, 
you should realize that you will have a *lot* of data and concepts to deal with.

The manner in which you deal with all the data and ideas is very important 
for effective learning.
It might be rather different than what you needed if you were in a situation 
where *rote* recall is the main important thing.

Different learning styles mean different things are useful to different people.
Consider what is mentioned here and try out some of the approaches.

The idea of a course based on this book is *not* to regurgitate the book, but to learn to solve problems
(generally involving producing a computer program).  
In this highly connected and wired world
you have access to all sorts of data.  The data is not an end in itself, the question is
*doing* the right things *with* the tools out there to *solve a new creative problem*.

In this book there is a lot of data tied into syntax and library function names and ....  
It can seem overwhelming.  It need not be. Take a breath.  

First basic language syntax:  When learning any new language, there is a lot to take in.  
We introduce Python in chunks.  For a while there will always be the new current syntax topic coming.  
You do NOT need to memorize *everything* immediately!  

- Some things that you use rarely, you may never memorize, like,
  "Is ``exec`` a keyword?"  
  At *some* point that might be useful.
  Can you find it?  It happens to be in :ref:`variables-and-heywords`.  
  It is also in online Python documentation at https://docs.python.org/3/
  that you can search directly, or via Google.
- Some things you will use all the time, but of course they start off as new and maybe strange.
  Knowing where to go to check is still useful but not sufficient. For much-used material
  that you do not find yourself absorbing immediately, 
  consider writing down a summary of the current topic.  
  Both thinking of a summary and writing help reinforce things and get you to remember faster.  
  Also, if you have the current things of interest summarized in one place, they are easy to look
  up! 
- If you need some syntax to solve a simple early problem, 
  first try to remember the syntax as you apply it, then check.  With frequently
  used material and with this sort of repetition, 
  most everyone will remember most everything shortly.  If there are a few things
  that just do not stick, keep them in your list.  Then go on to new material.  The list of
  what you need to check on will keep changing as you get more experience and get to more topics.
  If you keep some of the old lists, you will be amazed how much stuff that you sweated over,
  is later ho-hum or automatic.
- In the earliest exercises
  the general steps that you need should be pretty apparent, 
  and you can just concentrate on
  translating simple ideas into Python syntax
  (mostly from the material most recently introduced).
  In this case the focus is mostly on syntax.

Memorizing syntax is not going to directly get you to solve real problems.  In any domain:
programming, construction, organizing political action, ..., you need to analyze the problem
and figure out a sequence of steps, knowing what *powers and resources you have*.  
  
For example with political action:
If you know demonstrations are possible in front of City Hall, you can make a high-level
plan to have one, but then you have to attend to details:  Do you need city permission?  
Who do you call? ... You do not have to have all that in your head when coming up with the
idea of the demonstration, but you better know how to find the information allowing you
to follow through to make it happen.

With programming, syntax details are like the details above: not the first thing to think of,
and maybe not things that you have memorized.  What *is* important to break down a problem
and plan a solution, is to know the basic *capacities* you have in programming.  As you get 
into larger projects and have more experience, "basic capacities" will be bigger and bigger ideas.  
For now, as beginners, based on the sections of the book so far, 
it is important to know:

- You can get information from a user and return information via keyboard and screen.
- You can remember, recall, update, and use information using variables.
- You can deal directly with various kinds of data: numbers and strings at this point.
- There are basic operations you can do with the data (arithmetic, concatenating string,
  converting between data types).
- At a slightly higher level, you might already have the idea of basic recurring patterns,
  like solving a straightforward problem with **input-processing-output**.
- You will see shortly that you have more tools:  decision, repetition, more built-in
  ways to deal with data (like more string operations shortly), creating your own data types....

.. index:: pseudo-code

You can start by writing your plan down, indicating main ideas.  
People often use a combination of prose and Python 
(or whatever programming language you are using).  
The combination is called *pseudo-code*.
If you are having a lot of trouble still with syntax, and worrying about that distracting
you from getting the main idea sequence, 
then do not be afraid to start with mostly prose in a meaningful sequence, and later refine it.
A logical sequence is one of the most important things to get clear!

At a slightly more detailed level, *after* thinking of overall plans:

- There are multiple kinds of number types.  What is appropriate for your use? 
  (For instance ``float`` computations are not good if you want exact integer results.)
- There are various ways of formatting and presenting data to output. What shall you use? 
- ....

*Finally*, you actually need to translate specific instructions into Python (or whatever language).  
Of course if you remember the syntax, then this level of step is pretty automatic.  
Even if you do *not* remember, you have something very specific to look up!  If you are 
keeping track of your sources of detailed information, this is hopefully only one further
step.

Contrast this last-step translation with the earlier creative organizational process:
If you do not have *in your head* an idea of the basic tools available, 
how are you going to plan?
How are you going to even know how to start looking something up?  Read the entire book again?

This means that when you finish the introduction of a new idea in the language syntax, 
think of a pithy way
to remember the main idea of the new capacity you should have.  
Again, writing this down helps, too. 

Revise your description after doing more examples, 
which may give you a much better idea of the new power you have.  For example,
lots of student can feed back that ``%`` gives you a remainder.  
When getting to the :ref:`simple-python-data-exercises` at the end of 
the chapter on simple Python data, 
some students still have no clue what to do to solve the problem involving 
numbering days of the week 0-6.  
Hopefully they have a better appreciation of a power available in Python after working through that exercise.

So far, basic ideas for planning a solution has been discussed, and you can see that you do not
need to think of everything at once or have everything equally prominent in your brain.

Also, when you are coding, you do not need to to have all the details of syntax in your head,
even for the *one* instruction that you are dealing with at the moment.  You want to have
the main idea, and you want to get this idea written down, but once it is written down, you can make
multiple passes, examining and modifying what you have.  

For example, when prompting the user to enter a number, it is very easy to remember the
``input`` statement and prompt, but beginnners can easily forget the explic conversion needed 
from a string to a number. 
You can get the main ideas down 
in Python even missing the step for the explicit type conversion needed.  
Then you *could* wait for the interpreter to bomb out on every place that this need is missed, 
and maybe have the interpreter misinterpret further parts, and give bogus error messages! 
(More on dealing with errors using the interpreter in the rest of this chapter.) 

*More effective* in this case is having
a list of things to concentrate on in later rounds of manual checking.  
For example, scanning though your approximate program,
and check that if you use call the ``input`` function, you make the final type be a number
if that is your intention.  
Maybe you also sometimes miss whether the number should be a ``float`` or an ``int``.
You can go through a large program very 
quickly and efficiently check specifically for these two things.  
Then you have a little less to obsess about when first writing
-- and then later these considerations will come automatically enough 
that you do not need to be stressed out or reserve an extra step at all.

This list of things-to-check-separately should come from experience.  
Keep track of the errors you make.  Some people even keep an error log.
What errors keep occurring?
Make entries in things-to-check-separately,
so you will make scans checking for the specific things 
about details that you frequently slip up on.

This things-to-check-separately list, too, will evolve.  Revise it occasionally.  
You can be pretty sure that after a while you will have learned to catch these type conversions
with ``input`` on your first pass,  
and you can take the separate round of ``input`` checking off your list....

The next part is actually coding your program.  The later sections of this chapter deal with that part.

**What to do** *after* **you finish an exercise is important, too!**  The natural thing psychologically,
particularly if you had a struggle, is to think, "Whew, outta here!!!!"

On something that came automatically or flowed smoothly, that is not a big deal - 
you will probably get it just as fast the next time. If you had a hard time and only eventually
got to success, you may be doing yourself a *big* disservice with "Whew, outta here!!!"

We have already mentioned how not everything is equally important, and some things are more
important to keep in your head than others.  The same idea applies to all the steps in solving
a possibly long problem.  Some parts were easy, or at least fairly automatic; 
some were hard; there may have been many steps.
If all of that goes into your brain in one continuous stream of stuff that you 
remember at the same level, then you are going to leave important nuggets mixed in
with an awful lot of unimportant 
and basically useless or automatic data.  Then it is all likely fade into oblivion, 
or be next to impossible to cycle through when looking to recall and apply the real nuggets.  
Why do the problem anyway if you are just going to bury important information further
down in your brain?  

What is important?  The most obvious thing you will need at a higher level of recall is what
*just messed you up*, what you missed until doing this problem:  After finishing the
actual problem, *actively* follow up and ask yourself:

- What did I get in the end that I was missing initially? What was the connection I made?
- Does this example fit in to some larger idea/abstraction/generalization in a way that
  I did not see before?
- How am I going to look at this so I can make a similar connection
  in a similar (or maybe only partly similar) problem?
- Is there a kernel here that I can think of as a new tool in my bag of tricks?
  
It is hard to put in this pause for reflection! 
However your answers to these questions are the most important things to take away from your
recent hard work.  
The extra consideration puts them more in
the "priority" part of your brain, so you can really learn from your effort.  When you need 
the important ideas 
next, you do not need to play through all the details of 
the stuff you did to solve the exact earlier problem.

For example, if you had trouble with the exercise mentioned above about days of the week,
hopefully you ended up concentrating on a takeaway something like: 
"I can deal with things that are cyclic."  
(Then, surprise! Several of the other exercises in that set get a lot easier.)

Keep coming back to the processes in this section:  
It is really important as you have more and more to juggle.


Debugging
~~~~~~~~~~~~~~~~

One of the most important skills you need to aquire to complete this book successfully is the ability to debug your programs. Debugging might be the most under-appreciated, and under-taught, skill in introductory computer science. For that reason we are introducing a series of “debugging interludes.” Debugging is a skill that you need to master over time, and some of the tips and tricks are specific to different aspects of Python programming. So look for additional debugging interludes throughout the rest of this book.
