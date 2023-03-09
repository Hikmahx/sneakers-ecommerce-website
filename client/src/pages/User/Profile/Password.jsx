import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../redux/reducers/authSlice";

const Password = () => {
  document.title = "Password Settings";

  const { updating, userUpdateError, userUpdateErrorMsg } = useSelector(
    (state) => state.auth
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onChange",
  });

  const dispatch = useDispatch();

  const submitForm = (data) => {
    dispatch(updateUser(data));
  };

  return (
    <>
      <h3 className="text-xl leading-6 font-bold text-gray-900">Password</h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">
        Update your password here.
      </p>
      <hr className="border-b border-grayish-blue mt-3 mb-8" />
      <form
        onSubmit={handleSubmit(submitForm)}
        className="grid grid-cols-1 gap-y-6 sm:gap-x-4 relative w-full"
      >
        {userUpdateError && (
          <p className=" absolute text-[#f96464] text-sm -top-6">
            {userUpdateErrorMsg}
          </p>
        )}
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
              name="currentPassword"
              className="border-b-2 border-grayish-blue flex-1 text-very-dark-blue placeholder-grayish-blue focus:outline-none focus:border-orange px-2 md:p-2 bg-white w-full pr-0"
              {...register("currentPassword")}
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
              name="newPassword"
              className="border-b-2 border-grayish-blue flex-1 text-very-dark-blue placeholder-grayish-blue focus:outline-none focus:border-orange px-2 md:p-2 bg-white w-full pr-0"
              {...register("newPassword")}
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
              name="password"
              className="border-b-2 border-grayish-blue flex-1 text-very-dark-blue placeholder-grayish-blue focus:outline-none focus:border-orange px-2 md:p-2 bg-white w-full pr-0"
              {...register("password", {
                required: true,
                validate: (value) => {
                  const { newPassword } = getValues();
                  return newPassword === value || "Passwords should match!";
                },
              })}
            />
            {errors.password && (
              <p className="text-sm text-[red]">{errors.password.message}</p>
            )}
          </div>
        </div>
        <button className="mt-5 w-full h-14 bg-orange rounded-lg lg:rounded-xl text-white flex items-center justify-center lg:w-2/5 lg:ml-auto shadow-[inset_0_-1px_0_0_#ffede1] hover:shadow-[inset_0_-4rem_0_0_#ffede1] hover:text-orange border transition-all duration-300 overflow-hidden">
          {updating ? (
            <div
              className="spinner-border animate-spin inline-block w-4 h-4 border rounded-full"
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <>Save Changes</>
          )}
        </button>
      </form>
    </>
  );
};

export default Password;
