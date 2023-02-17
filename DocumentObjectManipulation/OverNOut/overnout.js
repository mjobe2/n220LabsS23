//use same square div from peak pixels in setup
//background blue
//instead of IF mouseIsPressed, IF onmouseover/onmouseout
//if mouseover change div color=black
//if mouseout div color=blue
//use two functions one for over and one for out
//heigh and width both 100
var height= 100;
var width= 100;


let mySquare= document.getElementById("square");  //can do both onmouseover and onmouseout in same div

mySquare.style.backgroundColor= "blue";
mySquare.style.height= height +"px";
mySquare.style.width= width+"px";          //have to add px when working with divs

function getSquare(){

mySquare.style.backgroundColor="black";         //getSquare changes color to black onmouseover
console.log(mySquare);

}

function blueSquare(){
    mySquare.style.backgroundColor="blue";
console.log(mySquare);                          //blueSquare makes color blue onmouseout

}


document.body.appendChild(square);
