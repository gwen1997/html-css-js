//define UI variables
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')    //ul
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')


//load all eventListeners
loadEventListeners()
function loadEventListeners(){

  document.addEventListener('DOMContentLoaded', getTasks)

  form.addEventListener('submit', addTask)

  taskList.addEventListener('click', removeTask)

  clearBtn.addEventListener('click', clearTasks)

  filter.addEventListener('keyup', filterTasks)
}


//get tasks from local storage to show in ul. when refresh, tasks still there cuz comes from LS
function getTasks(){      
  let tasks
  if(localStorage.getItem('tasks') === null){
    tasks = []
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.forEach(function(task){
    const li = document.createElement('li')
    li.className = 'collection-item'
    li.appendChild(document.createTextNode(task))  
    const link = document.createElement('a')
    link.className = 'delete-item secondary-content'
    link.innerHTML = '<i class="fa fa-remove"></i>'
    li.appendChild(link)
    taskList.appendChild(li)
  })
}




function addTask(e){
  e.preventDefault()

  if(taskInput.value === ''){
    alert('add a task')
  }

  const li = document.createElement('li')
  li.className = 'collection-item'
  li.appendChild(document.createTextNode(taskInput.value))
  const link = document.createElement('a')
  link.className = 'delete-item secondary-content'
  link.innerHTML = '<i class="fa fa-remove"></i>'
  li.appendChild(link)
  taskList.appendChild(li)

  storeTaskInLocalStorage(taskInput.value)

  taskInput.value = ''
}

function storeTaskInLocalStorage(task){
  let tasks
  if (localStorage.getItem('tasks') === null){
    tasks = []
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'))     //string to array to add task
  }

  tasks.push(task)

  localStorage.setItem('tasks', JSON.stringify(tasks))    //array to string to store
}


//use delegation here (since multiple li and dynamic adding li here)
function removeTask(e){
  e.preventDefault()

  if(e.target.parentElement.classList.contains('delete-item')){   //target a tag, as it's the parent of i tag
    if(confirm('are you sure')){
    e.target.parentElement.parentElement.remove()     //target li tag. i, a, li

    removeTaskFromLocalStorage(e.target.parentElement.parentElement)   //remove task from LS
    }
  }
}

function removeTaskFromLocalStorage(taskItem){
  let tasks
  if (localStorage.getItem('tasks') === null){
    tasks = []
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){    //li = lsItem
      tasks.splice(index, 1)
    }
  })

  localStorage.setItem('tasks', JSON.stringify(tasks))
}



function clearTasks(){
  //taskList.innerHTML = ''

//same as above, but faster
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild)
  }

  clearTasksFromLocalStorage()
}

function clearTasksFromLocalStorage(){     //clear from LS
  localStorage.clear()
}



function filterTasks(e){
  const text = e.target.value.toLowerCase() //give whatever is typed in, in lowercase
  document.querySelectorAll('.collection-item').forEach(function(task){    //each li
    const item = task.firstChild.textContent
    if(item.toLowerCase().indexOf(text) != -1){     // if do match, show
      task.style.display = 'block'               
    }else{
      task.style.display = 'none'
    }
  })
}


