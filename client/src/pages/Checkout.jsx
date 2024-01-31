import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteItem, cartDisplay } from "../redux/reducers/cartSlice";
import { useForm } from "react-hook-form";
import StripePay from "../components/StripePay";
import Loading from "../components/Loading";

const Checkout = () => {
  document.title = "Checkout Page";

  const dispatch = useDispatch();
  const { userCartItems, cartItems, amountTotal } = useSelector(
    (state) => state.cart
  );
  const { userInfo, error, userErrorMsg, userToken, loading } = useSelector(
    (state) => state.auth
  );
  const { addresses } = useSelector((state) => state.address);
  const [formData, setFormData] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    dispatch(cartDisplay(false));
    // eslint-disable-next-line
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    setFormData(data);
    setDisabled(true);
    return data;
  };

  return (
    <div className="bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <h2 className="sr-only">Checkout</h2>

          <div className="relative flex flex-col lg:flex-row lg:gap-x-12 xl:gap-x-16">
            <div className="order-2 lg:order-1 bg-white mt-4 border border-gray-200 rounded-lg shadow-sm p-6 lg:w-3/5 py-16 h-fit">
              {userToken && (
                <>
                  {!error ? (
                    <>
                      {loading && (
                        <div className=" w-full h-full flex items-center justify-center">
                          <Loading />
                        </div>
                      )}
                    </>
                  ) : (
                    <p className="absolute text-sm text-center text-[red] -top-4 left-0">
                      {userErrorMsg}. Please reload page
                    </p>
                  )}
                </>
              )}
              {!userInfo ? (
                <form onSubmit={handleSubmit(submitForm)}>
                  <div>
                    <div className="flex flex-wrap justify-between text-dark-grayish-blue">
                      <h3 className="text-lg font-bold text-very-dark-blue">
                        Customer Details
                      </h3>

                      <Link to="/login">
                        <p className="text-sm border-b border-b-orange">
                          <span aria-hidden="true">
                            Already have an account?
                          </span>
                          <span className="sr-only">
                            Already have an account?
                          </span>
                          {""} Log in
                        </p>
                      </Link>
                    </div>
                    <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                      <div className="relative mt-5 w-full">
                        <input
                          id="firstname"
                          name="firstname"
                          type="text"
                          className="peer h-10 w-full border-b-2 border-grayish-blue text-very-dark-blue placeholder-transparent focus:outline-none focus:border-orange"
                          placeholder="First Name"
                          {...register("firstname", {
                            required: "Please enter your first name",
                          })}
                        />
                        {errors.firstname && (
                          <p className="text-sm text-[red] italic">
                            {errors.firstname.message}
                          </p>
                        )}
                        <label
                          htmlFor="firstname"
                          className="absolute left-0 -top-3.5 text-dark-grayish-blue text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grayish-blue peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-dark-grayish-blue peer-focus:text-sm"
                        >
                          First Name
                        </label>
                      </div>
                      <div className="relative mt-5 w-full">
                        <input
                          id="lastname"
                          name="lastname"
                          type="text"
                          className="peer h-10 w-full border-b-2 border-grayish-blue text-very-dark-blue placeholder-transparent focus:outline-none focus:border-orange"
                          placeholder="Last Name"
                          {...register("lastname", {
                            required: "Please enter your last name",
                          })}
                        />
                        {errors.lastname && (
                          <p className="text-sm text-[red] italic">
                            {errors.lastname.message}
                          </p>
                        )}
                        <label
                          htmlFor="lastname"
                          className="absolute left-0 -top-3.5 text-dark-grayish-blue text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grayish-blue peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-dark-grayish-blue peer-focus:text-sm"
                        >
                          Last Name
                        </label>
                      </div>
                      <div className="relative mt-5 w-full">
                        <input
                          id="number"
                          name="number"
                          type="text"
                          className="peer h-10 w-full border-b-2 border-grayish-blue text-very-dark-blue placeholder-transparent focus:outline-none focus:border-orange"
                          placeholder="number"
                          {...register("phone", {
                            required: "Please enter your phone number",
                          })}
                        />
                        {errors.phone && (
                          <p className="text-sm text-[red] italic">
                            {errors.phone.message}
                          </p>
                        )}
                        <label
                          htmlFor="number"
                          className="absolute left-0 -top-3.5 text-dark-grayish-blue text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grayish-blue peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-dark-grayish-blue peer-focus:text-sm"
                        >
                          Phone Number
                        </label>
                      </div>
                      <div className="relative mt-5 w-full">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          autoComplete="email"
                          className="peer h-10 w-full border-b-2 border-grayish-blue text-very-dark-blue placeholder-transparent focus:outline-none focus:border-orange"
                          placeholder="email"
                          {...register("email", {
                            required: "Please enter your email",
                          })}
                        />
                        {errors.email && (
                          <p className="text-sm text-[red] italic">
                            {errors.email.message}
                          </p>
                        )}
                        <label
                          htmlFor="email"
                          className="absolute left-0 -top-3.5 text-dark-grayish-blue text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grayish-blue peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-dark-grayish-blue peer-focus:text-sm"
                        >
                          Email address
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 border-t border-gray-200 pt-10">
                    <h3 className="text-lg font-bold text-very-dark-blue">
                      Shipping information
                    </h3>

                    <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                      <div className="sm:col-span-2 relative mt-5 w-full">
                        <input
                          id="company"
                          name="company"
                          type="text"
                          className="peer h-10 w-full border-b-2 border-grayish-blue text-very-dark-blue placeholder-transparent focus:outline-none focus:border-orange"
                          placeholder="company"
                          {...register("company")}
                        />
                        <label
                          htmlFor="company"
                          className="absolute left-0 -top-3.5 text-dark-grayish-blue text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grayish-blue peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-dark-grayish-blue peer-focus:text-sm"
                        >
                          Company
                        </label>
                      </div>
                      <div className="sm:col-span-2 relative mt-5 w-full">
                        <input
                          id="address"
                          name="address"
                          type="text"
                          className="peer h-10 w-full border-b-2 border-grayish-blue text-very-dark-blue placeholder-transparent focus:outline-none focus:border-orange"
                          placeholder="address"
                          {...register("address", {
                            required: "Please enter your address",
                          })}
                        />
                        {errors.address && (
                          <p className="text-sm text-[red] italic">
                            {errors.address.message}
                          </p>
                        )}
                        <label
                          htmlFor="address"
                          className="absolute left-0 -top-3.5 text-dark-grayish-blue text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grayish-blue peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-dark-grayish-blue peer-focus:text-sm"
                        >
                          Address
                        </label>
                      </div>
                      <div className="sm:col-span-2 relative mt-5 w-full">
                        <input
                          id="apartment"
                          name="apartment"
                          type="text"
                          className="peer h-10 w-full border-b-2 border-grayish-blue text-very-dark-blue placeholder-transparent focus:outline-none focus:border-orange"
                          placeholder="Apartment, suite, etc. (optional)"
                          {...register("apartment")}
                        />
                        <label
                          htmlFor="apartment"
                          className="absolute left-0 -top-3.5 text-dark-grayish-blue text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grayish-blue peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-dark-grayish-blue peer-focus:text-sm"
                        >
                          Apartment, suite, etc. (optional)
                        </label>
                      </div>
                      <div className="relative mt-5 w-full">
                        <input
                          id="city"
                          name="city"
                          type="text"
                          className="peer h-10 w-full border-b-2 border-grayish-blue text-very-dark-blue placeholder-transparent focus:outline-none focus:border-orange"
                          placeholder="city"
                          {...register("city", {
                            required: "Please enter your city",
                          })}
                        />
                        {errors.city && (
                          <p className="text-sm text-[red] italic">
                            {errors.city.message}
                          </p>
                        )}
                        <label
                          htmlFor="city"
                          className="absolute left-0 -top-3.5 text-dark-grayish-blue text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grayish-blue peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-dark-grayish-blue peer-focus:text-sm"
                        >
                          City
                        </label>
                      </div>
                      <div className="relative mt-5 w-full">
                        <input
                          id="state"
                          name="state"
                          type="text"
                          className="peer h-10 w-full border-b-2 border-grayish-blue text-very-dark-blue placeholder-transparent focus:outline-none focus:border-orange"
                          placeholder="state"
                          {...register("state", {
                            required: "Please enter your state",
                          })}
                        />
                        {errors.state && (
                          <p className="text-sm text-[red] italic">
                            {errors.state.message}
                          </p>
                        )}
                        <label
                          htmlFor="state"
                          className="absolute left-0 -top-3.5 text-dark-grayish-blue text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grayish-blue peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-dark-grayish-blue peer-focus:text-sm"
                        >
                          State / Province
                        </label>
                      </div>
                      <div className="relative mt-5 w-full">
                        <input
                          id="country"
                          name="country"
                          type="text"
                          className="peer h-10 w-full border-b-2 border-grayish-blue text-very-dark-blue placeholder-transparent focus:outline-none focus:border-orange"
                          placeholder="country"
                          {...register("country")}
                        />
                        <label
                          htmlFor="country"
                          className="absolute left-0 -top-3.5 text-dark-grayish-blue text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grayish-blue peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-dark-grayish-blue peer-focus:text-sm"
                        >
                          Country
                        </label>
                      </div>
                      <div className="relative mt-5 w-full">
                        <input
                          id="zipcode"
                          name="zipcode"
                          type="text"
                          className="peer h-10 w-full border-b-2 border-grayish-blue text-very-dark-blue placeholder-transparent focus:outline-none focus:border-orange"
                          placeholder="zip-code"
                          {...register("zipcode", {
                            required: "Please enter your zipcode",
                          })}
                        />
                        {errors.zipcode && (
                          <p className="text-sm text-[red] italic">
                            {errors.zipcode.message}
                          </p>
                        )}
                        <label
                          htmlFor="zipcode"
                          className="absolute left-0 -top-3.5 text-dark-grayish-blue text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grayish-blue peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-dark-grayish-blue peer-focus:text-sm"
                        >
                          Postal code
                        </label>
                      </div>
                    </div>
                  </div>
                  {!disabled && (
                    <div className="mt-8 py-6 flex">
                      <button
                        type="submit"
                        className="w-full lg:w-60 lg:ml-auto bg-orange border border-transparent rounded-md py-3 px-4 text-base font-medium text-white shadow-[inset_0_0_0_0_#ffede1] hover:shadow-[inset_0_-4rem_0_0_#ffede1] hover:text-orange transition-all duration-300"
                      >
                        Proceed to Payment
                      </button>
                    </div>
                  )}
                </form>
              ) : (
                <div>
                  <div className="flex flex-wrap justify-between text-dark-grayish-blue mb-4">
                    <h3 className="text-lg font-bold text-very-dark-blue">
                      Delivery Information
                    </h3>
                    {addresses.length > 0 && (
                      <Link to="/user-profile/addresses">
                        <p className="text-sm border-b border-b-orange">
                          Change Default Address
                        </p>
                      </Link>
                    )}
                  </div>
                  <div className="border-t border-gray-200">
                    {/* CHECKING IF THE USER HAS A DEFAULT ADDRESS OR EVEN HAVE ANY ADDRESSES AT ALL */}
                    {addresses.length > 0 ? (
                      // FIRST IF THE USER HAS ANY ADDRESSES
                      <>
                        {/* CHECK IF THERE IS A DEFAULT ADDRESS */}
                        {addresses.filter((address) => address.checked).length >
                        0 ? (
                          <>
                            {addresses
                              .filter((address) => address.checked)
                              .map((address) => (
                                <div
                                  key={address._id}
                                  className="text-dark-grayish-blue mt-6"
                                >
                                  <p className="text-very-dark-blue">
                                    {address.firstname} {address.lastname}
                                  </p>
                                  <p className="">{address.streetAddress}</p>
                                  <p className="">
                                    {address.city}, {address.state}
                                  </p>
                                  <p className="">{address.country}</p>
                                  <p className="">{address.phone}</p>
                                </div>
                              ))}
                          </>
                        ) : (
                          // IF NO DEFAULT ADDRESS, SET THE DELIVERY INFO TO THE USER'S FIRST ADDRESS
                          <>
                            <div
                              key={addresses[0]._id}
                              className="text-dark-grayish-blue mt-6"
                            >
                              <p className="text-very-dark-blue">
                                {addresses[0].firstname} {addresses[0].lastname}
                              </p>
                              <p className="">{addresses[0].streetAddress}</p>
                              <p className="">
                                {addresses[0].city}, {addresses[0].state}
                              </p>
                              <p className="">{addresses[0].country}</p>
                              <p className="">{addresses[0].phone}</p>
                            </div>
                          </>
                        )}
                      </>
                    ) : (
                      // IF NO ADDRESS
                      <>
                        <Link to="/user-profile/addresses">
                          <p className="w-fit mt-8 mb-6 text-very-dark-blue border-b border-b-orange hover:border-b-transparent transition-all">
                            Please Add An Address
                          </p>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
              {((userInfo && addresses.length > 0) || !userInfo) && (
                <div className="payment mt-12 ">
                  <h3 className="text-lg font-bold text-very-dark-blue pb-4 mb-10 border-b border-gray-200">
                    Payment Details
                  </h3>
                  <StripePay formData={formData} />
                </div>
              )}
            </div>
            {/* <!-- Order summary --> */}
            <div className="order-1 lg:order-2 flex-1 w-auto mt-16 sm:mt-10 lg:mt-4">
              <h3 className="text-lg font-bold text-very-dark-blue">
                Order summary
              </h3>
              <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <h4 className="sr-only">Items in your cart</h4>
                <ul className="divide-y divide-gray-200">
                  {(userInfo ? userCartItems : cartItems).map((item) => (
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
                          <p className="product capitalize font-bold text-md text-dark-grayish-blue">
                            <Link
                              to={`/products/${item.product._id}`}
                              className="cursor-pointer hover:opacity-70 transition"
                            >
                              {item.product.title}
                            </Link>
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
              </div>
              <div className="mt-8 text-grayish-blue">
                <h3 className="text-orange font-kumbh-sans font-bold">
                  SIDE NOTE<sup className="text-xs">*</sup>{" "}
                </h3>
                <h3 className="text-dark-grayish-blue">Test Card Details</h3>
                <p className="">
                  When testing interactively, use a card number, such as 4242
                  4242 4242 4242. Enter the card number in the Dashboard or in
                  any payment form.
                </p>
                <ul className="list-disc pl-5">
                  <li className="mb-2">
                    Use a valid future date, such as 12/34.
                  </li>
                  <li className="mb-2">
                    Use any three-digit CVC (four digits for American Express
                    cards).
                  </li>
                  <li className="mb-2">
                    Use any value you like for other form fields.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
