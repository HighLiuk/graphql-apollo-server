const { ApolloServer } = require("apollo-server")
const typeDefs = require("./schema")
const Query = require("./resolvers/Query")
const Mutation = require("./resolvers/Mutation")
const Book = require("./resolvers/Book")
const Author = require("./resolvers/Author")

const resolvers = { Query, Mutation, Book, Author }

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`Server is running on ${url}`)
})
