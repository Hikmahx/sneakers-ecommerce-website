import { useDispatch, useSelector } from "react-redux";
import { changeImage } from "../../redux/reducers/productSlice";

const DesktopPreview = ({ thumbnails }) => {
  const dispatch = useDispatch();
  const curIndex = useSelector((state) => state.product.curIndex);
  const images = useSelector((state) => state.product.images);

  return (
    <>
      <div className="preview xl:min-w-md max-w-3xl rounded-2xl overflow-hidden cursor-pointer">
        <img
          src={images[curIndex]}
          alt="product-preview"
          className="transition duration-150 ease-in-out"
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
              (curIndex === index ? " border-2 border-orange" : "")
            }
          >
            <img
              onClick={() => dispatch(changeImage(index))}
              className={
                "w-full h-full hover:opacity-80 " +
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
