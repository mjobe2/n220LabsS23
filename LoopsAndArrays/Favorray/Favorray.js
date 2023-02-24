//create div called number
//function that starts at 1000 and add 1000 until it gets to 5000
//IF number=5000 then stop adding

let myWords= document.getElementById("number")  

myWords.style.backgroundColor="blue";
myWords.style.height=100+"px";         //this section sets the properties of our square
myWords.style.width=100+"px";


let i=0

while(i<5){
    i++;
    myWords.innerHTML+=i*1000;
    console.log(i*1000);
}

document.body.appendChild("number")