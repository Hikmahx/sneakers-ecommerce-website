import React from 'react'

const ProductItem = () => {
  return (
    <div className="product-card bg-white min-w-[4rem] w-full max-w-xs h-auto rounded-md shadow-md pb-12 mx-3 mb-6 cursor-pointer">
      <div className="img-wrapper p-5 border-b border-grayish-blue hover:p-0 transition-all">
        <img
          src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
          alt="product display"
          className=""
        />
      </div>
      <div className="product-info p-5">
        <h3 className="company uppercase text-orange font-bold text-xs tracking-wider pb-3">
          sneaker company
        </h3>
        <h4 className="product capitalize text-very-dark-blue text-xl lg:text-2xl font-bold sm:leading-none pb-5">
          fall limited edition sneakers
        </h4>
        <div className="price flex justify-between items-center">
          <div className="discount-price text-xl font-bold">$125.00</div>
          <div className="original-price text-grayish-blue line-through">
            $250.00
          </div>
          <div className="discount text-orange bg-pale-orange font-bold w-max px-2 rounded mx-5 h-6">
            50%
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem