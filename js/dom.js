import { Book, Author, arrayOfBooks } from "./classes.js";

// Variables
var numOfBooks = 0;
var counter = 1;
var newArrayOfBooks = arrayOfBooks;

// DOM ELEMENTS
// sections
const numComp = document.querySelector(".num-container");
const formComp = document.querySelector(".form-container");
const displayComp = document.querySelector(".display-data");
const booksContainer = document.querySelector(".books-container");
const editComp = document.querySelector(".edit");
const editContainer = document.querySelector(".edit-container");

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
function confirm(event) {
  let bookNameValue = document.getElementById("edit-book-name").value;
  let bookPriceValue = document.getElementById("edit-price").value;
  let authorNameValue = document.getElementById("edit-author-name").value;
  let authorEmailValue = document.getElementById("edit-author-email").value;

  let index = event.target.getAttribute("key");
  newArrayOfBooks.forEach((book, i) => {
    if (index == i) {
      book.name = bookNameValue;
      book.price = bookPriceValue;
      book.author.name = authorNameValue;
      book.author.email = authorEmailValue;
    }
  });
  booksContainer.innerHTML = "";
  newArrayOfBooks.forEach((book, index) => {
    const html = `
                <article class="display-container book-data">
                    <ul>
                    <li>${book.name}</li>
                    <li>${Math.floor(
                      Math.random() * (2023 - 1900 + 1) + 1900
                    )}</li>
                    <li>${book.price}$</li>
                    <li>${book.author.name}</li>
                    <li>${book.author.email}</li>
                    <li>
                        <img
                        key=${index}
                        class="edit-btn"
                        title="edit"
                        src="./images/icons/pen-bold.svg"
                        alt=""
                        /><img
                        key =${index}
                        class="delete-btn"
                        title="remove"
                        src="./images/icons/trash-bold.svg"
                        alt=""
                        />
                    </li>
                    </ul>
                </article>
            `;
    booksContainer.insertAdjacentHTML("beforeend", html);
  });
  addEventListenersToAllDisplayButtons();
  editComp.style.display = "none";
  displayComp.style.display = "flex";
}

function cancel(event) {}

function editBook(event) {
  let [book] = newArrayOfBooks.filter(
    (book, index) => index == event.target.getAttribute("key")
  );
  const html = `
    <article class="display-container book-data">
        <ul>
          <li><input id="edit-book-name" type="text" value="${
            book.name
          }" /></li>
          <li><input id="edit-publish-year" type="text" value=${Math.floor(
            Math.random() * (2023 - 1900 + 1) + 1900
          )} /></li>
          <li><input id="edit-price" type="text" value="${book.price}$" /></li>
          <li>
            <input id="edit-author-name" type="text" value="${
              book.author.name
            }" />
          </li>
          <li>
            <input id="edit-author-email" type="text" value=${
              book.author.email
            } />
          </li>
          <li>
            <img
              key=${event.target.getAttribute("key")}
              id="confirm-edit"
              title="confirm"
              src="./images/icons/check-circle-bold.svg"
              alt=""
            />
            <img
              key=${event.target.getAttribute("key")}
              id="cancel-edit"
              title="cancel"
              src="./images/icons/x-circle-bold.svg"
              alt=""
            />
          </li>
        </ul>
      </article>
  `;
  displayComp.style.display = "none";
  editComp.style.display = "block";
  editContainer.innerHTML = html;
  document.querySelector(".edit h1 span").innerHTML =
    parseInt(event.target.getAttribute("key")) + 1;
  addEventListenersToTheEditButtons();
}

function recreateDOM(event) {
  booksContainer.innerHTML = "";
  newArrayOfBooks = newArrayOfBooks.filter(
    (b, i) => parseInt(event.target.attributes.key.nodeValue) !== i
  );
  newArrayOfBooks.forEach((book, index) => {
    const html = `
                <article class="display-container book-data">
                    <ul>
                    <li>${book.name}</li>
                    <li>${Math.floor(
                      Math.random() * (2023 - 1900 + 1) + 1900
                    )}</li>
                    <li>${book.price}$</li>
                    <li>${book.author.name}</li>
                    <li>${book.author.email}</li>
                    <li>
                        <img
                        key=${index}
                        class="edit-btn"
                        title="edit"
                        src="./images/icons/pen-bold.svg"
                        alt=""
                        /><img
                        key =${index}
                        class="delete-btn"
                        title="remove"
                        src="./images/icons/trash-bold.svg"
                        alt=""
                        />
                    </li>
                    </ul>
                </article>
            `;
    booksContainer.insertAdjacentHTML("beforeend", html);
  });
  addEventListenersToAllDisplayButtons();
  if (newArrayOfBooks.length === 0) {
    displayComp.innerHTML = `<h1 style="text-align:center">Your Library is Empty! 📚</h1>`;
  }
}

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
              class="edit-btn"
              title="edit"
              src="./images/icons/pen-bold.svg"
              alt=""
            /><img
              key =${index}
              class="delete-btn"
              title="remove"
              src="./images/icons/trash-bold.svg"
              alt=""
            />
          </li>
        </ul>
      </article>
      `;
        booksContainer.insertAdjacentHTML("beforeend", html);
      });
    }

    // console.log(arrayOfBooks);
    addEventListenersToAllDisplayButtons();
  }
}

// event listeners
numOkBtn.addEventListener("click", function () {
  confirmNumOfBooks();
});

addBookBtn.addEventListener("click", function () {
  addBook();
});

function addEventListenersToAllDisplayButtons() {
  const deleteBtns = document.getElementsByClassName("delete-btn");
  const editBtns = document.getElementsByClassName("edit-btn");
  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", function (e) {
      recreateDOM(e);
    });
    editBtns[i].addEventListener("click", function (e) {
      editBook(e);
    });
  }
}

function addEventListenersToTheEditButtons() {
  const confirmBtn = document.getElementById("confirm-edit");
  const cancelBtn = document.getElementById("cancel-edit");
  confirmBtn.addEventListener("click", function (e) {
    confirm(e);
  });

  cancelBtn.addEventListener("click", function (e) {
    cancel(e);
  });
}
