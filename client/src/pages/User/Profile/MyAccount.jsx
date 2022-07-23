import React from "react";
import { useSelector } from "react-redux";

const MyAccount = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <>
      <h3 className="text-xl leading-6 font-bold text-gray-900">My Account</h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">
        Personal details and application.
      </p>
      <hr className="border-b border-grayish-blue mt-3 mb-8" />
      <dl className="grid grid-cols-1 gap-x-4 sm:grid-cols-1 divide-y divide-gray-200">
        {/* <div className="mt-5 sm:col-span-1"> */}
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 py-4">
          <dt className="text-sm font-medium text-dark-grayish-blue px-2">
            Full Name
          </dt>
          <dd className="mt-1 flex text-sm text-very-dark-blue sm:mt-0 sm:col-span-2">
            <span className="sm:flex flex-grow">
              <input
                className="focus:outline-pale-orange px-2 md:p-2 bg-white w-full sm:text-right pr-0"
                type="text"
                value={userInfo.firstname}
                disabled
              />
              <input
                className="focus:outline-pale-orange px-2 md:p-2 bg-white w-full"
                type="text"
                value={userInfo.lastname}
                disabled
              />
            </span>
            <span className="ml-4 flex-shrink-0">
              <button
                type="button"
                className="bg-pale-orange rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none text-orange px-3 py-1"
              >
                Edit
              </button>
            </span>
          </dd>
        </div>
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 py-4">
          <dt className="text-sm font-medium text-dark-grayish-blue px-2">
            Email
          </dt>
          <dd className="mt-1 flex text-sm text-very-dark-blue sm:mt-0 sm:col-span-2">
            <input
              className="focus:outline-pale-orange p-2 bg-white w-full sm:text-center"
              type="text"
              value={userInfo.email}
              disabled
            />

            <span className="ml-4 flex-shrink-0">
              <button
                type="button"
                className="bg-pale-orange rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none text-orange px-3 py-1"
              >
                Edit
              </button>
            </span>
          </dd>
        </div>
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 py-4">
          <dt className="text-sm font-medium text-dark-grayish-blue px-2">
            Phone Number
          </dt>
          <dd className="mt-1 flex text-sm text-very-dark-blue sm:mt-0 sm:col-span-2">
            <input
              className="focus:outline-pale-orange p-2 bg-white w-full sm:text-center"
              type="text"
              value="08066634234"
              disabled
            />

            <span className="ml-4 flex-shrink-0">
              <button
                type="button"
                className="bg-pale-orange rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none text-orange px-3 py-1"
              >
                Edit
              </button>
            </span>
          </dd>
        </div>
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 py-4">
          <dt className="text-sm font-medium text-dark-grayish-blue px-2">
            Gender
          </dt>
          <dd className="mt-1 flex text-sm text-very-dark-blue sm:mt-0 sm:col-span-2">
            <input
              className="focus:outline-pale-orange p-2 bg-white w-full sm:text-center"
              type="text"
              value="Female"
              disabled
            />

            <span className="ml-4 flex-shrink-0">
              <button
                type="button"
                className="bg-pale-orange rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none text-orange px-3 py-1"
              >
                Edit
              </button>
            </span>
          </dd>
        </div>
        {/* </div> */}
      </dl>
    </>
  );
};

export default MyAccount;
