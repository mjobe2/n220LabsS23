//run the function 25 times
//use a variable to count make sure it runs no more than 25 times
//IF the division gives you a remainder of 0, write the words
//use % to give you remainders


let myWords= document.getElementById("number")  

myWords.style.backgroundColor="blue";
myWords.style.height=100+"px";         //this section sets the properties of our square
myWords.style.width=100+"px";


let i=0

while(i<25){
    i++;
    if (i%3==0){        //IF the division by 3 has no remainder run this
         myWords.innerHTML+="beep"+"<br />";   //adds a break in between the beeps and bops
    }
    
    if(i%5==0){       //ONlY if division by 5 has no remainder run this
       myWords.innerHTML+="bop"+"<br />";
    }

    if (i%3==0 && i%5==0){            //if division by 3 AND 5 had no remainder run this
        myWords.innerHTML+="beepbop"+"<br />";             //+= allows it to run multiple times
    }     //&& makes it so that both have to be true

}




document.body.appendChild("number")