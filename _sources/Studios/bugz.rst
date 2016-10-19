Bugz
====

*Studios are in-class activities to give you hands-on practice with new concepts. The first half is the Walkthrough, an instructor-led programming problem. The second half is for you to work on individually or in pairs in class.*

*These problems are not graded, and you are not obligated to finish them. Get as far as you can while in class, and use them as an opportunity to play with and solidify new concepts.*

Walkthrough
-----------

.. activecode:: bugz_walkthrough

    # TODO

Studio
------

Today's studio, rather than explicitly pertaining to Strings, is more of an overall review. You will get some practice debugging a variety of common mistakes that new coders make.

Below are a handful of code snippets that are broken. See if you can fix them!

#. The function below, ``print_every(i, nums)`` receives a list of numbers ``nums``, along with an integer ``i``. The function is supposed to print every ``ith`` element from the list. But it's not working!

    .. activecode:: bugz_studio_1

        # in a list of numbers, print every ith number
        def print_every(i, nums):
            counter = 0
            for i in nums:
                if counter % i == 0:
                    print(i)
                counter += 1

        print_every(3, [4, 7, 2, 8, 1, 0, 9, 6])
        # should print 4, then print 8, then print 9


#. You are the bouncer outside the door of a *seniors only* bar. People must be 70 or older, otherwise they are not allowed in. When a group of friends arrives, your job is to determine whether to accept or reject the group. The function below, ``check_group``, is supposed to return a boolean indicating whether or not the group is allowed inside. But it's not working!

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


#. When registering for an online account, users must create a password. For your service, you enforce the following rules on passwords: The password must contain at least one non-alphabetical character, and may not contain any spaces. The function below is supposed to check the validity of passwords. But! It's! Not! Working!

    .. activecode:: bugz_studio_3

        def password_checker(password):
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

        pw2 = "puzzlesr4fun"
        print(password_checker(pw2))
        # should print True
