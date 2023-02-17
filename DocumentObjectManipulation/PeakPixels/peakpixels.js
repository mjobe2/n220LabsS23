//div square that is 100x by 100x
//if div clicked, increase size by 1.1
//create varibales for width and height of object
//add px to width and rect variables
//make sure to add "px" to height and width
//to increase size by 10% every click, use x*1.1
//onClick
var height= 100;
var width= 100;


let mySquare= document.getElementById("square");

mySquare.style.backgroundColor= "blue";  
mySquare.style.height= height +"px";      //add px when working with divs
mySquare.style.width= width+"px";

function getSquare(){

width= width *1.1;              //make 10% bigger
height= height*1.1;             //make 10% bigger
console.log(mySquare);
mySquare.style.height= height +"px";     //once again have to add px when working with height/width for divs
mySquare.style.width= width+"px";          
}



document.body.appendChild(square);

