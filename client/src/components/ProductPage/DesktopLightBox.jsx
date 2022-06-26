import React from "react";
import DesktopPreview from "./DesktopPreview";

const DesktopLightBox = () => {
  const prevPreview = (e) => {
    console.log(e.target);
  };

  const nextPreview = (e) => {
    console.log(e.target);
  };

  return (
    <div
      className="screen modal fade hidden fixed w-full h-full inset-0 outline-none"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <section className="modal-dialog absolute inset-0 flex-col items-end justify-center mt-20 h-screen transition duration-150 ease-in-out">
        <div className=" container max-w-lg m-auto relative p-3">
          <span
            className="close absolute -top-10 right-0 text-4xl leading-0 cursor-pointer text-white hover:text-orange transition-colors"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <ion-icon name="close-outline"></ion-icon>
          </span>
          <div className="modal-content">
            <DesktopPreview />
          </div>
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
    </div>
  );
};

export default DesktopLightBox;
