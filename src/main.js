import express from "express";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import { userResolvers, userTypeDefs } from "./user/index.js";

dotenv.config();

const PORT = process.env.PORT;

(async function main() {
  const app = express();
  app.use(express.json());

  const apolloServer = new ApolloServer({
    typeDefs: [userTypeDefs],
    resolvers: [userResolvers],
  });

  await apolloServer.start();

  app.use("/graphql", expressMiddleware(apolloServer));

  app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
})();
