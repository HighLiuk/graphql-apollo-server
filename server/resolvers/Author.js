const { Book } = require("../models")

async function books({ id }) {
  return await Book.findAll({ where: { authorId: id } })
}

module.exports = {
  books,
}
