import React from "react";
import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <section className="bg-light-grayish-blue py-12">
      <div className="lg:px-0 xl:px-3 lg:mx-20 xl:mx-28 2xl:mx-36 3xl:mx-auto max-w-3xl mx-auto lg:max-w-7xl lg:pb-16 lg:mt-7">
        <h2 className="text-very-dark-blue font-bold text-2xl text-center mx-auto lg:text-left sm:text-4xl sm:leading-none py-6 sm:pb-5 mb-6 lg:mb-9">
          Products
        </h2>
        <div
          id="products"
          className="flex flex-wrap justify-center items-center mx-auto px-4 xl:-mx-2"
        >
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
        <div className="mx-8">
          <button className="cart min-w-[4rem] w-full max-w-xs md:max-w-lg lg:max-w-none h-14 bg-pale-orange border border-orange rounded-lg mt-12 mx-auto text-orange font-bold flex items-center justify-center lg:w-52 shadow-[inset_0_0_0_0_#ff7d1a] hover:shadow-[inset_0_-4rem_0_0_#ff7d1a] hover:text-white transition-all duration-300">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
