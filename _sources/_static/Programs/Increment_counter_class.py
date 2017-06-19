import tkinter as tk
from tkinter import ttk

class Counter_program():
    def __init__(self):
        self.window = tk.Tk()
        self.create_widgets()

    def create_widgets(self):
        self.my_counter = ttk.Label(self.window, text="0")
        self.my_counter.grid(row=0, column=0)

        increment_button = ttk.Button(self.window, text="Add 1 to counter",
                                     command=self.increment_counter)
        increment_button.grid(row=1, column=0)

        quit_button = ttk.Button(self.window, text="Quit", command=self.window.destroy)
        quit_button.grid(row=2, column=0)

    def increment_counter(self):
        self.my_counter['text'] = str(int(self.my_counter['text']) + 1)

# Create the entire GUI program
program = Counter_program()

# Start the GUI event loop
program.window.mainloop()
