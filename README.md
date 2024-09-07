# How to Think Like a Computer Scientist: Mines Edition
This is a fork of the original [thinkcspy](https://github.com/runestoneinteractive/thinkcspy) made for Colorado School of Mines CSCI128:

> This project began with the original How to Think Like a Computer Scientist text by Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris Meyers, and Dario Mitchell. Since 2011 Brad Miller, David Ranum, Barbara Ericson, Mark Guzdial, and many others have built on the text making it interactive.

> Programming is not a "spectator sport". It is something you do, something you participate in. It would make sense, then, that the book you use to learn programming should allow you to be active. That is our goal.

 > This book is meant to provide you with an interactive experience as you learn to program in Python. You can read the text, watch videos, and write and execute Python code. In addition to simply executing code, there is a unique feature called 'codelens' that allows you to control the flow of execution in order to gain a better understanding of how the program works.

*Note: RST is deprecated, and the new pretext sources are in the pretext folder, but we will keep the _sources (old RST folder) directory until we are 100% sure that the book has been converted correctly and as thoroughly as possible.*

## Development Environment
Create and activate a virtual environment and install dependencies:
`python -m venv venv`
`source venv/bin/activate`
`pip install -r requirements.txt`

Then build the textbook: `pretext build web`
..and finally, run the web server: `pretext view`
