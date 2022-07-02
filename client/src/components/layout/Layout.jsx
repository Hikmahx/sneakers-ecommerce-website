import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/reducers/productSlice";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
