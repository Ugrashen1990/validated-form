// TO PRINT EVEN NUMBER WITHIN A RANGE.
/*
var from = 1;
var to = 100;


for(var i=from; i<=to; i++){
    if(i%2==0)
        console.log(i);
}

var i = from;
while(i<=to){
    if(i%2==0)
    console.log(i);
    i++;
}

var i = from;
do{
    if(i%2==0)
    console.log(i);
    i++;
}while(i<=to)

// if we want to print in one short
var evenNUm = '';
for(var i=from; i<=to; i++)
    if(i%2==0)
    evenNUm = evenNUm + i + '\t';
console.log(evenNUm)

// TO CHECK THE NUMBER IS PRIME OR NOT.
var num = 13;
var isPrime = true;
var i;
if(num==1)
    isPrime = false;

for(i=2; i<num; i++){
    if(num%i==0)
    isPrime = false;
    break;
}
if(isPrime)
    console.log(num + ' is a prime number');
else
    console.log(num + ' is  not a prime number')


//TO PRINT PRIME NO WITHIN A RANGE.
var from = 1;
var to = 100;

for(var j=from; j<=to; j++){
    var isPrime = true;
    if(j==1)
        isPrime = false;

for(var i=2; i<j; i++)
    if(j%i==0){
    isPrime= false;
    break;
    }
    if(isPrime)
    console.log(j);
}

//TO PRINT FIRST 10 FIBONACCI SERIES (0 1 1 2 3 5 8) OR A GIVEN  RANGE
var i = 0;
var j = 1;
var k;
var to = 30;
while(i<to){
    console.log(i + ' ');
    k= i+j;
   
    i = j;
    j = k;
    
}

function add(num1, num2){
    sum = num1 + num2;
    return sum;


}
let result1 = add(5,6);
console.log(result1);
let result2 = add(300,456);
console.log(result2);
console.log(add(5,7));




function isEven(num){
   if( num%2==0)
        return true;
    else
        return false;
}

console.log(isEven(45))

function multi3(){

    var from = 300;
    var to = 3;
    var ans = '';
    for(var i=from; i>=to; i--){
        if(i%3==0)
            ans = ans + i + '\n'
        //return ans;   
    }
    return ans;
}

console.log(multi3());
*/
var i = 5;
var i = 6;
console.log(i);
