import React from "react";
import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <section className="bg-light-grayish-blue py-12">
      <div className=" lg:px-1 max-w-3xl mx-auto lg:max-w-7xl lg:pb-16 lg:mt-7">
        <h2 className="xl:mx-32 2xl:mx-40 text-very-dark-blue font-bold text-2xl text-center mx-auto lg:mx-0 lg:text-left sm:text-4xl sm:leading-none py-6 sm:pb-5 mb-6 lg:mb-9">
          Products
        </h2>
        <div
          id="products 2xl:mx-40"
          className="flex flex-wrap justify-center items-center mx-auto px-4 xl:-mx-2"
        >
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>

        <button class="cart min-w-[4rem] w-full max-w-lg lg:max-w-none h-14 bg-pale-orange border border-orange rounded-lg mt-12 mx-auto text-orange font-bold flex items-center justify-center lg:w-52 hover:text-white hover:bg-orange transition-colors">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default Products;
