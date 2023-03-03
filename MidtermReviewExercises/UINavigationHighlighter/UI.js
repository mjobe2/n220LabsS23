//add div to that says which div you have clicked on

let myTop= document.getElementById("topScreen")
let myWords= document.getElementById("one")
let mySecond= document.getElementById("two")
let myThird= document.getElementById("three")
let myFourth= document.getElementById("four")
let myFifth= document.getElementById("five")
let mySixth= document.getElementById("six")



//myWords.style.backgroundColor="blue";
//myWords.style.height=100+"px";         //this section sets the properties of our square
//myWords.style.width=100+"px";


let i=["One","Two","Three","Four","Five","Six"];
 let t=0
while (t<1){
    t++;                 //only need to run this once
myWords.innerHTML+= i[0];      //selects the element postion from the array
mySecond.innerHTML+=  i[1];
myThird.innerHTML+= i[2];
myFourth.innerHTML+= i[3];
myFifth.innerHTML+=i[4];
mySixth.innerHTML+=i[5];

}

function highlightOne(){                //one functioon for each onClick
    myTop.innerHTML=i[0];
myWords.style.backgroundColor="red";    //change color of that div, and make the rest white
mySecond.style.backgroundColor="white";
myThird.style.backgroundColor="white";
myFourth.style.backgroundColor="white";
myFifth.style.backgroundColor="white";
mySixth.style.backgroundColor="white";


}

function highlightTwo(){
    myTop.innerHTML=i[1];
    mySecond.style.backgroundColor="purple";
    myWords.style.backgroundColor="white";
    myThird.style.backgroundColor="white";
    myFourth.style.backgroundColor="white";
    myFifth.style.backgroundColor="white";
    mySixth.style.backgroundColor="white";
}
function highlightThree(){
    myTop.innerHTML=i[2];
    mySecond.style.backgroundColor="white";
    myWords.style.backgroundColor="white";
    myThird.style.backgroundColor="orange";
    myFourth.style.backgroundColor="white";
    myFifth.style.backgroundColor="white";
    mySixth.style.backgroundColor="white";
}

function highlightFour(){
    myTop.innerHTML=i[3];
    mySecond.style.backgroundColor="white";
    myWords.style.backgroundColor="white";
    myThird.style.backgroundColor="white";
    myFourth.style.backgroundColor="blue";
    myFifth.style.backgroundColor="white";
    mySixth.style.backgroundColor="white";
}
function highlightFive(){
    myTop.innerHTML=i[4];
    mySecond.style.backgroundColor="white";
    myWords.style.backgroundColor="white";
    myThird.style.backgroundColor="white";
    myFourth.style.backgroundColor="white";
    myFifth.style.backgroundColor="green";
    mySixth.style.backgroundColor="white";
}
function highlightSix(){
    myTop.innerHTML=i[5];
    mySecond.style.backgroundColor="white";
    myWords.style.backgroundColor="white";
    myThird.style.backgroundColor="white";
    myFourth.style.backgroundColor="white";
    myFifth.style.backgroundColor="white";
    mySixth.style.backgroundColor="pink";
}




document.body.appendChild("one")
document.body.appendChild("two")
document.body.appendChild("three")
document.body.appendChild("four")
document.body.appendChild("five")
document.body.appendChild("six")
