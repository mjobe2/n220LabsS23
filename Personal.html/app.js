
function setup(){
    createCanvas(1200,768);
    background(100,0,100);
    fill(199,169,72);
}
let x= 600
let y= 100
function draw(){
    fill(199,169,72);
    rect(585, 140, 30, 50);
    fill(199,169,72);
    circle(x,y, y,y);
    circle( 390, 215, 50,50);
    circle(820, 215, 50,50);
    
    
    
    fill(0,0,y);
    circle(x-20,90, 15,15);
    fill(0,0,100);
    circle(x+20,90, 15,15);
    fill(y,0,0);
    rect( 555, 180, 100,200);
    rect(405, 200, 150, 30);
    rect(655, 200, 150,30);
    fill(0,100,0);
    quad(x,180, 610,240, 600, 260,590, 240)
    fill( 0,100,0);
    fill(200,0,0);
    arc( x,130,30,25,0, HALF_PI+HALF_PI);
    fill(0,0,100);
    rect(555, 380, 100,40);
    rect(555,420,40,200);
    rect(615,420,40,200);

    }
    