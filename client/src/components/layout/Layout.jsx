import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getAllProducts, getFilteredProducts} from "../../redux/reducers/productSlice";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  let location = useLocation();
  let gender = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.product.loading);


  useEffect( () => {
    dispatch(getAllProducts())
    if(!loading){
      dispatch(getFilteredProducts({gender}));
    }
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
