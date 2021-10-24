function books() {
  // return db.books
}

function book(parent, { id }) {
  // return _.find(db.books, { id })
}

function authors() {
  // return db.authors
}

function author(parent, { id }) {
  // return _.find(db.authors, { id })
}

module.exports = {
  books,
  book,
  authors,
  author,
}
