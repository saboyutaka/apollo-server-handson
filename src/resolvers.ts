import { books, authors, addresses } from "./datasources/db";

export const resolvers = {
  Query: {
    hello: () => "Hello world!",
    num: () => 543,
    num2: () => 786,
    books: () => books,
  },
  Mutation: {
    createBook: (_, args) => {
      args.input
      const book = {
        title: args.input.title,
        description: args.input.description,
        author_id: 1,
        tags: [],
      }
      return {
        book: book
      }
    },
  },
  Book: {
    author: (obj) => {
      return authors.find((author) => author.id == obj.author_id)
    },
  },
  Author: {
    address: (obj) => {
      return addresses.find((address) => address.id == obj.address_id)
    },
  }
};
