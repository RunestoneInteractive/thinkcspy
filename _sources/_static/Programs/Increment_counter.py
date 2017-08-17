import tkinter as tk
from tkinter import ttk

global my_counter


def create_user_interface(application_window):
    global my_counter

    my_counter = ttk.Label(application_window, text="0")
    my_counter.grid(row=0, column=0)

    increment_button = ttk.Button(application_window, text="Add 1 to counter",
                                 command=increment_counter)
    increment_button.grid(row=1, column=0)

    quit_button = ttk.Button(application_window, text="Quit", command=window.destroy)
    quit_button.grid(row=2, column=0)


def increment_counter():
    global my_counter
    my_counter['text'] = str(int(my_counter['text']) + 1)

# Create the application window
window = tk.Tk()

create_user_interface(window)

# Start the GUI event loop
window.mainloop()
