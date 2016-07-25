Studio: A Midsummer Night's Studio
===================

The goal of this studio is to find the top 20 words in Shakespeare's play *Coriolanus*. The ``get_text`` function is written for you - it loads the text of the entire play into a big string. Your job is to write the ``main`` function. You'll probably want to keep track of words with a dictionary. 

This code will not work inside the book, so you will need to run it locally on your computer. Create a new directory called ``studio12/``, and within that, create a new file called ``coriolanus.py`` and open it on Atom (or another text editor):

::

    $ mkdir studio12
    $ cd studio12
    $ atom coriolanus.py

Then, copy and paste the starter-code below into your python file. 

If you run your file...

::

    $ python3 coriolanus.py
    
...you should see the entire play printed out on your console.

Have fun!

.. sourcecode:: python

    #!/usr/bin/env python
    # -*- coding: utf-8 -*-
    
    from urllib import request
    
    
    def get_text():
        """This retrieves text from Project Gutenburg
        """
        url = "http://www.gutenberg.org/cache/epub/1535/pg1535.txt"
        head = 103
        foot = 7
        body = ''
        with request.urlopen(url) as url_fh:
            body = url_fh.read().decode('UTF-8')
        body = body.split('\n', head)[-1]
        body = body.rsplit('\n', foot)[0]
        
        return body
    
    
    def main():
        """This is what runs when you call `python word_count.py`.
        """
        text = get_text()
        # Your work goes here
        # To see the text, you can print it out like this:
        print(text)
    
    
    # leave this code as it is 
    if __name__ == "__main__":
        main()
