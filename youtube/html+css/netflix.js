

const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item')


function removeBorder(){
	tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow(){
	tabContentItems.forEach(item => item.classList.remove('show'))
}




tabItems.forEach(item => item.addEventListener('click', selectItem))

function selectItem(e){      //select tab content item
	removeBorder(); 
	this.classList.add('tab-border')
	
	removeShow();
	const tabContentItem = document.querySelector(`#${this.id}-content`)   //tab-1&tab-2&tab-3 +'-content' => tab-1-content
	tabContentItem.classList.add('show')    
}