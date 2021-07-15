var myArray = ['red', 'blue', 'green'];
console.log(myArray);

var myArray1 = ['yellow', 'pink', 'black'];
console.log(myArray1);

// use of concat()
var myFinalArray = myArray1.concat(myArray);
console.log(myFinalArray);

// use of indexOf()
console.log(myFinalArray.indexOf('blue'));

// use of foreach()
myFinalArray.forEach(function(item, index){
    console.log('element is ' + item + ' and index is:- ' + index);
})
console.log(myFinalArray);

// use of push()
myFinalArray.push(3435);
console.log(myFinalArray);

// use of unshift()
myFinalArray.unshift(123);
console.log(myFinalArray);

// use of pop()
myFinalArray.pop();
console.log(myFinalArray);

// use of shift()
myFinalArray.shift();
console.log(myFinalArray);

// use os sort()
myFinalArray.sort();
console.log(myFinalArray);

// use of slice()

var slic = myFinalArray.slice(3, 5);
console.log(slic);