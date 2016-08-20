Web Applications With a User Interface
--------------------------------------

This section builds on the material in the preceding sections to present a web 
application that prompts the user to provide input, performs some processing,
and displays results. 

.. sourcecode:: python
   :linenos:

    import bottle
    from datetime import datetime

    @bottle.route('/')
    def home():
        return """
            <html><body>
                <h2>Welcome to the Greeter</h2>
                <form action="/greet">
                    What's your name? <input type='text' name='username'><br>
                    What's your favorite food? <input type='text' name='favfood'><br>
                    <input type='submit' value='Continue'>
                </form>
            </body></html>
            """

    @bottle.route('/greet')
    def greet():
        username = bottle.request.params.get('username', 'World')
        favfood = bottle.request.params['favfood']
        if favfood == '':
            msg = 'You did not tell me your favorite food.'
        else:
            msg = 'I like ' + favfood + ', too.'
            
        return """
            <html><body>
                <h2>Hello, {0}!</h2>
                {1}
            </body></html>
            """.format(username, msg)

    # Launch the BottlePy dev server 
    bottle.run(host='localhost',debug=True)
    
The program is organized as follows:

* Lines 4-15 define the ``home()`` function, which defines the starting page for
  the application. It displays a form that prompts for the user's
  name and favorite food.
  
* The form's action attribute on Line 9 specifies that the form submission will be directed
  to the path **/greet**. Processing for this path is defined by the ``greet()`` 
  function on lines 17-31.
  
* Lines 19-26 extract the information submitted on the form and compute a 
  response message.
  
  