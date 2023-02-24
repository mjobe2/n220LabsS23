//create div 
//create variable to store the number of times it has ran
//add one to var each time it runs
//WHILE var less than 5, run code
//function that starts at 1000 and add 1000 until it gets to 5000

let myWords= document.getElementById("number")  

myWords.style.backgroundColor="blue";
myWords.style.height=100+"px";         //this section sets the properties of our square
myWords.style.width=100+"px";


let i=0

while(i<5){               //lets it run no more than 5 times
    i++;
    myWords.innerHTML+=i*1000;     //mutiply iteration by 1000
    console.log(i*1000);
}

document.body.appendChild("number")