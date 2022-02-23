//1. Javascript prototype: 

function Bike(model,color){
	this.model = model,
	this.color = color,

	this.getDetails = function(){
		return this.model+' bike is ' + this.color
    }
}
var bikeObj1 = new Bike('BMW', 'BLACK');

var bikeObj2 = new Bike('BMW', 'WHITE');

console.log(bikeObj1.getDetails());
console.log(bikeObj2.getDetails());

console.log(bikeObj1,bikeObj2);



//2. Closure

var myModule = (function() {
    'use strict';
 
    var _privateProperty = 'Hello World';
     
    function _privateMethod() {
        console.log(_privateProperty);
    }
     
    return {
        publicMethod: function() {
            _privateMethod();
        }
    };
}());
  
myModule.publicMethod();                    // outputs 'Hello World'   
console.log(myModule._privateProperty);     // is undefined      
myModule._privateMethod();                  // is TypeError protected by the module closure



//3. Currying

var add =   function (a){
    return function(b){
          return function(c){
                 return a+b+c;
                 }        
           }
     }
console.log(add(2)(3)(4)); //output 9
console.log(add(3)(4)(5)); //output 12



//4. Memoization

const memoizedAdd = () => {
    let cache = {};
    return (value) => {
        if (value in cache) {
            console.log('Fetching from cache');
            return cache[value];
        } else {
            console.log('Calculating result');
            let result = value + 10;
            cache[value] = result;
            return result;
        }
    }
}
// returned function from memoizedAdd
const newAdd = memoizedAdd();
console.log(newAdd(9)); //output: 19 calculated
console.log(newAdd(9)); //output: 19 cached


//5. Callbcak

function greet(name) {
    console.log(`Hello ${name}`)
}

function greetMe(greetFn) {
    const name = 'Tom';
    greetFn(name);
}

greetMe(greet);


//6. Call, Apply and Bind

var obj={
    num : 2
 }
 var add = function(num2,num3,num4){
    return this.num + num2 + num3 + num4;
 }
 var arr=[3,4,5];
 //Call method 
 console.log(add.call(obj,3,4,5));  //Output : 14
 //Apply method
 console.log(add.apply(obj,arr));   //Output : 14
 //bind Method
 var bound = add.bind(obj);
 console.log(bound(3,4,5));         //output : 14 


 //7. Polymorphism

 var employee = new Employee('raja');
//override function
//this method going to execute
Employee.prototype.getDetails = function() {
    return this.name.toUpperCase();
}
console.log(employee.getDetails()); //outPut: RAJA
//object and prototype function
function Employee(name) {
    this.name = name;
}
Employee.prototype.getDetails = function() {
    return this.name;
}