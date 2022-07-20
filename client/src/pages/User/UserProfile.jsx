import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../redux/reducers/authSlice";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { userInfo, loading, error, userErrorMsg } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo) {
      dispatch(getUserDetails());
    }
    // eslint-disable-next-line
  }, []);

  return (
    <section className="h-auto pt-2 min-h-[80vh] bg-[#f9f9f9]">
      <div className=" max-w-xl sm:max-w-4xl lg:max-w-7xl relative mt-16 px-5 pt-20 pb-12 items-center mx-auto lg:mx-20 xl:mx-28 2xl:mx-40 3xl:mx-auto lg:pb-2 lg:px-1 xl:px-3 2xl:px-1">
        {!error ? (
          <>
            {loading ? (
              <Loading />
            ) : (
              <>
                {userInfo ? (
                  <>
                    {" "}
                    <div className="flex gap-x-4">
                      <div className="bg-white w-1/4 rounded-lg shadow-md p-4">
                        <div className="profile-img-wrapper w-32 h-32 bg-grayish-blue rounded-full mx-auto"></div>
                        <h3 className="capitalize text-xl text-center mt-6">
                          {/* Welcome back{" "} */}
                          <div className="font-bold ">
                            {" "}
                            {userInfo.firstname} {userInfo.lastname}
                          </div>
                        </h3>
                      </div>
                      <div className="bg-white flex-1 rounded-lg shadow-md p-8">
                        <h3 class="text-xl leading-6 font-bold text-gray-900">
                          My Account
                        </h3>
                        <p class="mt-1 max-w-2xl text-sm text-gray-500">
                          Personal details and application.
                        </p>
                        <hr className="border-b border-grayish-blue mt-3 mb-8" />
                        <dl className="grid grid-cols-1 gap-x-4 sm:grid-cols-1 divide-y divide-gray-200">
                          {/* <div class="mt-5 sm:col-span-1"> */}
                            <div class="sm:grid sm:grid-cols-3 sm:gap-4 py-4">
                              <dt class="text-sm font-medium text-dark-grayish-blue px-2">
                                Full Name
                              </dt>
                              <dd class="mt-1 flex text-sm text-very-dark-blue sm:mt-0 sm:col-span-2">
                                <span class="flex flex-grow">
                                  <input
                                    className="focus:outline-pale-orange p-2 bg-white w-full text-right pr-0"
                                    type="text"
                                    value={userInfo.firstname}
                                    disabled
                                  />
                                  <input
                                    className="focus:outline-pale-orange p-2 bg-white w-full"
                                    type="text"
                                    value={userInfo.lastname}
                                    disabled
                                  />
                                </span>
                                <span class="ml-4 flex-shrink-0">
                                  <button
                                    type="button"
                                    class="bg-pale-orange rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none text-orange px-3 py-1"
                                  >
                                    Edit
                                  </button>
                                </span>
                              </dd>
                            </div>
                            <div class="sm:grid sm:grid-cols-3 sm:gap-4 py-4">
                              <dt class="text-sm font-medium text-dark-grayish-blue px-2">
                                Email
                              </dt>
                              <dd class="mt-1 flex text-sm text-very-dark-blue sm:mt-0 sm:col-span-2">
                                  <input
                                    className="focus:outline-pale-orange p-2 bg-white w-full text-center"
                                    type="text"
                                    value={userInfo.email}
                                    disabled
                                  />

                                <span class="ml-4 flex-shrink-0">
                                  <button
                                    type="button"
                                    class="bg-pale-orange rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none text-orange px-3 py-1"
                                  >
                                    Edit
                                  </button>
                                </span>
                              </dd>
                            </div>
                            <div class="sm:grid sm:grid-cols-3 sm:gap-4 py-4">
                              <dt class="text-sm font-medium text-dark-grayish-blue px-2">
                                Phone Number
                              </dt>
                              <dd class="mt-1 flex text-sm text-very-dark-blue sm:mt-0 sm:col-span-2">
                                  <input
                                    className="focus:outline-pale-orange p-2 bg-white w-full text-center"
                                    type="text"
                                    value='08066634234'
                                    disabled
                                  />

                                <span class="ml-4 flex-shrink-0">
                                  <button
                                    type="button"
                                    class="bg-pale-orange rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none text-orange px-3 py-1"
                                  >
                                    Edit
                                  </button>
                                </span>
                              </dd>
                            </div>  
                            <div class="sm:grid sm:grid-cols-3 sm:gap-4 py-4">
                              <dt class="text-sm font-medium text-dark-grayish-blue px-2">
                                Gender
                              </dt>
                              <dd class="mt-1 flex text-sm text-very-dark-blue sm:mt-0 sm:col-span-2">
                                  <input
                                    className="focus:outline-pale-orange p-2 bg-white w-full text-center"
                                    type="text"
                                    value='Female'
                                    disabled
                                  />

                                <span class="ml-4 flex-shrink-0">
                                  <button
                                    type="button"
                                    class="bg-pale-orange rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none text-orange px-3 py-1"
                                  >
                                    Edit
                                  </button>
                                </span>
                              </dd>
                            </div>                           
                          {/* </div> */}

                        </dl>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    Please{" "}
                    <Link
                      to="/login"
                      className="text-sm border-b-2 border-b-orange font-bold"
                    >
                      Login
                    </Link>{" "}
                    to view this page
                  </>
                )}
              </>
            )}
          </>
        ) : (
          <>
            <p className=" mt-20 text-center text-very-dark-blue">
              {userErrorMsg}
            </p>
          </>
        )}{" "}
      </div>
    </section>
  );
};

export default UserProfile;
