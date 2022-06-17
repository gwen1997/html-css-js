//document object

let val

val=document   //give entire <html>...</html>
val=document.all.length   //there are 43 element in the dom
val=document.all[0]   //give html
val=document.head
val=document.body
val=document.doctype
val=document.domain
val=document.URL
val=document.characterSet
val=document.contentType    // text/html

val=document.forms[0].id     //task-form

val=document.links[0].className
val=document.links[0].classList[0]

val=document.images
val=document.scripts[2].getAttribute('src')


let scripts = document.scripts
let scriptsArray = Array.from(scripts)    //make scripts an array from collection

scriptsArray.forEach(function(script){    //forEach only applicable to array
  console.log(script.getAttribute('src'))
})


console.log(val)





// //dom selector

//single element selector

//getElementById
const taskTitle = document.getElementById('task-title')

//get things from element
console.log(taskTitle.id)   //task-title
console.log(taskTitle.className)   //test

//change styling
console.log(taskTitle.style.background = 'coral')   
console.log(taskTitle.style.padding = '5px')   
// console.log(taskTitle.style.display = 'none')   

//change content
console.log(taskTitle.textContent = 'task list!')  
console.log(taskTitle.innerText = 'task list!!')  
console.log(taskTitle.innerHTML = '<span style="color:red">Task!!!</span>')

//querySelector
console.log(document.querySelector('#task-title'))
console.log(document.querySelector('.card-title'))
console.log(document.querySelector('h5'))      //only target the first one
// document.querySelector('li').style.color = 'green'
document.querySelector('ul li').style.color = 'green'
document.querySelector('li:last-child').style.color = 'blue'
document.querySelector('li:nth-child(3)').style.color = 'pink'
document.querySelector('li:nth-child(odd)').textContent = 'yeah'  //only target the first one cuz single element selector



//multiple elements selector

//document.getElement-----s-----By ClassName
const items = document.getElementsByClassName('collection-item')   //global scale
console.log(items[0])
items[0].style.background='yellow'

const listItems = document.querySelector('ul').getElementsByClassName('collection-item') //not global scale but only the collection-item under ul

//document.getElement-----s-----ByTagName
let lis = document.getElementsByTagName('li')

//convert html collection to array
let lisArray = Array.from(lis)
lisArray.reverse()
console.log(lisArray)

lisArray.forEach(function(li){
  console.log(li.className)
  li.textContent = 'hello'   //change all the content
})


//querySelectorAll - give nodelist, not html collection
const items2 = document.querySelectorAll('ul.collection li.collection-item') //same as put li only

items2.forEach(function(item){
  console.log(item.className)      //don't have to convert to array (lis = Array.from(lis)) as it's nodelist 
  item.textContent = 'hello~~' 
}) 

const liOdds = document.querySelectorAll('li:nth-child(odd)')
const liEvens = document.querySelectorAll('li:nth-child(even)')

liOdds.forEach(function(liOdd){
  liOdd.style.background = '#ccc'
})
//same as above
for(let i = 0; i < liEvens.length; i++){
  liEvens[i].style.background = '#f4f4f4'
}

console.log(items2)




let val2

const list2 = document.querySelector('ul.collection')
const listItem2 = document.querySelector('li.collection-item:first-child')

//get child nodes
val = list2.childNodes       //give li + textnode(line-break)  nodelist
val = list2.childNodes[0].nodeName      //text
val = list2.childNodes[0].nodeType     //3
//1 - element
//2 - attribute
//3 - textnode
//8 - comment
//9 - document itself
//10 - doctype

//firstChild & lastChild
val = list2.firstChild                  //give text

//get children element nodes    
val = list2.children                  //give li only       html collection
val = list2.children[1].textContent = 'hello~'

//firstElementChild & lastElementChild
val = list2.firstElementChild
//count child element
val = list2.childElementCount         //give 5

//children of children
val = list2.children[3].children[0]            //give the 'a' tag



//get parent node
val = listItem2.parentNode       //give ul
val = listItem2.parentElement     //give ul

//parents of parents
val = listItem2.parentElement.parentElement  //give card-action


//get next/previous sibling
val = listItem2.nextSibling     //give text

//get next/previous sibling element node
val = listItem2.nextElementSibling.previousElementSibling.nextElementSibling    //give next li

console.log(val2)





//create element
const li = document.createElement('li')

//add class to the created li
li.className = 'collection-item'     //li.id...; li.setAttribute('title', 'New Item')

//create textnode and append
li.appendChild(document.createTextNode('hello world'))

//create the link element
const link = document.createElement('a')

// add class to created link
link.className = 'delete-item secondary-content'

//add icon html to the link. there is no textnode to add
link.innerHTML = '<i class="fa fa-remove"></i>'

//append link to li
li.appendChild(link)

//append li to ul
document.querySelector('ul.collection').appendChild(li)

console.log(li)




//replace element


// //create element
// const newHeading = document.createElement('h2')

// //add id
// newHeading.id = 'task-title'

// //create textnode
// newHeading.appendChild(document.createTextNode('task list'))

// //get the old h5 heading we wanna replace
// const oldHeading = document.getElementById('task-title')

// //parent element of old h5 heading
// const cardAction = document.querySelector('.card-action')

// //replace
// cardAction.replaceChild(newHeading, oldHeading)



//remove element


const lis3 = document.querySelectorAll('li')
const list3 = document.querySelector('ul')

//remove first list item
lis3[0].remove()

//remove third child element of list
list3.removeChild(lis3[2])




// //classes and attributes
// const firstLi = document.querySelector('li:first-child')
// const link2 = firstLi.children[0]

// console.log(link2.className)         //delete-item secondary-content
// console.log(link2.classList[0])        //delete-item
// console.log(link2.classList.add('test'))
// console.log(link2.classList.remove('test'))

// console.log(link2.getAttribute('href'))    //#
// console.log(link2.setAttribute('href', 'http://google.com'))
// console.log(link2.setAttribute('title', 'google'))
// console.log(link2.hasAttribute('href'))        //true
// console.log(link2.removeAttribute('title'))





//addEventListener


// anonymous function
document.querySelector('.clear-tasks').addEventListener('click', function(e){  // what's gonna happen when run a click event on the clrar-tasks object
  e.preventDefault()     //prevent the default link behavior
})

//name function: recommended
document.querySelector('.clear-tasks').addEventListener('click', onClick)

function onClick(e){
  e.preventDefault()

  console.log('clicked')
  console.log(e)
  console.log(e.type)      //click
  console.log(e.offsetX)      //coords event relative to the element itself (button)
  console.log(e.clientY)      //coords event relative to the window
  console.log(e.target)    //give the actual element (html). <a class="clear-tasks btn black" href="">Clear Tasks</a>
  console.log(e.target.className)     //clear-tasks btn black
  console.log(e.target.classList)     //get classes as collection

  e.target.textContent = 'hello'
}




//mouseEvent

const clearBtn = document.querySelector('.clear-tasks')
const card = document.querySelector('.card')
const heading1 = document.querySelector('h5')

// clearBtn.addEventListener('click', runEvent)
card.addEventListener('mouseover', runEvent)
//dblclick; mousedown; mouseup; 
//mouseenter; mouseleave (only fire off when enter main element); 
//mouseover; mouseout (fire off when going into another element inside the main element);
//mousemove (anywhere inside the element)

function runEvent(e){
  e.preventDefault()

  console.log(`event type: ${e.type}`)

  heading1.textContent = `mouseX: ${e.offsetX} mouseY: ${e.offsetY}`

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
}



//form and input event

const form = document.querySelector('form')
const taskInput = document.getElementById('task')
const heading2 = document.querySelector('h5')
const select = document.querySelector('select')

// form.addEventListener('submit', runEvent2)
taskInput.addEventListener('keydown', runEvent2)      //fire off when type
//keyup; keypress
//focus; blur (opposite of focus)
//cut; paste
//input;
//select.addEventListener('change', runEvent2)

function runEvent2(e){
  e.preventDefault()

  // console.log(`event type: ${e.type}`)      //submit
  // console.log(taskInput.value)    //walk the dog
  // taskInput.value = ''     //clear input after submit

  console.log(e.target.value)    //log everything typed
  heading2.innerText = e.target.value
}




//eventbubbling & eventdelegation

//bubbling

document.querySelector('.card-title').addEventListener('click', function(){
  console.log('card title')
})
//when click .card-title, actually bubbles up to card-content, card, col, even didnt click them


//delegation: opposite to bubbling. put listener on the parent element and put condition to find the target. 
//if insert a new li into dom through js, also need delegation

const delItem = document.querySelector('.delete-item')
delItem.addEventListener('click', deleteItem)
//only click the first one will get delete item at console.

document.body.addEventListener('click', deleteItem)

function deleteItem(e){
  console.log('delete item')
  console.log(e.target)      // give <i class="fa fa-remove"></i>. User will click on the x icon for deleting an item.  So the click event for removing the list item will be happening on our icon which is the <i>.

  // console.log(e.target)    //get target wherever we click, so need to pass in conditional statement

  // if(e.target.className === 'fa fa-remove'){
  //   console.log('delete item')   //get 'delete item' when click any i, not only the first i
  // }

  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  //   console.log('delete item')
  // }    //not recommend. if add a new class to a tag at html, not gonna work

  if(e.target.parentElement.classList.contains('delete-item')){     
    console.log('delete item')        //the target parent element is the a tag

    e.target.parentElement.parentElement.remove()    //the parent element of i tag is a. the parent element of a tag is li.
  }
}




//local and session storage

//set local storage item; still there when close the session and reopen it
localStorage.setItem('name', 'john')
localStorage.setItem('age', '30')

//set session storage item; will clear out when end session
sessionStorage.setItem('name', 'john')

//remove from storage
// localStorage.removeItem('name')

//get from storage
const name = localStorage.getItem('name')
const age = localStorage.getItem('age')

//clear local storage
// localStorage.clear()      //null

console.log(name, age)      //john 30

document.querySelector('form').addEventListener('submit', function(e){
  e.preventDefault()

  const task = document.getElementById('task').value

  let tasks
  if(localStorage.getItem('tasks') === null){
    tasks = []
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks')) //string into array object
  }

  tasks.push(task)

  localStorage.setItem('tasks', JSON.stringify(tasks))   //object into string
  alert('task saved')
})

//pull out, //string into array object
const tasks = JSON.parse(localStorage.getItem('tasks'))
tasks.forEach(function(task){
  console.log(task)
})