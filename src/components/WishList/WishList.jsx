import { useContext } from "react";
import { BooksContext } from "../../context/bookContext";
import { Link } from "react-router-dom";
import { IoIosPeople } from "react-icons/io";
import { GiNotebook } from "react-icons/gi";

const WishList = () => {
  const { wishedBooks } = useContext(BooksContext);

  return (
    <div>
      <h1>Here is my wishlist</h1>
      <ul>
        {wishedBooks.map((book) => (
          <li key={book.bookId}>
            <div className="card bg-base-100 w-100 shadow-xl flex flex-row">
              <figure>
                <img src={book.image} alt="Book Cover" />
              </figure>
              <div className="m-2">
                <h2 className="card-title">{book.bookName}</h2>
                <p>By: {book.author}</p>
                <div>
                  {book.tags.map((tag, idx) => (
                    <p key={idx}>#{tag}</p>
                  ))}
                </div>
                <div className="flex flex-row gap-2 items-center my-2">
                  <IoIosPeople />
                  <h1>Publisher: {book.publisher}</h1>
                  <GiNotebook />
                  <h1>Page: {book.totalPages}</h1>
                </div>
                <hr />
                <div className="card-actions my-2">
                  <button className="btn btn-outline btn-info">
                    Category: {book.category}
                  </button>
                  <button className="btn btn-outline btn-success">
                    Rating: {book.rating}
                  </button>
                  <Link
                    to={`/book/${book.bookId}`}
                    className="btn btn-outline btn-error"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WishList;
