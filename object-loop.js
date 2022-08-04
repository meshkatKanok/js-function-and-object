let mobile={
    name:'nikia',
    price:300000,
    model:"i79",
    color:'red',
    mouse:1,
    pen:2,
    keyboard:4
}
 var keys=Object.keys(mobile);
 var property=Object.values(mobile);

 for(var i=0;i<keys.length;i++){
    var key=keys[i];
    var value=mobile[key];
    console.log(key,value)
 }
 for(var propertyname in mobile){
    var value=mobile[propertyname]
    console.log(propertyname,value)
 }