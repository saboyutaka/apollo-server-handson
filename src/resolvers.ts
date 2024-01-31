import { books } from "./datasources/db";

export const resolvers = {
  Query: {
    books: () => books,
  },
};
