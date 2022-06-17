console.log(true)      //log boolean
console.log('hello')     //log string
console.log(123)        //log number
console.log([1,2,3,4])    //log array
console.log({a:1, b:2})    //log object

console.table({a:1, b:2})   //log table

console.error('this is error')
// console.clear()
console.warn('this is a warning')

console.time('hello')
console.log('hello')
console.log('hello')
console.log('hello')
console.log('hello')
console.timeEnd('hello')




//var, let, const


// var/let name = 'john'
// console.log(name)
// name = 'wen'        //can reassign variables using var or let
// console.log(name)

// var/let greeting;      //init variable but undefined
// greeting = 'hello'
// console.log(greeting)

//const's value cannot be reassigned; have to assign a value




//variables: cannot start with number; can include letters, numbers, _, $;
//using camel case: firstName



//primitive data types
// String, number, boolean, null, undefined, symbols

//string
const name = 'wen'

//boolean
const haskids = true;

//null
const car = null;   //type of null = object
//undefined
let test

//symbol
const sym = Symbol()


console.log(typeof name)


//reference data types and objects
//arrays, object literals, functions, dates, ...

//array
const hobbies = ['music', 'movies']

//object literal: have more than one value pair
const address = {
  city: 'boston',
  state: 'MA'
}

//date
const today = new Date()
console.log(today)


console.log(typeof today)     //object




//type conversion
let val   

//convert number to string
val = 5
val = String(5)
val = String(4 + 4)

//convert boolean to string
val = String(true)

//convert date to string
val = String(new Date())

//convert array to string
val = String([1,2,3,4])

//toString(), same as above
val = (5).toString()
val = (true).toString()


//convert string to numbers
val = Number('5')

//convert boolean to numbers
val = Number(true)  //gives 1
val = Number(false)  //gives 0

//convert null to numbers
val = Number(null)  //gives 0

//convert string or array to numbers?
//gives NaN (NOT A NUMBER)

//parseInt(), same as above (get number from string)
val = parseInt('100.3')     //gives 100, integers
val = parseFloat('100.3')    //gives 100.3， decimals


console.log(val)
console.log(typeof val)
console.log(val.length)        //length: only work on string
console.log(val.toFixed(2))       //toFixed: only work on numbers, specify decimals (2 decimals)  gives 100.30


const val1 = String(5)
const val2 = 6
const sum = val1 + val2
console.log(sum)         //get string '56'. to get number 56, use Number(val1 + val2)
console.log(typeof sum)



//math

const num1 = 100
const num2 = 50
let val3

val3 = num1 * num2
val3 = num1 - num2
val3 = num1 / num2
val3 = num1 % num2
val3 = num1 + num2

//math object
val3 = Math.PI    //3.14159
val3 = Math.E     //2.71
val3 = Math.round(2.4)   //2
val3 = Math.ceil(2.4)     //3
val3 = Math.floor(2.8)    //2
val3 = Math.sqrt(64)    //8
val3 = Math.abs(-3)     //3
val3 = Math.pow(8, 2)   //64 
val3 = Math.min(2,3,-4,33,2,1)   //-4; max
val3 = Math.random()
val3 = Math.floor(Math.random() * 20 + 1)   //get a random num between 1 to 20

console.log(val3)





//string and concatenation

const firstName = 'wen'
const lastName = 'gu'
const age = 24
const str = 'hello there my name is wen'

let val4

val4 = firstName + lastName  //wengu
val4 = firstName + ' ' + lastName  //wen gu

//append: addon
val4 = 'brad'
val4 += 'tra'    //brad tra

//concatenation
val4 = 'hello, my name is ' + firstName + ' and i am ' + age

//escaping
val4 = 'that\'s awsome, i can\'t wait'   //take ' power away of ending a string;    or "  ''   "

//length
val4 = firstName.length

//concat
val4 = firstName.concat(' ', lastName)    //wen gu

//change case
val4 = firstName.toUpperCase()
val4 = firstName.toLowerCase()

//indexOf
val4 = firstName[0]   //w
val4 = firstName.indexOf('f')  //-1 : not exist
// val4 = firstName.lastIndexOf('l')   //if there are 2 l, give the index of last one

//charAt
val4 = firstName.charAt('2')   //n
val4 = firstName.charAt(firstName.length - 1)    //always give the last character of the string

//substring
val4  = firstName.substring(0, 2)      //we
//slice
val4 = firstName.slice(0, 2)    //we
val4 = firstName.slice(-1)    //start from the back and take the last one

//split
val4 = str.split(' ')   //get an away seperate by space

//replace
val4 = str.replace('wen', 'xiaowei')   //hello there my name is xiaowei

//includes
val4 = str.includes('hello')    //true

console.log(val4)





//template literals(strings)

const name2 = 'wen'
const age2 = 24
const job2 = 'web developer'
const city2 = 'vancouver'
let html

function hello(){
  return 'hello'
}

html = `
  <ul>
    <li>name: ${name2}</li>
    <li>age: ${age2}</li>
    <li>job: ${job2}</li>
    <li>city: ${city2}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'over 30' : 'under 30'}</li>
  </ul>   
`
document.body.innerHTML = html   //get output at chrome




//array methods

//2 ways of creating arrray
const numbers = [43,56,33,23,44,36,5]
const numbers2 = new Array(22,45,35,22)    //constructor

const fruits = ['apple', 'banana', 'orange', 'pear']
const mixed = [22, 'hello', true, undefined, null, {a:1, b:1}, new Date]

let val5

//array length
val5 = numbers.length   //7

//check if is array
val5 = Array.isArray(numbers)    //true

//get single value
val5 = numbers[3]    //23

//insert into array
numbers2[2] = 100      //22,100,35,22

//find index
val5 = numbers2.indexOf(22)     //0

//add to end of array
numbers2.push(20)

//add to front of array
numbers2.unshift(11)

//take off from end
numbers2.pop()

//take off from front
numbers2.shift()

//take out specific
numbers.splice(1,1)     //take out from position1, take out 1 value

//reverse array
numbers.reverse()

//concatenate array
val5 = numbers.concat(numbers2)   //both arrays put together

//sort alphabetic
val5 = fruits.sort()    //alphabetical order

//sort numbers: use compare function. if wanna reverse sort, do num2 > num1
val5 = numbers.sort(function(number1, number2){
  if (number1 > number2){
    return 1
  }else{
    return -1;
  }
})

// //find first one under 50
// function under50(num){          
//   return num < 50
// }
// val5 = numbers.find(under50)

console.log(numbers)
console.log(numbers2)
console.log(val5)






//define object literal

const person = {
  firstName: 'steve',
  lastName: 'smith',
  age: 30,
  email: 'steve@udioListener.com',
  hobbies: ['music', 'sport'],
  address: {
    city: 'miami',
    state: 'florida'
  },
  getBirthYear: function(){
    return 2022 - this.age;       //inside an object, use 'this' keyword pertaining the object
  }
}

let val6

val6 = person

//get specific value
val6 = person.firstName    //steve
val6 = person.hobbies[1]     //sport
val6 = person.address.state   //florida. all person.address.['city']
val6 = person.getBirthYear()

console.log(val6)



//arrays of object

const people = [
  {name: 'john', age: 30}, 
  {name: 'mike', age: 60}
]

//loop through
for(let i = 0; i < people.length; i++){
  console.log(people[i].name);
}

people.forEach(function(ppl){
  console.log(ppl.name)
})






//date and time

const today2 = new Date()      //type: object. get today's date by default. if wanna get string, today2.toString()
console.log(today2)
console.log(today2.getMonth())    // give 5, = june (zero based)
console.log(today2.getDate())     //3   (Jun3)
console.log(today2.getDay())    //5   (start with Sunday, Friday)
console.log(today.getFullYear())    //2022
console.log(today2.getMinutes())   //18  (1:18pm)
console.log(today2.getTime())    //A number representing the milliseconds elapsed between 1 January 1970 00:00:00 UTC and the given date


let birthday
birthday = new Date('9-10-1998 11:25:00')
birthday = new Date('September 10 1981')
birthday = new Date('9/10/1981')

birthday.setMonth(2)   //month is zero based
birthday.setDate(12)  
birthday.setFullYear(1997) //give Mar12, 1997
birthday.setHours(3)
birthday.setMinutes(30)
birthday.setSeconds(25)    //3:30:25

console.log(birthday) 





//if statement

// if(something){
//   do something
// }else{
//   do something else
// }


const id = 100

//equal to
if(id === 100){      //single equal: assignment operator; ==: value match but type doesnt matter; ===:type must match as well
  console.log('correct')
}else{
  console.log('incorrect')
}    

//not equal
if(id !== 100){      //!==: type + value must match
  console.log('correct')
}else{
  console.log('incorrect')
}   

//test if id has been defined
if(typeof id !== 'undefined'){
  console.log(`the id is ${id}`)    //the id is 100
}else{
  console.log('no id')
}

//greater than or less than
if(id > 200){     
  console.log('correct')
}else{
  console.log('incorrect')
}   

//if else
const color = 'red'

if(color === 'red'){
  console.log('color is red')
}else if(color === 'blue'){
  console.log('color is blue')
}else{
  console.log('color is not red or blue')
}

//logical operator: && = and;   || = or
const name3 = 'steve'
const age3 = 20

if(age > 0 && age < 12){
  console.log(`${name3} is a child`)
}else if(age >= 13 && age <= 19){
  console.log(`${name3} is a teenager`)
}else{
  console.log(`${name3} is an adult`)
}

//ternary operator: ? = then, : = else
console.log(id === 100 ? 'correct' : 'incorrect')        //correct

//switch: another way to do if else
switch(color){
  case 'red':
    console.log('color is red')
    break
  case 'blue':
    console.log('color is blue')
    break
  default:
    console.log('color is not red or blue')  
}

switch(new Date().getDay()){
  case 0:
   console.log('Sunday')
    break
  case 1:
   console.log('Monday')
    break
  case 2:
   console.log('Tuesday')
    break
  case 3:
   console.log('Wednesday')
    break
  case 4:
   console.log('Thursday')
    break
  case 5:
   console.log('Friday')
    break
  case 6:
   console.log('Saturday')
    break
}





//function declarations
function greet(firstName = 'wen', lastName = 'gu'){         // (...): parameters; wen gu: default value
 return 'hello ' + firstName + ' ' + lastName
}
console.log(greet())          //hello wen gu
console.log(greet('john', 'doe'))        //hello john doe


//function expressions
const square = function(x = 3){     //anonymous function
  return x * x
}
console.log(square())      //9
console.log(square(8))        //64


//immediately invokable function expressions - iifes = function declare and run at the same time

// (function(name){
//   console.log('hello' + name)
// })('brad')


//property methods: function put into an object
const todo = {
  add: function(){
    console.log('add todo')
  },
  edit: function(id){
    console.log(`edit todo ${id}`)
  }
}
//same as above
todo.delete = function(){
  console.log('delete todo')
}

todo.add()    //add todo
todo.edit(22)    //edit todo 22
todo.delete()    //delete todo




//for loop
for(let i = 0; i <= 10; i++){
  console.log('number ' + i)           //number 1-10
}

for(let i = 0; i < 10; i++){
  if(i === 2){
    console.log('2 is my favorite number')
    continue                                //stop the loop here so no number 2 but '2 is my favorite number'
  }
  if(i === 5){
    console.log('stop the loop')
    break                            //break out at number 4
  }        
  console.log('number ' + i)         
}


//while loop. same as for loop
let i = 0;
while(i < 10){
  console.log('number ' + i)
  i++
}

//do while loop
// let i = 0;
// do{                            //gonna run once anyway. if put i = 100, get number 100
//   console.log('number ' + i)
//   i++
// }
// while(i < 10)


//loop through array
const cars = ['ford', 'bmw', 'honda', 'toyota']

for(let i = 0; i < cars.length; i++){
  console.log(cars[i])
}

//forEach loop
cars.forEach(function(car, index, array){
  console.log(car)                 //same as above
  console.log(`${index} : ${car}`)    //0:ford, 1:bmw
  console.log(array)       //loop through the array each time
})

//map
const users = [
  {id: 1, name: 'john'},
  {id: 2, name: 'ann'},
  {id: 3, name: 'sarah'}
]

const ids = users.map(function(user){
  return user.id
})
console.log(ids)      // [1,2,3]


//for in loop, generally used in object - key value pairs
const user = {
  firstName: 'john',
  lastName: 'doe',
  age: 40
}

for(let x in user){
  console.log(x)         //only give the keys(firstName, last.., age..)
  console.log(`${x} : ${user[x]}`)      //give key value pairs
}





//window methods / object / peoperties

//alert
// window.alert('hello world')

//prompt
// const input = prompt()
// alert(input)

//confirm
// if(confirm('are you sure')){
//   console.log('yes')
// }else{
//   console.log('no')
// }

let val7

//outer height and width
val7 = window.outerHeight   //from outter edges
val7 = window.outerWidth
val7 = window.innerHeight  //eg: inside scrollbar
val7 = window.innerWidth

//scroll points
val7 = window.scrollY       //show the points if there is a scrollbar; X

//location object
// val7 = window.location     
// val7 = window.location.hostname       
// val7 = window.location.port       
// val7 = window.location.href       
// val7 = window.location.search       

//redirect 
// val7 = window.location.href = 'http://google.com'    //when refresh, redirected to google

//reload
// val7 = window.location.reload     //constanlty reloading

//history object 
val7 = window.history.go(-1)      //go to previous site
val7 = window.history.length       //how many sites behind

//navigator object
val7 = window.navigator
val7 = window.navigator.appName
val7 = window.navigator.appVersion
val7 = window.navigator.platform
val7 = window.navigator.vendor
val7 = window.navigator.language

console.log(val7)




//global scope
var a = 1
let b = 2
const c = 3

function test1(){      //different variables cuz they are in different scope
  var a = 4
  let b = 5
  const c = 6
  console.log('function scope: ', a, b, c)     //get 4, 5, 6
}
test1()

//block level scope: let and const
if(true){
  var a = 4
  let b = 5
  const c = 6
  console.log('if scope: ', a, b, c)       //get 4, 5, 6
}

console.log('global scope: ', a, b, c)     //get 4, 2, 3. use let and const. var can mess up if have vaiable at global scope and in some block some variable have the same name

for(var a = 0; a < 10; a++){       
  console.log(`loop: ${a}`)
}
console.log('global scope: ', a, b, c)   //get 10 2 3. var change the value of global a
