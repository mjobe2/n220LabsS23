//field for input
//button for user to submit amount and invoke function
//document.getElementByID to get input
//to change input to number for calculations, let x= Number(text.value) INSIDE FUNCTION
//Use (number%7) to get remainder of the division by 7
//Use two seperate functions
let myText= document.getElementById("Text")
let myWords= document.getElementById("number")  



function getValue(){

    console.log(myText)     //Not needed
    console.log(myText.value) //Not needed
    let myNumbers= Number(myText.value); //make the value a number 
remainder= (myNumbers%7);
    
 

console.log(remainder);

}
function divisible(){
if (remainder==0){
    console.log("true");         //if no remainder result is true
    myWords.innerHTML="True";
}
if (remainder!==0){
    console.log("false");         //if remainder is not 0 result is false
    myWords.innerHTML="False";
}
}

document.body.appendChild("number")