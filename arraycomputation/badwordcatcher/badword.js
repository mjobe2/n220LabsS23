
//use statement.split(" ") to split based on spaces
//make variable for a sum of bad words

//iterate through array
//if the word= water or tires or clear then display bad word found to user along with count of bad words

function getValue(){
    let myText= document.getElementById("Text").value
    let badwordfound = document.getElementById("badwordfound")
    let numbadwords = document.getElementById("numberofbadwords")
    console.log(myText);  
    console.log(myText.value);

let splitstatement= myText.split(" ");

console.log(splitstatement);
let i=0
let sum=0
let t=0
while(i<splitstatement.length){
    
    let word= (splitstatement[i]);

    i=i+1;
    console.log(word);
    console.log(splitstatement)
    
    if( word=="water"){
        sum++;
        t=1;
        badwordfound.innerHTML="Bad word(s) found";
    
    }
    if (word=="tires"){
        sum++;
        t=1;

        badwordfound.innerHTML="Bad word(s) found";
    }
    if (word=="clear"){
        sum++;
        t=1;
        badwordfound.innerHTML="Bad word(s) found";
    }
    if (t!=1){
        badwordfound.innerHTML="No bad words found";         //if no bad words found display "No bad words found"
    }
    
    console.log("number of words= "+i);
     console.log(sum);
     numbadwords.innerHTML= (sum+ " bad words were found")
   
}
var getItself= document.getElementById("Text");
if (getItself.value !="") {
    getItself.value = "";                        //clear out the text field
}
}
