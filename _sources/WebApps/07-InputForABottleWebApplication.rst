Input For A Bottle Web Application 
----------------------------------

In this section, we will design a web application that obtains input from
the user. In the example in this section, the user must encode the input directly
into the URL. In the next section, we'll provide a more user-friendly approach
for obtaining input.

The URL used to interact with a web application can contain input data in addition to the
path. This input data is typically encoded into the URL in the form of a query string.
Here's an example of a URL containing a query string:

    http://www.bing.com/search?q=python&go=Submit

The query string is the portion that comes after the ? symbol::

    q=python&go=Submit

It contains a set of query variables and values, each query variable/value pair separated 
from the others by the & symbol. This example has a query variable named ``q`` whose value is
*python+bottle*, and a variable named ``go`` whose value is *Submit*.

Bottle applications can access query variables using a dictionary named
bottle.request.params (dictionaries are discussed in detail in 
:doc:`../Dictionaries/intro-Dictionaries`). 
When a browser sends a request to a Bottle application that contains
a query string, the data in the query string is placed in the bottle.request.params
dictionary, where it can be retrieved by the application. For example, in the Bing search
URL above, if Bing were a Bottle application, it could access the values in the query string 
like this::

    q = bottle.request.params['q']
    go = bottle.request.params['go']
    
This would retrieve the values 'bottle' and 'Submit' from the query string and store them,
respectively, in ``q`` and ``go``.

Here is an ehanced version of the original bottlehello.py program that gets the user's name
from the query string and uses it to greet the user:

.. sourcecode:: python
   :linenos:

    import bottle
    from datetime import datetime

    @bottle.route('/')
    def hello():
        name = bottle.request.params['name']
        return """
            <html><body>
                <h1>Hello, {0}!</h1>
                The time is {1}.
            </body></html>
            """.format(
                name, str(datetime.now()))

    # Launch the BottlePy dev server 
    bottle.run(host='localhost', debug=True)

To test this example, you would need to enter the following URL into the browser:

    http://localhost:8080/?name=Frank
    
If the name parameter is omitted, the application will crash when it attempts to
retrieve the query parameter from the dictionary, because indexing a dictionary
with a key that is not present in the dictionary is illegal. 
To make the application more robust, we could
change line 6 to use the dictionary ``get()`` method, which allows us
to supply a default value to use in case the user omits the query parameter::

    name = bottle.request.params.get('name', 'World')

