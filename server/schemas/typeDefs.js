const { gql } = require('apollo-server-express');



const typeDefs = gql`
  type Mutation {
    addUser(name: String!, email: String!, password:string!): User!
  }

  type User {
    _id: String!,
    name: String!,
    email: String!,
  
  `

  
module.exports = typeDefs;