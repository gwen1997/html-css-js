//console.dir(document)       //show all the properties and methods attached to the doc object


console.log(document.URL)
console.log(document.title) 
//document.title = 123
console.log(document.doctype)
console.log(document.head)
console.log(document.all)  
console.log(document.all[10])   //(do document.all and get the index)
//console.log(document.all[10].textcontent = 'hello')  //not recommend cuz index could have changed if adding something
console.log(document.forms[0])    //get all form of index 0
console.log(document.links)  
console.log(document.images)  



//------------------------selectors: getElementById---------------------------

const headerTitle = document.getElementById('header-title')
const header = document.getElementById('main-header')
headerTitle.textContent = 'hello!'
headerTitle.innerText = 'goodbye'     //same as textcontent
headerTitle.innerHTML = '<h3>hello@</h3>'   //h3 inside of h1

header.style.borderBottom = 'solid 3px #000'



//-----------------------getElementsByClassName-----------------------------------

const items = document.getElementsByClassName('list-group-item')      //each one has an index
console.log(items)     
console.log(items[1])
items[1].textContent = 'hello 2'
items[1].style.fontWeight = 'bold'

for(let i = 0; i < items.length; i++){
	items[i].style.backgroundColor = '#f4f4f4'           //apply to all class name 'list-group-item', have to loop through
}



//---------------------------getElementsByTagName----------------------------------

const li = document.getElementsByTagName('li')   //same as above class




//-----querySelector; can be tag, id, class; -----single--------grab the first one by default------

const input = document.querySelector('input')    //only apply to the first input
input.value = 'hello world!!!!'

const submit = document.querySelector('input[type="submit"]')     //select the second 'input'
submit.value = 'send'

const item = document.querySelector('.list-group-item')
item.style.color = 'red'                                  //first one red by default

const lastItem = document.querySelector('.list-group-item:last-child')
lastItem.style.color = 'green'

const secondItem = document.querySelector('.list-group-item:nth-child(2)')
secondItem.style.color = 'yellow'



//------------------querySelectorAll------------------------------------------

const titles = document.querySelectorAll('.title')
console.log(titles)                    //get nodelist, can run array function on nodelist
titles[0].textContent = 'hello!!'

const odd = document.querySelectorAll('li:nth-child(odd)')
const even = document.querySelectorAll('li:nth-child(even)')
for(let i = 0; i < odd.length; i++){
	odd[i].style.backgroundColor = 'orange'
	even[i].style.backgroundColor = 'purple'
}
odd.forEach(od => od.style.backgroundColor = 'pink')


//--------------------------------parentNode------------------------------

const itemList = document.querySelector('#items')
console.log(itemList.parentNode)                       //gives div id main...
itemList.parentNode.style.backgroundColor = 'lightblue'
console.log(itemList.parentNode.parentNode)            //gives container
 

//---------------------------parentElement--------------------------------------
      //same as parentNode


//----------------------------children---------------------------------------

console.log(itemList.children)                //won't have textnode (space, line break) but list items
console.log(itemList.children[1])
itemList.children[1].style.borderBottom = '5px solid red'

//---------------------------first/lastElementChild-------------------------------

console.log(itemList.firstElementChild)
itemList.firstElementChild.textContent = 'hello000000'
itemList.lastElementChild.textContent = 'hello00lolll'

//----------------------------silbing--------------------------------------------

console.log(itemList.nextElementSibling)
console.log(itemList.previousElementSibling)
itemList.previousElementSibling.style.color = 'darkblue'

//-----------------------createElement-------------------------------------------

const newDiv = document.createElement('div')    //create element
newDiv.className = 'hello'       //add class
newDiv.id = 'hello1'           //add id
newDiv .setAttribute('title', 'hello div')        //add attribute

newDiv.appendChild(document.createTextNode('hello world---') )         //add textnode to div

console.log(newDiv)             //<div class='hello' id='hello1' <title='hello div'>hello world</div>

const container = document.querySelector('header .container')
const h1 = document.querySelector('header h1')
container.insertBefore(newDiv, h1)            //insert the element created to DOM

newDiv.style.fontSize = '30px'





//------------------------------ClickEvent---------pass in event parameter (e)------------------------------------

// const button = document.getElementById('button').addEventListener('click', buttonClick)
// function buttonClick(e){
// 	console.log('button clicked')
// 	document.getElementById('header-title').textContent = 'changed'
// 	document.querySelector('#main').style.borderBottom = '5px pink solid'

// 	console.log(e)    //pass in the event parameter
// 	console.log(e.target)     //gives the actual element that was clicked: <button class="btn btn-dark btn-block" id="button">click here</button>
// 	console.log(e.target.id)    //gives the id(button)
// 	console.log(e.target.className)    //gives the whole string of all the classes
// 	console.log(e.target.classList)    //gives an array of the classes

	const output = document.getElementById('output');
// 	output.innerHTML = '<h3>'+e.target.id+'</h3>'
// 	console.log(e.type)       //gives click(type of event)
// 	console.log(e.clientX)     //gives position of the mouse on X aexis from the window
// 	console.log(e.clientY)
// 	console.log(e.offsetX)     //position based on actual element itself
// 	console.log(e.offsetY)   
// }     


//-------mouseEvent-----dblclick/mouseup/mousedown/mouseenter/mouseleave/mouseover/mouseout/mousemove---

// const button2 = document.getElementById('button').addEventListener('dblclick', runEvent)
// const box = document.getElementById('box').addEventListener('mouseover', runEvent) //mouseover continually fires off as closing to the inner element; mouseenter only applies once
// const box2 = document.getElementById('box').addEventListener('mousemove', runEvent)

// function runEvent(e){
// 	console.log('event type: '+e.type)

// 	output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>'  //tracking mouse position inside

// 	document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";    //body will change the background when mousemove
// }


//----------------------------inputEvent--------keydown/keyup/keypress/focus/blur/cut/paste/input/change/submit------------------------------------------

const itemInput = document.querySelector('input[type="text"]')


// itemInput.addEventListener('keyup', runEvent)
// function runEvent(e){
// 	console.log('event type: '+e.type)
// 	console.log(e.target)
// 	console.log(e.target.value)          //see at log what was typing
// 	document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'  //output down at output
// }

const form = document.querySelector('form')
const select = document.querySelector('select')

select.addEventListener('change', runEvent)
select.addEventListener('input', runEvent)
function runEvent(e){
	console.log('event type: '+e.type)    //see the change event once select
}

form.addEventListener('submit', runEvent)
function runEvent(e){
	e.preventDefault()
	console.log('event type: '+e.type)
}



























