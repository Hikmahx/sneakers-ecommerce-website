import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addressFormDisplay,
  deleteAddress,
  setDefaultAddress,
  updateFormDisplay,
} from "../../../redux/reducers/addressSlice";
import AddressForm from "./AddressForm";
import { motion, AnimatePresence } from "framer-motion"

const MyAddress = () => {
  document.title = "My Address"

  const { userInfo } = useSelector((state) => state.auth);
  const {
    showAddressForm,
    errorMsg,
    error,
    addresses,
    loading,
    deleting,
    updateForm,
    settingDefault,
  } = useSelector((state) => state.address);
  const dispatch = useDispatch();

  return (
    <>
      <h3 className="text-xl leading-6 font-bold text-gray-900">My Address</h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">
        Set default address by clicking on any of your created addresses below.
      </p>
      <hr className="border-b border-grayish-blue mt-3 mb-8" />
      <div className="relative">
        {deleting && (
          <p className="absolute -top-7 text-sm text-orange">Deleting...</p>
        )}
        {error && (
          <p className="absolute -top-7 text-sm text-[red]">{errorMsg}</p>
        )}
        {settingDefault && (
          <p className="absolute -top-7 text-sm text-orange">
            Setting Default Address...
          </p>
        )}
        {updateForm ? (
          <>
            <AddressForm />
          </>
        ) : (
          <fieldset>
            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4 justify-items-start items-start">
          <AnimatePresence mode= "sync">
              {addresses.map((userAddress, index) => (
                <motion.label
                  key={userAddress._id}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring" }}
                  htmlFor="address"
                  className={
                    "w-full relative border rounded-md shadow-sm p-4 flex cursor-pointer focus:outline-none border-transparent " +
                    (userAddress.checked ? "bg-pale-orange" : "bg-white")
                  }
                  onClick={(e) => {
                    // ENSURE IT DOESN'T SET DEFAULT WHEN ON EDIT OR DELETE
                    !userAddress.checked &&
                      !(
                        e.target.localName === "button" ||
                        e.target.localName === "ion-icon"
                      ) &&
                      dispatch(
                        setDefaultAddress({
                          id: userAddress._id,
                          checked: true,
                          user: userInfo._id,
                        })
                      );
                  }}
                >
                  <input
                    type="radio"
                    name="address"
                    className="sr-only"
                    aria-labelledby="address-label"
                    aria-describedby="address-description-0 address-description-1"
                  />
                  <i
                    className={
                      "absolute right-4 " +
                      (userAddress.checked ? "" : "hidden")
                    }
                  >
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
                      {userAddress.streetAddress}
                    </p>
                    <p className="city-state mb-4 text-dark-grayish-blue">
                      {userAddress.city}, {userAddress.state}
                    </p>
                    <p className="telephone text-dark-grayish-blue mb-7">
                      {userAddress.phone}
                    </p>
                    <div className=" w-full flex justify-end">
                      <button
                        type="button"
                        className={
                          "rounded-md font-medium focus:outline-none px-3 py-1 transition-all text-sm " +
                          (userAddress.checked
                            ? "bg-orange text-white"
                            : "bg-pale-orange text-orange")
                        }
                        // THE INDEX IS SIMPLY ITS INDEX IN THE ARRAY
                        onClick={() =>
                          dispatch(updateFormDisplay({ addressIndex: index }))
                        }
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className={
                          "ml-3 bg-light-grayish-blue rounded-md font-medium text-grayish-blue focus:outline-none p-2 flex justify-center items-center" +
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
                    className={
                      "absolute -inset-px rounded-md pointer-events-none " +
                      (userAddress.checked
                        ? "border-2 border-orange"
                        : "border  border-grayish-blue")
                    }
                    aria-hidden="true"
                  ></div>
                </motion.label>
              ))}
            </AnimatePresence>
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
        )}

        {/* USER ADDRESS FORM */}
        {showAddressForm && (
          <>
            <AddressForm />
          </>
        )}
      </div>
    </>
  );
};

export default MyAddress;
