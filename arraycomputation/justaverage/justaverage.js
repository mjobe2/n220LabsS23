//make sure to turn it into a number Number(whatever.value)
//split the statement by commas with whatever.split(",")
//for or while loop to iterate through
//i<array.length then i++
//for sum get values for individual objects and add them 
//for average, sum/array.length
//to clear, if text field doesn't = "" then make it
  

function getValue(){
    let myText= document.getElementById("Text").value
    let myAnswer= document.getElementById("number");
    let myValue= document.getElementById("foraverage");
    console.log(myText);  
    console.log(myText.value);
//let myNumbers= Number(myText.value);
let splitstatement= myText.split(",");

console.log(splitstatement);
let i=0;
let sum=0;
while(i<splitstatement.length){
    let num= Number(splitstatement[i]);
    
    i=i+1;
    console.log(num);
    sum+=num;
    
    average=sum/splitstatement.length;
    console.log("The average is " + average);
    console.log("The sum is " +sum);
    //let myText=("")
}
myAnswer.innerHTML=("The sum is: "+ sum );
myValue.innerHTML=("The averge is: " +average);
var getItself= document.getElementById("Text");
if (getItself.value !="") {
    getItself.value = "";
}
}
//while i less than array length num= myarray[i]