import React from "react";

const ProductItem = () => {
  return (
    <div className="group relative">
      <div className="w-full min-h-80 bg-grayish-blue aspect-w-1 aspect-h-1 rounded-md overflow-hidden  lg:h-80 lg:aspect-none relative before:absolute before:bg-[hsla(222,_4%,_48%,_0.4)] before:inset-0 text-center before:h-0 group-hover:before:h-full before:transition-all">
        <img
          src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
          alt="product display"
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="">
        <a href="/">
          <span aria-hidden="true" className="absolute inset-0" />
          <p className="company uppercase text-orange font-bold text-[0.625rem] tracking-wider pb-2 pt-4">
            sneaker company
          </p>
          <h3 className="product capitalize text-very-dark-blue text-lg font-bold sm:leading-none pb-4">
            fall limited edition sneakers
          </h3>
        </a>
        <div className="flex justify-between items-center text-sm">
          <div className="discount-price font-bold">$125.00</div>
          <div className="original-price text-grayish-blue line-through">
            $250.00
          </div>
          <div className="discount text-orange bg-pale-orange font-bold w-max px-2 rounded mx-5 h-6">
            50%
          </div>
        </div>
      </div>
    </div>
    // <div className="product-card bg-white min-w-[4rem] w-full max-w-xs h-auto rounded-md shadow-md pb-12 mx-3 mb-6 cursor-pointer">
    //   <div className="img-wrapper p-5 border-b border-grayish-blue hover:p-0 transition-all">
    //     <img
    //       src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
    //       alt="product display"
    //       className=""
    //     />
    //   </div>
    //   <div className="product-info p-5">
    //     <h3 className="company uppercase text-orange font-bold text-xs tracking-wider pb-3">
    //       sneaker company
    //     </h3>
    //     <h4 className="product capitalize text-very-dark-blue text-xl lg:text-2xl font-bold sm:leading-none pb-5">
    //       fall limited edition sneakers
    //     </h4>
    //     <div className="price flex justify-between items-center">
    //       <div className="discount-price text-xl font-bold">$125.00</div>
    //       <div className="original-price text-grayish-blue line-through">
    //         $250.00
    //       </div>
    //       <div className="discount text-orange bg-pale-orange font-bold w-max px-2 rounded mx-5 h-6">
    //         50%
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProductItem;
