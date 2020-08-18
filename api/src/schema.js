const { gql } = require("apollo-server");

const typeDefs = gql`
enum Animal{
  DOG
  CAT
}
  type User {
    id: ID!
    username: String!
    pets:[Pet]!
  }
  type Pet {
    id: ID!
    name: String!
    createdAt: String!
    type: Animal!
    owner:User!
  }
  input PetInput{
    type:Animal
    name:String
  }
  type Query {
    pets(input:PetInput): [Pet]!
    pet(id:ID!):Pet!
    user:User!
  }
  input NewPetInput{
    id:ID
    name:String!
    type:Animal!
  }
  type Mutation{
    addPet(input:NewPetInput!):Pet!
  }
`;
module.exports = typeDefs;
