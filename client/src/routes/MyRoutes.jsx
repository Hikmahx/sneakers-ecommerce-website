import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About';
import Collections from '../pages/Collections';
import Contact from '../pages/Contact';
import Men from '../pages/Men';
import Women from '../pages/Women';
import Login from '../pages/User/Login';
import Register from '../pages/User/Register';
import Layout from '../components/layout/Layout';

const MyRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/collections' element={<Collections />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/men' element={<Men />} />
        <Route path='/women' element={<Women />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </Layout>
  );
};

export default MyRoutes;
