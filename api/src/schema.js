const { gql } = require('apollo-server')

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
    enum PetType {
        CAT
        DOG
    }
    
    type User {
        id: ID!
        username: String!
        pets: [Pet!]!
    }
    
    type Pet {
        id: ID!
        name: String!
        type: PetType!
        createdAt: String!
        img: String
        owner: User!
    }

    input PetInput {
        name: String
        type: PetType
    }
    
    input NewPetInput {
        name: String!
        type: PetType!
    }
    
    type Query {
        pets(input: PetInput): [Pet]!
        pet(input: PetInput): Pet
    }
    
    type Mutation {
        newPet(input: NewPetInput): Pet!
    }

`;

module.exports = typeDefs
