//use the "color" argument
//set a variable argument for the red value
//let noRed = removeRed( color(170, 200, 150) );
//fill(noRed);
//draw circle
//use the red value argument in our remove red function
let noRed;
//declare our no red object


function setup(){
    createCanvas(400,400);
    background(100);
}


function draw(){
    noRed= removeRed(color(170, 200, 150));
    fill(noRed);
    //fill in with the the (170, 200, 150)
circle(100,100,50,50); //circle has different values than ellipse

}

function removeRed(redVal){
redVal.setRed(0);
return redVal;

}
