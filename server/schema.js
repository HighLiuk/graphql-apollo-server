const { gql } = require("apollo-server")

const typeDefs = gql`
  type Query {
    books: [Book!]!
    book(id: ID!): Book
  }

  type Book {
    id: ID!
    name: String!
    genre: String!
  }
`

module.exports = typeDefs
