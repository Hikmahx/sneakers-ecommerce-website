import { useDispatch, useSelector } from "react-redux";
import { changeImage } from "../../redux/reducers/productSlice";

const DesktopPreview = () => {
  const dispatch = useDispatch();
  const curIndex = useSelector((state) => state.product.curIndex);
  const images = useSelector((state) => state.product.images);

  return (
    <>
      <div className="preview xl:min-w-md max-w-3xl w-[448px] h-[448px] cursor-pointer bg-grayish-blue rounded-2xl mx-auto">
        <img
          src={images[curIndex]}
          alt="product-preview"
          className="rounded-2xl transition duration-150 ease-in-out w-full h-full object-cover object-bottom"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        />
      </div>
      <div
        className={
          "thumbnails flex max-w-3xl pt-8 justify-between " +
          (images.length > 3 ? "w-100" : "w-3/4 mx-auto")
        }
      >
        {images.map((img, index) => (
          <div
            key={index}
            className={
              "cursor-pointer w-22 h-22 rounded-xl relative overflow-hidden bg-white transition-all" +
              (curIndex === index ? " border border-orange" : "")
            }
          >
            <img
              onClick={() => dispatch(changeImage({ index }))}
              className={
                "w-full h-full hover:opacity-80 object-cover" +
                (curIndex === index ? " opacity-50" : "")
              }
              src={img}
              alt="thumbnail"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default DesktopPreview;
