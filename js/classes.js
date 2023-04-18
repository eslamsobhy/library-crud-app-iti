// Array of books
export const arrayOfBooks = [];

// Book function constructor
export function Book(name, price, author) {
  this.name = name;
  this.price = price;
  this.author = author;
}

// Static method
Book.insert = function (book) {
  arrayOfBooks.push(book);
};

Book.prototype.delete = function (id) {
  arrayOfBooks = arrayOfBooks.filter((b) => b.id !== id);
};

Book.prototype.update = function (id, n, p, a, e) {
  arrayOfBooks = arrayOfBooks.forEach((b) => {
    if (b.id === id) {
      b.name = n;
      b.price = p;
      b.author = a;
      b.email = e;
    }
  });
};

Book.prototype.display = function () {
  arrayOfBooks.forEach((b) => {
    return `
      <article class="display-container book-data">
        <ul>
          <li>${b.name}</li>
          <li>1978</li>
          <li>${b.price}$</li>
          <li>${b.author.name}</li>
          <li>${b.author.email}</li>
          <li>
            <img
              id="edit-btn"
              title="edit"
              name = ${b.id}
              src="./images/icons/pen-bold.svg"
              alt=""
            /><img
              id="delete-btn"
              title="remove"
              name = ${b.id}
              src="./images/icons/trash-bold.svg"
              alt=""
            />
          </li>
        </ul>
      </article>
    `;
  });
};

// Author function constructor
export function Author(name, email) {
  this.name = name;
  this.email = email;
}
