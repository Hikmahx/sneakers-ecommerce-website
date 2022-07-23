import React from "react";

const MyAddress = () => {
  return (
    <>
      <h3 className="text-xl leading-6 font-bold text-gray-900">My Address</h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">Address details.</p>
      <hr className="border-b border-grayish-blue mt-3 mb-8" />
      <div className="">
        <form className="w-full flex flex-wrap justify-between px-6 sm:px-12 py-14">
          <div className="relative w-full lg:w-[45%] mb-2 py-3">
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
          <div className="relative w-full lg:w-[45%] mb-2 py-3">
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
          <div className="relative mt-10 w-full">
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
          <div className="relative mt-10 w-full">
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
          <div className="relative mt-10 w-full lg:w-[45%]">
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
          <div className="relative mt-10 w-full lg:w-[45%]">
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
          <div className="relative mt-10 w-full lg:w-[45%]">
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
          <div className="relative mt-10 w-full lg:w-[45%]">
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
      </div>
    </>
  );
};

export default MyAddress;
