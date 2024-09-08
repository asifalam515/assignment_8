import React from "react";
import book from "../../assets/book.jpg";

const Banner = () => {
  return (
    <div className="grid grid-cols-3  m-2 shadow-lg ">
      <div className="banner-text col-span-2 p-20  flex flex-col gap-6 ">
        <h1 className="text-5xl">Books to freshen up your bookshelf</h1>
        <button className="btn btn-success w-52">View The List</button>
      </div>
      <div className="banner-img p-10">
        <img className=" rounded-md" src={book} alt="" />
      </div>
    </div>
  );
};

export default Banner;
