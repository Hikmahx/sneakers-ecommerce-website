import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-white bg-very-dark-blue">
      <div className="wrapper px-5 py-12 lg:py-16 md:px-0 lg:mx-20 xl:mx-28 2xl:mx-40 3xl:mx-auto lg:pb-12 lg:px-1 xl:px-3 2xl:px-1  max-w-xl md:max-w-2xl mx-auto lg:max-w-7xl flex flex-col md:flex-row justify-center lg:justify-between items-center md:items-start">
        <div className="w-[138px] my-10 md:my-0">
          <div className="logo">
          <Link to="/"  className="cursor-pointer">
              <svg width="138" height="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.217 20c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.35-.053c-2.7-.405-3.18-.788-3.18-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.281v-.133c0-2.389-1.35-5.238-7.774-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.223 4.675.21.028.433.054.659.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.797 0-3.784-.593-3.784-1.92v-.134H.002L0 14.926v.317c.008.79.118 1.913 1.057 2.862C2.303 19.362 4.712 20 8.217 20Zm13.21 0v-7.49c0-2.104.547-4.423 4.176-4.423 3.915 0 3.778 2.777 3.768 4.042V20h4.18v-7.768c0-2.264-.176-7.766-6.732-7.766-2.778 0-4.192.911-5.195 2.28h-.197V4.467H17.22V20h4.207Zm21.959 0c5.094 0 7.787-2.07 8.217-5.405H47.53c-.386 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.056-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.099-9.574h-8.188c.486-1.574 1.764-2.431 4.089-2.431 2.994 0 3.755 1.267 4.099 2.431ZM70.499 20V4.457H66.29V6.74h-.176c-1.053-1.377-2.809-2.283-5.677-2.283-6.433 0-7.225 5.293-7.253 7.635v.137c0 2.092.732 7.771 7.241 7.771 2.914 0 4.684-.818 5.734-2.169h.131V20H70.5Zm-8.854-3.623c-3.996 0-4.447-3.032-4.447-4.148 0-1.21.426-4.148 4.455-4.148 3.631 0 4.374 2.044 4.374 4.148 0 2.35-.742 4.148-4.382 4.148ZM88.826 20l-6.529-9.045 6.588-6.488h-5.827l-6.836 6.756V0h-4.187v19.954h4.187V16.94l3.02-2.976L83.6 20h5.226Zm9.9 0c5.094 0 7.786-2.07 8.217-5.405h-4.074c-.387 1.02-1.63 1.72-4.143 1.72-2.721 0-3.962-1.03-4.25-3.106h12.527c.24-2.13-.029-5.417-3.026-7.44v.005c-1.312-.915-3.057-1.465-5.251-1.465-5.24 0-8.336 2.772-8.336 7.845 0 5.17 3.02 7.846 8.336 7.846Zm4.098-9.574h-8.187c.485-1.574 1.763-2.431 4.089-2.431 2.994 0 3.755 1.267 4.098 2.431ZM112.76 20v-6.97c0-2.103.931-4.542 4.05-4.542 1.33 0 2.393.236 2.785.346l.67-3.976c-.728-.16-1.626-.392-2.757-.392-2.665 0-3.622.794-4.486 2.282h-.262V4.466h-4.21V20h4.21Zm17.221 0c4.761 0 7.519-.753 7.519-4.606 0-3.4-3.38-4.172-6.66-4.682l-.56-.085-.279-.041-.349-.053c-2.701-.405-3.181-.788-3.181-1.471 0-.478.49-1.331 2.843-1.331 2.455 0 3.493.647 3.493 1.87v.134h4.282v-.133c0-2.389-1.35-5.238-7.775-5.238-5.952 0-7.201 2.584-7.201 4.752 0 3.097 2.763 4.086 7.224 4.675.21.028.432.054.658.081 1.669.197 3.172.42 3.172 1.585 0 1.01-1.615 1.222-3.298 1.222-2.796 0-3.784-.593-3.784-1.92v-.134h-4.319l-.001.301v.317c.008.79.117 1.913 1.056 2.862 1.246 1.257 3.655 1.895 7.16 1.895Z"
                  fill="#FFFFFF"
                  fillRule="nonzero"
                />
              </svg>
            </Link>
          </div>
          <div className="social flex justify-between items-center mt-4">
          <Link to="#" aria-label="facebook">
              <i className="text-2xl hover:text-orange fab fa-facebook-square"></i>
          </Link>
            <Link to="#" aria-label="youtube">
              <i className="text-2xl hover:text-orange fab fa-youtube"></i>
            </Link>
            <Link to="#" aria-label="twitter">
              <i className="text-2xl hover:text-orange fab fa-twitter"></i>
            </Link>
            <Link to="#" aria-label="instagram">
              <i className="text-2xl hover:text-orange fab fa-instagram"></i>
            </Link>
          </div>
        </div>
        <nav className="links flex flex-col sm:flex-row -mt-3 mb-10 md:mb-0 sm:px-10">
          <ul className="px-4">
            <li className="my-3 hover:text-orange w-fit sm:w-full mx-auto sm:mx-0">
            <Link to="/collections" className="">
                Collections
              </Link>
            </li>
            <li className="my-3 hover:text-orange w-fit sm:w-full mx-auto sm:mx-0">
              <Link to="/about-us" className="">
                About us
              </Link>
            </li>
            <li className="my-3 hover:text-orange w-fit sm:w-full mx-auto sm:mx-0">
              <Link to="/contact" className="">
                Contact
              </Link>
            </li>
          </ul>
          <ul className="px-4">
            <li className="my-3 hover:text-orange w-fit sm:w-full mx-auto sm:mx-0">
              <Link to="/products" className="">
                Products
              </Link>
            </li>
            <li className="my-3 hover:text-orange w-fit sm:w-full mx-auto sm:mx-0">
              <Link to="/products/men" className="">
                Men
              </Link>
            </li>
            <li className="my-3 hover:text-orange w-fit sm:w-full mx-auto sm:mx-0">
              <Link to="/products/women" className="">
                Women
              </Link>
            </li>
          </ul>
        </nav>
        <div className="copyright text-center md:text-left mb-8 md:mb-0">
          © Copyright 2022{" "}
          <a
            href="https://hikmah-yousuph.vercel.app/"
            className="border-bottom rounded-sm shadow-[inset_0_-1px_0_0_#fff] hover:shadow-[inset_0_-4rem_0_0_#ff7d1a] hover:text-very-dark-blue py-1 transition-all duration-300"
          >
            Hikmah Yousuph.
          </a>{" "}
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
