import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const job = jobs.find((job) => job.bookId == id);
  const {
    bookName,
    author,
    category,
    review,
    tags,
    publisher,
    yearOfPublishing,
    rating,
    totalPages,
  } = job;
  return (
    <div className="card bg-base-100 flex flex-row shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className=" mx-2">
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author}</p>
        <hr />

        <p>{category}</p>

        <hr />
        <h5>
          {" "}
          <span className="font-bold">Review</span>:{review}{" "}
        </h5>
        <div className="">
          <h2 className="text-green-600 flex flex-row gap-5">
            <h1 className="text-gray-400 font-bold"> Tag:</h1>
            {tags.map((tag, idx) => (
              <p key={idx}>#{tag}</p>
            ))}
          </h2>
        </div>
        <hr />
        <div className="my-2">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}

              <tbody>
                {/* row 1 */}
                <tr className="hover">
                  <td>Number of Pages </td>
                  <td className="font-bold">: {totalPages}</td>
                </tr>
                {/* row 2 */}
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
        <div className="card-actions ">
          <button className="btn btn-neutral">Read</button>
          <button className="btn btn-success">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
