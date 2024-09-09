import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import { Outlet, useParams } from "react-router-dom";
import Books from "../Books/Books";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
