//

var grid = [

    [ 0,1,0 ],

    [ 0,0,2 ],

    [ 0,0,0 ],

];
twoDee.filter((entry)=>{
    return entry [0]==2;
})
let res=twoDee[1].filter(function(entry){
    return entry==2;
})


    if (res.length==3){
        console.log("A win")
    }
