.. _Windows_Setup:

Using Python Locally: Windows
-----------------------------

It's time to get Python running independently on your own computer! This will require some setup along with learning some new things about your computer, such as how to use a command line interface.

If that sounds intimidating, don't worry. While learning to use the command line can seem scary, it's not bad at all if you learn it in steps and practice regularly. Before you know it, you'll find interacting with your computer via the command line super useful and even fun!

Getting Familiar with the Command Line
======================================

Before we install Python on our computers, let's get familiar with the command line.

Install Git for Windows
***********************

If you haven't already done this during **Unit 0: Coding Prep**, then the first step is to install Git for Windows so that you can use Git Bash as your command line interface. We want to use this instead of Powershell, because Git Bash uses UNIX commands which are used on Linux and macOS command lines as well. Additionally, we'll use Git extensively later in the course.

Download `Git for Windows`_. On all the install modal screens, just choose all the default options. Once you have downloaded it, you can open Git Bash to use the shell.

Practice the command line
*************************

We're going to use Appendix A from the online book *Learn Python the Hard Way* (don't worry, the book is more approachable than it sounds). This section is called `Command Line Crash Course`_ and it contains 15 short tutorials teaching you the basics of how to interact with your computer's file and operating systems using a "terminal" or "shell". **Do not follow the instructions for Windows**. Follow the instructions for Linux/OSX instead, since Git Bash uses UNIX commands. Do all 15 lessons.

Installing and Running Python Locally
=====================================

By "locally" we mean that you are now about to install and run Python directly on your computer, as opposed to through some web-based or remote tool. **Please follow all of the instructions below exactly**.

Install a code editor
*********************

First, we'll install Visual Studio Code, a general-purpose code editor. There are lots of great code editors out there, but we'll use Visual Studio Code in large part due to its nice Python extension, which includes a very useful debugger.

To install Visual Studio Code:

1. Go to `Visual Studio Code`_ and select the Windows platform to download (it should automatically feature *Download for Windows* and you can click that green button to download, otherwise select "installer" next to Windows after clicking the green dropdown arrow).
#. Double click the downloaded file and follow the installer instructions (the default selections are fine--just make sure that the box with the option to add this to your PATH is checked).
#. Open Visual Studio Code and click "View", then "Extensions". In the Extensions menu that will appear, you'll see an option named "Python" with a subheader of "Linting, Debugging(multi-threaded...)". Click the green "Install" button for this extension.
#. Close and reopen Visual Studio Code for the changes to take effect.

Install Miniconda Python 3
**************************

Now let's install Python 3 using Miniconda. Follow these steps:

1. Go to Conda_ and download the Miniconda "Python 3.6" Windows 64-bit installer (Note: the version may have changed since the time of this writing; just make sure to select the latest version of Python beginning with "3.").
#. Open the installer for Miniconda and go through the installation process. During this process, make sure that you select the following:

   1. On the *Install for* screen select "All Users" (*not* "Just Me").
   #. On the *Advanced Options* screen select "Add Anaconda to my PATH environment variable" and "Register Anaconda as my default Python 3.6"

#. Now, **close and reopen** Git Bash for the changes to take effect.
#. Verify that Python 3 installed correctly by typing ``python -V``. It should print to the screen the version of Python you just installed.
#. Enter the following commands into Git Bash:

   1. ``cd ~`` and press Enter.
   #. ``touch .bashrc`` and press Enter.
   #. ``start .bashrc`` and press Enter.

   The ``.bashrc`` file will open in a text editor. Enter this line into the file exactly as it appears here: ``alias python='winpty python.exe'`` then save and close the file.
#. Back on the command line, enter ``source .bashrc`` and press Enter. You may see a message about *.bashrc* and *bash_profile*; that's all good.
#. Note that if you have any issues with the above, it is sometimes helpful to run Git Bash as an administrator. To do so, right click on the desktop shortcut for Git Bash and select "Run as Administrator".

Make Your First Local Python Program
====================================

Follow these steps to get your first Python program up and running on your computer:

1. Make a directory to store your Python code on your computer using Git Bash.

   a) Make sure you are in your home directory with the command ``cd ~``
   #) Make a new directory named "lc101": ``mkdir lc101``
   #) Move into that directory: ``cd lc101``

#. Enter your Python code and run it.

   a. Create a file in that directory named "hello.py": ``touch hello.py``
   #. Open your "lc101" directory in the Visual Studio Code editor from Git Bash with the command: ``code .``
   #. In your code editor, open ``hello.py`` and type ``print("Hello, World!")``. Then save the file (you can use the shortcut ``ctrl + S``).  If you see an error message at the top of the editor related to Pylint, you can select "Dismiss" in the message.
   #. Back in Git Bash, run the program by typing ``python hello.py``. You should see "Hello, World!" appear (without the quotes).

**Congratulations on running your first python program locally!!**

Now you're ready work on the second part of `Initials`_.

.. _Git for Windows: https://git-for-windows.github.io
.. _Command Line Crash Course: http://learnpythonthehardway.org/book/appendixa.html
.. _Visual Studio Code: https://code.visualstudio.com
.. _Conda: https://conda.io/miniconda.html
.. _Initials: Initials.html#part-2-initials
