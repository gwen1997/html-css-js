

const form = document.getElementById('addForm')
const itemList = document.getElementById('items')
const filter = document.getElementById('filter')



//add item when submit

// form.addEventListener('submit', addItem) 
// function addItem(e){
// 	e.preventDefault()

// 	const li = document.createElement('li')
// 	li.className = 'list-group-item'
// 	const newItem = document.getElementById('item')
// 	li.appendChild(document.createTextNode(newItem.value))

// 	const delectBtn = document.createElement('button')
// 	delectBtn.className = 'btn btn-danger btn-sm float-right delete'
// 	delectBtn.appendChild(document.createTextNode('X'))
// 	li.appendChild(delectBtn)

// 	itemList.appendChild(li)
// }






// remove item when click x button

// itemList.addEventListener('click', removeItem)
// function removeItem(e){
// 	if(e.target.classList.contains('delete')){
// 		if(confirm('are you sure')){
// 			const li = e.target.parentElement       //click's parent element is li
// 			itemList.removeChild(li)
// 		}
// 	}
// }






//filter

filter.addEventListener('keyup', filterItems)
function filterItems(e){
	const text = e.target.value.toLowerCase()      //convert to lowercase even put in uppercase stuff
	const items = itemList.getElementsByTagName('li')

	Array.from(items).forEach(function(item){      //convert to an array
		const itemName = item.firstChild.textContent       //console.log(itemList.firstChild): get ''
		console.log(itemName)
		if(itemName.toLowerCase().indexOf(text) === -1){  //not match      
			item.style.display = 'none' 
		}else{
			item.style.display = 'block'
		}

	})
}


















