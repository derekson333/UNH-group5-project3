const { gql } = require('apollo-server-express')

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        applications: [Application]
        adoptions: [Animal]
    }

    type Animal {
        _id: ID!
        name: String!
        age: Int!
        sex: String!
        animalType: String!
        breed: String
        familyFriendly: Boolean
        applications: [Application]
        adoption: User
    }

    type Application {
        _id: ID!
        applicant: User
        adoptee: Animal
        streetAddress: String!
        city: String!
        state: String!
        zip: Int!
        phone: Int!
        rent: Boolean!
        children: Int!
        numberOtherPets: Int!
        typeOtherPets: String 
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        user: User
        animals: [Animal]
        animal(id: ID!): Animal
        application: Application
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        removeUser(userId: ID!): User
        addAnimal(name: String!, age: Int!, sex: String!, species: String!, breed: String, familyFriendly: Boolean): Animal
        removeAnimal(id: ID!): Animal
        addApplication(applicant: ID!, adoptee: ID!): Application
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;