import { useDispatch, useSelector } from "react-redux";
import { nextSlide, prevSlide } from "../../redux/reducers/productSlice";

const MobileSlider = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => state.product.images);
  const slideIndex = useSelector((state) => state.product.slideIndex);

  return (
    <div className="slider overflow-hidden relative mt-1 bg-grayish-blue">
      <div
        className="images flex w-full sm:w-1/2 transition-all"
        style={{ transform: `translateX(-${100 * slideIndex}%)` }}
      >
        {images.map((image, index) => (
          <img
            className="object-cover"
            key={index}
            src={image}
            alt="slider-img"
          />
        ))}
      </div>
      <div className="directions absolute inset-x-0 inset-y-1/2 flex items-center justify-between mx-4">
        <button
          onClick={() => dispatch(prevSlide())}
          className="back-arrow w-10 h-10 bg-white rounded-full"
        >
          <i className="flex items-center justify-center m-auto text-lg">
            <ion-icon name="chevron-back-outline"></ion-icon>
          </i>
        </button>
        <button
          onClick={() => dispatch(nextSlide())}
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
