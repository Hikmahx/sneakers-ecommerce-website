import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addressFormDisplay,
  createAddress,
  deleteAddress,
  hideAddressForm,
  updateFormDisplay
} from "../../../redux/reducers/addressSlice";
import AddressForm from "./AddressForm";

const MyAddress = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const {
    showAddressForm,
    errMsg,
    error,
    addresses,
    loading,
    deleting,
    success,
    updateForm
  } = useSelector((state) => state.address);
  const dispatch = useDispatch();



  return (
    <>
      <h3 className="text-xl leading-6 font-bold text-gray-900">My Address</h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">Address details.</p>
      <hr className="border-b border-grayish-blue mt-3 mb-8" />
      <div className="relative">
        {/* USER ADDRESS DISPLAY SECTION */}
        {deleting && <p className="absolute -top-7 text-sm">Deleting...</p>}

        {
          updateForm?
          <>
          <AddressForm/>
          </>
          :          
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
                    className={
                      "ml-3 bg-light-grayish-blue rounded-md font-medium text-grayish-blue hover:text-indigo-500 focus:outline-none p-2 flex justify-center items-center" +
                      (loading ? " cursor-not-allowed" : " ")
                    }
                    disabled={loading}
                  >
                    {loading ? (
                      <div
                        className="spinner-border animate-spin inline-block w-4 h-4 border rounded-full"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    ) : (
                      <ion-icon name="close" class="text-lg"></ion-icon>
                    )}
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
            {addresses.map((userAddress, index) => (
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
                  <p className="city-state mb-4 text-dark-grayish-blue">
                    {userAddress.city}, {userAddress.state}
                  </p>
                  <p className="telephone text-dark-grayish-blue mb-7">
                    {/* 08043408320 */}
                    {userAddress.phone}
                  </p>
                  <div className=" w-full flex justify-end">
                    <button
                      type="button"
                      className="bg-pale-orange rounded-md font-medium focus:outline-none text-orange px-3 py-1 transition-all text-sm"
                      // THE INDEX IS SIMPLY ITS INDEX IN THE ARRAY
                      onClick={()=>dispatch(updateFormDisplay({addressIndex:index}))}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className={
                        "ml-3 bg-light-grayish-blue rounded-md font-medium text-grayish-blue hover:text-indigo-500 focus:outline-none p-2 flex justify-center items-center" +
                        (loading ? " cursor-not-allowed" : " ")
                      }
                      onClick={() =>
                        dispatch(
                          deleteAddress({
                            address: userAddress._id,
                            user: userInfo._id,
                          })
                        )
                      }
                      disabled={loading}
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
        }

        {/* USER ADDRESS FORM */}
        {showAddressForm &&
        <>
        <AddressForm/>
        </>}

      </div>
    </>
  );
};

export default MyAddress;
