import React from "react";
import DesktopPreview from "./DesktopPreview";

const DesktopLightBox = () => {
  const close = (e) => {
    console.log(e.target);
  };

  const prevPreview = (e) => {
    console.log(e.target);
  };

  const nextPreview = (e) => {
    console.log(e.target);
  };

  return (
    <section className="modal p-32 absolute z-40 inset-0 flex flex-col items-end justify-center mt-20 h-screen">
      <div className="screen fixed inset-0 opacity-70 bg-black transition-all"></div>
      <div className="modal-content container max-w-lg m-auto z-40 relative p-3">
        <span
          onClick={close}
          className="close absolute -top-10 right-0 text-4xl leading-0 cursor-pointer text-white hover:text-orange transition-colors"
        >
          <ion-icon name="close-outline"></ion-icon>
        </span>
        <DesktopPreview />
      </div>
      <div className="directions absolute inset-x-1/4 inset-y-1/2 flex items-end justify-between mx-20 z-40">
        <button
          onClick={prevPreview}
          className="back-arrow w-14 h-14 bg-white rounded-full"
        >
          <i className="flex items-center justify-center m-auto text-2xl hover:text-orange">
            <ion-icon name="chevron-back-outline"></ion-icon>
          </i>
        </button>
        <button
          onClick={nextPreview}
          className="next-arrow w-14 h-14 bg-white rounded-full"
        >
          <i className="flex items-center justify-center m-auto text-2xl hover:text-orange">
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </i>
        </button>
      </div>
    </section>
  );
};

export default DesktopLightBox;
