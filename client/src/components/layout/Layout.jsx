import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getFilteredProducts, getProducts } from "../../redux/reducers/productSlice";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  let location = useLocation();
  let gender = location.pathname.split("/")[2];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getFilteredProducts(gender));
    // eslint-disable-next-line
  }, [gender]);

  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
