..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell.  Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts.  A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: file-1-
   :start: 1

Fetching Something From The Web
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The Python libraries are pretty messy in places. But here is a very simple example that copies 
the contents at some web URL to a local file. We will need to get a few things right before this works:

* The resource we’re trying to fetch must exist! Check this using a browser.
* We’ll need permission to write to the destination filename, and the file will be created in the “current directory” - i.e. the same folder that the Python program is saved in.
* If we are behind a proxy server that requires authentication, (as some students are), this may require some more special handling to work around our proxy. Use a local resource for the purpose of this demonstration!

We will try to retrieve the content of the HTML of this page as in the following code.


.. activecode:: ch11_1

    import urllib.request

    def retrieve_page(url):
        """ Retrieve the contents of a web page.
        """
        my_socket = urllib.request.urlopen(url)
        dta = my_socket.read()
        return dta

    the_text = retrieve_page("https://runestone.academy/runestone/books/published/thinkcspy/Files/FetchingSomethingFromTheWeb.html")
    print(the_text)




