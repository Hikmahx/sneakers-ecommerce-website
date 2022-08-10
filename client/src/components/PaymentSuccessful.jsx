import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PaymentSuccessful = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <section className="h-auto pt-2 min-h-[80vh] flex justify-center text-center">
      <div className="max-w-xl sm:max-w-4xl lg:max-w-7xl relative px-5 pt-20 pb-12 items-center mx-auto lg:mx-20 xl:mx-28 2xl:mx-40 3xl:mx-auto lg:pb-2 lg:px-1 xl:px-3 2xl:px-1">
        <span className="flex items-center justify-center h-12 w-12 relative m-auto">
          <span className="animate-[ping_1s_ease-in-out_infinite] absolute inline-flex h-full w-full rounded-full bg-pale-orange opacity-75"></span>
          <span className="animate-[ping_1s_ease-in-out_infinite] absolute inline-flex h-3/4 w-3/4 rounded-full bg-pale-orange opacity-75"></span>
          <span className="relative inline-flex rounded-full h-12 w-12 bg-pale-orange justify-center items-center text-2xl font-bold text-very-dark-blue">
            <ion-icon name="checkmark"></ion-icon>
          </span>
        </span>
        <h3 class="text-xl leading-6 font-bold text-gray-900 mt-12">
          Payment Successful!
        </h3>
        {userInfo && (
          <div className="mt-8">
            <p className="text-grayish-blue mb-8">Congratulation on your order. Check your orders in your profile.</p>
            <Link to="/user-profile/orders">
              <button className="w-full max-w-xs m-auto bg-orange border border-orange rounded-md py-3 px-4 text-base font-medium text-white shadow-[inset_0_0_0_0_#ffede0] hover:shadow-[inset_0_-4rem_0_0_#ffede1] hover:text-orange transition-all duration-300">

              View Orders
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default PaymentSuccessful;
