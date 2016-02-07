$(document).ready(function () {

// The testNumLength function, is used to make sure that the total
// div doesn't overflow i.e the screen the users sees does not overflow with numbers.
  var testNumLength = function(number) {
    if (number.length > 9) {
      totaldiv.text(number.substr(number.length - 9, 9));
      if (number.length > 15) {
        number = '';
        totaldiv.text('Error');
      }
    } 
  };
// Declare number, newnumber, and operator as empty strings. Declare the variable totaldiv to the
// div with the id total. Set the .text() of totaldiv to "0.
  var number = ' ';
  var newnumber = ' ';
  var operator = ' ';
  var totaldiv = $('#total');
  totaldiv.text('0');

// .click() listeners are used to receive the clicks from the numbers and operators,
// A .click() listener is added to the #numbers a's. Noting that the #clear and #clearall
// buttons are also in the #numbers div. not() is used to exclude the #clear and #clearall buttons),
// Take the .text() of the button, append that to number, set the .text() of totaldiv to number, 
// and call testNumLength, passing in number as the parameter.


    $('#numbers > a').not('#clear,#clearall').click(function () {
      number += $(this).text();
      totaldiv.text(number);
      testNumLength(number);
    });

// Add a single .click() to handle all of the #operators a clicks,
// except for the #equals button (Again, use .not() to exclude it).
// The .click() takes the .text() of the button, and sets the
// operator variable to that. Set newnumber to number and set number to ""
// Set the .text() of totaldiv to "0"

  $('#operators > a').not('#equals').click(function(){
    operator = $(this).text();
    newnumber = number;
    number = '';
    totaldiv.text('0');
  });

      $('#clear').click(function () {
        number = '';
        totaldiv.text('0');
      });

     $('#clearall').click(function() {
       number = '';
       totaldiv.text('0');
       newnumber = '';
     });
  $('#equals').click(function () {
    number = parseInt(number, 10);
    newnumber = parseInt(newnumber, 10);
    var result;
    if (operator === '+') {
      result = newnumber + number;
    } else if (operator === '-') {
      result = newnumber - number;
    } else if (operator === '*') {
      result = newnumber * number;
    } else if (operator === '/') {
      result = newnumber / number;
    }

    result = result.toString(10);
    totaldiv.text(result);
    testNumLength(result);
    number = '';
    newnumber = '';
});   
});

