Input For A Flask Web Application 
----------------------------------

In this section, we will design a web application that obtains input from
the user. In the example in this section, the user must encode the input directly
into the URL. In the next section, we'll provide a more user-friendly approach
for obtaining input.

The URL used to interact with a web application can contain input data in addition to the
path. This input data is typically encoded into the URL in the form of a query string.
Here's an example of a URL containing a query string:

    http://www.bing.com/search?q=python+flask&go=Submit

The query string is the portion that comes after the ? symbol::

    q=python+flask&go=Submit

It contains a set of query variables and values, each query variable/value pair separated 
from the others by the & symbol. This example has a query variable named ``q`` whose value is
*python+flask*, and a variable named ``go`` whose value is *Submit*.

Flask applications can access query variables using a dictionary named
``request.args`` (dictionaries are discussed in detail in 
:ref:`dictionaries`). 
When a browser sends a request to a Flask application that contains
a query string, the data in the query string is placed in the ``request.args``
dictionary, where it can be retrieved by the application. For example, in the Bing search
URL above, if Bing were a Flask application, it could access the values in the query string 
like this::

    q = request.args['q']
    go = request.args['go']
    
This would retrieve the values 'python flask' and 'Submit' from the query string and store them,
respectively, in ``q`` and ``go``.

Here is an enhanced version of the original flaskhello.py program that gets the user's name
from the query string and uses it to greet the user:

.. sourcecode:: python
   :linenos:

    from flask import Flask, request
    from datetime import datetime

    app = Flask(__name__)

    @app.route('/')
    def hello():
        name = request.args['name']
        return HELLO_HTML.format(
                name, str(datetime.now()))

    HELLO_HTML = """
        <html><body>
            <h1>Hello, {0}!</h1>
            The time is {1}.
        </body></html>"""

    if __name__ == "__main__":
        # Launch the Flask dev server 
        app.run(host="localhost", debug=True)

To test this example, you would need to enter the following URL into the browser:

    http://localhost:5000/?name=Frank
    
If the name parameter is omitted, the application will crash when it attempts to
retrieve the query parameter from the dictionary, because indexing a dictionary
with a key that is not present in the dictionary is illegal. 
To make the application more robust, we could change line 8 to 
check to see if the name parameter was submitted::

    if 'name' in request.args:
        name = request.args['name']
    else:
        name = 'World'

The test ``'name' in request.args`` is True if 'name'
was present in the query parameters, and False if not.

A shorter way to handle a missing query parameter is to use the
dictionary ``get()`` method, which allows us to supply a default value to use in
case the user omits the query parameter. The if statement above could be
rewritten with a single line of code::

    name = request.args.get('name', 'World')

This line does the same check as the if statement. If 'name' is present
in the query parameters, its value is stored in ``name``. Otherwise, the value
'World' is stored in ``name`` if no name parameter was supplied.

