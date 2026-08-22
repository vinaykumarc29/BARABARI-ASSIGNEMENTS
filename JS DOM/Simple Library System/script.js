const formSection = document.querySelector(".add-book-section");
const showFormBtn = document.querySelector("#toggle-form");
const ebookField = document.querySelector(".ebook-details");
const bookForm = document.querySelector("#book-form");
const bookTitleField = document.querySelector("#title");
const bookAuthorField = document.querySelector("#author");
const bookTypeField = document.querySelector("#type");
const ebookFileSize = document.querySelector("#fileSize");
const booksContainer = document.querySelector("#book-list");

class Book {
  constructor(title, author, id, available, borrower ,type) {
    this.id = id ?? Date.now();
    this.title = title;
    this.author = author;
    this.type = type ?? `physical`;
    this.status = `available`;
    this.available = available ?? true;
    this.borrower = borrower ?? null;
  }

  getHtml = () => {
    let bookHtml = `<div class="book-card " data-id=${this.id}>
        <h3 class="book-title">${this.title}</h3>
        <div class="book-meta">Author: ${this.author}</div>
        <div class="book-meta">
          Status: ${this.available ? `available` : `Borrowed By ${this.borrower}`}
        </div>
        <div class="book-actions">
          <button class="btn ${this.available ? `btn-borrow` : `btn-return`}">${this.available ? `Borrow` : `Return`}</button>
          <button class="btn btn-remove">Remove</button>
        </div>
      </div>`;

    return bookHtml;
  };

  borrowBook = (borrowerName) => {
    if (this.available) {
      this.borrower = borrowerName;
      this.available = false;
    }
    saveBooks();
    displayBooks();
  };

  returnBook = () => {
    this.available = true;
    this.borrower = null;
    saveBooks();
    displayBooks();
  };
}

class Ebook extends Book {
    constructor(title, author,fileSize, id, borrower  ){
        super(title, author, id, true, borrower,`ebook`);
        this.fileSize = fileSize
    }

    getHtml = ()=>{
        let bookHtml = `<div class="book-card ebook" data-id=${this.id}>
        <h3 class="book-title">${this.title}</h3>
        <div class="book-meta">Author: ${this.author}</div>
        <div class="book-meta">File Size: ${this.fileSize} MB</div>
        <div class="book-meta">
          Status: ${this.borrower ? `Borrowed By ${this.borrower}` :`available`}
        </div>
        <div class="book-actions">
          <button class="btn ${this.borrower ? `btn-return`:`btn-borrow`}">${this.borrower ? `Return`:`Download`}</button>
          <button class="btn btn-remove">Remove</button> 
        </div>
      </div>`

      return bookHtml;
    }


    borrowBook = (borrowerName) => {
    this.borrower = borrowerName;    
    saveBooks();
    displayBooks();
  };

  returnBook = () => {
    this.borrower = null;
    saveBooks();
    displayBooks();
  };

}

let parsedBooks = JSON.parse(localStorage.getItem("Books")) || [];
let library = [];

const loadBooks = () => {
  if (parsedBooks.length == 0) {
    return false;
  }
  parsedBooks.forEach((book) => {
    let title = book.title;
    let author = book.author;
    let id = book.id;
    let available = book.available;
    let borrower = book.borrower;
    let type = book.type;

    let new_book ;

    if(type == `physical`){
               
        new_book = new Book(title, author, id, available, borrower);
    }else{
        new_book = new Ebook(title, author, book.fileSize, id, borrower);
    }

    library.push(new_book);
  });

  parsedBooks = [];
};

const borrowBook = (bookId) => {
  let book = library.find((book) => book.id == bookId);

  let borrowerName = prompt("Enter Your Name:");
  book.borrowBook(borrowerName);
};

const returnBook = (bookId) => {
  let book = library.find((book) => book.id == bookId);

  if (confirm("Are You Sure To Return This Book ?")) {
    book.returnBook();
  }
};

const removeBook = (bookId) => {
  if (confirm(`Are You Sure To Delete The Book ?`)) {
    library = library.filter((book) => book.id != bookId);
    saveBooks(library);
    displayBooks();
  }
};

const displayBooks = () => {
  if (library.length == 0) {
    booksContainer.innerHTML = ``;
    return;
  }

  let booksHtml = ``;
  library.forEach((book) => {
    booksHtml += book.getHtml();
  });

  booksContainer.innerHTML = booksHtml;

  const Btns = document.querySelectorAll(".btn");

  Btns.forEach((Btn) => {
    Btn.addEventListener("click", (e) => {
      let bookId = e.target.closest(".book-card").dataset.id;
      console.log(bookId);

      if (Btn.classList.contains("btn-borrow")) {
        borrowBook(bookId);
      } else if (Btn.classList.contains("btn-remove")) {
        removeBook(bookId);
      } else {
        returnBook(bookId);
      }
    });
  });
};

//func to store books in local storage

const saveBooks = () => {
  localStorage.setItem("Books", JSON.stringify(library));
  console.log(localStorage.getItem("Books"));
};

// eventlistner to add new book

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let new_book ;

  if(ebookField.classList.contains('hidden')){
  let title = bookTitleField.value;
  let author = bookAuthorField.value;
  new_book = new Book(title, author);
  }else{
    let title = bookTitleField.value;
    let author = bookAuthorField.value;
    let fileSize = ebookFileSize.value;
    console.log(fileSize);
    new_book = new Ebook(title,author,fileSize);
  }  

  library.push(new_book);
  saveBooks(library);

  // console.log(new_book);
  // console.log(`library : ${library}`);
  displayBooks();

  bookForm.reset();
});

//evnt listener to hide/show form

showFormBtn.addEventListener("click", () => {
  if (formSection.classList.contains("hidden")) {
    formSection.classList.remove("hidden");
    showFormBtn.innerText = `Hide Form`;
  } else {
    formSection.classList.add("hidden");
    showFormBtn.innerText = `Add New Book`;
  }
});

//evnt listner to hide/show E-book field
bookTypeField.addEventListener("change", (e) => {
  // console.log(e.target.value);
  if (e.target.value == "ebook") {
    ebookField.classList.remove("hidden");
  } else {
    ebookField.classList.add("hidden");
  }
});

loadBooks();
displayBooks();
