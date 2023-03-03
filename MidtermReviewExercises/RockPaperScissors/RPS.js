//divs for all rock paper scissors and gaurd
//if gaurd -.5
//generate random number
//if number less than 1 they win
//if number >1 CPU wins
//if number > 2 they tie

let myRock= document.getElementById("rock")
let myPaper= document.getElementById("paper")
let myScissors= document.getElementById("scissors")
let myGaurd= document.getElementById("gaurd")
let theScore= document.getElementById("Score")

let gameScore=0;
let i=["Rock","Paper","Scissors","Gaurd"];


 let t=0
                //only need to run this once
myRock.innerHTML+= i[0];      //selects the element postion from the array
myPaper.innerHTML+=  i[1];
myScissors.innerHTML+= i[2];
myGaurd.innerHTML+= i[3];




function Opponent(){
    
    m = (Math.random()*2);



    
   if (m<=1){
   gameScore= gameScore+1;   //if number less than 1 player wins
    console.log(m);
    
    theScore.innerHTML=gameScore;
}

else if(1<=m<=2) {
    gameScore=gameScore-1;     //if rand num between 1 and 2 CPU wins
    console.log(m);
    theScore.innerHTML=gameScore;
}

    console.log(gameScore);
    theScore.innerHTML=gameScore;
    } 
    

function playGaurd(){
   

        gameScore= gameScore-.5;
        console.log(gameScore);
        theScore.innerHTML=gameScore;
    }




document.body.appendChild("rock")
document.body.appendChild("paper")
document.body.appendChild("scissors")
document.body.appendChild("gaurd")
document.body.appendChild("Score")
