// console.log(window) parent object of the browser
//alert(1)




//selecing things from a dom


//single element selectors

// console.log(document.getElementById('#my-form'))  //id
console.log(document.querySelector('.container'))  //class, tags, id
console.log(document.querySelector('h1'))   //single element selector: multiple h1 but only select the first one
console.log(document.querySelector('#my-form'))


// //multiple element selectors

console.log(document.querySelectorAll('.item'))  //id, class, tag  ->nodelist, very similar to array
// console.log(document.querySelectorAll('li'))
// console.log(document.getElementByClassName('item'))


// //loop through

const items = document.querySelectorAll('.item');


items.forEach(item => console.log(item))
// same as above
items.forEach(function(item){
	console.log(item);            
})


//changing / manipulating things in the dom



// const ul = document.querySelector('.items');

// //ul.remove()
// //ul.lastElementChild.remove()
// ul.firstElementChild.textContent = 'Hello';   //firstElementChild = li
// ul.children[1].innerText = 'wen';                   //innerText (innerHTML) & textContent
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>'



// const btn = document.querySelector(".btn")

// btn.style.background = 'red'


// btn.addEventListener('click', (e) => {       // event = click; can change to "mouseover", "mouseout"
// 	e.preventDefault();                      // when click or submit form, have to prevent default behavior, otherwise flash really quick at console
// 	//console.log('click')
// 	//console.log(e.target.className);       // get "btn" (class name) once click(element that the event is on). can get different attribute, ig, change to "id"

// 	document.querySelector('#my-form').style.background = '#ccc';
// 	document.querySelector('body').classList.add('bg-dark');        //add class to body when click
// 	document.querySelector('.items').lastElementChild.innerHTML = '<h1>Helloooo</h1>'  
// })





const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#users')


     
myForm.addEventListener('submit', onSubmit)
function onSubmit(e){

	e.preventDefault();
	//console.log(nameInput.value)       

	if(nameInput.value === "" || emailInput.value === ""){
	//alert('please enter field')
	msg.innerText = 'please enter all field'
	msg.classList.add('error')	
	// setTimeout(() => msg.remove(), 3000);      //error msg disappered after 3 seconds

	setTimeout(function(){
		msg.remove();
	}, 3000);  
	
	}else{
		const li = document.createElement('li')
		userList.appendChild(li);   //append = add something into. li to ul
		li.appendChild(document.createTextNode(`${nameInput.value} ${emailInput.value}`));
		emailInput.value = "";    //clear field
		nameInput.value = "";
		}
	}


//1.create li; 2.append li to userlist; 3.create textnode in li















































