var user = {name: 'ugrashen'};


var loggedUser = {name:'kumar'};
var permission1 = {canView: true};
var permission2 = {canEdit: true};

Object.assign(user,loggedUser, permission1, permission2);
console.log(user);