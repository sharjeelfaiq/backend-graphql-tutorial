import express from "express";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express4";
import { gql } from "graphql-tag";

dotenv.config();

const main = async () => {
  const app = express();
  app.use(express.json());
  const PORT = process.env.PORT;

  const typeDefs = gql`
    type Query {
      hello: String
    }
  `;

  const resolvers = {
    Query: {
      hello: () => "Hello world",
    },
  };

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();
  app.use("/graphql", expressMiddleware(apolloServer));

  app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
};

main();
