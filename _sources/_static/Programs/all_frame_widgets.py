import tkinter as tk
from tkinter import ttk
from tkinter import filedialog

class Frame_examples_program():
    def __init__(self):
        self.window = tk.Tk()
        self.window.title("tk Grouping Examples")
        self.create_widgets()

    def create_buttons(self, parent, a, b, c):
        button1 = ttk.Button(parent, text="do task " + a)
        button1.grid(row=1, column=1)
        button2 = ttk.Button(parent, text="do task " + b)
        button2.grid(row=2, column=1)
        button3 = ttk.Button(parent, text="do task " + c)
        button3.grid(row=3, column=1)

        return (button1, button2, button3)

    def create_widgets(self):
        # Create some room around all the internal frames
        self.window['padx'] = 5
        self.window['pady'] = 5

        # - - - - - - - - - - - - - - - - - - - - -
        # Frame
        frame_label = ttk.Label(self.window, text="Frame")
        frame_label.grid(row=1, column=1, sticky=tk.W, pady=3)

        frame1 = ttk.Frame(self.window, relief=tk.RIDGE)
        frame1.grid(row=2, column=1, sticky=tk.E + tk.W + tk.N + tk.S, padx=30, pady=4)
        self.create_buttons(frame1, "A", "B", "C")

        # - - - - - - - - - - - - - - - - - - - - -
        # LabelFrame
        labeled_frame_label = ttk.Label(self.window, text="LabelFrame")
        labeled_frame_label.grid(row=3, column=1, sticky=tk.W, pady=3)

        frame2 = ttk.LabelFrame(self.window, text="Example label", relief=tk.RIDGE)
        frame2.grid(row=4, column=1, sticky=tk.E + tk.W + tk.N + tk.S, padx=30, pady=4)
        self.create_buttons(frame2, "D", "E", "F")

        # - - - - - - - - - - - - - - - - - - - - -
        # PanedWindow
        paned_window_label = ttk.Label(self.window, text="PanedWindow")
        paned_window_label.grid(row=1, column=2, sticky=tk.W)

        frame3 = tk.PanedWindow(self.window, orient=tk.HORIZONTAL, bd=1,
                                 sashwidth=2, sashpad=0, sashrelief=tk.RAISED,
                                 showhandle=True)
        frame3.grid(row=2, column=2, sticky=tk.E + tk.W, padx=30, pady=4)

        button1 = ttk.Button(frame3, text="do task G")
        frame3.add(button1)
        button2 = ttk.Button(frame3, text="do task H")
        frame3.add(button2)
        button3 = ttk.Button(frame3, text="do task I")
        frame3.add(button3)

        frame3.sash_place(0, 30, 0)

        # - - - - - - - - - - - - - - - - - - - - -
        # Notebook
        notebook_label = ttk.Label(self.window, text="Notebook")
        notebook_label.grid(row=3, column=2, sticky=tk.W, pady=3)

        frame4 = ttk.Notebook(self.window)
        frame4.grid(row=4, column=2, sticky=tk.E + tk.W + tk.N + tk.S, padx=30, pady=4)

        tab1 = tk.Frame(frame4)
        tab2 = tk.Frame(frame4)
        tab3 = tk.Frame(frame4)

        frame4.add(tab1, text="Tab One", compound=tk.TOP)
        frame4.add(tab2, text="Tab Two", compound=tk.TOP)
        frame4.add(tab3, text="Tab Three", compound=tk.TOP)

        self.create_buttons(tab1, "J", "K", "L")
        self.create_buttons(tab2, "M", "N", "O")
        self.create_buttons(tab3, "P", "Q", "R")

        # - - - - - - - - - - - - - - - - - - - - -
        # Quit button in the lower right corner
        quit_button = ttk.Button(self.window, text="Quit", command=self.window.destroy)
        quit_button.grid(row=1, column=3)

# Create the entire GUI program
program = Frame_examples_program()

# Start the GUI event loop
program.window.mainloop()
