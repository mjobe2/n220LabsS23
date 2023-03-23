//field for the bill amount
//button for user to submit amount and invoke function
//document.getElementByID to get input
//to change input to number for calculations, let x= Number(bill.value) INSIDE FUNCTION
//Tip= x*.2  (20% Tip)
//Total= x + (x*.2)
//console.log the tip and total like (Tip: $A. Total: $B)
let myText= document.getElementById("Text")


function getValue(){

    console.log(myText)     //Not needed
    console.log(myText.value) //Not needed
    let myNumbers= Number(myText.value);
 mytip=  (myNumbers*.2);
mytotal= (myNumbers+ (myNumbers*.2));
console.log("Tip: $" + mytip+". " + "Total: $" + mytotal);

}
