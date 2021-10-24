const { Author, Book } = require("../models")

async function addAuthor(parent, { name, age }) {
  return await Author.create({ name, age })
}

async function addBook(parent, { name, genre, authorId }) {
  return await Book.create({ name, genre, authorId })
}

module.exports = {
  addAuthor,
  addBook,
}
