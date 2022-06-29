import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About";
import Collections from "../pages/Collections";
import Contact from "../pages/Contact";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Login from "../pages/User/Login";
import Register from "../pages/User/Register";
import Layout from "../components/layout/Layout";
import Products from "../pages/Products";
import ProductPage from "../pages/ProductPage";
import NotFound from "../pages/NotFound";

const MyRoutes = () => {
  const user = false;
  // const location = useLocation();
  // console.log(location.pathname.split("/")[2]);
  return (
    <Layout>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/products/" element={<Products />} />
        <Route path="/products/men" element={<Men />} />
        <Route path="/products/women" element={<Women />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={user ? <Navigate to="/" replace={true}  /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" replace={true}  /> : <Register />} />
      </Routes>
    </Layout>
  );
};

export default MyRoutes;
