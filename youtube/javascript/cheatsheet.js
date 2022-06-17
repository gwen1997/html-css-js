//console.log('hello world');
//console.error('this is an error')
//console.warn('this is a warning')

//use const not let, unless gonna reassign the value
// let score
// score = 10 (cannot do that with const)



/* data types: strings, numebers, boolean, null, undefined, symbol

	const name = 'john';    -string
    console.log(typeof name);

	const age = 30.5;
	const isCool = true;    -boolean
	const x = null    -variable but empty
	const y = undefined
	let z;      -just initialize something but not defined */ 



/* concatenation */
	const name = "john"
	const age = 20	

	console.log('my name is ' + name + " and i am " + age)

/*template string */
	const hello = `my name is ${name} and i am ${age}`
	console.log(hello)

/*string method(function associated with an object, need "()")*/
const s = 'hello world'	
console.log(s.length)
console.log(s.toUpperCase())
console.log(s.toLowerCase())
console.log(s.substring(0,5).toUpperCase())
console.log(s.split(''))     //get an array

const t = 'tech, computer, it, code'
console.log(t.split(','))




//arrays - variables that hold multiple values

/* const numbers = new Array(1,2,3,4,5);       - new: a constructor
console.log(numbers) */                       //get an array

const fruits = ['apples', 'oranges', 'pears', 10, true];    //dont have to be the same data type

console.log(fruits[1]) //apple=0

fruits[5] = 'grapes'
console.log(fruits) //add new element

fruits.push('mangos') //add mangos to the end of array
console.log(fruits)

fruits.unshift('strawberries')
console.log(fruits) //add strawberry to the start of array

fruits.pop()
console.log(fruits) //take off the last one

fruits.splice(2, 1)
console.log(fruits) //remove 1 item starting at position 2



console.log(Array.isArray(fruits)) //check if fruits is an array

console.log(fruits.indexOf('apples'))





//object literals

const person = {
	firstName: 'John',
	lastName: 'Doe',
	age: 30,
	hobbies: ['music', 'movies', 'sports'],
	address: {
		street: '50 main st',
		city: 'boston',   //imbedded object: put an object within an object
		state: 'MA'
	}

}

console.log(person.firstName, person.lastName)   //can log more than 1 thing using comma
console.log(person.hobbies[1])
console.log(person.address.city)



//destructuring

const{ firstName, lastName, address: {city}} = person //pull stuff out from person object
console.log(city)
console.log(firstName)

//add properties directly

person.email = 'john@gmail.com'  
console.log(person)


//arrays of object

const todos =[
{   
	id:1,
	text: 'take out trash',        //each {value} in an array = object
	isCompleted: true
},
{   
	id:2,
	text: 'meeting',
	isCompleted: true
},
{
	id:3,
	text: 'dentist',
	isCompleted: false
}
];


console.log(todos)
console.log(todos[1].text)

const todoJSON= JSON.stringify(todos);
console.log(todoJSON)
//send data to a server using jason string - double quotes around all the keys and strings
//  freeformatter.com/json-formatter



// "for" loop: perform an action a set number of times; i++ means increment by 1;
//declare variable; condition for variable; operation with variable each loop

for(let i = 0; i <= 10; i++){
	console.log(i);
}


for(let i = 0; i <= 10; i++){
	console.log(`For Loop Number: ${i}`);
}      //can put a template string in here


// "while" loop: set variable outside the loop

let i = 0;
while(i <= 10) {
	console.log(`While Loop Number: ${i}`);
	i++;
}


//loop through arrray

for(let i = 0; i < todos.length; i++) {
	console.log(todos[i].text);
}

//same as above: for of loop
for (let todo of todos){            /* 'todo' can be anything; just the element to describe single "text" */
	console.log(todo.text)
}


//high order array method: forEach, map, filter


todos.forEach(function(todo){
	console.log(todo.text);             //loops through them
})

todos.forEach(todo => {
	console.log(todo.text);
})

todos.forEach(todo => console.log(todo.text))



const todoText = todos.map(function(todo){
	return todo.text;
});
console.log(todoText);                       //can create a new array from a array - return with an array


const todoCompleted = todos.filter(function(todo){
	return todo.isCompleted === true;
})
console.log(todoCompleted);                  //can create based on a condition




const todoCompleted2 = todos.filter(function(todo){
	return todo.isCompleted === true;
}).map(function(todo){                         //chain on: just get the completed text
	return todo.text
})                            
console.log(todoCompleted2);





//conditionals

const x = 6;
const y = 11;

if(x === 10){
	console.log('x is 10');	  // ===: have to match with data type as well
}else if(x>10) {
	console.log('x is greater that 10')
}else{
	console.log('x is smaller than 10');
}


if(x > 5 || y > 10){
	console.log('x is more than 5 or y is more than 10');
}                                                             //  ||: or


if(x > 5 && y > 10){
	console.log('x is more than 5 and y is more than 10'); 
}                                                             //   &&: and


//   !: not





// ternary operator ("?"): short hand "if" statement. 
//assign variables based on condition, ? = then, : = else (value if true, not true)

const xx = 10;

const color = xx >10 ? 'red' : 'blue'
console.log(color)

//switches: another way to evaluate a condition

switch(color){
	    case 'red':
			console.log('color is red');
			break;
	    case 'blue':
			console.log('color is blue');
			break;
		default:
			console.log('color is not red or blue')
			break;
}







//functions






//addNums function: let the default value for both num1, num2 as 1. if assign 5 and 4, will overwrite default

function addNums(num1 = 1, num2 = 1){        //(...): parameters
	return num1 + num2;
}
console.log(addNums(5,4))



// function addNums2(num1, num2){
// 	console.log(num1 + num2)
// }
// addNums2(3,4)



const addNums3 = num1 => num1 + 5;      // "=>: wanna return"
console.log(addNums3(5))


const addNums4 = (num1 = 1, num2 = 1) => num1 + num2
console.log(addNums(3,2))




/* constructor function: to construct objects; object oriented programming

function Person(firstName, lastName, dob) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.dob = new Date(dob);          // turn the string to a date object
	                                             
	//this.getBirthYear = function(){              //this: property of the objects
	return this.dob.getFullYear();
	}
	this.getFullName = function(){
	return `${this.firstName} ${this.lastName}`//
	}
	}

Person.prototype.getBirthYear = function(){         
return this.dob.getFullYear();                      //put function into prototype
}

Person.prototype.getFullName = function(){
	return `${this.firstName} ${this.lastName}`;
} */


//instantiate object

// const person1 = new Person('wen', 'gu', '12-17-1997')

// console.log(person1.dob.getFullYear())	-->1997
// console.log(person1.getBirthYear())  --->1997          //will have the function in the console.(no need to use them so not the best method)







//CLASSES: does the same thing but prettier way

class Person{
  constructor(firstName, lastName, dob){
	this.firstName = firstName;               //this first name = firstname that's passed in
	this.lastName = lastName;
	this.dob = new Date(dob);
	}                                                   

  getBirthYear(){
	return this.dob.getFullYear();
	}

  getFullName(){
	return `${this.firstName} ${this.lastName}`;
	}

}

//instantiative object
const person1 = new Person('john', 'doe', '12-17-1997');
const person2 = new Person('wen', 'gu', '8-2-1993')
console.log(person1)
console.log(person2.dob)                 //get actual date object
console.log(person2.dob.getFullYear())
console.log(person1.getBirthYear())
console.log(person1.getFullName())
























































