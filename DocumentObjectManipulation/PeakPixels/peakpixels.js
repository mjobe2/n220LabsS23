//div square that is 100x by 100x
//IF div clicked, increase size 
//create varibales for width and height of object
//add px to width and rect variables
//to increase size by 10% every click, use x*1.1
//IF (mouseIsPressed)
var height= 100;
var width= 100;


let mySquare= document.getElementById("square");

mySquare.style.backgroundColor= "blue";
mySquare.style.height= height +"px";
mySquare.style.width= width+"px";

function getSquare(){

width= width *1.1;
height= height*1.1;
console.log(mySquare);
mySquare.style.height= height +"px";
mySquare.style.width= width+"px";
}



document.body.appendChild(square);

