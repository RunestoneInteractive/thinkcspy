import tkinter as tk
from tkinter import ttk
from tkinter import filedialog


class Counter_program():
    def __init__(self):
        self.window = tk.Tk()
        self.window.title("tk Examples")
        self.create_widgets()

        self.radio_variable = tk.StringVar()
        self.combobox_value = tk.StringVar()

    def create_widgets(self):
        # Create some room around all the internal frames
        self.window['padx'] = 5
        self.window['pady'] = 5

        # - - - - - - - - - - - - - - - - - - - - -
        # The Commands frame
        # cmd_frame = ttk.LabelFrame(self.window, text="Commands", padx=5, pady=5, relief=tk.RIDGE)
        cmd_frame = ttk.LabelFrame(self.window, text="Commands", relief=tk.RIDGE)
        cmd_frame.grid(row=1, column=1, sticky=tk.E + tk.W + tk.N + tk.S)

        button_label = ttk.Label(cmd_frame, text="tk.Button")
        button_label.grid(row=1, column=1, sticky=tk.W, pady=3)

        button_label = ttk.Label(cmd_frame, text="ttk.Button")
        button_label.grid(row=2, column=1, sticky=tk.W, pady=3)

        menu_label = ttk.Label(cmd_frame, text="Menu (see examples above)")
        menu_label.grid(row=3, column=1, columnspan=2, sticky=tk.W, pady=3)

        my_button = tk.Button(cmd_frame, text="do something")
        my_button.grid(row=1, column=2)

        my_button = ttk.Button(cmd_frame, text="do something")
        my_button.grid(row=2, column=2)

        # - - - - - - - - - - - - - - - - - - - - -
        # The Data entry frame
        entry_frame = ttk.LabelFrame(self.window, text="Data Entry",
                                     relief=tk.RIDGE)
        entry_frame.grid(row=2, column=1, sticky=tk.E + tk.W + tk.N + tk.S)

        entry_label = ttk.Label(entry_frame, text="ttk.Entry")
        entry_label.grid(row=1, column=1, sticky=tk.W + tk.N)

        text_label = ttk.Label(entry_frame, text="tk.Text")
        text_label.grid(row=2, column=1, sticky=tk.W + tk.N)

        scale_label = ttk.Label(entry_frame, text="tk.Scale")
        scale_label.grid(row=4, column=1, sticky=tk.W)

        scale_label2 = ttk.Label(entry_frame, text="ttk.Scale")
        scale_label2.grid(row=5, column=1, sticky=tk.W)

        my_entry = ttk.Entry(entry_frame, width=40)
        my_entry.grid(row=1, column=2, sticky=tk.W, pady=3)
        my_entry.insert(tk.END, "Test")

        my_text = tk.Text(entry_frame, height=5, width=30)
        my_text.grid(row=2, column=2)
        my_text.insert(tk.END, "An example of multi-line\ninput")

        my_spinbox = tk.Spinbox(entry_frame, from_=0, to=10, width=5, justify=tk.RIGHT)
        my_spinbox.grid(row=3, column=2, sticky=tk.W, pady=3)

        my_scale = tk.Scale(entry_frame, from_=0, to=100, orient=tk.HORIZONTAL,
                            width=8, length=200)
        my_scale.grid(row=4, column=2, sticky=tk.W)

        my_scale = ttk.Scale(entry_frame, from_=0, to=100, orient=tk.HORIZONTAL,
                             length=200)

        my_scale.grid(row=5, column=2, sticky=tk.W)

    # - - - - - - - - - - - - - - - - - - - - -
        # The Choices frame
        switch_frame = ttk.LabelFrame(self.window, text="Choices", relief=tk.RIDGE, padding=6)
        switch_frame.grid(row=2, column=2, padx=6, sticky=tk.E + tk.W + tk.N + tk.S)

        checkbox_label = ttk.Label(switch_frame, text="ttk.Checkbutton")
        checkbox_label.grid(row=1, rowspan=3, column=1, sticky=tk.W + tk.N)

        entry_label = ttk.Label(switch_frame, text="ttk.Radiobutton")
        entry_label.grid(row=4, rowspan=3, column=1, sticky=tk.W + tk.N)

        checkbutton1 = ttk.Checkbutton(switch_frame, text="On-off switch 1")
        checkbutton1.grid(row=1, column=2)
        checkbutton2 = ttk.Checkbutton(switch_frame, text="On-off switch 2")
        checkbutton2.grid(row=2, column=2)
        checkbutton3 = ttk.Checkbutton(switch_frame, text="On-off switch 3")
        checkbutton3.grid(row=3, column=2)

        self.radio_variable = tk.StringVar()
        self.radio_variable.set("0")

        radiobutton1 = ttk.Radiobutton(switch_frame, text="Choice One of three",
                                       variable=self.radio_variable, value="0")
        radiobutton2 = ttk.Radiobutton(switch_frame, text="Choice Two of three",
                                       variable=self.radio_variable, value="1")
        radiobutton3 = ttk.Radiobutton(switch_frame, text="Choice Three of three",
                                       variable=self.radio_variable, value="2")
        radiobutton1.grid(row=4, column=2, sticky=tk.W)
        radiobutton2.grid(row=5, column=2, sticky=tk.W)
        radiobutton3.grid(row=6, column=2, sticky=tk.W)

        # - - - - - - - - - - - - - - - - - - - - -
        # The Choosing from lists frame
        fromlist_frame = ttk.LabelFrame(self.window, text="Choosing from a list",
                                        relief=tk.RIDGE)
        fromlist_frame.grid(row=1, column=2, sticky=tk.E + tk.W + tk.N + tk.S, padx=6)

        listbox_label = tk.Label(fromlist_frame, text="tk.Listbox")
        listbox_label.grid(row=1, column=1, sticky=tk.W + tk.N)

        combobox_label = tk.Label(fromlist_frame, text="ttk.Combobox")
        combobox_label.grid(row=2, column=1, sticky=tk.W + tk.N)

        my_listbox = tk.Listbox(fromlist_frame, height=4)
        for item in ["one", "two", "three", "four"]:
            my_listbox.insert(tk.END, "Choice " + item)
        my_listbox.grid(row=1, column=2)

        self.combobox_value = tk.StringVar()
        my_combobox = ttk.Combobox(fromlist_frame, height=4, textvariable=self.combobox_value)
        my_combobox.grid(row=2, column=2)
        my_combobox['values'] = ("Choice one", "Choice two", "Choice three", "Choice four")
        my_combobox.current(0)

        # - - - - - - - - - - - - - - - - - - - - -
        # Menus
        menubar = tk.Menu(self.window)

        filemenu = tk.Menu(menubar, tearoff=0)
        filemenu.add_command(label="Open", command=filedialog.askopenfilename)
        filemenu.add_command(label="Save", command=filedialog.asksaveasfilename)
        filemenu.add_separator()
        filemenu.add_command(label="Exit", command=self.window.quit)
        menubar.add_cascade(label="File", menu=filemenu)

        self.window.config(menu=menubar)

        # - - - - - - - - - - - - - - - - - - - - -
        # Quit button in the lower right corner
        quit_button = ttk.Button(self.window, text="Quit", command=self.window.destroy)
        quit_button.grid(row=1, column=3)

# Create the entire GUI program
program = Counter_program()

# Start the GUI event loop
program.window.mainloop()
