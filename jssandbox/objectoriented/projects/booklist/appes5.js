//book constructor: create book object
function Book(title, author, isbn){
  this.title = title
  this.author = author
  this.isbn = isbn
}



//ui constructor: set of methods; add to list or delete
function UI(){}


//add book to list
UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list')

  //create tr element
  const row = document.createElement('tr')

  //insert tr to table
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>
  `
  list.appendChild(row)
}


//clear fields
UI.prototype.clearFields = function(){
  document.getElementById('title').value = ''
  document.getElementById('author').value = ''
  document.getElementById('isbn').value = ''
}


//show alert
UI.prototype.showAlert = function(message, className){
  const div = document.createElement('div')
  div.className = `alert ${className}`
  div.appendChild(document.createTextNode(message))

  //get parent
  const container = document.querySelector('.container')
  const form = document.querySelector('#book-form')

  //insert alert
  container.insertBefore(div, form)

  //time out after 3s
  setTimeout(function(){
    document.querySelector('.alert').remove()
  }, 3000)
}


//delete book
UI.prototype.deleteBook = function(target){
  if(target.className === 'delete'){
    target.parentElement.parentElement.remove()     //a to td to tr

  }
  }





//eventlistener: add book
document.getElementById('book-form').addEventListener('submit', function(e){
  e.preventDefault()

  //get form values
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const isbn = document.getElementById('isbn').value

  //instantiate book
  const book = new Book(title, author, isbn)

  //instantiate UI
  const ui = new UI()

  //validate
  if(title === '' || author === '' || isbn === ''){
    // alert('failed')
    ui.showAlert('please fill in all fields', 'error')

    }else{
      //add book to list
      ui.addBookToList(book)

      //show success
      ui.showAlert('book added', 'success')
    
      //clear fields
      ui.clearFields()
    }
})




//eventlistener: delete
document.getElementById('book-list').addEventListener('click', function(e){
  e.preventDefault()

   //instantiate UI
   const ui = new UI()

   //delete book
   ui.deleteBook(e.target)      //a tag

   //show message
   ui.showAlert('book removed', 'success')

})