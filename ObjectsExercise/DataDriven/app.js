//object w/ all properties for drawing
//draw a car as my object, use wheelx, wheely, etc. as properties
//use fill to color these properties
//in draw function
//using argument onClick, draw this object
let car ={
    x:200,     //car base positions
    y:260,      
    width: 120 , //car base width and height
    height: 30,
    color:"#FF0000",    //car color
    color2:"#000000", //wheel color
    wheelr:20,
    wheely:290,
    leftwheel: 225,     //far left/right wheel positions
    rightwheel:295,
    topwidth: 70,      //top of car
    topheight:30,
    topx: 225,
    topy: 230,
}

function draw(){
    dcar(car)
   
}
function setup(){
    createCanvas(600,800);
    
}



function dcar(obj){
     
    fill(obj.color); 
    strokeWeight(0);    //no outline for rectangle
    rect(obj.x,obj.y,obj.width,obj.height);  //base rectangle
    rect(obj.topx,obj.topy, obj.topwidth, obj.topheight); //top rectangle
    fill(obj.color2);
    circle(obj.leftwheel,obj.wheely,20,20);
    circle(obj.rightwheel,obj.wheely,obj.wheelr,obj.wheelr);
     //draw 2 rectangles to make the body of the car
    
}




