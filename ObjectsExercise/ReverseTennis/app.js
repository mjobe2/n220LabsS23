//create two objects representing the rectangles on both sides
    //x positon and y position for both, x will be different y the same


    //use if (keyIsDown(UP_ARROW)) {} and if (keyIsDown(Down_ARROW)){}
    //movements should be opposite directions 

      



let leftrect={
    width:20,
    height:100,
    x: 30,
    y: 200,

}

let rightrect={
    width:20,
    height:100,
    x: 570,
    y:200,
}

function setup(){
    createCanvas(600,600);
    background(200);
    
}

function draw(){
background(0);
fill(25,25,250);
rect(leftrect.x,leftrect.y, leftrect.width, leftrect.height);    //use our leftrect properties and make it blue
fill(250,25,25);
rect(rightrect.x,rightrect.y, rightrect.width, rightrect.height); //use our rightrect properties and make it red
if (keyIsDown(UP_ARROW)) {
    leftrect.y=leftrect.y-5;      //move them in opposite directions when up arrow is down
    rightrect.y=rightrect.y+5;    //y + 5 or - sets the speed and direction
  }

  if (keyIsDown(DOWN_ARROW)){
  rightrect.y=rightrect.y+5      //move them in the other direction when down arrow us down
  leftrect.y=leftrect.y-5;
  }

}




