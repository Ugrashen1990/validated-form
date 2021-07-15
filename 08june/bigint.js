//=========bigint============
var x = 10;
var y = 10n;
console.log(x, typeof x);
console.log(y, typeof y);

//===========without bigint==========
var x = 5*5;
console.log(x);
var y = x+1;
console.log(y);

//=================
var x = 5**5;
console.log(x);
var y = x+1;
console.log(y);



//==========with bigint==========
var x = 5n**6n;
console.log(x);
var y = x+1n;
console.log(y);