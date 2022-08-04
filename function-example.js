function avaerage(mark,mark2,mark3){
    var total=mark+mark2+mark3;
    var result=total/3;
    return result;
}
var totalaverage=avaerage(12,300,400);
console.log(totalaverage.toFixed(2));