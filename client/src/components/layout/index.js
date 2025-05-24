import React from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const index = ({updateCartNumber, setUpdateCartNumber}) => {
  return (
    <>
      <Navbar  
        updateCartNumber={updateCartNumber}
        setUpdateCartNumber={setUpdateCartNumber}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default index;
