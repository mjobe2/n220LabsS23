//MAKE CIRCLE 
let r=1;
function setup(){
    createCanvas(1200,768);
    background(135,65,207);
    fill(199,169,72);
}

function draw(){
    
    circle(mouseX,mouseY,r);
    if(mouseIsPressed) {   
        r++; // if mouse pressed increase radious by 1
        
    }
    
    console.log(r);
    if (r > 50){
        r=50;          // if radious is greater than 50, than we need to make sure it doesn't get bigger
    }
}
