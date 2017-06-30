.. index:: tuple, enumerate, list, dictionary

The enumerate Function
------------------------

Python has a very useful function, ``enumerate``, that can be used when iterating through data collections. This function allows us to easily print (or otherwise use) both the *index* (or *count*) of the item in the collection and the *item* itself. Let's take a look at a few examples.

Suppose we want to print the results of a tennis competition. We have a list of competitors, and it is in order of how they finished, so we want to print which place they are in addition to their name. Without using ``enumerate``, we might do the following:

.. activecode:: tennis_1

  tennis_champs = ["Serena Williams", "Simona Halep", "Caroline Wozniacki",
      "Angelique Kerber", "Elina Svitolina"]
  index = 1
  for competitor in tennis_champs:
      print(index, competitor)
      index += 1

The ``enumerate`` function allows us to do away with that extra variable, ``index`` that we have to increment ourselves. So instead, we can write the following:

.. activecode:: tennis_2

  tennis_champs = ["Serena Williams", "Simona Halep", "Caroline Wozniacki",
      "Angelique Kerber", "Elina Svitolina"]

  for idx, item in enumerate(tennis_champs):
        print(idx, item)

Notice that the output isn't exactly what we want: Serena Williams came in first place, not zero-eth. But this happened because, by default, the index for ``enumerate`` begins at 0 (like most things in computer science). Luckily, we can pass in an optional argument after the name of the collection we want to iterate over that specifies what number we want to use as the *start* of the index:

.. activecode:: tennis_3

  tennis_champs = ["Serena Williams", "Simona Halep", "Caroline Wozniacki",
      "Angelique Kerber", "Elina Svitolina"]

  for index, competitor in enumerate(tennis_champs, 1):
        print(index, competitor)

Note that we can call the index (or count) and the item whatever we want.

Now, say that we want to preserve these results by storing them in a dictionary where the place (the index) is the key and the name of the tennis player is the value. We can do so easily as follows:

.. activecode:: tennis_4

  tennis_champs = ["Serena Williams", "Simona Halep", "Caroline Wozniacki",
      "Angelique Kerber", "Elina Svitolina"]

  champs_dictionary = dict(enumerate(tennis_champs, 1))

  print(champs_dictionary)

Finally, if we would prefer to have our results stored in a *list of tuples*, instead of a dictionary, we can do that as well:

.. activecode:: tennis_5

  tennis_champs = ["Serena Williams", "Simona Halep", "Caroline Wozniacki",
      "Angelique Kerber", "Elina Svitolina"]

  champs_tuples = list(enumerate(tennis_champs, 1))

  print(champs_tuples)
