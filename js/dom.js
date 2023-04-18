import { Book, Author, arrayOfBooks } from "./classes.js";

// Variables
var numOfBooks = 0;
var counter = 1;

// DOM ELEMENTS
// sections
const numComp = document.querySelector(".num-container");
const formComp = document.querySelector(".form-container");
const displayComp = document.querySelector(".display-data");
const editComp = document.querySelector(".edit");

// inputs
const numOfBooksInput = document.querySelector("#book-num");
const bookNameInput = document.querySelector("#book-name");
const bookPriceInput = document.querySelector("#book-price");
const authorNameInput = document.querySelector("#author-name");
const authorEmailInput = document.querySelector("#author-email");

// buttons
const numOkBtn = document.querySelector(".num");
const addBookBtn = document.querySelector(".add-book");

// Initializations
numOfBooksInput.focus();

// methods
function confirmNumOfBooks() {
  // When user enter the number of books
  if (
    !numOfBooksInput.value ||
    !isFinite(numOfBooksInput.value) ||
    numOfBooksInput.value == 0
  ) {
    numOfBooksInput.style.outline = "2px solid red";
    numOfBooksInput.focus();
  } else {
    numOfBooksInput.style.outline = "none";
    numOfBooks = numOfBooksInput.value;
    numComp.style.display = "none";
    formComp.style.display = "flex";
  }
  bookNameInput.focus();
}

function addBook() {
  // When the user add a book
  if (
    !/^[A-Za-z]+([A-Za-z]+)?\s[A-Za-z]+([A-Za-z]+)?$/.test(bookNameInput.value)
  ) {
    bookNameInput.style.outline = "2px solid red";
    bookNameInput.focus();
  } else if (!/^\d*\.?\d+$/.test(bookPriceInput.value)) {
    bookNameInput.style.outline = "none";
    bookPriceInput.style.outline = "2px solid red";
    bookPriceInput.focus();
  } else if (
    !/^[A-Za-z]+([A-Za-z]+)?\s[A-Za-z]+([A-Za-z]+)?$/.test(
      authorNameInput.value
    )
  ) {
    bookPriceInput.style.outline = "none";
    authorNameInput.style.outline = "2px solid red";
    authorNameInput.focus();
  } else if (
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      authorEmailInput.value
    )
  ) {
    authorNameInput.style.outline = "none";
    authorEmailInput.style.outline = "2px solid red";
    authorEmailInput.focus();
  } else {
    authorEmailInput.style.outline = "none";

    counter++;
    // Some DOM Manipulations
    document.querySelector("h1 span").innerHTML = `#${counter}`;

    // Creating the book data & inserting it into our array of books
    const bookAuthor = new Author(
      authorNameInput.value,
      authorEmailInput.value
    );
    const newBook = new Book(
      bookNameInput.value,
      bookPriceInput.value,
      bookAuthor
    );
    Book.insert(newBook);

    // prepare the input fields for the next book
    bookNameInput.value =
      bookPriceInput.value =
      authorNameInput.value =
      authorEmailInput.value =
        "";

    // check if the user entered the number of books specified earlier
    if (counter > numOfBooks) {
      formComp.style.display = "none";
      displayComp.style.display = "flex";
      arrayOfBooks.forEach((book, index) => {
        const html = `
        <article class="display-container book-data">
        <ul>
          <li>${book.name}</li>
          <li>${Math.floor(Math.random() * (2023 - 1900 + 1) + 1900)}</li>
          <li>${book.price}$</li>
          <li>${book.author.name}</li>
          <li>${book.author.email}</li>
          <li>
            <img
              key=${index}
              id="edit-btn"
              title="edit"
              src="./images/icons/pen-bold.svg"
              alt=""
            /><img
              key =${index}
              id="delete-btn"
              title="remove"
              src="./images/icons/trash-bold.svg"
              alt=""
            />
          </li>
        </ul>
      </article>
      `;
        displayComp.insertAdjacentHTML("beforeend", html);
      });
    }

    console.log(arrayOfBooks);
  }
}

// event listeners
numOkBtn.addEventListener("click", function () {
  confirmNumOfBooks();
});

addBookBtn.addEventListener("click", function () {
  addBook();
});
