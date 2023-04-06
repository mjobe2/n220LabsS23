//invoke function when a button is clicked

//use document.createElement, only one

//function should iteratate through array and write elements of the arrays in 3 divs
//appendChild

let myText= document.getElementById("Text")
let myex= document.getElementById("example")
let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
];

function findThem(){
    for( var i=0; i<objects.length;i++){
        let newitem=document.createElement("div");
        newitem.innerHTML=objects[i].color+ " " + objects[i].height + " " + objects[i].width;
        myex.appendChild(newitem);

    }
}