const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
    type User {
      id: ID!
      username: String!
    }
    
    type Pet {
        id: ID!
        name: String!
        type: String!
        createdAt: String!
    }

    input PetInput {
        name: String
        type: String
    }
    
    type Query {
        pets(input: PetInput): [Pet]!
        pet(input: PetInput): Pet
    }

`;

module.exports = typeDefs
