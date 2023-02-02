//
//set radius and use it as our argument
//translate before we draw our circle
//background in setup so that we can see all we draw
//use res as a variable
//use radius argument for polarpoint function
r=80


function setup(){
    createCanvas(400,400);
    background(100,100,100);  //so we can see all our drawings
}

function draw(){
    
    translate(100,100);
   // console.log(res.x);
    
    let res=polarPoint(20);  //this is above the circle() because we need to initialize res
    circle(res.x,res.y,10);
}

function polarPoint(r){
    x=r*Math.sin(mouseX);
    y=r*Math.cos(mouseX);
    return createVector(x,y);
}

