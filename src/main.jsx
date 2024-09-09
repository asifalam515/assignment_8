import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Books from "./components/Books/Books.jsx";
import Home from "./components/Home/Home.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";
import ListedBooks from "./components/ListedBooks/ListedBooks.jsx";
import ReadingList from "./components/ReadingList/ReadingList.jsx";
import WishList from "./components/WishList/WishList.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/books/",
        element: <Books></Books>,
      },
      {
        path: "book/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("books.json"),
      },
    ],
  },
  {
    path: "/listed/",
    element: <ListedBooks></ListedBooks>,
    loader: () => fetch("books.json"),
    children: [
      {
        path: "/listed/reading/",
        element: <ReadingList></ReadingList>,
        loader: () => fetch("books.json"),
      },
      {
        path: "/listed/wishlist/",
        element: <WishList></WishList>,
        loader: () => fetch("books.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
