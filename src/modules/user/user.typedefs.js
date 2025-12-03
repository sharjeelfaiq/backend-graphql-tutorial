import { gql } from "graphql-tag";

export const userTypeDefs = gql`
  type User {
    id: ID!
    email: String!
  }

  input CreateUserInput {
    email: String!
    password: String!
  }

  input UpdateUserByIdInput {
    email: String
  }

  type Query {
    getUserList: [User!]!
    getUserById(id: ID!): User
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUserById(id: ID!, input: UpdateUserByIdInput!): User
    removeUserById(id: ID!): User
  }
`;
