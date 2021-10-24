const _ = require("lodash")
const db = require("../data/db.json")

function author({ authorId }) {
  return _.find(db.authors, { id: authorId })
}

module.exports = {
  author,
}
