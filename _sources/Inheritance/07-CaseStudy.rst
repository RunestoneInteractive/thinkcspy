Case Study: Structured Postal Addresses
---------------------------------------

Postal addresses are interesting things. Every country has its own format
for postal addresses, and sometimes one country can have multiple address
formats. 

Postal addresses generally consist of a few standard elements: the recipient
name; street address; city or locality; state or province; and a postal code.
However, other elements are often included, such as neighborhood, district, 
post office identifier, and so on. For example, the following is 

  | Mr. Abe Jones
  | Acme Corporation
  | 123 Somewhere Ln
  | Greenville, SC  29609
  | USA

This same address would be written as follows for delivery to the Netherlands
(in the example, the street, city, and state are unchanged, even though they do not exist
in the Netherlands):

  | Acme Corporation
  | Mr. Abe Jones
  | Somewhere Ln 123
  | 29609 SC  Greenville
  | NETHERLANDS

Addresses in Ireland are complex, having up to 12 parts (such as building name and number,
primary and secondary thoroughfare, primary and secondary locality, town, county, ...) 
plus an Eircode, a unique identifier assigned to each of the ~2 million addresses in Ireland.
For example, Abe might live at the following address (English translation 
is given in parentheses, and would be omitted):

  | Abe Jones
  | Cnoc na Sceiche (The Hill of the Thorn)
  | Leac an Anfa (The Flagstone of the Storm)
  | Cathair na Mart (The City of the Beeves)
  | Co. Mhaigh Eo (The County of the Plain of the Yews)
  | A65 F4E2
  | IRELAND

(One would think that since each address has its own unique Eircode, 
it ought to be possible to address mail to Abe Jones, A65 F4E2, IRELAND. 
On second thought, perhaps that is not such a great idea. Can you imagine
the practical concerns with such a scheme?)

Storing Postal Addresses
~~~~~~~~~~~~~~~~~~~~~~~~

Suppose we want to write a contact management application. Among other things, the application
stores names and addresses. What would be the best way to design a class that holds the
information for an address? One approach would be to store the parts of the address that
are consistent, such as the recipient name and the country, in instance variables, and 
store the rest of the address as a list of address lines:

.. activecode:: address_class_1

    class Address:
        def __init__(self, recipient, addressLines, country):
            self.country = country
            self.recipient = recipient
            self.addressLines = addressLines
        

    addr = Address('Abe Jones', ['123 Somewhere Ln', 'Greenville, SC  29609'], 'USA')
    print(addr)

This approach treats an address as a collection of unstructured bits of information. If we want to
look up an address, we can search by full name or country, but if we want to find all
addresses in Greenville, or all addresses in zip code 29609, we can't do it very easily,
since information such as city and zip code is mashed together in an unstructured
address line along with the state abbreviation.

An approach that stores addresses as structured pieces of information might look like this:

.. activecode:: structured_addr_1

    class StructuredAddress:
        def __init__(self, country, recipient, street, city, state, postalCode):
            self.country = country
            self.recipient = recipient
            self.street = street
            self.city = city
            self.state = state
            self.postalCode = postalCode
        
        def display(self):
            print(self.recipient)
            print(self.street)
            print(self.city + ", " + self.state + "  " + self.postalCode)
            print(self.country)    
        
    addr = StructuredAddress('USA', 'Abe Jones', '103 Anywhere Ln', 
                   'Greenville', 'SC', '29609')    
    addr.display()

Now, if we have a list of StructuredAddress objects and we want to find all of the ones
that hold addresses in Greenville, we can do it much more easily:

.. sourcecode:: python

    for addr in addrList:
        if addr.city == 'Greenville':
            addr.display()
    
Storing International Addresses    
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

But now we have another problem. Our StructuredAddress works fine for U.S. addresses,
but not for those of other countries. Suppose we want to handle Irish and Italian
addresses. We might enhance the display() method to handle these with appropriate
logic:

.. sourcecode:: python

    def display(self):
        print(self.recipient)
    
        if self.country == 'USA':
            print(self.street)
            print(self.city + ", " + self.state + "  " + self.postalCode)
        elif self.country == 'IRELAND':
            print(self.postalCode)
        elif self.country == 'ITALY':
            print(self.street)
            print(self.postalCode + ' ' + self.city + ' ' + self.state)
        else:
            pass
        
        print(self.country)

This example works for Italian addresses because they conveniently have the same
elements as U.S. addresses (just displayed in a slightly different order). For Irish
addresses, we ignore the complicated address format and assume that the Irish post
office will get mail to the recipient because of Ireland's unique Eircode scheme.
But what if we wanted to include the additional elements of Irish addresses? We might
create additional instance variables for those elements in our StructuredAddress class.
However, you can probably see that approach will quickly become unwieldy. 

Inheritance Applied
~~~~~~~~~~~~~~~~~~~

Let's apply inheritance to the problem of managing structured postal addresses.
We will define a base class that contains the attributes in common to all
postal addresses: recipient and country.

.. activecode:: base_postal

    class BasePostalAddress:
        def __init__(self, country, recipient):
            self.country = country
            self.recipient = recipient
        
        def display(self):
            print(self.recipient)
            print(self.country)
            
        def validate(self):
            return self.recipient != '' and self.country != ''
            

This class isn't very useful by itself; relatively few people in the world
could receive mail addressed to them using only their name and country.
But it does establish two methods to perform functionality we want all 
addresses to perform: display themselves, and check whether the required
information is present and of an appropriate length. 

Next, we build on BasePostalAddress by creating a separate class for each
country that inherits from it:

.. activecode:: international_postal
    :include: base_postal		

    class IrishPostalAddress(BasePostalAddress):
        def __init__(self, recipient, postalCode):
            super().__init__("IRELAND", recipient)
            self.postalCode = postalCode
        
        def display(self):
            print(self.recipient)
            print(self.postalCode)
            print(self.country)

        def validate(self):
            return super().validate() and len(self.postalCode) == 7

    class USPostalAddress(BasePostalAddress):
        def __init__(self, recipient, street, city, state, zipcode):
            super().__init__("USA", recipient)
            self.street = street
	    self.city = city
            self.state = state
            self.zip = zipcode
        
        def display(self):
            print(self.recipient)
            print(self.street)
            print(self.city + ", " + self.state + "  " + self.zip)
            print(self.country)

        def validate(self):
            return (super().validate() and self.city != '' and
                len(self.state) == 2 and 
                (len(self.postalCode) == 5 or len(self.postalCode) == 9))




A List of Addresses
~~~~~~~~~~~~~~~~~~~

Now, let's construct a list containing both US and Irish addresses,
and display them using a loop:

.. activecode:: postal_list_ac
    :include: base_postal, international_postal
	      
    addrList = [IrishPostalAddress("Alf Jones", "A26F4G9"),
                USPostalAddress("Abe Jones", "103 Anywhere Ln", 
                    "Greenville", "SC", "29609"),
                IrishPostalAddress("Gabe Jones", "A65F4E2")]

    for addr in addrList:
        addr.display()

Normally, if a program iterates over a list that contains different
types of objects, it has to be careful about making assumptions about
the methods and operations that it can invoke on the different objects
in the list, since an attempt to invoke a method or apply an operator
to an object that does not support the method or operator will result
in a runtime error. In this case, we know that all of the objects in the list
inherit from ``BasePostalAddress``. It is safe to invoke any methods
defined in ``BasePostalAddress``, since all children of 
``BasePostalAddress`` are guaranteed to contain those methods.
Programs that use inheritance often contain loops like this.

Notice something else. As the loop iterates over the list, each time
the ``display()`` method is invoked, the computer will execute the one
that is defined for the specific object referenced by ``addr``. The first
time through the loop, addr references an ``IrishPostalAddress``, so the
``display()`` method for Irish addresses is invoked. The second time through
the loop, the ``display()`` method in ``USPostalAddress`` is invoked. This 
behavior---where the computer always executes the method that is
defined for the object being referenced---is called *polymorphism*.
Python exhibits this behavior whether or not the objects in question
utilize inheritance, but languages like Java and C++, polymorphism is 
available only through inheritance.

Using isinstance
~~~~~~~~~~~~~~~~

Let's try something else with our list of addresses. Suppose
we wanted to display all addresses with a given city. 
We might write some code like this:

.. sourcecode:: python

    for addr in addrList:
        if addr.city == 'Greenville':
            addr.display()

However, we would get into trouble on the first iteration of the
loop. The first address is an Irish address, which does not have a
``city`` attribute. Python would raise an error. We want to
perform this test only for US addresses. 

In this case, since all addresses have a country attribute, 
we could write the loop this way:

.. sourcecode:: python

    for addr in addrList:
        if addr.country == 'USA' and addr.city == 'Greenville':
            addr.display()

Another way to test the address is to find out if the object
belongs to a specific class. Python provides the ``isinstance()``
function for this purpose. ``isinstance()`` is designed for situations 
where you want to access a field or invoke a method on an object,
but you want to do so only if the object provides the needed 
functionality. Given an object *obj* and a class *cls*, 
``isinstance(obj, cls)`` returns True if *obj* is an instance of *cls*
(or a subclass of *cls*), and False if it is not. Here is how we might 
use it in our loop:

.. sourcecode:: python

    for addr in addrList:
        if isinstance(addr, USPostalAddress) and addr.city == 'Greenville':
            addr.display()

In this version of the code, the city attribute will be tested only
if ``addr`` references an instance of ``USPostalAddress``, or a child of
``USPostalAddress`` (which would also have a city attribute). 

Now that you've learned about ``isinstance()``, you should know that, like
inheritance itself, ``isinstance()`` should be used sparingly. Code that
invokes ``isinstance()`` is often performing work on an object that the
object should be designed to do itself, and is not utilizing inheritance 
and polymorphism to its full potential. 

To make this loop better utilize inheritance and polymorphism, we need 
a way to test each address to see if it is in a given city. Let's
add a method to BasePostalAddress for this purpose. It will
return a boolean indicating whether the address is in a certain city.

.. sourcecode:: python

    class BasePostalAddress:
    
        ...
        
        def isInCity(self, city):
            return False
            
BasePostalAddresses do not have a city attribute, so they just return
False. USPostalAddresses do have a city, so we'll override this method
for that class:

.. sourcecode:: python

    class USPostalAddress:
    
        ...
        
        def isInCity(self, city):
            return self.city == city

Now, we rewrite our loop to use ``isInCity()`` to perform the test:

.. sourcecode:: python

    for addr in addrList:
        if addr.isInCity('Greenville'):
            addr.display()

Notice how we've eliminated the ``isinstance()`` test. Also, notice
how this test works for ``IrishPostalAddress`` objects, even though we 
didn't define ``isInCity()`` for ``IrishPostalAddress``, since 
``IrishPostalAddress`` inherits its version from ``BasePostalAddress``.

