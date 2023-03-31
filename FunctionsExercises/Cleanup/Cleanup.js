//need button and a user input

//make sure that the input is viewed as a string
//replaceAll to get rid of all of the #'s the user submits
//set newtext= to the the updated version where #'s are removed
//set whatever.innerHTML=newText
//document.body.appendChild("x")
let myText= document.getElementById("Text")
let myWords= document.getElementById("number")  




function getValue(){

    console.log(myText)     //Not needed
    console.log(myText.value) //Not needed
    let myNumbers= (myText.value);
console.log(myText.value);

 
 newText= String(myText.value);
 newestText= newText.replaceAll("#",""); //replaces the # with nothing
console.log(newText);
console.log(newestText);
console.log(myText.type);
myWords.innerHTML=newestText;        //change the div to show results on the page
}



document.body.appendChild("number")