//1====================================================
var age = 20;
if(age>15)
    console.log(' Eligible to watch Game of thorns');



//2=======================================================

    var age = 20;
if(age>15)
    console.log(' Eligible to watch Game of thorns');
else
    console.log('Don\'t worry, you only have to wait for' + (age-18) + 'years');

//3=====================================================
var x = 1, y = 2;
if(x=y)
    console.log(true);
else
    console.log(false);
    console.log(x,y)

//4=================================================
if(x!=y)
    console.log(true);
else
    console.log(false);
    console.log(x,y)
//5==============================================
if(Infinity)
    console.log(true);
else
    console.log(false);
    console.log(x,y)
    //================================================
if(-Infinity)
    console.log(true);
else
    console.log(false);
    console.log(x,y)
//6===========================================
if(null)
    console.log(true);
else
    console.log(false);
    console.log(x,y)
//6===========================================
if(undefined)
    console.log(true);
else
    console.log(false);
    console.log(x,y)
//7===========================================
var age = 18;
if(age >= 18 || age <=30)
    console.log('eligible');
else
    console.log("Not Eligible");    


//8================================
var age = 18;
if(age >= 18){
    if(age<=60){
    console.log('you are eligible to do work');
    }
}
else
    console.log("you are Not Eligible to do work");    


//9=========================================
    var num = 100;
    if(num%2==0)
        console.log('even');
    else
        console.log('odd');


    //console.log(num%2==0?)
//=====================================
//9===================elseif..................
    var time = 15;
    var greeting = 'Not set yet';
    if (time<10)
    greeting = 'good morning';
    else if (time<20){
        greeting = 'good day';
    } else {
        greeting= 'gooe eveni8ng';

    }
    console.log(greeting);
//10========================
    let ch = 'b'
    switch(ch){
        case 'a':
            console.log(ch);
        case 'b':
            console.log(ch);
        case 'c':
            console.log(ch);
    }