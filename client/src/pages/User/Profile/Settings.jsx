import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  cancelUpdate,
  enableUpdate,
  updateUser,
} from "../../../redux/reducers/authSlice";

const Settings = () => {
  const { userInfo, editable, updating, error, userUpdateErrorMsg } =
    useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    dispatch(cancel);
    // eslint-disable-next-line
  }, []);

  const cancel = () => {
    document.title = "Profile Settings";

    reset({
      firstname: userInfo.firstname,
      lastname: userInfo.lastname,
      phone: userInfo.phone || "",
      email: userInfo.email,
      gender: userInfo.gender || "",
    });
    dispatch(cancelUpdate());
  };

  const submitForm = (data) => {
    dispatch(updateUser(data));
  };

  return (
    <>
      <h3 className="text-xl leading-6 font-bold text-gray-900">Settings</h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">
        Edit and update your personal details.
      </p>
      <hr className="border-b border-grayish-blue mt-3 mb-8" />
      <form className="lg:mb-24 w-full" onSubmit={handleSubmit(submitForm)}>
        {error && (
          <p className=" absolute text-[#f96464] text-sm top-28">
            {userUpdateErrorMsg}
          </p>
        )}

        <dl className="grid grid-cols-1 gap-x-4 sm:grid-cols-1 divide-y divide-gray-200">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 py-4">
            <dt className="text-sm font-medium text-dark-grayish-blue px-2">
              Full Name
            </dt>
            <dd className="mt-1 flex text-sm text-very-dark-blue sm:mt-0 sm:col-span-2">
              <span className="sm:flex flex-grow min-w-[6rem]">
                <label htmlFor="firstname" className="hidden">
                  first name
                </label>
                <input
                  className={
                    "border-b-2 border-transparent flex-1 text-very-dark-blue placeholder-grayish-blue focus:outline-none focus:!border-orange px-2 md:p-2 bg-white w-full sm:text-right pr-0" +
                    (editable && " !border-grayish-blue ")
                  }
                  id="firstname"
                  name="firstname"
                  placeholder="First Name"
                  type="text"
                  defaultValue={userInfo.firstname}
                  disabled={!editable}
                  {...register("firstname")}
                />
                <label htmlFor="lastname" className="hidden">
                  last name
                </label>
                <input
                  className={
                    "border-b-2 border-transparent flex-1 focus:outline-none focus:!border-orange placeholder-grayish-blue mt-3 md:mt-0 px-2 md:p-2 bg-white w-full" +
                    (editable && " !border-grayish-blue")
                  }
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name"
                  type="text"
                  defaultValue={userInfo.lastname}
                  disabled={!editable}
                  {...register("lastname")}
                />
              </span>
            </dd>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 py-4">
            <dt className="text-sm font-medium text-dark-grayish-blue px-2">
              Email
            </dt>
            <dd className="mt-1 flex text-sm text-very-dark-blue sm:mt-0 sm:col-span-2">
              <label htmlFor="email" className="hidden">
                email
              </label>
              <input
                className={
                  "border-b-2 border-transparent flex-grow sm:text-center text-very-dark-blue placeholder-transparent focus:outline-none focus:!border-orange px-2 md:p-2 bg-white w-full" +
                  (editable && " !border-grayish-blue")
                }
                id="email"
                name="email"
                placeholder="Email"
                type="text"
                defaultValue={userInfo.email}
                disabled={!editable}
                {...register("email")}
              />
            </dd>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 py-4">
            <dt className="text-sm font-medium text-dark-grayish-blue px-2">
              Phone Number
            </dt>
            <dd className="mt-1 flex text-sm text-very-dark-blue sm:mt-0 sm:col-span-2">
              <label htmlFor="phone" className="hidden">
                phone number
              </label>
              <input
                className={
                  "appearance-none border-b-2 border-transparent flex-grow sm:text-center text-very-dark-blue placeholder-transparent focus:outline-none focus:!border-orange px-2 md:p-2 bg-white w-full" +
                  (editable && " !border-grayish-blue")
                }
                id="phone"
                name="phone"
                placeholder="Phone Number"
                type="text"
                defaultValue={userInfo.phone}
                disabled={!editable}
                {...register("phone")}
              />
            </dd>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 py-4">
            <dt className="text-sm font-medium text-dark-grayish-blue px-2">
              Gender
            </dt>
            <dd className="mt-1 flex text-sm text-very-dark-blue sm:mt-0 sm:col-span-2">
              <div className="flex-grow sm:text-center">
                <label htmlFor="gender" className="hidden">
                  gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  {...register("gender")}
                  className={
                    " appearance-none border-b-2 border-transparent  text-very-dark-blue placeholder-transparent focus:outline-none focus:!border-orange px-2 md:py-2 bg-white w-full" +
                    (editable && " !border-grayish-blue !appearance-[auto]")
                  }
                  disabled={!editable}
                >
                  <option></option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </select>
              </div>
            </dd>
          </div>
        </dl>
        <hr className="text-gray-200" />

        <span className="mt-8 ml-4 flex-shrink-0 flex flex-row h-7 justify-end">
          {!editable && (
            <button
              type="button"
              className={
                "bg-pale-orange rounded-md font-medium focus:outline-none text-orange px-3 py-1 transition-all text-sm" +
                (editable ? " !bg-orange !text-white" : "")
              }
              onClick={() => dispatch(enableUpdate())}
            >
              {editable ? "Update" : "Edit"}
            </button>
          )}
          {editable && (
            <>
              <button
                type="submit"
                className={
                  "bg-pale-orange rounded-md font-medium focus:outline-none text-orange px-3 py-1 transition-all text-sm" +
                  (editable ? " !bg-orange !text-white" : "") +
                  (updating ? " cursor-not-allowed" : " ")
                }
                disabled={updating}
              >
                {updating ? (
                  <div
                    className="spinner-border animate-spin inline-block w-4 h-4 border rounded-full"
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  <>Update</>
                )}
              </button>
              <button
                type="button"
                className="ml-3 bg-light-grayish-blue rounded-md font-medium text-grayish-blue focus:outline-none p-2 flex justify-center items-center"
                onClick={() => cancel()}
                disabled={updating}
              >
                <ion-icon name="close" class="text-lg"></ion-icon>
              </button>
            </>
          )}
        </span>
      </form>
    </>
  );
};

export default Settings;
