// 3 divs for each number
//array of numbers need to use the []
//order from smallest to largest


let myWords= document.getElementById("number")
let mySecond= document.getElementById("runnerup")
//let myThird= document.getElementById("thirdplace")


myWords.style.backgroundColor="blue";
myWords.style.height=100+"px";         //this section sets the properties of our square
myWords.style.width=100+"px";


let i=[5,7,12];
 
while (i<5){
myWords.innerHTML+= i.slice(0);
mySecond.innerHTML+=  i.slice(1);
myThird.innerHTML+= i.slice(2)  ;
}


document.body.appendChild("number")
//document.body.appendChild("runnerup")
//document.body.appendChild("thirdplace")