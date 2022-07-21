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
                    <div className="flex gap-x-4 flex-col lg:flex-row">
                      <div className="sm:bg-white lg:w-1/4 rounded-lg sm:shadow-md py-4">
                        <div className="profile-img-wrapper w-32 h-32 bg-grayish-blue rounded-full mx-auto"></div>
                        <h3 className="capitalize text-lg text-center my-6">
                          {/* Welcome back{" "} */}
                          <div className="font-bold ">
                            {" "}
                            {userInfo.firstname} {userInfo.lastname}
                          </div>
                        </h3>

                        <nav className="space-y-1">
                          <Link
                            to="#"
                            className=" text-dark-grayish-blue bg-pale-orange border-teal-500 text-teal-700 hover:bg-pale-orange hover:text-teal-700 group border-l-4 px-3 py-2 flex items-center text-sm font-medium"
                            // x-state:on="Current"
                            // x-state:off="Default"
                            aria-current="page"
                            x-state-description='Current: "bg-pale-orange border-teal-500 text-teal-700 hover:bg-pale-orange hover:text-teal-700", Default: "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900"'
                          >
                            {/* <ion-icon name="contact"></ion-icon> */}
                            <ion-icon name="person"></ion-icon>
                            {/* <i clasName="fa-light fa-circle-user text-lg"></i> */}

                            <span className="truncate">My Account</span>
                          </Link>

                          <Link
                            to="#"
                            className=" text-dark-grayish-blue border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900 group border-l-4 px-3 py-2 flex items-center text-sm font-medium"
                            x-state-description='undefined: "bg-pale-orange border-teal-500 text-teal-700 hover:bg-pale-orange hover:text-teal-700", undefined: "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900"'
                          >
                            {/* <svg
                              className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                              x-state-description='undefined: "text-teal-500 group-hover:text-teal-500", undefined: "text-gray-400 group-hover:text-gray-500"'
                              x-description="Heroicon name: outline/cog"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                              ></path>
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              ></path>
                            </svg> */}
                            <ion-icon name="settings"></ion-icon>
                            <span className="truncate">Account</span>
                          </Link>

                          <Link
                            to="#"
                            className=" text-dark-grayish-blue border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900 group border-l-4 px-3 py-2 flex items-center text-sm font-medium"
                            x-state-description='undefined: "bg-pale-orange border-teal-500 text-teal-700 hover:bg-pale-orange hover:text-teal-700", undefined: "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900"'
                          >
                            {/* <ion-icon name="unlock"></ion-icon> */}
                            <ion-icon name="key"></ion-icon>
                            <span className="truncate">Password</span>
                          </Link>

                          <Link
                            to="#"
                            className=" text-dark-grayish-blue border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900 group border-l-4 px-3 py-2 flex items-center text-sm font-medium"
                            x-state-description='undefined: "bg-pale-orange border-teal-500 text-teal-700 hover:bg-pale-orange hover:text-teal-700", undefined: "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900"'
                          >
                            <ion-icon name="notifications"></ion-icon>
                            <span className="truncate">Notifications</span>
                          </Link>

                          <Link
                            to="#"
                            className=" text-dark-grayish-blue border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900 group border-l-4 px-3 py-2 flex items-center text-sm font-medium"
                            x-state-description='undefined: "bg-pale-orange border-teal-500 text-teal-700 hover:bg-pale-orange hover:text-teal-700", undefined: "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900"'
                          >
                            <ion-icon name="basket"></ion-icon>
                            <span className="truncate">My orders</span>
                          </Link>

                          <Link
                            to="#"
                            className=" text-dark-grayish-blue border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900 group border-l-4 px-3 py-2 flex items-center text-sm font-medium"
                            x-state-description='undefined: "bg-pale-orange border-teal-500 text-teal-700 hover:bg-pale-orange hover:text-teal-700", undefined: "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900"'
                          >
                            {/* <svg
                              className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                              x-state-description='undefined: "text-teal-500 group-hover:text-teal-500", undefined: "text-gray-400 group-hover:text-gray-500"'
                              x-description="Heroicon name: outline/view-grid-add"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                              ></path>
                            </svg> */}
                            <ion-icon name="location"></ion-icon>
                            <span className="truncate">My Address</span>
                          </Link>
                          <hr className="bg-light-grayish-blue" />
                          <button className="">
                            <ion-icon name="log-out"></ion-icon>{" "}
                            <span className="truncate">Log out</span>
                          </button>
                        </nav>
                      </div>
                      <div className="bg-white flex-1 rounded-lg shadow-md p-8">
                        <h3 className="text-xl leading-6 font-bold text-gray-900">
                          My Account
                        </h3>
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
