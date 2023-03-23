//two fields for username and password

//If statement and == to see if they match
//Use && to see if both are true
//username.value and password.value
//First should == "Username" and Second should == "Password"

//else statement if they don't match
//If right div says "Success" ELSE "Wrong information"

let myUsername= document.getElementById("Username")
let myPassword= document.getElementById("Password")
let myAnswer= document.getElementById("number")
myAnswer.innerHTML=("Enter Info")

function getValue(){
    if (myUsername.value== "Username" && myPassword.value=="Password"){
        myAnswer.innerHTML=("Success");
console.log(myUsername.value);
console.log(myPassword.value);
console.log("valid info");           //not needed, just to see what was going on

}

else {
    myAnswer.innerHTML=("Wrong Information");
 (console.log("wrong"));        //not needed, just to see what was going on
}
}