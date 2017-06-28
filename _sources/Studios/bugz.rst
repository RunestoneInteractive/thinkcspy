Bugz
====

*Studios are in-class activities to give you hands-on practice with new concepts. The first half is the Walkthrough, an instructor-led programming problem. The second half is for you to work on individually or in pairs in class.*

*These problems are not graded, and you are not obligated to finish them. Get as far as you can while in class, and use them as an opportunity to play with and solidify new concepts.*

Walkthrough
-----------

This is LaunchScrabble, a unique version of Scrabble! This function takes a list of words from a LaunchScrabble game and calculates the player's score. All words count as one point, but words that begin with 'q' are 10 points!

But since 'q' words are worth so many points, we want to make sure our players aren't cheating and making up words that start with 'q'. So for every word that begins with 'q', the program checks to make sure the following letter is 'u'. If we find an exception, for instance "qrie", negate all their points and give that cheater an overall score of 0!

The only problem is, the code we have so far doesn't work.

.. activecode:: bugz_walkthrough

    def launch_scrabble(words):
        points = 0
        for word in words:
            points += 1     # equivalent to points = points + 1
            if (word[0] == "q" and word[1] == "u"):
                points += 10
            else:
                return 0
        return points

    test_words_1 = ['dog']
    print('test_words_1 score:', launch_scrabble(test_words_1))

    test_words_2 = ['quiet']
    print('test_words_2 score:', launch_scrabble(test_words_2))

**Problems:**

1. All words that do not begin with 'q' will automatically return 0
2. q words add 11 to the total points

There are a couple ways to fix this (for instance, you could use nested conditionals or boolean logic to deal with the 'q' words), but one possible solution is below.

.. activecode:: bugz_walkthrough_solution

    def launch_scrabble(words):
        points = 0
        for word in words:
            if (word[0] == "q"):
                if (word[1] == "u"):
                    points += 10
                else:
                    return 0
            else:
                points += 1
        return points

    test_words_1 = ['dog']
    print('test_words_1 score:', launch_scrabble(test_words_1))

    test_words_2 = ['quiet']
    print('test_words_2 score:', launch_scrabble(test_words_2))

Studio
------

Today's studio, rather than explicitly pertaining to strings, is more of an overall review. You will get some practice debugging a variety of common mistakes that new coders make.

Below are a handful of code snippets that are broken. See if you can fix them!

**Printing the ith Element**

The function below, ``print_every(i, nums)`` receives a list of numbers ``nums``, along with an integer ``i``. The function is supposed to print every ``ith`` element from the list. But it's not working!

.. activecode:: bugz_studio_1

    # in a list of numbers, print every ith number
    def print_every(i, nums):
    counter = 0
    for i in nums:
        if counter % i == 0:
            print(i)
        counter += 1

    print_every(3, [4, 7, 2, 10, 1, 0, 9, 6])
    # should print 4, then print 10, then print 9


**Seniors Bar**

You are the bouncer outside the door of a *seniors only* bar. People must be 70 or older, otherwise they are not allowed in. When a group of friends arrives, your job is to determine whether to accept or reject the group. The function below, ``check_group``, is supposed to return a boolean indicating whether or not the group is allowed inside. But it's not working!

.. activecode:: bugz_studio_2

    # return True if every member of the group is at least 70, otherwise return False
    def check_group(ages):
    for age in ages:
        if age < 70:
            return False
        else:
            return True


    from test import testEqual

    # this group should not be allowed inside the bar
    group = [78, 71, 25, 84]
    testEqual(check_group(group), False)

    # this group should also not be allowed inside the bar
    group2 = [ 2, 99 ]
    testEqual(check_group(group2), False)

    # this loner is allowed
    group3 = [ 99 ]
    testEqual(check_group(group3), True)


**Password Check**

When registering for an online account, users must create a password. For your service, you enforce the following rules on passwords: The password must contain at least one non-alphabetical character, and may not contain any spaces. The function below is supposed to check the validity of passwords. But! It's! Not! Working!

.. activecode:: bugz_studio_3

    def password_checker(password):
    """
    A valid password has no spaces,
    and at least one non-alphabetical character
    """
    contains_non_alpha = False

    for char in password:
        if char == " ":
            return False
        else not char.isalpha():
            contains_non_alpha = True

    return contains_non_alpha

    pw1 = "i <3 makonnen"
    print(password_checker(pw1))
    # should print False

    pw2 = "puzzlesareforfun"
    print(password_checker(pw2))
    # should print False

    pw2 = "puzzlesr4fun"
    print(password_checker(pw2))
    # should print True

Bonus Missions
~~~~~~~~~~~~~~

* Write a function called ``stretch`` that takes in a string and doubles each of the letters contained in the string. For example, ``stretch("chihuahua")`` would return "cchhiihhuuaahhuuaa".

* Add an optional parameter to your ``stretch`` function that indicates how many times each letter should be duplicated. The default value for this optional parameter should be 2. For example, ``stretch("chihuahua", 4)`` would return "cccchhhhiiiihhhhuuuuaaaahhhhuuuuaaaa" but ``stretch("chihuahua")`` should still return "cchhiihhuuaahhuuaa", as before.

* Add an additional optional parameter to your ``stretch`` function that contains a list of characters. This version of ``stretch`` will only duplicate letters that are contained in the list. The default value for this new parameter should be the list of lowercase characters. For example, ``stretch("chihuahua", 3, "ha")`` would return "chhhihhhuaaahhhuaaa".

You can read about optional parameters, also called optional arguments, in this `Python Tutorial section <https://docs.python.org/3/tutorial/controlflow.html#more-on-defining-functions>`_ .

.. activecode:: bugz_studio_stretch
