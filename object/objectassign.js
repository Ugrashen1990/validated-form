
//1.Creating object uding object literal.

var myCar = {
                name:"Tiago",
                model:2019,
                colour:"orange",
                speed:0
            };

console.log(myCar.name, myCar.model);
console.log(myCar.model);
console.log(myCar.colour);

console.log('==============================');

console.log(myCar["name"]);
console.log(myCar["model"]);
console.log(myCar["colour"]);
console.log(myCar);


//2.creating object using object literal.

var myCar = { };    // empty object

console.log(myCar);

//3. function in an object

var myCar = {
                name:"Tiago",
                model:2019,
                colour:"orange",
                speed:0,
                move:function(){
                    this.speed++;
                }
};

myCar.move();myCar.move();myCar.move();
console.log(myCar.speed);



//================= Assignment==============

//Created 2 objects car1, car2 with 8 properties 
//and 3 behaviours using object literal.


var car1 = {
                name:"Toyota Fortuner.",
                model:2018,
                colour:"silver",
                powerSteering:"yes",
                seatbeltsReminder:"yes",
                rps:2,                                     //reverse parking sensors
                speed:0,
                autoEmBr:"no",                             //auotmatic emergency breaking

                 
                maxSpeed:function() {
                    this.speed++;
                    
                },
                carName:function(){
                    console.log("your are slelcted", this.name);
                },
                iscolour1:function(){
                    console.log(this.colour, ' is the colour of toyota fortuner.');
                }
                
};

var car2 = {
                name:"Hyundai Creta.",
                model:2019,
                colour:"red",
                powerSteering:"yes",
                seatbeltsReminder:"yes",
                rps:1,                                     //reverse parking sensors
                speed:0,
                autoEmBr:"yes",                             //auotmatic emergency breaking
                carName:function(){
                    console.log("your are slelcted", this.name);
                },
                iscolour2:function(){
                    console.log(this.colour, " is the colour of hyundai Creta.");
                }

};
car1.maxSpeed();
car1.carName();
car1.iscolour1();
car2.carName();
car2.iscolour2();

console.log(car1.model)
console.log(car2.model);


// Store & display 5 employee details with 5 properties 
//and 2 behaviours using object literal.


var emp1 ={
                id:101,
                name:"kunal",
                age:28,
                gender:"Male",
                salary:50000,
                showRecords:function(){
                    console.log(this.id, this.name, this.salary);
                },
                work:function(){
                    console.log(this.name, " is working in HR department");

                },
                bonus:function() {
                    var extra = 5000;
                    if(this.age>25)
                    total = this.salary + extra;
                    console.log(total);
                    //return total;
                },

};
var emp2 ={
                id:102,
                name:"suman",
                age:27,
                gender:"female",
                salary:60000,
                showRecords:function(){
                    console.log(this.id, this.name, this.salary);
                },
                work:function(){
                    console.log(this.name, " is working in It department");

                },
};
var emp3 ={
                id:103,
                name:"vikash",
                age:45,
                gender:"Male",
                salary:75000,
                bonus:0,
                showRecords:function(){
                    console.log(this.id, this.name, this.salary);
                },
                work:function(){
                    console.log(this.name, " is working in HR department");

                },

};
var emp4 ={
                id:104,
                name:"nishant",
                age:28,
                gender:"Male",
                salary:65000,
                bonus:0,
                showRecords:function(){
                    console.log(this.id, this.name, this.salary);
                },
                work:function(){
                    console.log(this.name, " is working in HR department");

                },


};
var emp5 ={
                id:105,
                name:"priya",
                age:25,
                gender:"female",
                salary:55000,
                bonus:0,
                showRecords:function(){
                console.log(this.id, this.name, this.salary);
            },
            work:function(){
                console.log(this.name, " is working in it department");

            },

};

//emp1.work();
emp1.bonus();
console.log(emp3.name);
console.log(emp3.salary);
console.log(emp3.bonus);
emp1.showRecords();
emp1.work();
emp2.showRecords();
emp2.work();
emp3.showRecords();
emp3.work();
emp4.showRecords();
emp4.work();
emp5.showRecords();
emp5.work();



