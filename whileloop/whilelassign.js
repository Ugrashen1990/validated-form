//Write a program to find even no from 10 to 100.
/*var i = 10;
while(i<=20){
    console.log(i);
    i+=2;
}


//Write a program to find odd no from 100 to 150
var i = 101;
while(i<=150){
    console.log(i);
    i+=2;
}

//write a program for check if a number is prime or not.

var a = 11;
var i = 1;
var b = 0;
while(a>=i){
    if(a%i==0)
        b++;
    i++;
}
if(b==2)
    console.log(a + ' is prime numbert');
else
    console.log(a + ' is not a prime number');


//write a program to print prime no from 1 to 100


var x = 2;
while(x<= 100){
    var y = 2;
    while(y<=x){
        if(x==y){
            console.log(x);
        }
        if(x%y==0){
            break;
        }
        y++;
    }
    x++;
}

 */

//W.A.P to print fibonacci searise (1st 10 number)
var i = 0, j=1, k;
do{
    console.log(i+ ' ');
    k= i+j;
    i= j;
    j= k;
}
while(i<10);


/*
//Weite a program from 1 to 200 which are divisible by 3 & 6 but not 5.
var i;
for(i=1; i<=200; i++){
    if(i%3==0 && i%6==0 && i%5!==0){
        console.log(i);
    }
}
*/