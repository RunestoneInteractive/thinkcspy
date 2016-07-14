Studio: Bugz
============

Today's studio, rather than explicitly pertaining to Strings, is more of an overall review. You will get some practice debugging a variety of common mistakes that new coders make.

Below are a handful of code snippets that are broken. See if you can fix them!

0. The function below, ``print_every(i, nums)`` receives a list of numbers ``nums``, along with an integer ``i``. The function is supposed to print every ``ith`` element from the list. But it's not working!

  .. activecode:: studio9_0

      # in a list of numbers, print every ith number
      def print_every(i, nums):
          counter = 0;
          for i in nums:
              if counter % i == 0:
                  print(i)

      print_every(3, [4, 7, 2, 8, 1, 0, 9, 6])
      # should print 4, then print 8, then print 9


1. You are the bouncer outside the door of a *seniors only* bar. People must be 70 or older, otherwise they are not allowed in. When a group of friends arrives, your job is to determine whether to accept or reject the group. The function below, ``check_group``, is supposed to return a boolean indicating whether or not the group is allowed inside. But it's not working!

  .. activecode:: studio9_1

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
      testEqual(False, check_group(group))


2. When registering for an online account, users must create a password. For your service, you enforce the following rules on passwords: The password must contain at least one non-alphabetical character, and may not contain any spaces. The function below is supposed to check the validity of passwords. But! It's! Not! Working!

  .. activecode:: studio9_2

      def password_checker(password):
          contains_non_alpha = False
          
          for (char in password):
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
