import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  createAddress,
  hideAddressForm,
  updateAddress,
} from "../../../redux/reducers/addressSlice";

const AddressForm = () => {
  const { errMsg, error, addresses, loading, success, addressIndex } =
    useSelector((state) => state.address);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors,
  } = useForm();
  const { userInfo } = useSelector((state) => state.auth);

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
    // IF CREATE ADDRESS
    if (addressIndex === null) {
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
    } else {
      // UPDATE MODE
      dispatch(
        updateAddress({
          firstname,
          lastname,
          phone,
          city,
          state,
          country,
          zipcode,
          streetAddress,
          _id: addresses[addressIndex]._id,
          user: userInfo._id,
        })
      );
    }
    success &&
      reset({
        firstname: "",
        lastname: "",
        phone: "",
        city: "",
        state: "",
        country: "",
        zipcode: "",
        streetAddress: "",
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="mt-6 w-full flex flex-wrap justify-between px-6 sm:px-12 py-12 border border-grayish-blue relative rounded-md"
      >
        {error && (
          <p className=" absolute text-[#f96464] text-sm top-28">{errMsg}</p>
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
            // IF ITS IN EDIT STATE, THE DEFAULT VALUES ARE THE VALUE OF THE ADDRESS INDEX, ELSE (IE IN CREATE STATE) ITS EMPTY
            defaultValue={
              addressIndex !== null ? addresses[addressIndex].firstname : ""
            }
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
            defaultValue={
              addressIndex !== null ? addresses[addressIndex].lastname : ""
            }
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
            defaultValue={
              addressIndex !== null ? addresses[addressIndex].phone : ""
            }
            {...register("phone", {
              required: "Please enter your phone number",
            })}
          />
          {errors.phone && (
            <p className="text-sm text-[red] italic">{errors.phone.message}</p>
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
            defaultValue={
              addressIndex !== null ? addresses[addressIndex].streetAddress : ""
            }
            {...register("streetAddress", {
              required: "Please enter your address",
            })}
          />
          {errors.streetAddress && (
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
            defaultValue={
              addressIndex !== null ? addresses[addressIndex].state : ""
            }
            {...register("state", {
              required: "Please enter your state",
            })}
          />
          {errors.state && (
            <p className="text-sm text-[red] italic">{errors.state.message}</p>
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
            defaultValue={
              addressIndex !== null ? addresses[addressIndex].city : ""
            }
            {...register("city", {
              required: "Please enter your city",
            })}
          />
          {errors.city && (
            <p className="text-sm text-[red] italic">{errors.city.message}</p>
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
            defaultValue={
              addressIndex !== null ? addresses[addressIndex].zipcode : ""
            }
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
            defaultValue={
              addressIndex !== null ? addresses[addressIndex].country : ""
            }
            {...register("country")}
          />
          <label
            htmlFor="country"
            className="absolute left-0 -top-3.5 text-dark-grayish-blue text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grayish-blue peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-dark-grayish-blue peer-focus:text-sm"
          >
            Country
          </label>
        </div>
        <button
          className={
            " w-full h-14 max-w-lg lg:max-w-none bg-orange rounded-lg lg:rounded-xl mt-10 lg:ml-auto mb-2 text-white flex items-center justify-center lg:w-2/5 shadow-[inset_0_-1px_0_0_#ffede1] hover:shadow-[inset_0_-4rem_0_0_#ffede1] hover:text-orange border transition-all duration-300" +
            (loading ? " cursor-not-allowed" : " ")
          }
          disabled={loading}
        >
          {loading ? (
            <div
              className="spinner-border animate-spin inline-block w-4 h-4 border rounded-full"
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <>{addressIndex !== null ? <>Update Address</> : <>Submit</>}</>
          )}
        </button>
      </form>
    </>
  );
};

export default AddressForm;
