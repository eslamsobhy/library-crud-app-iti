import { Book, Author } from "./classes.js";

// TESTING
const author = new Author("Ronald", "ronald@hehe.com");
const book = new Book("The Hobbit", 120, author);

console.log(book);
