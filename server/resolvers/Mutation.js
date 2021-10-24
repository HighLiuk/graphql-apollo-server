const { Author } = require("../models")

async function addAuthor(parent, { name, age }) {
  return await Author.create({ name, age })
}

module.exports = {
  addAuthor,
}
