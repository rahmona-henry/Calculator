$(document).ready(function(){


//Function to prevent total screen from overflowing//
  var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        } 
    };
 
    var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.text("0");  //the .text method is a string containing the combined text of all the elements matched//


  //.click() Event Listener for all of the #numbers <a> clicks, except for #clear or #clearall that:
    $("#numbers").not("#clear,#clearall").click(function(){
    number += this.html();     //Takes the .html() of the number button and appends that to number
    totaldiv.text(number);     //Sets the .text() of totaldiv to number.
    testNumLenght(number);     //Call testNumLength, passing in number as the parameter.
    });

//.click() Event Listener to handle all of the #operators <a> clicks, except for the #equals button 
 $("#operators a").not("#equals").click(function(){
        operator = $(this).text();  //Take the .text() of the button, and set the operator variable to that.
        newnumber = number;         //Set newnumber to number
        number = "";                 //Set number to ""
        totaldiv.text("0");         //Set the .text() of totaldiv to "0"

//.click() Event listener for the #clear and #clearall buttons. When the clear button is clicked, it only
// needs to clear the number currently being inputted, but when the clearall button is clicked, it should clear both numbers stored.
   $("#clear").click(function() {
     number = "";
      totaldiv.text("0");
      });
     $("#clearall").click(function() {
     number = "";
     totaldiv.text("0");
     newnumber = "";
     });
     
   $("#equals").click(function(){
    number = parseInt(number,10);
    newnumber = parseInt(newnumber,10);
    var result;
    if (operator==="+"){
        result = newnumber+number;
    }
    else if (operator==="-"){
        result = newnumber - number;
    }
    else if (operator==="*"){
        result = newnumber * number;
    }
    else if (operator==="/"){
        result = newnumber / number;
    }

    result = result.toString(10);
    totaldiv.text(result);
    testNumLength(result);
    number = "";
    newnumber = "";
});



});


