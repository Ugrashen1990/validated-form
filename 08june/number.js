//======Number data type======
var int = 986;
var float = 986.54;
var hex = 0xfff;
var exponential = 6.76e7;
var octal = 090;

console.log(int, typeof int);
console.log(float, typeof float);
console.log(hex, typeof hex);
console.log(exponential, typeof exponential);
console.log(octal, typeof octal);

//======special symbole======
console.log(10/0);
console.log(-10/0);
console.log(10/-0);
var x = NaN;
console.log(typeof x);
console.log(x);


//======property======
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NaN);
console.log(Number.arguments);//
console.log(Number.caller);//
console.log(Number.prototype);//


//===============Number Method=====================


//=========toExponential========
var num = 100;
console.log(num.toExponential(2));


//=========toFixed========
var num = 654;
console.log(num.toFixed(2));


//=========toLocalString========
var num = 100;
console.log(num.toLocaleString());


//=========toPrecision========
var num = 100;
console.log(num.toPrecision(4));


//=========toString========
var num = 100;
console.log(num.toString());


//=========valueOf========
var num = new Number(100);
console.log(num.valueOf());