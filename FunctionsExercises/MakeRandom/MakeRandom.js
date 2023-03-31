//Create a button
//when button click, generate a random whole number
//Math.random()*10 to get the random number
//math.round to round the number up of down
//diplay whatever this number is on the page

let myText= document.getElementById("Text")
let myWords= document.getElementById("number")

function getValue(){

    
    x=(Math.random()*10)
    final=(Math.round(x));  //round number up so it is a whole number
    console.log(final)
}

function divisible(){
    console.log(final);
    myWords.innerHTML=final;
}
    
    document.body.appendChild("number")