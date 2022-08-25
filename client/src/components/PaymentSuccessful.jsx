import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { emptyCart } from "../redux/reducers/cartSlice";
import { createOrder, getUserOrder } from "../redux/reducers/orderSlice";

const PaymentSuccessful = () => {
  document.title = "Congratulations on your payment";
  const { userInfo, userToken } = useSelector((state) => state.auth);
  const { userCartItems, cartItems, amountTotal } = useSelector(
    (state) => state.cart
  );
  const { success, loading, error } = useSelector((state) => state.order);
  const { addresses } = useSelector((state) => state.address);

  const dispatch = useDispatch();
  const paymentID = localStorage.getItem("paymentID");

  useEffect(() => {
    if (userInfo && addresses.length > 0) {
      dispatch(getUserOrder({ user: userInfo._id }));
      dispatch(
        createOrder({
          user: userInfo._id,
          paymentID,
          products: cartItems,
          amount: amountTotal,
          address:
            addresses.filter((address) => address.checked).length > 0
              ? addresses.filter((address) => address.checked)[0]
              : addresses[0],
        })
      );
    }
    // eslint-disable-next-line
  }, [userInfo, addresses]);

  useEffect(() => {
    if (userInfo && addresses.length > 0) {
      // EMPTY CART AFTER CREATING  ORDER FOR USER
      success && dispatch(emptyCart());
    }
    // IF IT'S A UNREGISTERED/NON-USER
    if (!userToken) {
      dispatch(emptyCart());
    }
    // eslint-disable-next-line
  }, [success, userCartItems.length > 0, cartItems.length > 0]);

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
        <h3 className="text-xl leading-6 font-bold text-gray-900 mt-12">
          Payment Successful!
        </h3>
        {userInfo ? (
          <>
            {!error ? (
              <>
                {loading ? (
                  <>
                    <p className="text-grayish-blue">
                      Please hold while order is being created...
                    </p>
                  </>
                ) : (
                  <div className="mt-8">
                    <p className="text-grayish-blue mb-8">
                      Congratulation on your order. Check your orders in your
                      profile.
                    </p>
                    <Link to="/user-profile/orders">
                      <button className="w-full max-w-xs m-auto bg-orange border border-orange rounded-md py-3 px-4 text-base font-medium text-white shadow-[inset_0_0_0_0_#ffede0] hover:shadow-[inset_0_-4rem_0_0_#ffede1] hover:text-orange transition-all duration-300">
                        View Orders
                      </button>
                    </Link>
                  </div>
                )}
              </>
            ) : (
              <>
                <p className="">Please reload page</p>
              </>
            )}
          </>
        ) : (
          <>
            <p className="text-grayish-blue my-8">
              Congratulation on your order. Be sure to check your emails for
              order updates.
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default PaymentSuccessful;
