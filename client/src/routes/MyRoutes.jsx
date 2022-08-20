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
import Checkout from "../pages/Checkout";
import { useSelector } from "react-redux";
import UserProfile from "../pages/User/UserProfile";
import Settings from "../pages/User/Profile/Settings";
import MyAccount from "../pages/User/Profile/MyAccount";
import MyOrders from "../pages/User/Profile/MyOrders";
import MyAddress from "../pages/User/Profile/MyAddress";
import Notifications from "../pages/User/Profile/Notifications";
import Password from "../pages/User/Profile/Password";
import PaymentSuccessful from "../components/PaymentSuccessful";

const MyRoutes = () => {
  const user = false;
  const { cartItems, userCartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <Layout>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/collections/:collection" element={<Collections />} />
        <Route path="/products/" element={<Products />} />
        <Route path="/products/men" element={<Men />} />
        <Route path="/products/women" element={<Women />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={user ? <Navigate to="/" replace={true}  /> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/" replace={true}  /> : <Register />} />
        <Route path="/user-profile" element={ <UserProfile/>}>
          <Route path="" element={<MyAccount />} />
          <Route path="orders" element={<MyOrders />} />
          <Route path="addresses" element={<MyAddress />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="password" element={<Password />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/checkout" element={ (userInfo? userCartItems.length <1 : cartItems.length<1)  ? <Navigate to="/products" replace={true}  /> : <Checkout />} />
        <Route path="/payment" element={<PaymentSuccessful />} />
      </Routes>
    </Layout>
  );
};

export default MyRoutes;
