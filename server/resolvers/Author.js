const _ = require("lodash")
const db = require("../data/db.json")

function books({ id }) {
  return _.filter(db.books, { authorId: id })
}

module.exports = {
  books,
}
