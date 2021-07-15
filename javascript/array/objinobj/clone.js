
var x ={name: 'neha', city: 'patna'};

var y ={};

for(var key in x){
    
    y[key] = x[key];

    y.name = 'nisha';

    console.log(x);
    console.log(y);
  
}
// example of clonning

var user = {
    name: 'vinay Hoysala',
    age: 1000
};

var clone = {};

for (let key in user){
    clone[key] = user[key];
}

console.log(user);
console.log(clone);
console.log('==========')

clone.name = 'Bahubali';
console.log(user);
console.log(clone);


// using object.assign()

var user = {
    name: 'vinay Hoysala',
    age: 1000
};

var clone = {};

Object.assign(clone,user)

console.log(user);
console.log(clone);
console.log('==========')

clone.name = 'Bahubali';
console.log(user);
console.log(clone);

// more than one object can assign
var user = {name: 'ugrashen'};

var permission1 = {canView: true};
var permission2 = {canEdit: true};

Object.assign(user, permission1, permission2);
console.log(user);



//coppy property name  overwrite
var user = {name: 'ugrashen'};


var loggedUser = {name:'kumar'};
var permission1 = {canView: true};
var permission2 = {canEdit: true};

Object.assign(user,loggedUser, permission1, permission2);
console.log(user);