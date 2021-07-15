/*
var myArray = ["red", "blue", "green", 1, 2, 3];

//console.log(myArray);

//for(var i=0; i<myArray.length; i++)

//console.log(myArray[i]);
for(item of myArray)
console.log(item);

function forech(a){
    a();
}
forech(function(){
    console.log("hello for each function");
})
*/
function myFunctiom(x,y){
    for(i=0; i<y.length; i++)
        x(y[i])
    

}
function anotherFunc(i){
    console.log(i);
}
var Array = [1, 2, 3, 4, 5];
myFunctiom(anotherFunc, Array);