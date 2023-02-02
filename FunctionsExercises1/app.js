//create a function for drawing a car
//need variables for x and y values
//create another function to have this car be drawn based upon mouseX and mouseY
////Possibly going to have make an array to get more multiple compositions to pop up
//change the x and y values of each car so you can see all of them
y=100
x=100

function setup() {
    createCanvas(600, 600);
  }
  function car(x,y){
    strokeWeight(0);
    fill(0); //color it black
 circle(x+180,y+75,20,20);  //far right wheel position
    circle(x+120,y+75,20,20); //far left wheel position
    fill(200,0,0);     //color it red
    rect(x+100,y+50,120,20); //draw 2 rectangles to make the body of the car
    rect(x+115, y+15,85,40);
    
    
  }
  function draw() { //draw four of the cars
    background(220);
    car(mouseX,mouseY);
    car(mouseX+150,mouseY+200);
    car(mouseX-150,mouseY+100);
    car(mouseX+50,mouseY+75);
    
  }
