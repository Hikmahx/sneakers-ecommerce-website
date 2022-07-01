import React from "react";
import aboutHeader from "../assets/page-header/about-header.jpg";
import Filter from "../components/Filter";
import ProductItem from "../components/home/ProductItem";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

const Products = () => {
  const products = useSelector((state) => state.product.products);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  const errMsg = useSelector((state) => state.product.errMsg);

  return (
    <section className="h-auto pt-2 min-h-[80vh]">
      <div className="max-w-xl sm:max-w-4xl lg:max-w-7xl relative px-5 pt-20 pb-12 items-center mx-auto lg:mx-20 xl:mx-28 2xl:mx-40 3xl:mx-auto lg:pb-2 lg:px-1 xl:px-3 2xl:px-1">
        <h2 className="product capitalize text-white font-bold text-center relative z-10 lg:text-left text-3xl sm:text-4xl sm:leading-none pb-3 px-8">
          Products
        </h2>
        <div className="absolute top-0 left-0 bg-dark-grayish-blue w-full h-48 rounded-md overflow-hidden">
          <img
            src={aboutHeader}
            alt="rows of sneakers"
            className="opacity-10 absolute h-full w-full object-cover"
          />
        </div>
        <Filter />
        {!error ? (
          <>
            {loading ? (
              <Loading />
            ) : (
              <div className="product-container max-w-2xl mx-auto lg:max-w-7xl px-4 lg:px-0 my-20 lg:my-32">
                <div className="grid grid-cols-1 gap-y-12 sm:y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                  {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <p className=" mt-20 text-center text-very-dark-blue">{errMsg}. Reload page</p>
          </>
        )}
      </div>
    </section>
  );
};

export default Products;
