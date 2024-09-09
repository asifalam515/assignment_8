import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  saveReadingList,
  saveWishList,
  getStoredReadingList,
  getStoredWishList,
} from "../../utility/Utility";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const book = books.find((book) => book.bookId == id);
  const {
    bookName,
    author,
    category,
    review,
    tags,
    bookId,
    publisher,
    yearOfPublishing,
    rating,
    image,
    totalPages,
  } = book;

  const handleWishBtn = () => {
    const readingList = getStoredReadingList();
    if (readingList.includes(bookId)) {
      toast.error("This book is already in your Reading List");
      return;
    }
    saveWishList(bookId);
    toast.success("Added to Wish List");
  };

  const handleReadBtn = () => {
    const wishList = getStoredWishList();
    if (wishList.includes(bookId)) {
      const updatedWishList = wishList.filter((id) => id !== bookId);
      localStorage.setItem("wish-list", JSON.stringify(updatedWishList));
      toast.info("Removed from Wish List");
    }
    saveReadingList(bookId);
    toast.success("Added to Reading List");
  };

  return (
    <div className="card bg-base-100 flex flex-row shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="mx-2">
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author}</p>
        <hr />
        <p>{category}</p>
        <hr />
        <h5>
          <span className="font-bold">Review</span>: {review}
        </h5>
        <div className="">
          <h2 className="text-green-600 flex flex-row gap-5">
            <h1 className="text-gray-400 font-bold">Tag:</h1>
            {tags.map((tag, idx) => (
              <p key={idx}>#{tag}</p>
            ))}
          </h2>
        </div>
        <hr />
        <div className="my-2">
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                <tr className="hover">
                  <td>Number of Pages</td>
                  <td className="font-bold">: {totalPages}</td>
                </tr>
                <tr>
                  <td>Publisher:</td>
                  <td className="font-bold">: {publisher}</td>
                </tr>
                <tr>
                  <td>Year of Publishing:</td>
                  <td className="font-bold">: {yearOfPublishing}</td>
                </tr>
                <tr>
                  <td>Rating:</td>
                  <td className="font-bold">: {rating}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-actions">
          <button onClick={handleReadBtn} className="btn btn-neutral">
            Read
          </button>
          <button onClick={handleWishBtn} className="btn btn-success">
            Wishlist
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
