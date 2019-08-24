Web Applications With a User Interface
--------------------------------------

This section builds on the material in the preceding sections to present a web 
application that prompts the user to provide input, performs some processing,
and displays results. 

.. sourcecode:: python
   :linenos:

    from flask import Flask, request
    from datetime import datetime

    app = Flask(__name__)

    @app.route('/')
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

    @app.route('/greet')
    def greet():
        username = request.args.get('username', 'World')
        favfood = request.args['favfood']
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

    # Launch the FlaskPy dev server 
    app.run(host="localhost", debug=True)
    
The program is organized as follows:

* Lines 6-17 define the ``home()`` function, which defines the starting page for
  the application. It displays a form that prompts for the user's
  name and favorite food.
  
* The form's action attribute on Line 9 specifies that the form submission will be directed
  to the path **/greet**. Processing for this path is defined by the ``greet()`` 
  function on lines 19-33.
  
* Lines 21-26 extract the information submitted on the form and compute a 
  response message.
  
  