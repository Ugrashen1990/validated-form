//1 find the name of days from day number===========
var dayNmber = 4;
var dayName = '';
switch(dayNmber){
    case 1:
        dayName = "sunday";
        break;
    case 2:
        dayName = "monday";
        break;
   case 3:
        dayName = "tuesday";
        break;
    case 4:
        dayName = "wednesday";
        break;
    case 5:
        dayName = "thursday";
        break;
    case 6:
        dayName = "friday";
        break;
    case 7:
        dayName = "saturday";
        break;
    default:
        console.log('Invalid input')
}
console.log(dayName);


//===============switch demo2.js===============
var choice = 'x';
switch(choice){
    case 1:
        console.log("case1");
    case 1.2:
        console.log("case1");
    case 'y':
        console.log("case y");
    case 'x':
        console.log("case x");
    case undefined:
        console.log("undefined");
    case null:
        console.log("null");
}


//==================switch demo3.js=======================
var month = 2;
var year = 2021;
var noOfDays;
switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
    case 11:
        noOfDays = 31;
    break;

    case 4:
    case 6:
    case 8:
    case 10:
    case 12:
        noOfDays = 30;
    break;

    case 2:
        if((year%4==0) && (year%100 !=0) || (year%400)==0)
            noOfDays = 29;
        else
            noOfDays = 28;
}
console.log(noOfDays);