More About Flask
-----------------

When you executed the flaskhello.py program in the previous section and used a web
browser to access it with the url http://localhost:5000/, in addition to seeing a
"Hello, world!" message in the browser, you should also have observed a log message like 
the following in the console::

    127.0.0.1 - - [21/Apr/2016 08:02:28] "GET / HTTP/1.1" 200 -
    
Every time the Flask server receives a request from a browser, it writes a log message to the
console. The message contains information such as the IP address of the computer that sent the request
(127.0.0.1 is a special address indicating the request came from the browser on the same
computer that the Flask server is running on);
the date and time of the request; the path of the incoming request ("/" in this case); and the status
of the result (here, 200 indicates the request was successfully processed).

The Flask server continues running until you press Ctrl-C to stop it. At that point, if you
try to send a request to the application from the browser, the browser will display an
error message indicating that it cannot contact the server. Go ahead and try this, so you can
recognize what the error message looks like in your particular browser.
    
Recall that every URL has at least three components: the protocol, server, and the path. In our
case the URL http://localhost:5000/ has the server name *localhost*, the path */*, and 
an additional component: the port number, *8080*. Let's discuss some details about each of these.

Server name 
    When you use the name *localhost* in a URL, the browser attempts to connect to
    a server program running on your computer. This is the usual scenario when you are developing
    a web application: the browser and the server application are both running on the same computer.
    Later, when you deploy the application to be hosted on an actual server, you will use the name
    of the server in the URL instead of the name *localhost*.

Port number
    Each server application running on
    a computer is assigned a distinct port number so that clients can connect to it. Port numbers
    range from 0 to 65,535. Web servers generally are assigned port number 80, and when the URL
    does not contain a port number, the web browser attempts to connect to a web server listening
    on port 80. But the default port number for Flask applications is 5000, so the URL must
    include that port number. You can specify a different port number for your Flask application
    in the line that launches the Flask server like this::

        app.run(host="localhost", port=5001, debug=True)
    
    Here, the Flask server binds to port 5001, and you would need to use that port number
    instead of 5000 in the URL in the browser.

Path
    When the Flask receives an incoming request, it examines the path and uses it to determine 
    which function in your program should be executed to handle the request and generate a response.
    A Flask application can contain one or more of these request handler functions, which are
    decorated by a line immediately preceding the function that looks like this::

        @app.route('/')

    The path in the quotes is matched to the path of the incoming request from the browser.
    If the incoming path from the browser does not match any of the handler function paths
    defined by ``@app.route()`` decorators,
    an error occurs. For example, try entering the following URL into your browser when the
    flaskhello.py program in the last section is running:
    
        http://localhost:5000/blah
        
    You will see an error message appear in the browser, and the log message that appears
    in the console will have the number 404 after the path, indicating that the path
    did not match, as shown below::
    
        127.0.0.1 - - [21/Apr/2016 08:02:51] "GET /blah HTTP/1.1" 404 -

Here's another version of the flaskhello.py program that has two different
pages. The first page displays a "Hello world" message and invites the user to
click a link to view the time. When the user clicks the link, the time appears.

.. sourcecode:: python
   :linenos:
   
    from flask import Flask
    from datetime import datetime

    app = Flask(__name__)

    @app.route('/')
    def hello():
        return """
            <html><body>
                <h1>Hello, world!</h1>
                Click <a href="/time">here</a> for the time.
            </body></html>
            """

    @app.route('/time')
    def time():
        return """
            <html><body>
                The time is {0}.
            </body></html>
            """.format(str(datetime.now()))

    # Launch the FlaskPy dev server 
    app.run(host="localhost", debug=True)

Here's how it works:

1. To begin, the user enters the URL http://localhost:5000, and the browser sends
   the request to the application. The Flask server matches that path "/" to the 
   hello() function, invokes the function and returns the response to the browser.
   
2. The user clicks the link, which triggers the browser to send a request with
   the URL http://localhost:5000/time to the Flask server. The server matches the
   path "/time" to the time() function, invokes the function and returns a response
   containing the time to the browser.
   
Note that the user does not have to click the link in order to display the time. For
example, the user could enter the URL http://localhost:8080/time directly into the
browser to bypass the greeting page and get directly to the page showing the time.


The format() method
~~~~~~~~~~~~~~~~~~~

The example above used the format() method to build an HTML string. The format()
method in the ``str`` class is designed to reduce the clutter required to build
complicated strings that include data from program variables.

To use format(), you create a string containing placeholder markers like {0} and
{1}:

    msg = "A {0} ate my {1}."

Then, you invoke the format() method on the string, and provide parameters that
supply the values to be substituted in place of the placeholder markers. Here is
a basic example:

.. sourcecode:: python

    msg = "A {0} ate my {1}."
    word1 = "dog"
    word2 = "homework"
    print(msg.format(word1, word2))

The value "dog" is substituted for the {0}, and "homework" is substituted for
{1}. The numbers in the placeholders refer to the positions of the parameters in
the call to format.

You can use triple-quoted strings with format(), as shown in the example web
application above. format() can also display floating-point numbers to a given
precision, format date/time values, and do many other useful formatting tasks.
For more examples of how to use format(), see the `Python documentation
<https://docs.python.org/3/library/string.html#formatexamples>`_, or 
`this helpful tutorial <https://www.digitalocean.com/community/tutorials/how-to-use-string-formatters-in-python-3>`_.

