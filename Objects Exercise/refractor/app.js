//use world wrap

//make our ball into an object with setting its radius, 
//x position, y position, speed, and color

//move ball horizontally by adding it's speed to the position

//IF ball position > width then set the ball back to 
//left side by setting postion = to radius




let ball={
    r:20,
    x:20,
    y:200,
    xspeed:5,           //add to xposition in draw function to get movement
    color:"#0000FF",
}

function setup(){
    createCanvas(800,600);
    background(204);
}

function draw(){
    background(204);
  
    ball.x = ball.x + ball.xspeed;     //add ball speed to the ball x postion to get it to move to the right
  
    dball(ball);

    if (ball.x>800){ 
        ball.x=ball.r;   //when ball x at right side of screen, move it back our radius value so we see whole ball 
    }
    

    



}  


function dball(obj){
   fill(obj.color);         //helps with our actual draw function 
    circle(obj.x,obj.y, obj.r);   

}