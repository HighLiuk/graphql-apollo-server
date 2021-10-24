const db = require("../data/db.json")

function books() {
  return db.books
}

function book(_, { id }) {
  return db.books.filter((book) => book.id === id)?.[0]
}

module.exports = {
  books,
  book,
}
