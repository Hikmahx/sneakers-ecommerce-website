import React, { createRef, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllProducts } from "../../data";
import { getProducts, activeThumbnail, activeModalThumbnail } from '../../redux/reducers/productSlice'


const DesktopPreview = ({ thumbnails }) => {
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(activeThumbnail(thumbnailRef))
  // eslint-disable-next-line    
}, [])

  const thumbnailRef = useRef()


  return (
    <>
      <div className="preview xl:min-w-md max-w-3xl rounded-2xl overflow-hidden cursor-pointer">
        <img
          // onClick={lightBox}
          src={AllProducts[0].img[0]}
          alt="product-preview"
          className="transition duration-150 ease-in-out"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          // data-bs-toggle="modal" data-bs-target="#exampleModal"
        />
      </div>
      <div
        ref={thumbnailRef}
        className={"thumbnails flex max-w-3xl pt-8 justify-between " + (AllProducts[10].img.length> 3? 'w-100' : "w-3/4 mx-auto")}
      >
        {AllProducts[10].img.map((img, index) => (
          <div
            // ref={modalThumbnailRef}
            key={index}
            className="cursor-pointer w-22 h-22 rounded-xl hover:opacity-80 relative overflow-hidden bg-white"
          >
            <img
              id={index}
              // onClick={previewDisplay}
              className="w-full"
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
