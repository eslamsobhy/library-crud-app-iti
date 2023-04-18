import { Book, Author } from "./classes.js";

// Variables
var numOfBooks = 0;

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
  }
}

// event listeners
numOkBtn.addEventListener("click", function () {
  confirmNumOfBooks();
});

addBookBtn.addEventListener("click", function () {
  addBook();
});
