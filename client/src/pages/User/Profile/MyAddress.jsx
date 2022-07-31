import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addressFormDisplay,
  hideAddressForm,
} from "../../../redux/reducers/addressSlice";
import { updateUser } from "../../../redux/reducers/authSlice";

const MyAddress = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { showAddressForm } = useSelector((state) => state.address);
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  return (
    <>
      <h3 className="text-xl leading-6 font-bold text-gray-900">My Address</h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">Address details.</p>
      <hr className="border-b border-grayish-blue mt-3 mb-8" />
      <div className="">
        {/* USER ADDRESS DISPLAY SECTION */}
        <fieldset>
          <legend className="text-lg font-medium text-gray-900">
            Delivery method
          </legend>

          <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4 justify-items-start">
            <label
              htmlFor="address"
              className="relative bg-pale-orange border rounded-md shadow-sm p-4 flex cursor-pointer focus:outline-none border-transparent"
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
              className="relative bg-white border rounded-md shadow-sm p-4 flex cursor-pointer focus:outline-none border-transparent"
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
          <form className="w-full flex flex-wrap justify-between px-6 sm:px-12 py-12 mt-4 border border-grayish-blue relative">
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6"
              onClick={() => dispatch(hideAddressForm())}
            >
              <ion-icon name="close" class="text-lg"></ion-icon>
            </button>

            <div className="relative w-full lg:w-[45%]">
              <input
                id="firstname"
                name="firstname"
                type="text"
                className="peer h-10 w-full border-b-2 border-grayish-blue text-very-dark-blue placeholder-transparent focus:outline-none focus:border-orange"
                placeholder="First Name"
              />
              <label
                htmlFor="firstname"
                className="absolute left-0 -top-3.5 text-dark-grayish-blue text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grayish-blue peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-dark-grayish-blue peer-focus:text-sm"
              >
                First Name
              </label>
            </div>
            <div className="relative w-full lg:w-[45%]">
              <input
                id="lastname"
                name="lastname"
                type="text"
                className="peer h-10 w-full border-b-2 border-grayish-blue text-very-dark-blue placeholder-transparent focus:outline-none focus:border-orange"
                placeholder="Last Name"
              />
              <label
                htmlFor="lastname"
                className="absolute left-0 -top-3.5 text-dark-grayish-blue text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grayish-blue peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-dark-grayish-blue peer-focus:text-sm"
              >
                Last Name
              </label>
            </div>
            <div className="relative mt-4 w-full">
              <input
                id="number"
                name="number"
                type="text"
                className="peer h-10 w-full border-b-2 border-grayish-blue text-very-dark-blue placeholder-transparent focus:outline-none focus:border-orange"
                placeholder="number"
              />
              <label
                htmlFor="number"
                className="absolute left-0 -top-3.5 text-dark-grayish-blue text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grayish-blue peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-dark-grayish-blue peer-focus:text-sm"
              >
                Phone Number
              </label>
            </div>
            <div className="relative mt-4 w-full">
              <input
                id="address"
                name="address"
                type="text"
                className="peer h-10 w-full border-b-2 border-grayish-blue text-very-dark-blue placeholder-transparent focus:outline-none focus:border-orange"
                placeholder="Address"
              />
              <label
                htmlFor="address"
                className="absolute left-0 -top-3.5 text-dark-grayish-blue text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grayish-blue peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-dark-grayish-blue peer-focus:text-sm"
              >
                Street Address
              </label>
            </div>
            <div className="relative mt-4 w-full lg:w-[45%]">
              <input
                id="state"
                name="state"
                type="text"
                className="peer h-10 w-full border-b-2 border-grayish-blue text-very-dark-blue placeholder-transparent focus:outline-none focus:border-orange"
                placeholder="state"
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-3.5 text-dark-grayish-blue text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grayish-blue peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-dark-grayish-blue peer-focus:text-sm"
              >
                State
              </label>
            </div>
            <div className="relative mt-4 w-full lg:w-[45%]">
              <input
                id="city"
                name="city"
                type="text"
                className="peer h-10 w-full border-b-2 border-grayish-blue text-very-dark-blue placeholder-transparent focus:outline-none focus:border-orange"
                placeholder="city"
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-3.5 text-dark-grayish-blue text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grayish-blue peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-dark-grayish-blue peer-focus:text-sm"
              >
                City
              </label>
            </div>
            <div className="relative mt-4 w-full lg:w-[45%]">
              <input
                id="zip-code"
                name="zip-code"
                type="text"
                className="peer h-10 w-full border-b-2 border-grayish-blue text-very-dark-blue placeholder-transparent focus:outline-none focus:border-orange"
                placeholder="zip-code"
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-3.5 text-dark-grayish-blue text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grayish-blue peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-dark-grayish-blue peer-focus:text-sm"
              >
                Zip code
              </label>
            </div>
            <div className="relative mt-4 w-full lg:w-[45%]">
              <input
                id="country"
                name="country"
                type="text"
                className="peer h-10 w-full border-b-2 border-grayish-blue text-very-dark-blue placeholder-transparent focus:outline-none focus:border-orange"
                placeholder="country"
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-3.5 text-dark-grayish-blue text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grayish-blue peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-dark-grayish-blue peer-focus:text-sm"
              >
                Country
              </label>
            </div>
            <button className=" w-full h-14 max-w-lg lg:max-w-none bg-orange rounded-lg lg:rounded-xl mt-10 lg:ml-auto mb-2 text-white flex items-center justify-center lg:w-3/5 shadow-[inset_0_-1px_0_0_#ffede1] hover:shadow-[inset_0_-4rem_0_0_#ffede1] hover:text-orange border transition-all duration-300">
              Submit
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default MyAddress;
