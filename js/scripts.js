$(document).ready(function() {
  $("#formOne").submit(function(event) {

    const side1 = parseInt($("input#side1").val());
    const side2 = parseInt($("input#side2").val());
    const side3= parseInt($("input#side3").val());

    const result= (side1 + side2 + side3);
    

    if (side1 === side2 && side2 === side3 && side1 === side3) {           
        alert ("Equalateral!")
    } 
    else if ((side1 + side2) <= side3 || (side1 + side3) <= side2 || (side2 + side3) <= side1) {
      alert ("Not a triangle");
    } 
    else if (side1===side2 || side2===side3 || side1 === side3) {     
      alert ("Isosceles!");

    } else {
        alert ("Scalene!");
    }
    
    event.preventDefault();

  });
});

