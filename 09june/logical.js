var age = 18;

if(age < 18 || age >30)
    console.log('not eligible');

else
    console.log("Eligible");   
    
    
var age = 18;
if(age >= 18 || age <=30)
    console.log('eligible');
else
    console.log("Not Eligible");    



console.log('------------------')    
var year = 2020;
if((year%4 ==0) && (year % 100 !=0) || (year % 400==0))
    console.log('leap year')
else
    console.log('Not a leao year')    

        
console.log('------------------') 
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && (3==4));
console.log('cat' && 'dog');
console.log(false && 'cat');
console.log('cat' && false);
    
        

console.log('------------------') 
var hour = 12;
var isWeekend = true;
if(hour < 10 || isWeekend){
    console.log(' the office is closed.');

}
else
    console.log('welcome')


//---------- OR Operator ------------
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);    


//------0 is false. 1 is true.----------------
if (1 || 0){
    console.log('yes It\'s true')
}

//==================short-circuit value===========
console.log('------------------')
console.log(null || "user");
console.log(undefined || "user");
console.log(null && "user");
console.log(undefined && "user");
console.log("ugrashen" || "student");
console.log(null || 0);



//===========not!===========
console.log('------------------')
var n1 = !true;
var n2 = !false;
var n3 = !'cat';
console.log(n1, n2, n3);


//===========double not!===========
console.log('------------------')
console.log(!!"not empty string");
console.log(!!null);


//===========!(Not)===========
console.log('------------------')
console.log(!true)
console.log(!0)
