import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteItem, cartDisplay } from "../redux/reducers/cartSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const { userCartItems, cartItems, amountTotal } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(cartDisplay(false));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <h2 className="sr-only">Checkout</h2>

          <form className="lg:flex  lg:gap-x-12 xl:gap-x-16">
            <div className="bg-white mt-4 border border-gray-200 rounded-lg shadow-sm p-6 lg:w-3/5 pb-12">
              <div>
                <div className="flex flex-wrap justify-between text-dark-grayish-blue">
                  <h3 className="text-lg font-bold text-very-dark-blue">
                    Customer Details
                  </h3>
                  <Link to="/login">
                    <p className="text-sm border-b border-b-orange">
                      <span aria-hidden="true">Already have an account?</span>
                      <span className="visually-hidden">
                        Already have an account?
                      </span>
                      {""} Log in
                    </p>
                  </Link>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="first-name"
                        name="first-name"
                        autoComplete="given-name"
                        className="block w-full border border-grayish-blue rounded-md h-10 sm:text-sm pl-2 focus:outline-none focus:border-orange"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        autoComplete="family-name"
                        className="block w-full border border-grayish-blue rounded-md h-10 sm:text-sm pl-2 focus:outline-none focus:border-orange"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        id="email-address"
                        name="email-address"
                        autoComplete="email"
                        className="block w-full border border-grayish-blue rounded-md h-10 sm:text-sm pl-2 focus:outline-none focus:border-orange"
                      />
                    </div>
                  </div>
                  <div className="">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        className="block w-full border border-grayish-blue rounded-md h-10 sm:text-sm pl-2 focus:outline-none focus:border-orange"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-gray-200 pt-10">
                <h3 className="text-lg font-bold text-very-dark-blue">
                  Shipping information
                </h3>

                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Company
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        className="block w-full border border-grayish-blue rounded-md h-10 sm:text-sm pl-2 focus:outline-none focus:border-orange"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Address
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="address"
                        id="address"
                        autoComplete="street-address"
                        className="block w-full border border-grayish-blue rounded-md h-10 sm:text-sm pl-2 focus:outline-none focus:border-orange"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="apartment"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Apartment, suite, etc.
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="apartment"
                        id="apartment"
                        className="block w-full border border-grayish-blue rounded-md h-10 sm:text-sm pl-2 focus:outline-none focus:border-orange"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="block w-full border border-grayish-blue rounded-md h-10 sm:text-sm pl-2 focus:outline-none focus:border-orange"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <div className="mt-1">
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="block w-full border border-grayish-blue rounded-md h-10 sm:text-sm pl-2 focus:outline-none focus:border-orange"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State / Province
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="block w-full border border-grayish-blue rounded-md h-10 sm:text-sm pl-2 focus:outline-none focus:border-orange"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Postal code
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="block w-full border border-grayish-blue rounded-md h-10 sm:text-sm pl-2 focus:outline-none focus:border-orange"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Order summary --> */}
            <div className="mt-16 sm:mt-10 lg:mt-4">
              <h3 className="text-lg font-bold text-very-dark-blue">
                Order summary
              </h3>
              <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <h4 className="sr-only">Items in your cart</h4>
                <ul className="divide-y divide-gray-200">
                  {(userInfo? userCartItems: cartItems).map((item) => (
                    <li
                      key={item.id}
                      className="item w-full flex items-center justify-between text-grayish-blue pb-5"
                    >
                      <img
                        src={item.product.img[0]}
                        alt="product-img"
                        className="w-14 h-14 rounded-lg "
                      />
                      <div className="pl-3 flex-1">
                        <div className="flex justify-between">
                          <p
                            // ref={productTitleRef}
                            className="product capitalize font-bold text-md text-dark-grayish-blue"
                          >
                            {item.product.title}
                          </p>
                          <div className="delete pl-2">
                            <i
                              onClick={(e) =>
                                dispatch(
                                  deleteItem(
                                    e.target.parentElement.parentElement
                                      .previousElementSibling.innerText
                                  )
                                )
                              }
                              className="cursor-pointer hover:text-very-dark-blue transition-all"
                            >
                              <ion-icon name="trash-outline"></ion-icon>
                            </i>
                          </div>
                        </div>
                        <div className="price flex justify-between">
                          <span className="">
                            {item.product.discountPrice} x {item.quantity}
                          </span>
                          <span className="font-medium text-very-dark-blue">
                            {" "}
                            ${item.itemTotal.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <dl className="border-t border-gray-200 py-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">Subtotal</dt>
                    <dd className="text-sm font-medium text-very-dark-blue">
                      ${amountTotal.toFixed(2)}
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">Shipping</dt>
                    <dd className="text-sm font-medium text-very-dark-blue">
                      $5.00
                    </dd>
                  </div>
                  <div className="flex items-center justify-between">
                    <dt className="text-sm">Taxes</dt>
                    <dd className="text-sm font-medium text-very-dark-blue">
                      $5.52
                    </dd>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-200 pt-6 font-bold">
                    <dt className="">Total</dt>
                    <dd className="">${(amountTotal + 5 + 5.52).toFixed(2)}</dd>
                  </div>
                </dl>

                <div className="border-t border-gray-200 py-6">
                  <button
                    type="submit"
                    className="w-full bg-orange border border-transparent rounded-md py-3 px-4 text-base font-medium text-white shadow-[inset_0_0_0_0_#ffede1] hover:shadow-[inset_0_-4rem_0_0_#ffede1] hover:text-orange transition-all duration-300"
                  >
                    Continue on to payment
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
