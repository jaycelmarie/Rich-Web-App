class Phone {
    constructor(name, num, email) {
      this.name = name;
      this.num = num;
      this.email = email;
    }
  }

  class phoneDirectory {

    static displayBooks() {
      const books = Directory.getBooks();
  
      books.forEach((book) => phoneDirectory.addBook(book));
    }
  
    static addBook(book) {
      const list = document.querySelector('#Plist');
  
      const row = document.createElement('tr');
  
      row.innerHTML = `
        <td>${book.name}</td>
        <td>${book.num}</td>
        <td>${book.email}</td>
      `;
      list.appendChild(row);
    }

    static showself()
    {
    
    }

    // Show alert message when there's an error for 3 seconds
    static Alert(message)
    {
        
        var x=document.getElementById(message);
        x.style.display="block";
        setTimeout(() => x.style.display='none', 3000);
    }

    // Clear fields(name, num, email) when called
    static clearFields() {
    document.querySelector('#name').value = '';
    document.querySelector('#num').value = '';
    document.querySelector('#email').value = '';
    }
  }  // End phoneDirectory Class

  class Directory {

    static getBooks() {
      let books;
      if(localStorage.getItem('books') === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem('books'));
      }
  
      return books;
    }
  
    static addBook(book) {
      const books = Directory.getBooks();
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
    }
 
  } // End Directory Class

  document.addEventListener('DOMContentLoaded', phoneDirectory.displayBooks);

  // Validation Start
  document.querySelector('#num-form').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const name = document.querySelector('#name').value;
    const num = document.querySelector('#num').value;
    const email = document.querySelector('#email').value;

    if(name === '' || num === '' || email == '') {
        phoneDirectory.Alert("error");
    } else if(name.length >= 20) {
        phoneDirectory.Alert("name-error");
        phoneDirectory.clearFields();
    } else if(isNaN(num)){
        phoneDirectory.Alert("num-error");
        phoneDirectory.clearFields();
    } else if(email.length >= 40) {
        phoneDirectory.Alert("email-error");
        phoneDirectory.clearFields();
    } else {
      const book = new Phone(name, num, email);
  
      phoneDirectory.addBook(book);
  
      Directory.addBook(book);
  
      alert('Added Successfully.');

      phoneDirectory.clearFields();
    }
  });
  
  document.querySelector('#Plist').addEventListener('click', (e) => {
    phoneDirectory.deleteBook(e.target);
  
    Directory.removeBook(e.target.parentElement.previousElementSibling.textContent);
    
    phoneDirectory.Alert("remove");
  
    
  });