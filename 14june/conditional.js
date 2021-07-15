//==========conditional method1===========
var accessAlloed;
var age = 19;
if(age>18)
accessAlloed = true;
else
accessAlloed = false;
console.log(accessAlloed);


//==========conditional method2===========
var accessAlloed = (age>18)? true : false;
console.log(accessAlloed);


//==========conditional method2===========
var accessAlloed = age>18 ? true : false;
console.log(accessAlloed);



//==========conditional even/odd===========
var num = 13;
if (num%2==0){
    console.log('even')
}
console.log('odd')
