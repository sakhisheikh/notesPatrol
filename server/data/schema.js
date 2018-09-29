const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('./resolvers')

// graphQL schema language
const typeDefs = `
 type Todo {
  userId: ID!
  title: String!
 }

 type Query {
   myTodos: [Todo]
 }

 type Mutation {
   addTodo (title: String!): Todo
 }
`

module.exports = makeExecutableSchema({ typeDefs, resolvers })
