class Book{
  constructor(title, author, isbn){
    this.title = title
    this.author = author
    this.isbn = isbn
  }
}



class UI{

    addBookToList(book){

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


  showAlert(message, className){

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


  deleteBook(target){

    if(target.className === 'delete'){
      target.parentElement.parentElement.remove()     //a to td to tr
    }

  }


  clearFields(){

    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('isbn').value = ''

  }

}


//local storage class

class Store{

  static getBooks(){
    let books
    if(localStorage.getItem('books') === null){
      books = []
    }else{
      books = JSON.parse(localStorage.getItem('books'))
    }

    return books
  }


  static displayBooks(){
    const books = Store.getBooks()

    books.forEach(function(book){
      const ui = new UI

      ui.addBookToList(book)
    })
  }


  static addBook(book){
    const books = Store.getBooks()
    books.push(book)

    localStorage.setItem('books', JSON.stringify(books))

  }


  static removeBook(isbn){
    const books = Store.getBooks()
    books.forEach(function(book, index){
      if(book.isbn === isbn){
        books.splice(index, 1)
      }
    })

    localStorage.setItem('books', JSON.stringify(books))
  }
}


//dom load event
document.addEventListener('DOMContentLoaded', Store.displayBooks)




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

      //add to ls. dont need to instantiate Store cuz static method
      Store.addBook(book)

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

   //remove from ls
   Store.removeBook(e.target.parentElement.previousElementSibling.textContent)   //give isbn

   //show message
   ui.showAlert('book removed', 'success')

})
