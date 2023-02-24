//create div called number
//create array with 5 things
//add is my favorite... to end of element of array

let myWords= document.getElementById("number")  

myWords.style.backgroundColor="blue";
myWords.style.height=100+"px";         //this section sets the properties of our square
myWords.style.width=100+"px";


let i=["Music","Golf", "My dog", "Food", "Sleep"]
let t=0;
while(t<4){
    t++;
    myWords.innerHTML+=i[t]+", is one of my favorite things"+"<br />";
    
}

document.body.appendChild("number")