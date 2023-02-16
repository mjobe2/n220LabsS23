//use mouse over/mouse out for our mouse interaction
//when the mouse does something, change the position of element
//change position by increasing or decreasing x and y values
//modify these values in your inner html of the specific element
//add


let myWords= document.getElementById("Div")  

myWords.style.backgroundColor="blue";
myWords.style.height=100+"px";         //this section sets the properties of our square
myWords.style.width=100+"px";

function myText(){
    myWords.innerHTML+="mc"       //adds "mc" whenever this function is called 
    
}
document.body.appendChild("Div")