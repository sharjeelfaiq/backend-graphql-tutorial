import { userServices } from "./user.services.js";

export const userResolvers = {
  Query: {
    getUserList: async () => {
      try {
        return await prisma.users.findAll();
      } catch (error) {
        throw new Error(error);
      }
    },

    getUserById: async (_parent, { id }) => {
      try {
        return await userServices.getUserById(id);
      } catch (error) {
        throw new Error(error);
      }
    },
  },

  Mutation: {
    createUser: async (_parent, { input }) => {
      try {
        return await userServices.createUser(input);
      } catch (error) {
        throw new Error(error);
      }
    },

    updateUserById: async (_parent, { id, input }) => {
      try {
        return await userServices.updateUserById(id, input);
      } catch (error) {
        throw new Error(error);
      }
    },

    removeUserById: async (_parent, { id }) => userServices.removeUserById(id),
  },
};
