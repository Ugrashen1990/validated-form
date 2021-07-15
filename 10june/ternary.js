var accessAlloed;
var age = 19;

if(age>18)
  accessAlloed = true;
else
   accessAlloed = false;
    console.log(accessAlloed);


var accessAlloed = (age>20) ? true : false;
console.log(accessAlloed);

var accessAlloed = age>20 ? true : false;
console.log(accessAlloed);

var number = 101;
console.log(101%2==0?number+'is even number':number+'is odd number');

var num = -1;
var result = num>0? '+ve number' : num<0? '-ve number' : 'zero'
console.log(result);


var n1 = 9, n2 = 17, max;
max = (n1 > n2) ? n1 : n2;
console.log(max);
