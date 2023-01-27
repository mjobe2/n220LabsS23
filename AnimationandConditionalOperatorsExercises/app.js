//Do the puck side option
//
//make canvas 400x300
//put background() after function draw() so that frames you only see recent circle
//use mouseX to draw ball where mouse is
//if the mouse passes midway point of the width, change the ball color using mouseX
//if mouse on left side, fill() blue
//if mouse on right side fill() red
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
    
