//Do the world wrap option
//
//make canvas 800x600
//have to set a radious for out ball
// make variable for direction set it = 1
//if x> width than multiply direction by -1
//put background(0) after function draw() so that frames you only see recent circle
//if x is less than radious of circle is less than 
//add whatever (speed of 5 pixels x the direction) pixels to x to move it and in right direction
//when the mouse passes midway point of the width, change the ball color using mouseX
let x=mouseX;

function setup(){
    createCanvas(400,300);
    background(204);
    fill(200,0,0);
}

function draw(){
    background(204)
    circle(mouseX,mouseY,20);
    if(mouseX>200){
        fill(200,0,0)
        }
        if (mouseX<200){
            fill(0,0,200)
        }
    }
    
