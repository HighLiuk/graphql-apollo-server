const { gql } = require("apollo-server")

const typeDefs = gql`
  type Query {
    books: [Book!]!
  }

  type Book {
    id: ID!
    name: String!
    genre: String!
  }
`

module.exports = typeDefs
