// sum and product of an array number elements.

var Array= [1, 2, 3, 4, 5, 6];
var sum = 0;
var product = 1;

    for(var i=0; i<Array.length; i++){
        sum += Array[i];
       
        product *= Array[i];
      
    }
    console.log('sum is ' + sum + ' product is ' + product);