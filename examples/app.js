let x= 400;
let y= 400;
let xSpeed = 1;
let ySpeed= 1;

function setup(){
    createCanvas(800,600)
}

function draw(){
    x= x+xSpeed;
    y= y+ ySpeed;
    circle(x,y,30)
    if(mouseIsPressed){
        xSpeed= xSpeed * -1;
    }
}
