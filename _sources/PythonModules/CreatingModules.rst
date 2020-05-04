.. Copyright (C)  Karl Sickendick
   
.. qnum::
   :prefix: modules-5-
   :start: 1

Creating Modules
----------------

You've seen how to *use* modules like ``random``, ``math``, and ``turtle``, but how would you *create* a module?

Every time you've written a Python script you've created a module!

A Python module is just a Python source code file.  Let's consider the Python file shown below.

*coffee_shop.py*

.. sourcecode:: python

    """
    The coffee shop module contains functions and contains variables
    important to implementing a coffee shop.
    """

    # Set some variables
    shop_name = "Runestone Brew House"
    coffee_sizes = ["small", "medium", "large"]
    coffee_roasts = ["hot chocolate", "light", "medium", "dark", "espresso"]


This is a Python script named ``coffee_shop.py`` that contains three variables: ``shop_name``, ``coffee_sizes``, and ``coffee_roasts``.  The ``shop_name`` is a string, ``coffee_sizes`` is a list containing strings, and ``coffee_roasts`` is also a list containing strings.

.. mchoice:: question4_5_1
   :practice: T
   :answer_a: the code inside a function
   :answer_b: a file containing Python code
   :answer_c: the comments before a function
   :answer_d: a small block of Python code
   :correct: b
   :feedback_a: The code inside a function is called a function body.
   :feedback_b: Python modules are just Python source code files.
   :feedback_c: The comments just before a function are the function documentation.
   :feedback_d: Modules may be small, but there is a more accurate answer.

   A module is another name for:

That's so great!  We've got the basics of a coffee shop.  All you need is some roasted coffee and cups.  You're good to go.

If you try to run that code though, it doesn't do much that's visible to a user...

How can we use the ``coffee_shop`` module?  We can import it and use it in other Python source code files.  Let's consider the Python file shown below.

*coffee_customer.py*

.. sourcecode:: python

    import coffee_shop

    # Output the information we know from the module
    print("Welcome to", coffee_shop.shop_name)
    print("Available sizes:", coffee_shop.coffee_sizes)
    print("Available roasts:", coffee_shop.coffee_roasts)


This is a Python script named ``coffee_customer.py`` that imports our ``coffee_shop`` module, then prints out the information from that module.

.. admonition::  Note

    The module files must be in the same directory on your computer for Python to know how to import them automatically

.. mchoice:: question4_5_2
   :practice: T
   :answer_a: writing a new function or class
   :answer_b: placing an import statement at the top of a file
   :answer_c: placing code in a Python file in the same directory as your other source code
   :answer_d: creating a comment block at the beginning of a file
   :correct: c
   :feedback_a: You may write a function or class inside a module, but this alone does not create one.
   :feedback_b: Import statements permit you to use other modules, but they do not create one.
   :feedback_c: Modules are Python source code files.
   :feedback_d: Modules should include comment blocks at the top, but writing a comment block at the top of a file does not create a new module.

   Create a module by:

We use **dot notation** to grab the ``shop_name``, ``coffee_sizes``, and ``coffee_roasts`` variables from the ``coffee_shop`` module.  Then we print them out as parts of nice messages.

Variables aren't the only thing we can place in modules though...  We can put any valid Python code in them.

Let's improve our coffee shop!

*coffee_shop.py*

.. sourcecode:: python

    """
    The coffee shop module contains functions and contains variables
    important to implementing a coffee shop.
    """

    # Set some variables
    shop_name = "Runestone Brew House"
    coffee_sizes = ["small", "medium", "large"]
    coffee_roasts = ["hot chocolate", "light", "medium", "dark", "espresso"]

    def order_coffee(size, roast):
        """
        Take an order from a user
        :param size: a string containing one of the coffee_sizes
        :param roast: a string containing one of the coffee_roasts
        :return: a message about the coffee order
        """
        return "Here's your {} coffee roasted {}".format(size, roast)


The old file contents are present, but now there's also an ``order_coffee`` function that takes two arguments, ``size`` and ``roast``.

Also - look at all the awesome comments in there!

.. admonition::  Module Comments

    It is important to include header comments in your module that explain what the module does.

.. admonition::  Function Comments

    Functions are the next chapter, but the comments used here demonstrate a common Python documentation style.

Ok - so we've got a function in our module now, let's use it.

*coffee_customer.py*

.. sourcecode:: python

    # Import the module with coffee_shop functionality
    import coffee_shop

    # Output the information we know from the module
    print("Welcome to", coffee_shop.shop_name)
    print("Available sizes:", coffee_shop.coffee_sizes)
    print("Available roasts:", coffee_shop.coffee_roasts)

    # Get some inputs from the user
    order_size = input("What size coffee do you want? ")
    order_roast = input("What roast do you want? ")

    # Send the order to the coffee shop module
    shop_says = coffee_shop.order_coffee(order_size, order_roast)
    # Print out whatever it gave back to us
    print(shop_says)

.. mchoice:: question4_5_3
   :practice: T
   :answer_a: the first variable name in the module
   :answer_b: a comment early in the module
   :answer_c: it's called whatever we name it in the "import" statement
   :answer_d: the filename of the module
   :correct: d
   :feedback_a: This does not determine module name, and not all modules export variables.
   :feedback_b: This does not determine module name, and comments are not mandatory components of modules.
   :feedback_c: The import statement uses the module name to lookup the correct module, and an import statement is not used to create the module.
   :feedback_d: The filename of the module determines the name of the import.

   What determines the name of our import?

We added some lines to our ``coffee_customer`` script...  Now after printing data nicely, ``coffee_customer`` asks the user for a size and a roast.  These are the parameters required by our ``order_coffee`` function over in the ``coffee_shop`` module!

Call the ``order_coffee`` function with **dot notation**, just like retrieving variable values.  The function call is the line that says ``shop_says = coffee_shop.order_coffee(order_size, order_roast)``.  The function returns something, so we save that off in ``shop_says``.  The next line prints out whatever the shop said.

Coffee shops do more than just coffee!  Maybe you want some milk.  We need to add some functionality to our coffee shop.  Check it out below.

*coffee_shop.py*

.. sourcecode:: python

    """
    The coffee shop module contains functions and contains variables
    important to implementing a coffee shop.
    """

    # Set some variables
    shop_name = "Runestone Brew House"
    coffee_sizes = ["small", "medium", "large"]
    coffee_roasts = ["hot chocolate", "light", "medium", "dark", "espresso"]

    def order_coffee(size, roast):
        """
        Take an order from a user
        :param size: a string containing one of the coffee_sizes
        :param roast: a string containing one of the coffee_roasts
        :return: a message about the coffee order
        """
        return "Here's your {} coffee roasted {}".format(size, roast)

    def add_milk_please(fat_content):
        """
        Pretend like we're adding some milk to a coffee
        :param fat_content: a string or integer containing the milkfat content
        :return: a message about having added the milk
        """
        return "I've added the {}% milk".format(fat_content)


The new function is called ``add_milk_please`` and it takes one parameter - the ``fat_content``.  It returns a string explaining what happened.

This is great.  But the function isn't going to do anything by itself.  We have to call it.  Check out the update to our ``coffee_customer`` script below.

*coffee_customer.py*

.. sourcecode:: python

    # Import the module with coffee_shop functionality
    import coffee_shop

    # Output the information we know from the module
    print("Welcome to", coffee_shop.shop_name)
    print("Available sizes:", coffee_shop.coffee_sizes)
    print("Available roasts:", coffee_shop.coffee_roasts)

    # Get some inputs from the user
    order_size = input("What size coffee do you want? ")
    order_roast = input("What roast do you want? ")

    # Send the order to the coffee shop module
    shop_says = coffee_shop.order_coffee(order_size, order_roast)
    # Print out whatever it gave back to us
    print(shop_says)

    # See if the user wants to add milk
    add_milk_response = input("Do you want to add milk (y/n)? ")
    # Convert the response to lowercase, then check for a "yes" answer
    if "y" in add_milk_response.lower():
        milk_fat = input("What percent milk do you want added? ")
        shop_says = coffee_shop.add_milk_please(milk_fat)
        # Print out whatever it gave back to us
        print(shop_says)


That got fancy!  We were just ordering coffee but now the user can choose to add milk!  Selection is in a couple chapters, but if you read that code like english you'll see what's going on.

The call to ``add_milk_please`` happens right in there - it looks just like the other one: ``shop_says = coffee_shop.add_milk_please(milk_fat)``.

Let's wrap this coffee shop visit up.  But - you better leave a tip.  We'll add another function to our coffee shop to enable that.

*coffee_shop.py*

.. sourcecode:: python

    """
    The coffee shop module contains functions and contains variables
    important to implementing a coffee shop.
    """

    # Set some variables
    shop_name = "Runestone Brew House"
    coffee_sizes = ["small", "medium", "large"]
    coffee_roasts = ["hot chocolate", "light", "medium", "dark", "espresso"]

    def order_coffee(size, roast):
        """
        Take an order from a user
        :param size: a string containing one of the coffee_sizes
        :param roast: a string containing one of the coffee_roasts
        :return: a message about the coffee order
        """
        return "Here's your {} coffee roasted {}".format(size, roast)

    def add_milk_please(fat_content):
        """
        Pretend like we're adding some milk to a coffee
        :param fat_content: a string or integer containing the milkfat content
        :return: a message about having added the milk
        """
        return "I've added the {}% milk".format(fat_content)

    def give_tip(tip_amount):
        """
        Take a tip from the user, then be happy about it
        :param tip_amount: the tip amount
        :return: nothing
        """
        print("Thank you so much!  We don't make a ton of money.")

        # Not having a "return" statement causes our function to return None


We added the ``give_tip`` function which takes one parameter, the ``tip_amount``.  We don't actually do anything with that parameter...  But if we were getting fancier with the coffee shop we might add it to the customer's bill, we might print it out, or we might berate the customer for being too cheap...  Here we just go ahead and blurt out a thanks to the user!  Bein' friendly is important.

How do we call this from our ``coffee_customer`` script?

*coffee_customer.py*

.. sourcecode:: python

    # Import the module with coffee_shop functionality
    import coffee_shop

    # Output the information we know from the module
    print("Welcome to", coffee_shop.shop_name)
    print("Available sizes:", coffee_shop.coffee_sizes)
    print("Available roasts:", coffee_shop.coffee_roasts)

    # Get some inputs from the user
    order_size = input("What size coffee do you want? ")
    order_roast = input("What roast do you want? ")

    # Send the order to the coffee shop module
    shop_says = coffee_shop.order_coffee(order_size, order_roast)
    # Print out whatever it gave back to us
    print(shop_says)

    # See if the user wants to add milk
    add_milk_response = input("Do you want to add milk (y/n)? ")
    # Convert the response to lowercase, then check for a "yes" answer
    if "y" in add_milk_response.lower():
        milk_fat = input("What percent milk do you want added? ")
        shop_says = coffee_shop.add_milk_please(milk_fat)
        # Print out whatever it gave back to us
        print(shop_says)

    # They better give a tip...
    print("THAT'S GOOD COFFEE!  Very good.  Your brain is working again.")
    print("You better give a tip.")
    tip_amount = input("Tip amount? ")
    coffee_shop.give_tip(tip_amount)


Our function call is there on the last line.

