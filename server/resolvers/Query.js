const { Author, Book } = require("../models")

async function books() {
  return await Book.findAll()
}

async function book(parent, { id }) {
  return await Book.findOne({ where: { id } })
}

async function authors() {
  return await Author.findAll()
}

async function author(parent, { id }) {
  return await Author.findOne({ where: { id } })
}

module.exports = {
  books,
  book,
  authors,
  author,
}
