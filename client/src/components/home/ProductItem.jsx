import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"

const ProductItem = ({ product, containFilter }) => {
  return (
    <AnimatePresence>
    <motion.div layout
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
     className={"group relative " + (containFilter ? "block" : "hidden")}>
      <div className="w-full min-h-80 bg-grayish-blue aspect-w-1 aspect-h-1 rounded-md overflow-hidden  lg:h-80 lg:aspect-none relative before:absolute before:bg-[hsla(222,_4%,_48%,_0.4)] before:inset-0 text-center before:h-0 group-hover:before:h-full before:transition-all">
        <img
          src={product.img[0]}
          alt={product.alt}
          className="w-full h-full object-center object-cover sm:h-80 lg:w-full lg:h-full"
        />
      </div>
      <div className="">
        <Link to={`/products/${product._id}`} className="cursor-pointer">
          <span aria-hidden="true" className="absolute inset-0" />
          <p className="company uppercase text-orange font-bold text-[0.625rem] tracking-wider pb-2 pt-4">
            {product.company}
          </p>
          <h3 className="product capitalize text-very-dark-blue text-lg font-bold sm:leading-none pb-4 h-12">
            {product.title}
          </h3>
        </Link>
        <div className="flex justify-between items-center text-sm">
          <div className="discount-price font-bold">
            ${product.discountPrice}
          </div>
          <div className="original-price text-grayish-blue line-through">
            ${product.price}
          </div>
          <div className="discount text-orange bg-pale-orange font-bold w-max px-2 rounded mx-5 h-6">
            {Math.floor(
              (product.price / product.price -
                product.discountPrice / product.price) *
                100
            )}
            %
          </div>
        </div>
      </div>
    </motion.div>
    </AnimatePresence>
  );
};

export default ProductItem;
