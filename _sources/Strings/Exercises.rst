..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell. Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

Exercises
---------

.. container:: full_width

    #.

        .. tabbed:: q1

            .. tab:: Question

                What is the result of each of the following:

                a. 'Python'[1]
                #. "Strings are sequences of characters."[5]
                #. len("wonderful")
                #. 'Mystery'[:4]
                #. 'p' in 'Pineapple'
                #. 'apple' in 'Pineapple'
                #. 'pear' not in 'Pineapple'
                #. 'apple' > 'pineapple'
                #. 'pineapple' < 'Peach'

            .. tab:: Answer

                a. 'Python'[1] = 'y'
                #. 'Strings are sequences of characters.'[5] = 'g'
                #. len('wonderful') = 9
                #. 'Mystery'[:4] = 'Myst'
                #. 'p' in 'Pineapple' = True
                #. 'apple' in 'Pineapple' = True
                #. 'pear' not in 'Pineapple' = True
                #. 'apple' > 'pineapple' = False
                #. 'pineapple' < 'Peach' = False


    #.

        .. tabbed:: q2

            .. tab:: Question

               Write a function that will return the number of digits in an integer.

               .. activecode:: ex_7_10


            .. tab:: Answer

                .. activecode:: q2_answer

                    def find_num_digits(n):
                        n_str = str(n)
                        return len(n_str)

                    def main():
                        print(find_num_digits(50))
                        print(find_num_digits(20000))
                        print(find_num_digits(1))

                    if __name__ == "__main__":
                        main()

    #.

        .. tabbed:: q11

            .. tab:: Question

               Write a function that removes the first occurrence of a string from another string.

               .. activecode:: ex_8_10
                  :nocodelens:

                  from test import testEqual

                  def remove(substr,original_string):
                      # your code here

                  testEqual(remove('an', 'banana'), 'bana')
                  testEqual(remove('cyc', 'bicycle'), 'bile')
                  testEqual(remove('iss', 'Mississippi'), 'Missippi')
                  testEqual(remove('egg', 'bicycle'), 'bicycle')
                  testEqual(remove('oo', 'Yahoohoo'), 'Yahhoo')


            .. tab:: Answer

                .. activecode:: q11_answer
                    :nocodelens:

                    from test import testEqual

                    def remove(substr,original_string):
                        index = original_string.find(substr)
                        if index < 0: # substr doesn't exist in original_string
                            return original_string
                        return_str = original_string[:index] + original_string[index+len(substr):]
                        return return_str

                    testEqual(remove('an', 'banana'), 'bana')
                    testEqual(remove('cyc', 'bicycle'), 'bile')
                    testEqual(remove('iss', 'Mississippi'), 'Missippi')
                    testEqual(remove('egg', 'bicycle'), 'bicycle')


    #. Write a function ``reverse`` that receives a string argument, and returns a reversed version of the string.

       .. activecode:: ex_8_5

          from test import testEqual

          def reverse(text):
              # your code here

          testEqual(reverse("happy"), "yppah")
          testEqual(reverse("Python"), "nohtyP")
          testEqual(reverse(""), "")


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


    #.  Write a function that mirrors its argument. For example, ``mirror('good')`` should return a string holding the value ``gooddoog``. (Hint: Make use of the ``reverse`` function).

        .. activecode:: ex_8_6

            def mirror(text):
                # your code here

            def reverse(text):
                # your code here


            from test import testEqual
            testEqual(mirror('good'), 'gooddoog')
            testEqual(mirror('Python'), 'PythonnohtyP')
            testEqual(mirror(''), '')
            testEqual(mirror('a'), 'aa')


    #. Write a function that implements a substitution cipher. In a substitution cipher one letter is substituted for another to garble the message. For example A -> Q, B -> T, C -> G etc. your function should take two parameters, the message you want to encrypt, and a string that represents the mapping of the 26 letters in the alphabet. Your function should return a string that is the encrypted version of the message.

       .. activecode:: ex_8_17

    #.

        .. tabbed:: q19

            .. tab:: Question

               Write a function that decrypts the message from the previous exercise. It
               should also take two parameters. The encrypted message,
               and the mixed up alphabet. The function should return a string that is
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
                    print(encrypted)

                    decrypted = decrypt(encrypted, cipher)
                    print(decrypted)

    #.

        .. tabbed:: q21

            .. tab:: Question

               Write a function called ``rot13`` that uses the Caesar cipher to encrypt a message. The Caesar cipher works like a substitution cipher but each character is replaced by the character 13 characters to "its right" in the alphabet. So for example the letter "a" becomes the letter "n". If a letter is past the middle of the alphabet then the counting wraps around to the letter "a" again, so "n" becomes "a", "o" becomes "b" and so on.  *Hint:* Whenever you talk about things wrapping around its a good idea to think of modulo arithmetic (using the remainder operator).

               .. activecode:: ex_8_20

                  def rot13(mess):
                      # Your code here

                  def main():
                      print(rot13('abcde'))
                      print(rot13('nopqr'))
                      print(rot13(rot13('since rot thirteen is symmetric you should see this message')))

                  if __name__ == "__main__":
                      main()

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

                    def main():
                        print(rot13('abcde'))
                        print(rot13('nopqr'))
                        print(rot13(rot13('since rot thirteen is symmetric you should see this message')))

                    if __name__ == "__main__":
                        main()

Weekly Graded Assignment
========================

.. container:: full_width

    Write a function ``analyze_text`` that receives a string as input. Your function should count the number of alphabetic characters (a through z, or A through Z) in the text and also keep track of how many are the letter ``'e'`` (upper or lowercase).

    Your function should return an analysis of the text in the form of a string phrased exactly like this:

    "The text contains 240 alphabetic characters, of which 105 (43.75%) are 'e'."

    You will need to make use of the ``isalpha`` function, which can be used like this

    .. code-block:: python

        "a".isalpha() # => evaluates to True
        "3".isalpha() # => evaluates to False
        "&".isalpha() # => False
        " ".isalpha() # => False

        mystr = "Q"
        mystr.isalpha() # => True

    .. activecode:: ex_8_3

        def analyze_text(text):
            # Your code here


        # Don't copy these tests into Vocareum!
        # Note that depending on whether you use str.format or string concatenation
        # your code will pass different tests. As long as your code passes either
        # tests 1-3 OR tests 4-6, it should pass in Vocareum. See below for more details.
        from test import testEqual

        # Tests 1-3: solutions using string concatenation should pass these
        text1 = "Eeeee"
        answer1 = "The text contains 5 alphabetic characters, of which 5 (100.0%) are 'e'."
        testEqual(analyze_text(text1), answer1)

        text2 = "Blueberries are tasteee!"
        answer2 = "The text contains 21 alphabetic characters, of which 7 (33.3333333333%) are 'e'."
        testEqual(analyze_text(text2), answer2)

        text3 = "Wright's book, Gadsby, contains a total of 0 of that most common symbol ;)"
        answer3 = "The text contains 55 alphabetic characters, of which 0 (0.0%) are 'e'."
        testEqual(analyze_text(text3), answer3)

        # Tests 4-6: solutions using str.format should pass these
        text4 = "Eeeee"
        answer4 = "The text contains 5 alphabetic characters, of which 5 (100%) are 'e'."
        testEqual(analyze_text(text4), answer4)

        text5 = "Blueberries are tasteee!"
        answer5 = "The text contains 21 alphabetic characters, of which 7 (33.33333333333333%) are 'e'."
        testEqual(analyze_text(text5), answer5)

        text6 = "Wright's book, Gadsby, contains a total of 0 of that most common symbol ;)"
        answer6 = "The text contains 55 alphabetic characters, of which 0 (0%) are 'e'."
        testEqual(analyze_text(text6), answer6)
