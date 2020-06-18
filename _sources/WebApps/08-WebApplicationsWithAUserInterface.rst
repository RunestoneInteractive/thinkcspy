Web Applications With a User Interface
--------------------------------------

This section builds on the material in the preceding sections to present a web 
application that prompts the user to provide input, performs some processing,
and displays results. 

.. sourcecode:: python
   :linenos:

    from flask import Flask, request

    app = Flask(__name__)

    @app.route('/')
    def home():
        return HOME_HTML

    HOME_HTML = """
        <html><body>
            <h2>Welcome to the Greeter</h2>
            <form action="/greet">
                What's your name? <input type='text' name='username'><br>
                What's your favorite food? <input type='text' name='favfood'><br>
                <input type='submit' value='Continue'>
            </form>
        </body></html>"""

    @app.route('/greet')
    def greet():
        username = request.args.get('username', '')
        favfood = request.args.get('favfood', '')
        if username == '':
            username = 'World'
        if favfood == '':
            msg = 'You did not tell me your favorite food.'
        else:
            msg = 'I like ' + favfood + ', too.'
            
        return GREET_HTML.format(username, msg)

    GREET_HTML = """
        <html><body>
            <h2>Hello, {0}!</h2>
            {1}
        </body></html>
        """

    if __name__ == "__main__":
        # Launch the Flask dev server 
        app.run(host="localhost", debug=True)

    
The program is organized as follows:

* Lines 6-8 define the ``home()`` function, which defines the starting page for
  the application. It displays a form that prompts for the user's
  name and favorite food.
  
* The form's ``action`` attribute on Line 13 specifies that the form submission will be directed
  to the path **/greet**. Processing for this path is defined by the ``greet()`` 
  function on lines 20-31.
  
* Lines 22-29 extract the information submitted on the form and compute a 
  response message.
  
