#!/usr/bin/env python

"""
Implement the basic layout of a Whack-a-mole game.
"""
# =====================================================================
import tkinter as tk

# Metadata
__author__ = "Dr Wayne Brown"
__email__ = "Wayne.Brown@usafa.edu"
__date__ = "Nov 16, 2016"


class WhackAMole:

    def __init__(self):
        self.window = tk.Tk()
        self.mole_frame, self.status_frame = self.create_frames()

    def create_frames(self):
        mole_frame = tk.Frame(self.window, bg='red', width=300, height=300)
        mole_frame.grid(row=1, column=1)

        status_frame = tk.Frame(self.window, bg='green', width=100, height=300)
        status_frame.grid(row=1, column=2)

        return mole_frame, status_frame

# Create the GUI program
program = WhackAMole()

# Start the GUI event loop
program.window.mainloop()
