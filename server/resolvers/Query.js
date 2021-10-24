const _ = require("lodash")
const db = require("../data/db.json")

function books() {
  return db.books
}

function book(parent, { id }) {
  return _.find(db.books, { id })
}

module.exports = {
  books,
  book,
}
