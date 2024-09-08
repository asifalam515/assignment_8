import { CiStar } from "react-icons/ci";

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    tags,
    publisher,
    yearOfPublishing,
    category,
  } = book;

  return (
    <div className="flex justify-center p-4">
      <div className="card card-compact bg-base-100 w-full sm:w-72 md:w-80 lg:w-96 shadow-xl">
        <figure>
          <img
            className="w-full h-48 sm:h-56 md:h-64 object-cover"
            src={image}
            alt={bookName}
          />
        </figure>
        <div className="card-body">
          <h2 className="tags flex flex-row text-accent font-bold">
            {tags.map((tag, idx) => (
              <p key={idx}>
                <span>{tag}</span>
              </p>
            ))}
          </h2>
          <h1 className="text-2xl">{bookName}</h1>
          <p>By: {author} </p>

          <div className="flex flex-row">
            <p> {category} </p>
            <div className="flex flex-row justify-center items-center gap-2">
              <p> {rating} </p>
              <p>
                <CiStar />
              </p>
              {/* icon */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
