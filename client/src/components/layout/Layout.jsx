import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getFilteredProducts, getProducts, setError } from "../../redux/reducers/productSlice";
import Footer from "./Footer";
import Header from "./Header";
import axios from 'axios'

const Layout = ({ children }) => {
  let location = useLocation();
  let gender = location.pathname.split("/")[2];
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(getFilteredProducts(gender));
    
    const getData = async ()=>{
      try {
        let res = await axios.get('/api/products/')
        let products = res.data
        dispatch(getProducts(products));
      } catch (err) {
        dispatch(setError(err.message))
      }
    }
    
    getData()
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
