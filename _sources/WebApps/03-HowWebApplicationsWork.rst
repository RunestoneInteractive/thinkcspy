How Web Applications Work
-------------------------

Most of the time, when your browser requests a file from a web server, the server simply transmits the
contents of the file back to the browser. But sometimes, the "file" your browser requests isn't really a file
at all.

Try typing the following URL into your browser:

   https://google.com/search?q=Microsoft

You'll get back a page of search results about Microsoft from the Google search engine (at least, you
will unless Google has changed how it performs searches since this chapter was written). How did
this happen?

Well, your browser did what it always does when you type in a URL:

1. The browser opened a network connection to the web server named google.com

2. The browser requested the "file" named /search?q=Microsoft from the web server

3. What the web server did at this point is different than the example above. 
   There's no "file" named "/search?q=Microsoft" on the Google web server. 
   Instead, the web server ran a web application to
   search through Google's massive database of websites for pages that mention "Microsoft". The web
   application dynamically generated an HTML document containing the search results, and the web
   server transmitted that document back to the browser.
   
4. The browser rendered the HTML document

As far as your browser is concerned, there is no difference between requesting a "static" HTML file
from a web server, and requesting a dynamically generated HTML file. It's up to the web server to examine
the request submitted by the web browser to determine whether it should serve up a regular document,
or run a web application to generate a response.

Anytime you're browsing the web, and you notice that the URL of the page you're viewing has a question
mark (?), you can be fairly certain that the page was generated "on the fly" by a web application on
a web server. By the way, the portion of the URL that comes after the ? is called the "query string," and
contains input for the web application. Try changing the **query string** by substituting "Firefox" for "Microsoft"
to see what I mean.

In summary, a (server-side) web application is a program that is run by a web server to produce output
in response to an incoming request from a web browser.

