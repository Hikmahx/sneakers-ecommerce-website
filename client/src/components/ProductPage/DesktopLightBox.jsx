import React from "react";
import DesktopPreview from "./DesktopPreview";
import { useDispatch } from "react-redux";
import { prevPreview, nextPreview } from "../../redux/reducers/productSlice";

const DesktopLightBox = () => {
  const dispatch = useDispatch();

  return (
    <div
      className="screen modal fade hidden fixed w-full h-full inset-0 outline-none"
      id="exampleModal"
      tabIndex="-1"
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
          <div className="directions absolute inset-x-0 top-0 mt-3 h-[448px] flex items-center justify-between z-40 -mx-4">
            <button
              onClick={() => dispatch(prevPreview())}
              className="back-arrow w-14 h-14 bg-white rounded-full"
            >
              <i className="flex items-center justify-center m-auto text-2xl hover:text-orange">
                <ion-icon name="chevron-back-outline"></ion-icon>
              </i>
            </button>
            <button
              onClick={() => dispatch(nextPreview())}
              className="next-arrow w-14 h-14 bg-white rounded-full"
            >
              <i className="flex items-center justify-center m-auto text-2xl hover:text-orange">
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </i>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesktopLightBox;
