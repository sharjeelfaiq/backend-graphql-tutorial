import express from "express";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express4";

dotenv.config();

(async function main() {
  const app = express();
  app.use(express.json());
  const PORT = process.env.PORT;

  // const typeDefs = gql`
  //   type Query {
  //     hello: String
  //     greeting: String
  //   }

  //   type Mutation {
  //     hello: String
  //     greeting: String
  //   }
  // `;

  // const resolvers = {
  //   Query: {
  //     hello: () => "Hello world",
  //     greeting: () => "Good day",
  //   },

  //   Mutation: {
  //     hello: () => "Hello world",
  //     greeting: () => "Good day",
  //   },
  // };

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();
  app.use("/graphql", expressMiddleware(apolloServer));

  app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
})();
