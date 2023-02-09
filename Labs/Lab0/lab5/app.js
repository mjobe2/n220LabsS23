let cool= document.getElementById("cool")

function checkResponse(time){
    console.log(time);
    //if time is... the current time (or this lab:))
        //then display "That is correct" in another div
        //otherwise
        //display "Guess again" in div
        if (time=="morning"){
            console.log("It works")
            cool.innerHTML="That is Correct";
        } else{
            cool.innerHTML="Guess Again";

        }
        
}