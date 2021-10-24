const { gql } = require("apollo-server")

const typeDefs = gql`
  type Query {
    books: [Book!]!
    book(id: ID!): Book
    authors: [Author!]!
    author(id: ID!): Author
  }

  type Book {
    id: ID!
    name: String!
    genre: String!
  }

  type Author {
    id: ID!
    name: String!
    age: Int!
  }
`

module.exports = typeDefs
