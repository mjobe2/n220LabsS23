

let position = {x: 0, y: 0};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  if(mouseIsPressed) {
    position.x = mouseX;
    position.y = mouseY;
  }
  
  let howfar= distance( position, { x: mouseX, y: mouseY });
  
  if (howfar > 120){        //missing {} by if statement
    stroke("#FF0000");
  } else {                    //don't need if after else statement
    stroke("#000000");     //missing ""
  }

  
  line(position.x, position.y, mouseX, mouseY);   //missing comma after aou.y
}

function distance(p1, p2) {
  
  let dx = p1.x - p2.x;
  let dy = p1.y - p2.y;
  
  //return the distance
   return Math.sqrt(dx*dx + dy*dy);
}

