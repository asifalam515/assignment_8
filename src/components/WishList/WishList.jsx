import { useLoaderData, useParams } from "react-router-dom";

const WishList = () => {
  const books = useLoaderData();

  return (
    <div>
      <h1>Here is my wishlist</h1>
    </div>
  );
};

export default WishList;
