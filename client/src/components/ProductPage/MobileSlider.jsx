import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductItem } from "../../redux/reducers/productSlice";

const MobileSlider = () => {
  let params = useParams();
  const dispatch = useDispatch();
  const images = useSelector((state) => state.product.images);


  useEffect(() => {
    dispatch(getProductItem(params.id));
    // eslint-disable-next-line
  }, []);

  const prevSlide = (e) => {
    console.log(e.target);
  };

  const nextSlide = (e) => {
    console.log(e.target);
  };

  return (
    <div className="slider overflow-hidden relative mt-1">
      <div
        // ref={sliderRef}
        className="images flex w-full sm:w-1/2 transition-all"
      >
        {images.map((image, index) => (
          <img className="object-cover" key={index} src={image} alt="slider-img" />
        ))}
      </div>
      <div className="directions absolute inset-x-0 inset-y-1/2 flex items-center justify-between mx-4">
        <button
          onClick={prevSlide}
          className="back-arrow w-10 h-10 bg-white rounded-full"
        >
          <i className="flex items-center justify-center m-auto text-lg">
            <ion-icon name="chevron-back-outline"></ion-icon>
          </i>
        </button>
        <button
          onClick={nextSlide}
          className="next-arrow w-10 h-10 bg-white rounded-full"
        >
          <i className="flex items-center justify-center m-auto text-lg">
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </i>
        </button>
      </div>
    </div>
  );
};

export default MobileSlider;
