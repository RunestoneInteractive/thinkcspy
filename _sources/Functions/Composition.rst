..  Copyright (C)  Brad Miller, David Ranum, Jeffrey Elkner, Peter Wentworth, Allen B. Downey, Chris
    Meyers, and Dario Mitchell. Permission is granted to copy, distribute
    and/or modify this document under the terms of the GNU Free Documentation
    License, Version 1.3 or any later version published by the Free Software
    Foundation; with Invariant Sections being Forward, Prefaces, and
    Contributor List, no Front-Cover Texts, and no Back-Cover Texts. A copy of
    the license is included in the section entitled "GNU Free Documentation
    License".

.. qnum::
   :prefix: func-9-
   :start: 1

.. index:: composition

Composition
-----------

As we have already seen, you can call one function from within another. This ability to build functions by using other functions is called **composition**.

As an example, we'll expand our program from the previous chapter to tell us how much we will be reimbursed for travel expenses, since this was a road trip we took for work. Our workplace policy is that these expenses must be broken down by day. So we'll need to figure out the mileage reimbursement on a daily basis. We get a reimbursement of $.50 per mile. We also get a $100 per day reimbursement for food and lodging. Since there are multiple different computations to perform, it makes sense to break this program down into smaller chunks.

First, let's review our program so far and then see what new input, output, and processing we need to add.

.. sourcecode:: python

    def daily_miles_traveled(before, after, days):
        total_miles = after - before
        average_miles = total_miles / days
        return average_miles

    def main():
        print(daily_miles_traveled(1000.0, 1500.5, 5))

    if __name__ == "__main__":
        main()

It looks like we'll need to add a function that will multiply the average daily miles traveled by the amount we are paid per mile to determine our mileage reimbursement. It should also add the per diem amount to that so that it returns the total amount we should be reimbursed per day. Then we'll need to call this function from ``main`` and pass in these three inputs. (Note that we want to make these pay per mile and per diem amounts parameters rather than **hard code** them within the function as $.50 and $100 respectively, since these values may change frequently).

.. activecode:: ch06_newmileage

    def daily_miles_traveled(before, after, days):
        total_miles = after - before
        average_miles = total_miles / days
        return average_miles

    def reimbursement(miles, pay, extra_pay):
        mileage = miles * pay
        return mileage + extra_pay

    def main():
        daily_miles = daily_miles_traveled(1000.0, 1500.5, 5)
        per_mile_pay = .50
        per_diem = 100
        daily_reimbursement = reimbursement(daily_miles, per_mile_pay, per_diem)
        print("Amount you should be reimbursed per day:", daily_reimbursement)

    if __name__ == "__main__":
        main()

We could now say that our ``main`` function is *composed* of our two other functions. We call our previously defined function ``daily_miles_traveled`` from within the ``main`` function and then we pass the data returned from that function as an argument to the ``reimbursement`` function. The ``reimbursement`` function then calculates and outputs our daily reimbursement total to the ``main`` function. The ``main`` function then outputs this total to the user by printing it on the screen.

In this way we keep our tasks separated into smaller chunks of code, each handling a specific task. This will make it easier to reuse our code in other programs, and also easier to change or debug the code in this program.

Notice how this also makes our program more flexible. For instance, the ``reimbursement`` function could be used to determine weekly reimbursements instead of just daily reimbursements. We wouldn't need to change anything within that function to do so, we would only change the arguments that we pass via the ``main`` function so that we are passing the weekly miles traveled and weekly extra reimbursement amounts to it instead of the daily miles and per diem amounts.
