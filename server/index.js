const { ApolloServer } = require("apollo-server")
const typeDefs = require("./schema")
const Query = require("./resolvers/Query")
const Book = require("./resolvers/Book")

const resolvers = { Query, Book }

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`Server is running on ${url}`)
})
