//much like the ball bounce, but without the y variables
//speed of 5
//position is position+speed*direction
//if position is > than width- radius or position is less than radius change direction by multiplying by -1


let r=20;
let xposition;
 let dx=1;
let xspeed=5;



function setup(){
    createCanvas(800,600);
    background(204);
    xposition= width/2;
  
}

function draw(){
    background(204)
  
  xposition= xposition+xspeed*dx;
  
  
  if (xposition>width-r || xposition<r){
    dx *=-1;
  }
  
    circle(xposition,200,r,r);
    fill(0,200,0);
        
          

        
    }