//MAKE CIRCLE 

function setup(){
    createCanvas(800,600)
}

function draw(){
    x= x+xSpeed;
    y= y+ ySpeed;
    circle(mouseX,mouseY,r)
    if(mouseIsPressed){
        xSpeed= xSpeed * -1;
    }
}
