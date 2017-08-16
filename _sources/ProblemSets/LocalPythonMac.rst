.. _Mac_Setup:

Using Python Locally: macOS
-----------------------------

It's time to get Python running independently on your own computer! This will require some setup along with learning some new things about your computer, such as how to use a command line interface.

If that sounds intimidating, don't worry. While learning to use the command line can seem scary, it's not bad at all if you learn it in steps and practice regularly. Before you know it, you'll find interacting with your computer via the command line super useful and even fun!

Getting Familiar with the Command Line
======================================

Before we install Python on our computers, let's get familiar with the command line.

Install Git
*************

If you haven't already done this during **Unit 0: Coding Prep**, then the first step is to ensure Git is installed on your Mac. To do so, open the terminal (see instructions below), and type ``git --version``. If you see a git version listed, e.g., "git 2.5.4", then you are good to go. Otherwise, you will get an alert asking you if you would like to install the developer tools. Click "Install". Note that we will not be using Git until Unit 2, but while we're doing set up now, it's a good idea to add this, too.

Opening Terminal
****************

`Use Spotlight`_ to open the Terminal application, or find Terminal in the ``/Applications`` folder and open it from there.

Once Terminal is open, right-click on its icon in your dock and select *Options > Keep in Dock*. We'll be using Terminal quite a bit, and this will keep it at short reach.

Practice the command line
*************************

We're going to use Appendix A from the online book *Learn Python the Hard Way* (don't worry, the book is more approachable than it sounds). This section is called `Command Line Crash Course`_ and it contains 15 short tutorials teaching you the basics of how to interact with your computer's file and operating systems using a "terminal" or "shell".

Installing and Running Python Locally
=====================================

By "locally" we mean that you are now about to install and run Python directly on your computer, as opposed to through some web-based or remote tool. **Please follow all of the install instructions below exactly**.

Install a code editor
*********************

First, we'll install Visual Studio Code, a general-purpose code editor. There are lots of great code editors out there, but we'll use Visual Studio Code in large part due to its nice Python extension, which includes a very useful debugger.

To install Visual Studio Code (VS Code):

1. Go to `Visual Studio Code`_ and select the Mac platform to download. If the "Download for Mac" message is not displayed on the green button, select the Stable macOS package using the dropdown arrow).
#. Double click the downloaded file and follow the installer instructions (the default selections are fine; if there is an option to set the PATH environment variable, select it).
#. Launch VS Code.
#. Open the Command Palette (⇧⌘P) in VS Code and type 'shell command' to find the ``Shell Command: Install 'code' command in PATH command``. Select this and then quit VS Code (we'll relaunch it from the command line in the next step).
#. Close and reopen your Terminal window for the changes to take effect. In the new Terminal window, run ``code`` to open VS Code. If you run into any problems with this, check out this article_ on VS Code setup.
#. Select *View > Extensions* within VS Code. In the Extensions menu that will appear, you'll see an option named "Python" with a subheader of "Linting, Debugging(multi-threaded...)". Click the green "Install" button for this extension. If prompted to restart VS Code, do so.
#. Add Visual Studio Code to your dock, just as you did with Terminal above.

Install Miniconda Python 3
****************************

Now let's install Python 3 using Miniconda. **Before continuing, ensure that the shell you are using for terminal is bash**. You can see what kind of shell you are using by looking at the title bar of your terminal. It should say *bash*. If you are using any other shell (if the terminal title bar says *zsh* or *tcsh*, for example) the following instructions will not work properly. Visit this link_ for guidance on changing your shell. Then follow these steps:

1. Go to Conda_ and download the Miniconda "Python 3.6" Mac 64-bit (bash installer) (Note: the version may have changed since the time of this writing; just make sure to select the latest version of Python beginning with "3."). If you click on the download link and it asks whether you want to open or save it, select "save".
#. In the Terminal application, change to your ``Downloads/`` directory: ``cd ~/Downloads``.
#. Run the installer script by using the following command: ``bash Miniconda3-latest-MacOSX-x86_64.sh``. Accept any default options and **make sure to answer yes** when you are asked: "Do you wish the installer to prepend the Miniconda3 install location to PATH in your /Users/YourUserName/.bash_profile ? [yes|no]". Note that if you view the license agreement, you'll have to page through using it using the spacebar.
#. **Close and reopen your Terminal window for the changes to take effect**.
#. Verify that Python 3 installed correctly by opening Terminal and typing ``python -V``. It should print to the screen the version of Python you just installed.

Make Your First Local Python Program
====================================

Follow these steps to get your first Python program up and running on your computer:

1. Make a directory to store your Python code on your computer using Terminal.

   a) Make sure you are in your home directory with the command ``cd ~``
   #) Make a new directory named "lc101": ``mkdir lc101``
   #) Move into that directory: ``cd lc101``

#. Enter your Python code and run it.

   a. Create a file in that directory named "hello.py": ``touch hello.py``
   #. Open your "lc101" directory in the Visual Studio Code editor from Terminal with the command: ``code .``
   #. In your code editor, open ``hello.py`` and type ``print("Hello, World!")``. Then save the file (you can use the shortcut ``ctrl + S``).
   #. Back in Terminal, run the program by typing ``python hello.py``. You should see "Hello, World!" appear (without the quotes).

**Congratulations on running your first python program locally!!**

Now you're ready work on the second part of `Initials`_.

.. _Command Line Crash Course: http://learnpythonthehardway.org/book/appendixa.html
.. _Visual Studio Code: https://code.visualstudio.com
.. _Conda: https://conda.io/miniconda.html
.. _Use Spotlight: https://support.apple.com/en-us/HT204014
.. _Initials: Initials.html#part-2-initials
.. _article: https://code.visualstudio.com/docs/setup/mac
.. _link: http://osxdaily.com/2012/03/21/change-shell-mac-os-x
