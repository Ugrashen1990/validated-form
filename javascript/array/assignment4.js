// leap year within a range

function leapYear(startYear, endYear){
    var yearRange = [];
    for(var i=startYear; i<=endYear; i++){
        yearRange.push(i);
    }

    var newArray = [];
    yearRange.forEach(function(year){
        if(testLeapYear(year))
        newArray.push(year);
    });
    return newArray;
}
function testLeapYear(year){
    if((year%4===0 && year%100 !==0) || (year%100===0 && year%400===0)){
        return year;
    }
    else{
        return false;
    }
}
console.log(leapYear(2000, 2012));