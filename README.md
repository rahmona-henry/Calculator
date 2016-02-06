# Calculator

Synopsis:

This is a simple calculator that has been built using HTML, CSS and JavaScript.
I have used a Code Academy tutorial to help build this. At the moment there is not much fuctionality and I am working towards getting the equals operator to work. I have used several .click event listeners to deal with the basic button commands.

Motivation:
Sprint 6 - Build Something Fun - EDA/Karearea 2015/2016 

Comments:
The calculator will receive inputs from the buttons with .click() listeners. When it gets a click, it will add that digit to the end of the variable number, which will be a string while it is receiving input.
Then, when the user clicks an operator, the variable operator will be set to the operator clicked, and the first inputted number will be saved into a new variable; newnumber, while setting number to "" (an empty string). When "=" is clicked, it takes the number, the newnumber, and the operator, and performs the appropriate action.
The testNumLength function, will be used to make sure that the total div doesn't overflow.

Declare number, newnumber, and operator as empty strings. Declare the variable totaldiv to the div with the id total; this makes it easier to manipulate later. Set the .text() of totaldiv to "0

To receive the clicks from the operators and the numbers, use .click() listeners. To start off,add the .click() listener to the #numbers a's. Remember that the #clear and #clearall buttons are also in the #numbers div.

Set up a single .click() listener that when the user clicks a #numbers a (Use .not() to exclude the #clear and #clearall buttons), will take the .text() of the button, append that to number, set the .text() of totaldiv to number, and finally call testNumLength, passing in number as the parameter.

Add a single .click() to handle all of the #operators a clicks, except for the #equals button (Again, use .not() to exclude it). The .click() will need to:
Take the .text() of the button, and set the operator variable to that.
Set newnumber to number.
Set number to ""
Set the .text() of totaldiv to "0"



API Reference

Tests:
Ongoing

Contributors

License
