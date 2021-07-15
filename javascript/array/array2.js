myArray = new Array(10);

console.log(myArray.length);       //10
//myArray[1000] = "hello";
console.log(myArray[1000]);
myArray[100]= "yo yo";
myArray[0]= 111;

console.log(myArray[0]);           // 111
console.log(myArray[100]);         //yo yo
console.log(myArray.length);       // 101
console.log(myArray[200]);         // undefined
console.log(myArray.length);       //101
console.log(myArray[-1]);          //undefined
console.log(myArray[80]);          //undefined

myArray[-1] = 'mo mo';
console.log(myArray[-1]);          //mo mo
console.log(myArray.length);       //101