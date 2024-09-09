import { useEffect, useState } from "react";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getStoredReadingList, getStoredWishList } from "../../utility/Utility";
import Navbar from "../Navbar/Navbar";

const ListedBooks = () => {
  const books = useLoaderData();

  const [wishedBooks, setWishedBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const storedWishedIds = getStoredWishList();
    const storedReadingIds = getStoredReadingList();

    if (Array.isArray(books) && books.length > 0) {
      const wishList = storedWishedIds
        .map((id) => books.find((book) => book.bookId == id))
        .filter((book) => book !== undefined);

      const readingList = storedReadingIds
        .map((id) => books.find((book) => book.bookId == id))
        .filter((book) => book !== undefined);

      setWishedBooks(wishList);
      setReadBooks(readingList);
    }
  }, [books]);

  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-5xl">Reading List: {readBooks.length}</h1>
      <h1 className="text-5xl">Wished List: {wishedBooks.length}</h1>

      <h2 className="text-3xl font-bold text-center">Books</h2>
      <div className="flex flex-row gap-10">
        <NavLink to="/listed/reading/" className="btn btn-primary">
          {" "}
          Read List
        </NavLink>
        <NavLink to="/listed/wishlist/" className="btn btn-secondary">
          {" "}
          Wishlist Books
        </NavLink>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default ListedBooks;
