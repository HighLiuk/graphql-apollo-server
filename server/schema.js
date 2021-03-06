const { gql } = require("apollo-server")

const typeDefs = gql`
  type Query {
    books: [Book!]!
    book(id: ID!): Book
    authors: [Author!]!
    author(id: ID!): Author
  }

  type Mutation {
    addAuthor(name: String!, age: Int!): Author!
    addBook(name: String!, genre: String!, authorId: ID!): Book!
  }

  type Book {
    id: ID!
    name: String!
    genre: String!
    author: Author!
  }

  type Author {
    id: ID!
    name: String!
    age: Int!
    books: [Book!]!
  }
`

module.exports = typeDefs
