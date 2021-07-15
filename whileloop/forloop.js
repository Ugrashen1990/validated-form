//infinity loop 

for (; ;){
    console.log(' infinity loop');

}

//===========================
var i;
for(i=0; i<10; i++){
    console.log(i);
}
console.log(i);



//=======Even number fron 10 to 20
var numStart = 10;
var numEnd = 20;
for(var i= numStart; i<=numEnd; i++){
    if(i%2==0)
    console.log(i);
}


//check if number is prime or nit 
var num = 4;
for(var i = 2; i<=parseInt(num/2); i++){
    if(num%i==0)
    break;
}
if(i==parseInt(num/2))
    console.log(num + ' is prime number');
else
    console.log(num + ' is not prime number')
//output is wrong


//print prime number in range
var from = 1;
var to = 100;
for(var i=from; i<=to; i++){
    for(var j=2; j<parseInt(i/2); j++){
        if(i%j==0)
        break;
    }
    if(j==parseInt(i/2))
        console.log(i);
}


//print prime number from 10 to 20 using different approach
var from = 10;
var to = 20;
var i;
var j;
for(i=from; i<=to; i++){
    var count=0;
    for(j=i; j>=1; j--){
        if(i%j==0)
        count++;
    }
    if (count==2)
        console.log(i)
}


//some tricky question==================1
for(var i=0; i<10; i++){
    console.log(i);
}

//some tricky question==================2
var i=0;
for(i++; i++<10; i++){
    console.log(i);
}
console.log('i:' +i);




//some tricky question==================3
var i = 0;
for(;i<10;){
    console.log(i);
}



//some tricky question==================4
var i=0;
for(;'';){
    console.log("yo yo");
}
for(;'felight io';){
    console.log('i love felight');
}
for(;-1;){
    console.log("yo yo");
}
