import { createContext } from "react";

export const BooksContext = createContext({
  wishedBooks: [],
  readBooks: [],
});
