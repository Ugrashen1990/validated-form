//======carAt(x)======

var mystring = 'i will get a job in MNC';
console.log(mystring.charAt(8));
console.log(mystring.charAt(mystring.length-2)); 


//======carCodeAt======

var n = mystring.charCodeAt(0);
console.log(n);
var m = mystring.charCodeAt(2);
console.log(m);
var sum = n + m;
console.log(sum);
//var n = mystring.charCodeAt(mystring.length-2);
//console.log(n);
//console.log(sum.toString());

//======concat (v1,v2,......)======

var cont = 'hello frends';
var cont1 = cont.concat(" \nwelcome to my home");
var final = cont1.concat('\nonce again welcome');
//console.log(final);


//======fromecharcode(c1, c2,......)======

console.log(String.fromCharCode(65,66,67,68,69,70));
console.log(String.fromCharCode(76,89,90,99,123));


//======indexOf======
var mystring = 'namastey friends';
console.log(mystring.indexOf('friends'));


//======lastindexOf(substr, [start])======

var mystring = 'namastey frifefnfds';
var ch= 'e'
var pos1= mystring.indexOf(ch)+1

var substr = mystring.slice(pos1,mystring.length)
console.log(pos1 +'  '+substr + ' '+ mystring.length)
var pos2= substr.indexOf(ch)+1
console.log('2nd position of '+ch + ' =' + (pos1+pos2))

console.log(mystring.charAt(pos));
var c = mystring.slice(7,4)
console.log(c);
console.log(mystring.lastIndexOf('e'));
console.log(mystring.indexOf('m'));




//====== replace (substr replacetext)======

var mystring = 'javascript coder';
console.log(mystring.replace(/coder/i, "developer"));


//======slice (start, end)======

var text = "excellent"
text.slice(0,4)// returns "exce"
text.slice(2,4)//returns "ce"
var c = text.slice(4,6)
console.log(c)


var message = "welcome to felight"
var text = message.split(' ')
console.log( '$' + text[0] + '\n'+'$' + text[1] )
console.log(text[1])
console.log(text[2])
console.log(text)

var octal1 = 012
console.log(octal1)


//======to upper======

message = message.toUpperCase();
console.log(message);


//======to lower======

var upMassage = 'WELCOME TO FELIGHT'
upMassage = upMassage.toLowerCase();
console.log(upMassage);


//====== match method======

var matchMethod = 'my brother is played good cricket on other place';
var matchMethod = matchMethod.match(/her/gi);
console.log(matchMethod);


//======localeCompare======

var string1 = "f";
var string2 = "f";
var c = string1.localeCompare(string2);
console.log(c);


//======string search method======
var str = "visit felight";
var ss = str.search('felight');
console.log(ss);


//======split======
var num = ' hello world';
console.log(num.split('w'));


//======substring======
var sStri = 'i want to be a computer technocrat';
var sStri1 = sStri.substring(0, 16);
console.log(sStri1);
console.log(sStri1.toUpperCase());


//==============
var num1 = 012;
var num2 = 55;
var sum = num1 + num2;
console.log(sum);
