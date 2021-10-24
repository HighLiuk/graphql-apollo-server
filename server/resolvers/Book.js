const { Author } = require("../models")

async function author({ authorId }) {
  return await Author.findOne({ where: { id: authorId } })
}

module.exports = {
  author,
}
