const db = require("../data/db.json")

function books() {
  return db.books
}

module.exports = {
  books,
}
