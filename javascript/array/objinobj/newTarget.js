let obj1 = {
    name: 'ugrashen',
    salary: 50000,
}
let obj2 = {};
for(let key in obj1)
     obj2[key] = obj1[key];
     console.log(obj1, obj2);