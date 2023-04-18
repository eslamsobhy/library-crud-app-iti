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

// buttons
const numOk = document.querySelector(".num");

// methods
function confirmNumOfBooks() {
  // When user enter the number of books
  if (
    !numOfBooksInput.value ||
    !isFinite(numOfBooksInput.value) ||
    numOfBooksInput.value == 0
  ) {
    numOfBooksInput.style.border = "2px solid red";
  } else {
    numOfBooksInput.style.border = "none";
    numOfBooks = numOfBooksInput.value;
    numComp.style.display = "none";
    formComp.style.display = "flex";
  }
}

// event listeners
numOk.addEventListener("click", function () {
  confirmNumOfBooks();
});
