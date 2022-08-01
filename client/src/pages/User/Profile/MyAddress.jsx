import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addressFormDisplay,
  createAddress,
  hideAddressForm,
} from "../../../redux/reducers/addressSlice";

const MyAddress = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { showAddressForm, errMsg, error, addresses } = useSelector(
    (state) => state.address
  );
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
    // getValues,
    clearErrors,
  } = useForm();

  const submitForm = (data) => {
    const {
      firstname,
      lastname,
      phone,
      city,
      state,
      country,
      zipcode,
      streetAddress,
    } = data;
    dispatch(
      createAddress({
        firstname,
        lastname,
        phone,
        city,
        state,
        country,
        zipcode,
        streetAddress,
        user: userInfo._id,
      })
    );
    // console.log(data);
  };

  return (
    <>
      <h3 className="text-xl leading-6 font-bold text-gray-900">My Address</h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">Address details.</p>
      <hr className="border-b border-grayish-blue mt-3 mb-8" />
      <div className="">
        {/* USER ADDRESS DISPLAY SECTION */}
        <fieldset>
          {/* <legend className="text-lg font-medium text-gray-900">
            Delivery method
          </legend> */}

          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4 justify-items-start items-start">
            <label
              htmlFor="address"
              className="relative hidden bg-pale-orange border rounded-md shadow-sm p-4 flex cursor-pointer focus:outline-none border-transparent"
            >
              <input
                type="radio"
                name="address"
                value="Standard"
                className="sr-only"
                aria-labelledby="address-label"
                aria-describedby="address-description-0 address-description-1"
              />
              <i className="absolute right-4">
                <ion-icon
                  name="checkmark-circle"
                  class="text-orange"
                ></ion-icon>
              </i>
              <address className="not-italic text-very-dark blue">
                <p className="fullname mb-4">Jane Doe</p>
                <p className="location mb-4 text-dark-grayish-blue">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
                <p className="telephone text-dark-grayish-blue mb-7">
                  08043408320
                </p>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-orange rounded-md font-medium focus:outline-none text-white px-3 py-1 transition-all text-sm"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="ml-3 bg-light-grayish-blue rounded-md font-medium text-grayish-blue hover:text-indigo-500 focus:outline-none p-2 flex justify-center items-center"
                  >
                    <ion-icon name="close" class="text-lg"></ion-icon>
                  </button>
                </div>
              </address>
              <div
                className="absolute -inset-px rounded-md border-2 pointer-events-none border-orange"
                aria-hidden="true"
              ></div>
            </label>
            <label
              htmlFor="address"
              className="relative hidden bg-white border rounded-md shadow-sm p-4 flex cursor-pointer focus:outline-none border-transparent"
            >
              <input
                type="radio"
                name="address"
                value="Standard"
                className="sr-only"
                aria-labelledby="address-label"
                aria-describedby="address-description-0 address-description-1"
              />
              <i className="absolute right-4 hidden">
                <ion-icon
                  name="checkmark-circle"
                  class="text-orange"
                ></ion-icon>
              </i>
              <address className="not-italic text-very-dark blue">
                <p className="fullname mb-4">Timmy Doe</p>
                <p className="location mb-4 text-dark-grayish-blue">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
                <p className="telephone text-dark-grayish-blue mb-7">
                  08043408320
                </p>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-pale-orange rounded-md font-medium focus:outline-none text-orange px-3 py-1 transition-all text-sm"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="ml-3 bg-light-grayish-blue rounded-md font-medium text-grayish-blue hover:text-indigo-500 focus:outline-none p-2 flex justify-center items-center"
                  >
                    <ion-icon name="close" class="text-lg"></ion-icon>
                  </button>
                </div>
              </address>
              <div
                className="absolute -inset-px rounded-md border pointer-events-none border-grayish-blue"
                aria-hidden="true"
              ></div>
            </label>
            {addresses.map((userAddress) => (
              <label
              key={userAddress._id}
                htmlFor="address"
                className="w-full relative bg-white border rounded-md shadow-sm p-4 flex cursor-pointer focus:outline-none border-transparent"
              >
                <input
                  type="radio"
                  name="address"
                  value="Standard"
                  className="sr-only"
                  aria-labelledby="address-label"
                  aria-describedby="address-description-0 address-description-1"
                />
                <i className="absolute right-4 hidden">
                  <ion-icon
                    name="checkmark-circle"
                    class="text-orange"
                  ></ion-icon>
                </i>
                <address className="not-italic text-very-dark-blue w-full">
                  <p className="fullname mb-4">
                    {userAddress.firstname} {userAddress.lastname}
                  </p>
                  <p className="location text-dark-grayish-blue">
                    {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. */}
                    {userAddress.streetAddress}
                  </p>
                  <p className="city-state mb-4 text-dark-grayish-blue">{userAddress.city}, {userAddress.state}</p>
                  <p className="telephone text-dark-grayish-blue mb-7">
                    {/* 08043408320 */}
                    {userAddress.phone}
                  </p>
                  <div className=" w-full flex justify-end">
                    <button
                      type="button"
                      className="bg-pale-orange rounded-md font-medium focus:outline-none text-orange px-3 py-1 transition-all text-sm"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="ml-3 bg-light-grayish-blue rounded-md font-medium text-grayish-blue hover:text-indigo-500 focus:outline-none p-2 flex justify-center items-center"
                    >
                      <ion-icon name="close" class="text-lg"></ion-icon>
                    </button>
                  </div>
                </address>
                <div
                  className="absolute -inset-px rounded-md border pointer-events-none border-grayish-blue"
                  aria-hidden="true"
                ></div>
              </label>
            ))}
            {!showAddressForm && (
              <button
                className="cursor-pointer"
                onClick={() => dispatch(addressFormDisplay())}
              >
                <ion-icon
                  name="add"
                  class="text-white bg-orange text-3xl font-bold rounded-sm hover:bg-pale-orange hover:text-orange"
                ></ion-icon>
              </button>
            )}
          </div>
        </fieldset>

        {/* USER ADDRESS FORM */}

        {showAddressForm && (
          <form
            onSubmit={handleSubmit(submitForm)}
            className="mt-6 w-full flex flex-wrap justify-between px-6 sm:px-12 py-12 border border-grayish-blue relative rounded-md"
          >
            {error && (
              <p className=" absolute text-[#f96464] text-sm top-28">
                {errMsg}
              </p>
            )}
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-dark-blue hover:text-dark-grayish-blue"
              onClick={() => {
                dispatch(hideAddressForm());
                clearErrors();
              }}
            >
              <ion-icon name="close" class="text-lg"></ion-icon>
            </button>

            <div className="relative mt-5 w-full lg:w-[45%]">
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
            <div className="relative mt-5 w-full lg:w-[45%]">
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
                id="address"
                name="address"
                type="text"
                className="peer h-10 w-full border-b-2 border-grayish-blue text-very-dark-blue placeholder-transparent focus:outline-none focus:border-orange"
                placeholder="Address"
                {...register("streetAddress", {
                  required: "Please enter your address",
                })}
              />
              {errors.address && (
                <p className="text-sm text-[red] italic">
                  {errors.streetAddress.message}
                </p>
              )}
              <label
                htmlFor="address"
                className="absolute left-0 -top-3.5 text-dark-grayish-blue text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grayish-blue peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-dark-grayish-blue peer-focus:text-sm"
              >
                Street Address
              </label>
            </div>
            <div className="relative mt-5 w-full lg:w-[45%]">
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
                State
              </label>
            </div>
            <div className="relative mt-5 w-full lg:w-[45%]">
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
            <div className="relative mt-5 w-full lg:w-[45%]">
              <input
                id="zipcode"
                name="zipcode"
                type="text"
                className="peer h-10 w-full border-b-2 border-grayish-blue text-very-dark-blue placeholder-transparent focus:outline-none focus:border-orange"
                placeholder="zip-code"
                {...register("zipcode")}
              />
              <label
                htmlFor="zipcode"
                className="absolute left-0 -top-3.5 text-dark-grayish-blue text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grayish-blue peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-dark-grayish-blue peer-focus:text-sm"
              >
                Zip code
              </label>
            </div>
            <div className="relative mt-5 w-full lg:w-[45%]">
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
            <button className=" w-full h-14 max-w-lg lg:max-w-none bg-orange rounded-lg lg:rounded-xl mt-10 lg:ml-auto mb-2 text-white flex items-center justify-center lg:w-2/5 shadow-[inset_0_-1px_0_0_#ffede1] hover:shadow-[inset_0_-4rem_0_0_#ffede1] hover:text-orange border transition-all duration-300">
              Submit
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default MyAddress;
