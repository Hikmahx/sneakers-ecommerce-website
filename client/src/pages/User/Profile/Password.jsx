import React from "react";

const Password = () => {
  return (
    <>
      <h3 className="text-xl leading-6 font-bold text-gray-900">Password</h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">
        Update your password here.
      </p>
      <hr className="border-b border-grayish-blue mt-3 mb-8" />
      <form className="grid grid-cols-1 gap-y-6 sm:gap-x-4">
        <div>
          <label
            htmlFor="current-password"
            className="block text-sm font-medium text-gray-700"
          >
            Current Password
          </label>
          <div className="mt-1">
            <input
              type="password"
              id="current-password"
              name="current-password"
              className="bg-light-grayish-blue block w-full border border-grayish-blue rounded-md h-10 sm:text-sm pl-2 focus:outline-none focus:border-orange"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="new-password"
            className="block text-sm font-medium text-gray-700"
          >
            New Password
          </label>
          <div className="mt-1">
            <input
              type="password"
              id="new-password"
              name="new-password"
              className="block bg-light-grayish-blue w-full border border-grayish-blue rounded-md h-10 sm:text-sm pl-2 focus:outline-none focus:border-orange"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="confirm-password"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm New Password
          </label>
          <div className="mt-1">
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              className="block bg-light-grayish-blue w-full border border-grayish-blue rounded-md h-10 sm:text-sm pl-2 focus:outline-none focus:border-orange"
            />
          </div>
        </div>

        <button 
            className="mt-5 w-full h-14 bg-orange rounded-lg lg:rounded-xl text-white flex items-center justify-center lg:w-2/5 lg:ml-auto shadow-[inset_0_-1px_0_0_#ffede1] hover:shadow-[inset_0_-4rem_0_0_#ffede1] hover:text-orange border transition-all duration-300 overflow-hidden"
            >
          Save Changes
        </button>
      </form>
    </>
  );
};

export default Password;
