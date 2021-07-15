var myArray = ['sonam', 'rahul', ,'ayush', 'khateeb', 'ugrashen'];
 function f1(x){
     console.log('f1 is called');
 }
 console.log(myArray.findIndex(f1));

 var newArray = myArray.splice(2, 5);
 for(item of newArray)
    console.log(item);

myArray.push('kunal')
console.log(myArray);
console.log(myArray.pop());