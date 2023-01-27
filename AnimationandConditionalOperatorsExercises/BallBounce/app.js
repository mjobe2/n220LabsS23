//let r be radius
//x and y variable for postion
//direction of 1 for by x and y, when it needs to "bounce" multiply by -1
//move 5 pixels per frame

let r=20;
let xposition,yposition;
 let dx=1;
let dy=1;
let xspeed=5;
let yspeed=5;


function setup(){
    createCanvas(800,600);
    background(204);
    xposition= 200;
  yposition= 200;
}

function draw(){
    background(204)
  
  xposition= xposition+xspeed*dx;
  yposition= yposition+yspeed*dy;
  
  
  if (xposition>width-r || xposition<r){
    dx *=-1;
  }
  if (yposition>height-r|| yposition<r){
    dy *=-1;
  }
    circle(xposition,yposition,r,r);
    fill(0,200,0);
        
          

        
    }