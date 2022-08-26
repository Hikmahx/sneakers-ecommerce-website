import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import ProductItem from "./ProductItem";
const HomeProductsSection = () => {
  const { products, containFilters, errMsg, error, loading } = useSelector(
    (state) => state.product
  );

  return (
    <section className="bg-light-grayish-blue py-12">
      <div className="lg:px-0 xl:px-3 lg:mx-20 xl:mx-28 2xl:mx-36 3xl:mx-auto max-w-3xl mx-auto lg:max-w-7xl lg:pb-16 lg:mt-7">
        <h2 className="text-very-dark-blue font-bold text-2xl text-center mx-auto lg:text-left sm:text-4xl sm:leading-none py-6 sm:pb-5 mb-6 lg:mb-9">
          Products
        </h2>
        <div className="max-w-2xl mx-auto lg:max-w-7xl px-4 lg:px-0">
          {!error ? (
            <>
              {loading ? (
                <div className="my-20 mx-auto">
                  <Loading />
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-y-12 sm:y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                  {products.slice(0, 4).map((product, index) => (
                    <ProductItem
                      key={product._id}
                      product={product}
                      containFilter={containFilters[index]}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <>
              <p className=" mt-20 text-center text-very-dark-blue">
                {errMsg}. Reload page
              </p>
            </>
          )}
        </div>
        <div className="mx-8 mt-28 sm:mt-20 lg:mt-14">
          <Link to="products">
            <button className="cart min-w-[4rem] w-full max-w-xs md:max-w-lg lg:max-w-none h-14 bg-pale-orange border border-orange rounded-lg mt-12 mx-auto text-orange font-bold flex items-center justify-center lg:w-52 shadow-[inset_0_0_0_0_#ff7d1a] hover:shadow-[inset_0_-4rem_0_0_#ff7d1a] hover:text-white transition-all duration-300">
              Explore More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProductsSection;
