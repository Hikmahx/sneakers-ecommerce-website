import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About";
import Collections from "../pages/Collections";
import Contact from "../pages/Contact";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Login from "../pages/User/Login";
import Register from "../pages/User/Register";
import Layout from "../components/layout/Layout";

const MyRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />
      <Route
        path="/collections"
        element={
          <Layout>
            <Collections />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
      <Route
        path="/men"
        element={
          <Layout>
            <Men />
          </Layout>
        }
      />
      <Route
        path="/women"
        element={
          <Layout>
            <Women />
          </Layout>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default MyRoutes;
