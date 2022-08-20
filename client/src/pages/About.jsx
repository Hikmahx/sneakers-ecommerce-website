import React from "react";
import AboutHeader from "../assets/page-header/about-header.jpg";

const About = () => {
  return (
    <section className="h-auto pt-2 min-h-[80vh]">
      <div className="max-w-xl sm:max-w-4xl lg:max-w-7xl relative px-5 pt-20 pb-12 items-center mx-auto lg:mx-20 xl:mx-28 2xl:mx-40 3xl:mx-auto lg:pb-2 lg:px-1 xl:px-3 2xl:px-1">
        <h2 className="product capitalize text-white font-bold text-center relative z-10 lg:text-left text-3xl sm:text-4xl sm:leading-none pb-3 px-8">
          About Us
        </h2>
        <div className="absolute top-0 left-0 bg-dark-grayish-blue w-full h-48 rounded-md overflow-hidden">
          <img
            src={AboutHeader}
            alt="rows of sneakers"
            className="opacity-10 absolute h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
