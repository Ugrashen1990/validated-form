/*
function x(a){
    a();
}
x(function(){
    console.log('annonymus function called');
});
*/
var myArray = [10, 20, 30, 40, 'red', {}];

var myFunc = function(item, index, array){
    console.log('function for an element ' + item +' ' + index);
}

myArray.forEach(myFunc);