let bike= { age:0, wear:0, color:"Red",make:"Huffy"}

function ageUp(someBike){
    bike.age++;
    if(someBike.age>=5){
        someBike.wear=100;
    }
}
ageUp(bike);
ageUp(bike);
ageUp(bike);
ageUp(bike);


console.log(bike);