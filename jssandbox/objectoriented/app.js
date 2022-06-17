///create Person constructor, es5

function Person(name, dob){
  this.name = name

  this.birthday = new Date(dob)  //dob is a string, convert to date

  this.getAge = function(){      //common functions of getting age
    const diff = Date.now() - this.birthday.getTime()  //Subtracting two subsequent getTime() calls on newly generated Date objects, give the time span between these two calls; getTime: A number representing the milliseconds elapsed between 1 January 1970 00:00:00 UTC and the given date.
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)   //*1970. common formula of calculating age
  }
}

const brad = new Person('brad', '9-10-1991')

console.log(brad.getAge())     //30




//Object.prototype
//Person.prototype

function Person2(firstName, lastName, dob){
  this.firstName = firstName
  this.lastName = lastName

  this.birthday = new Date(dob)

  // this.getAge = function(){      //common functions of getting age
  //   const diff = Date.now() - this.birthday.getTime()  //Subtracting two subsequent getTime() calls on newly generated Date objects, give the time span between these two calls
  //   const ageDate = new Date(diff)
  //   return Math.abs(ageDate.getUTCFullYear() - 1970)
  // }
}

//getAge: same function for everyone so put into prototype, not directly into object
Person2.prototype.getAge = function(){      
  const diff = Date.now() - this.birthday.getTime() 
  const ageDate = new Date(diff)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

//getFullName: get data
Person2.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`
}

//gets married: manipulate data
Person2.prototype.getsMarried = function(newLastName){
  this.lastName = newLastName
}

const john = new Person2('john', 'doe', '8-12-90')
const mary = new Person2('mary', 'steve', 'March 20 1978')

console.log(mary.getAge())
console.log(mary.getFullName())

mary.getsMarried('smith')
console.log(mary.getFullName())     //mary smith
console.log(mary.hasOwnProperty('firstName'))     //true
console.log(mary.hasOwnProperty('getFullName'))     //false. it's in prototype but not its own property





//constructor inheritence

function Person3(firstName, lastName){
  this.firstName = firstName
  this.lastName = lastName
}

Person3.prototype.greeting = function(){
  return `hello there ${this.firstName} ${this.lastName}`
}

const person1 = new Person3('john', 'doe')
console.log(person1.greeting())


//customer constructor
function Customer(firstName, lastName, phoneNumber, membership){

  Person3.call(this, firstName, lastName) //allow to call the Person3 function

  this.phoneNumber = phoneNumber
  this.membership = membership
}

//inherit Person prototype method to customer; any prototype add to person will be accessible to customer
Customer.prototype = Object.create(Person3.prototype)   //give hello there tom smith

//make customer.prototype return customer, not person
Customer.prototype.constructor = Customer       

//create a seperate greeting for Customer, overwrite the Person greeting prototype
Customer.prototype.greeting = function(){
  return `hello there ${this.firstName} ${this.lastName} welcome to us`
}


const customer1 = new Customer('tom', 'smith', '378393010130', 'standard')
console.log(customer1.greeting())   //hello there tom smith welcome to us





//using object.create as a easier way to do it without using constructor or inheritance

const PersonPrototypes = {
  greeting: function(){
    return `hello there ${this.firstName} ${this.lastName}`
  },

  getsMarried: function(newLastName){
    this.lastName = newLastName
  }
}

const wen = Object.create(PersonPrototypes)
wen.firstName = 'wen'
wen.lastName = 'gu'
wen.age = 24

console.log(wen.greeting())     //hello there wen gu

wen.getsMarried('tan')
console.log(wen.greeting())    //hello there wen tan

//same as above
const xiaowei = Object.create(PersonPrototypes, {
  firstName: {value: 'xiaowei'},
  lastName: {value: 'tan'},
  age: {value: 29}
})

console.log(xiaowei.greeting())     //hello there xiaowei tan







//es6

class Person4{
  constructor(firstName, lastName, dob){
    this.firstName = firstName
    this.lastName = lastName
    this.birthday = new Date(dob)
  }

  greeting(){
    return  `hello ${this.firstName} ${this.lastName}`
  }

  getAge(){
    const diff = Date.now() - this.birthday.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  getsMarried(newLastName){
    this.lastName = newLastName
  }

  static addNumbers(x, y){    //just a stand alone function wanna included in the class
    return x + y
  }
}

const guo = new Person4('ruochen', 'wang', '12-11-1996')

console.log(guo.greeting())        //hello ruochen wang
console.log(guo.getAge())

guo.getsMarried('guan')
console.log(guo)

console.log(Person4.addNumbers(1,2))    //3




//inheritance in es6

class Person5{
constructor(firstName, lastName){
  this.firstName = firstName
  this.lastName = lastName
}

  greeting(){
    return `hello ${this.firstName} ${this.lastName}`
  }
}

//extend Person class. custoemr would be a sub class of person
class Customer2 extends Person5{
  constructor(firstName, lastName, phoneNumber, membership){
    super(firstName, lastName)   //from parent

    this.phoneNumber = phoneNumber
    this.membership = membership
  }

  static getMembershipCost(){
    return 500
  }
}

const guan = new Customer2('qingjian', 'guan', '3849040-1', 'use standard')
console.log(guan.greeting())   //hello qingjian guan. able to everything in person since extending it
console.log(Customer2.getMembershipCost())  //500, not console.log(Person5.getMembershipCost()), cuz extend the person only