..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

Exercises
---------

#. In Robert McCloskey's
   book *Make Way for Ducklings*, the names of the ducklings are Jack, Kack, Lack,
   Mack, Nack, Ouack, Pack, and Quack.  This loop tries to output these names in order.

   .. sourcecode:: python

        prefixes = "JKLMNOPQ"
        suffix = "ack"

	for p in prefixes:
	    print(p + suffix)


   Of course, that's not quite right because Ouack and Quack are misspelled.
   Can you fix it?

    .. activecode:: ex_8_2


#. Print out a neatly formatted multiplication table, up to 12 x 12.

   .. activecode:: ex_8_4


#. Write a function ``reverse`` that receives a string argument, and returns a reversed version of the string.

   .. activecode:: ex_8_5

      from test import testEqual

      def reverse(text):
          # your code here

      testEqual(reverse("happy"), "yppah")
      testEqual(reverse("Python"), "nohtyP")
      testEqual(reverse(""), "")

#. (GRADED) Write a function that receives a string argument, and returns a "mirrored" version of the string. (Hint: Make use of the `reverse` function that you wrote in the previous exercise)

   .. activecode:: ex_8_6

      def mirror(text):
          # your code here


      def reverse(text):
          # your code here


      # Don't copy these tests into Vocareum
      from test import testEqual
      testEqual(mirror('good'), 'gooddoog')
      testEqual(mirror('Python'), 'PythonnohtyP')
      testEqual(mirror(''), '')
      testEqual(mirror('a'), 'aa')


#. Write a function that recognizes palindromes. (Hint: use your ``reverse`` function to make this easy!).

   .. activecode:: ex_8_8

      from test import testEqual

      def is_palindrome(text):
          # your code here

      testEqual(is_palindrome('abba'), True)
      testEqual(is_palindrome('abab'), False)
      testEqual(is_palindrome('straw warts'), True)
      testEqual(is_palindrome('a'), True)
      testEqual(is_palindrome(''), True)

#.

    .. tabbed:: q11

        .. tab:: Question

           Write a function that removes the first occurrence of a string from another string.

           .. activecode:: ex_8_10
              :nocodelens:

              from test import testEqual

              def remove(substr,theStr):
                  # your code here

              testEqual(remove('an', 'banana'), 'bana')
              testEqual(remove('cyc', 'bicycle'), 'bile')
              testEqual(remove('iss', 'Mississippi'), 'Missippi')
              testEqual(remove('egg', 'bicycle'), 'bicycle')



        .. tab:: Answer

            .. activecode:: q11_answer
                :nocodelens:

                from test import testEqual

                def remove(substr,theStr):
                    index = theStr.find(substr)
                    if index < 0: # substr doesn't exist in theStr
                        return theStr
                    return_str = theStr[:index] + theStr[index+len(substr):]
                    return return_str

                testEqual(remove('an', 'banana'), 'bana')
                testEqual(remove('cyc', 'bicycle'), 'bile')
                testEqual(remove('iss', 'Mississippi'), 'Missippi')
                testEqual(remove('egg', 'bicycle'), 'bicycle')


#. Write a function that removes all occurrences of a string from another string.

   .. activecode:: ex_8_11

      from test import testEqual

      def remove_all(substr,theStr):
          # your code here

      testEqual(remove_all('an', 'banana'), 'ba')
      testEqual(remove_all('cyc', 'bicycle'), 'bile')
      testEqual(remove_all('iss', 'Mississippi'), 'Mippi')
      testEqual(remove_all('eggs', 'bicycle'), 'bicycle')

#. Write a function that implements a substitution cipher.  In a substitution
   cipher one letter is substituted for another to garble the message.  For
   example A -> Q, B -> T, C -> G etc.  your function should take two
   parameters, the message you want to encrypt, and a string that represents
   the mapping of the 26 letters in the alphabet.  Your function should
   return a string that is the encrypted version of the message.

   .. activecode:: ex_8_17

#.

    .. tabbed:: q19

        .. tab:: Question

           Write a function that decrypts the message from the previous exercise.  It
           should also take two parameters.  The encrypted message,
           and the mixed up alphabet.  The function should return a string that is
           the same as the original unencrypted message.

           .. activecode:: ex_8_18

        .. tab:: Answer

            .. activecode:: q19_answer

                def encrypt(message, cipher):
                    alphabet = "abcdefghijklmnopqrstuvwxyz"
                    encrypted = ''
                    for char in message:
                        if char == ' ':
                            encrypted = encrypted + ' '
                        else:
                            pos = alphabet.index(char)
                            encrypted = encrypted + cipher[pos]
                    return encrypted

                def decrypt(encrypted, cipher):
                    alphabet = "abcdefghijklmnopqrstuvwxyz"
                    decrypted = ''
                    for char in encrypted:
                        if char == ' ':
                            decrypted = decrypted + ' '
                        else:
                            pos = cipher.index(char)
                            decrypted = decrypted + alphabet[pos]
                    return decrypted


                cipher = "badcfehgjilknmporqtsvuxwzy"

                encrypted = encrypt('hello world', cipher)
                print encrypted

                decrypted = decrypt(encrypted, cipher)
                print(decrypted)



#. Write a function called  ``removeDups`` that takes a string and creates a new string by only adding those characters that are not already present.  In other words,
   there will never be a duplicate letter added to the new string.

   .. activecode:: ex_8_19

      def removeDups(astring):
          # your code here


      print(removeDups("mississippi"))   #should print misp


#.

    .. tabbed:: q21

        .. tab:: Question

           Write a function called ``rot13`` that uses the Caesar cipher to encrypt a message.
           The Caesar cipher works like a substitution cipher but each character is replaced
           by the character 13 characters to 'its right' in the alphabet.  So for example
           the letter a becomes the letter n.  If a letter is past the middle of the alphabet
           then the counting wraps around to the letter a again, so n becomes a, o becomes b
           and so on.  *Hint:* Whenever you talk about things wrapping around its a good idea
           to think of modulo arithmetic.

           .. activecode:: ex_8_20

              def rot13(mess):
                  # Your code here

              print(rot13('abcde'))
              print(rot13('nopqr'))
              print(rot13(rot13('Since rot13 is symmetric you should see this message')))

        .. tab:: Answer

            .. activecode:: q21_answer

                def rot13(mess):
                    alphabet = 'abcdefghijklmnopqrstuvwxyz'
                    encrypted = ''
                    for char in mess:
                        if char == ' ':
                            encrypted = encrypted + ' '
                        else:
                            rotated_index = alphabet.index(char) + 13
                            if rotated_index < 26:
                                encrypted = encrypted + alphabet[rotated_index]
                            else:
                                encrypted = encrypted + alphabet[rotated_index % 26]
                    return encrypted

                print(rot13('abcde'))
                print(rot13('nopqr'))
                print(rot13(rot13('since rot thirteen is symmetric you should see this message')))
