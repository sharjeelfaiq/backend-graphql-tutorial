import { gql } from "graphql-tag";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const userTypeDefs = gql`
  type User {
    id: ID!
    email: String!
  }

  input CreateUserInput {
    email: String!
    password: String!
  }

  type Query {
    userList: [User!]!
  }

  type Mutation {
    createUser(input: CreateUserInput!): User
  }
`;

export const userResolvers = {
  Query: {
    userList: async () => {
      try {
        return await prisma.user.findMany();
      } catch (error) {
        throw new Error(error);
      }
    },
  },

  Mutation: {
    createUser: async (_parent, { input }) => {
      try {
        return await prisma.user.create({ data: input });
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};
