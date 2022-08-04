// function foo (){
//     console.log("fo");
//     bar();
// }
// foo();
// function bar(){
//     console.log("bar");
// }

//2nd problem---------

// function make_avg(mark1,mark2,mark3){
//     var total=mark1+mark2+mark3;
//     var totalAvarage=total/3;
//     return totalAvarage;
// }
// var avge=make_avg(100,45,67);
// console.log(avge.toFixed(2));

// function make_avg(avgarry){
//     var total=0;
//     for(var i=0;i<avgarry.length;i++){
//           total+=avgarry[i];
//           console.log(total)
//           var av=total/avgarry.length;
//           console.log(av);
        
//     }

// }
// make_avg([12,13,14,15,16,17]);

// function make_avg(avgarry){
// var total=avgarry.reduce((sum1,sum2)=>sum1+sum2);
//  var totalavarage=total/avgarry.length;
//   return totalavarage;
// }
// var totalav=make_avg([12,13,14,15,16,17]);
// console.log(totalav)

///3rd problem
//Has return
// function odd_even(number){
//     if(number%2 == 0){
//         console.log("its a even number");
//     }
//     else{
//         console.log("its a odd number");
//     }
//     return number;
// }
// odd_even(10);
// function odd_even(){
//     var number=10;
//     if(number%2 == 0){
//         console.log("its a even number");
//     }
//     else{
//         console.log("its a odd number");
//     }
// }
// odd_even();

// function odd_even(num){
//     if(num%2==0){
//         console.log("its a even number");
//     }
//     else{
//         console.log("its a odd number");
//     }
// }
// odd_even(301);

//problem 5

function cross_road(trafficlight){
    if(trafficlight == "red"){
        console.log("you are not crossing the road");
    }
    else if(trafficlight == "yellow"){
        console.log("you should stop");
    }
    else{
        console.log("color green and you cross the road");
    }

}
cross_road("green")



