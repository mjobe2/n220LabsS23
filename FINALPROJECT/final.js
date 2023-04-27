//need a 2D array
//the array is what the players play on

//a global variable that increases by one everytime
//if the variable is odd number then it is player ones turn
//if the variable is even then it is player two
//player 1 X, player 2 O

//Get coordinates from user

let myColumn= document.getElementById("Column")
let myRow= document.getElementById("Row")
let myAnswer= document.getElementById("number")
let myBoard= document.getElementById("Board")
myAnswer.innerHTML=("Enter Column and Row");

var grid = [

    [ '_','_','_'],
  
      [ '_','_','_' ],
      [ '_','_','_'], 
      
  
  ];

  myBoard.innerHTML=[grid[0][0],grid[0][1],grid[0][2]+"<br />"+      //breaks up the array into the tic tac toe board
        grid[1][0],grid[1][1],grid[1][2]+"<br />"+
        grid[2][0],grid[2][1],grid[2][2]];
  

let i=0;
let y=0;

function getValue(){
  
    
        i++;
        
   
        if (i%2==0){        //IF the division by 2 has no remainder run this this 
            y="O";   //THIS DECIDES WHICH PLAYER IT IS
       }
       else {
        y="X";
       }
       
       
grid [myColumn.value][myRow.value]=y;  //whatever
myBoard.innerHTML=[grid[0][0],grid[0][1],grid[0][2]+"<br />"+      //breaks up the array into the tic tac toe board
        grid[1][0],grid[1][1],grid[1][2]+"<br />"+
        grid[2][0],grid[2][1],grid[2][2]];
console.log(grid);
console.log(i);
console.log(y);

//myBoard.innerHTML=grid;
if (i>4){
    if ((grid[0][0]==grid[0][1])&& (grid[0][2]==grid[0][0])){    //WINNING CONDITIONS VVVVV
        myAnswer.innerHTML=("Player " + y +" Wins!");
    }
  }
  if (i>4){
   if ((grid[2][0]==grid[2][1])&& (grid[2][2]==grid[2][0])){
        myAnswer.innerHTML=("Player " + y +" Wins!");
         
    }
  }
  if (i>4){
    if ((grid[1][0]==grid[1][1]) && (grid[1][2]==grid[1][0])){
        myAnswer.innerHTML=( "Player " + y +" Wins!");
       
    }
  }
  if (i>4){
    if ((grid[0][0]==grid[1][1])&& (grid[2][2]==grid[0][0])){
        myAnswer.innerHTML=("Player " + y +" Wins!");
    }
}
    if (i>=5){
        if ((grid[0][2]==grid[1][1])&& (grid[2][0]==grid[0][2])){
            myAnswer.innerHTML=("Player " + y +" Wins!");
        }
  
  
  
  }
  
  if (i>=5){
    if ((grid[0][0]==grid[1][0])&& (grid[2][0]==grid[0][0])){
        myAnswer.innerHTML=("Player " + y +" Wins!");
    }
}

if (i>=5){
    if ((grid[0][1]==grid[1][1])&& (grid[2][1]==grid[0][1])){
        myAnswer.innerHTML=("Player " + y +" Wins!");
    }
}
if ((i==9)&& (myAnswer.innerHTML!=("Player " + y +" Wins!"))){   //IF board is filled up and there hasn't
                                                                 //been a winner, then game is a tie
        myAnswer.innerHTML=("TIE GAME!");
    }


}





