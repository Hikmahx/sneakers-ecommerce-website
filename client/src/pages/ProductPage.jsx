import React from "react";
import DesktopLightBox from "../components/ProductPage/DesktopLightBox";
import DesktopPreview from "../components/ProductPage/DesktopPreview";
import MobileSlider from "../components/ProductPage/MobileSlider";
import ProductDetails from "../components/ProductPage/ProductDetails";

const ProductPage = () => {
  const modal = false;
  return (
    <section className="product-container lg:flex lg:items-center lg:gap-x-12 xl:gap-x-24 lg:px-20 xl:px-40 lg:py-20 lg:m-auto lg:mt-2 lg:max-w-8xl">
      <h1 className="absolute w-1 h-1 overflow-hidden p-0 -m-1">
        Product page
      </h1>
      {modal && <DesktopLightBox />}
      <div className="mobile-slider lg:hidden">
        <MobileSlider />
      </div>
      <div className="destop-preview hidden lg:block">
        <DesktopPreview />
      </div>
      <section className="product-details container mx-auto px-6 pt-5 sm:pt-10 lg:pt-5 pb-20 lg:pb-5 lg:pr-0 lg:pl-7 xl:ml-1">
        <ProductDetails />
      </section>
    </section>
  );
};

export default ProductPage;
