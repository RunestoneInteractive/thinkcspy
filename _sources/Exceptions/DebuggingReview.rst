.. index:: debugging, stack overflow, errors

Debugging Review
--------------------

Now that we have looked at exceptions and reviewed some problem solving techniques, let's do a quick recap of how to approach errors in your code. First let's review the summary from the Debugging chapter, and then we'll add two additional tips.

  * Make sure you take the time to understand error messages. They can help you a lot.
  * Print statements and error messages are your friends. Use them to help you uncover what is really happening in your code.
  * Work backward from the error. Many times an error message is caused by something that has happened before it in the program. Always remember that Python evaluates a program top to bottom.

There are two more things we'll add to this advice:

1. Review the list of common bugs below and double check your code to see if any of them could be causing your error.
2. When you are absolutely stuck and befuddled, the Internet is there to help. Judiciously using an Internet search and `Stack Overflow <https://stackoverflow.com/tour>`_ will help you when you feel hopelessly lost and confused.

Common Bugs
=================

Here is a list of common errors that Python programmers encounter:

* Using the assignment operator ``=`` when you mean to use the equality operator ``==``.
* Parentheses aren't matched (i.e., you are missing an opening or a closing one somewhere in your code).
* Indentation is incorrect. This could be a code block not being indented properly, or if you mix tabs and spaces you can trigger an error.
* Typos in your variable or function names.
* Quote issues: mixing single and double quotes, forgetting a quote, using a quote around a boolean value, doing something like this ``text = 'Howdy y'all'`` instead of this ``text = "Howdy y'all"``.
* Using a variable, or object, before you have initialized it.
* Naming local variables and global variables the same and then trying to use both in the same scope.

Stack Overflow
===================

While you will learn the most and develop fastest by striving to solve problems and debug your code on your own (without the help of the Internet --- excepting review of the Python documentation), there are times when you will get totally stuck. Those are the times that using an Internet search and/or Stack Overflow can help you make a breakthrough.

One appropriate time to use an Internet search is when you get an exception or error message that you can't decipher. If you copy and paste the beginning part of that message (without any file names that are unique to you) into a search engine, there's a good chance the search results will reveal a page where someone else who had a similar message posted about it. It is also very likely that others commented on their post and that some sort of solution was found. This solution may not match your exact problem, but it will usually give you some idea of where you need to be digging. It's also very likely that the page which pops up at the top of your search results is Stack Overflow.

Stack Overflow is part of `Stack Exchange <https://stackexchange.com/>`_. Whereas Stack Exchange is a forum for questions and answers on many different topics, Stack Overflow is dedicated to questions and answers about programming. You can create an account for free so that you can both ask questions yourself and answer others's questions. Before asking a question yourself, though, you should search the site and *make sure that the question has not been asked and answered before*. If you omit this step, you will probably get some snarky comments from other users. This is the Internet, after all, and not everyone behaves kindly.

Still, it is a very useful resource for programmers. To get started take the `tour <https://stackoverflow.com/tour>`_ and also review the `help section <https://stackoverflow.com/help>`_ so you can learn more about site etiquette and conventions.
