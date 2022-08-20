import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/reducers/authSlice";
import Loading from "../../components/Loading";
import { NavLink, Outlet } from "react-router-dom";
import { emptyCartOnLogoout } from "../../redux/reducers/cartSlice";

const UserProfile = () => {
  const { userInfo, loading, error, userErrorMsg, userToken } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(logout());
    dispatch(emptyCartOnLogoout());
  };

  return (
    <section className="h-auto pt-2 min-h-[80vh] bg-[#f9f9f9]">
      <div className=" max-w-xl lg:max-w-7xl relative px-5 py-20 items-center mx-auto lg:mx-20 xl:mx-28 2xl:mx-40 3xl:mx-auto lg:px-1 xl:px-3 2xl:px-1">
        <div className="flex gap-x-4 flex-col lg:flex-row">
          <div className="lg:bg-white lg:w-1/4 rounded-lg lg:shadow-md py-4 h-fit">
            <div className="profile-img-wrapper w-32 h-32 bg-grayish-blue rounded-full mx-auto relative">
              <button className="w-5 h-5 absolute right-3 hidden">
                <ion-icon
                  class="text-very-dark-blue text-xl"
                  name="create"
                ></ion-icon>
              </button>
            </div>
            <h3 className="capitalize text-lg text-center my-6">
              <div className="font-bold ">
                {userInfo && (
                  <>
                    {userInfo.firstname} {userInfo.lastname}
                  </>
                )}
              </div>
            </h3>

            <nav className="space-y-1 bg-white">
              <NavLink
                to=""
                className={({ isActive }) =>
                  "text-dark-grayish-blue group  px-3 py-2 flex items-center text-sm font-medium" +
                  (!isActive
                    ? " hover:bg-light-grayish-blue"
                    : " border-l-4 bg-pale-orange border-orange hover:bg-pale-orange")
                }
                end
                aria-current="page"
                x-state-description='Current: "bg-pale-orange border-orange text-dark-grayish-blue", Default: "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900"'
              >
                <ion-icon class="p-2 text-base" name="person"></ion-icon>
                <span className="truncate">My Account</span>
              </NavLink>

              <NavLink
                to="orders"
                className={({ isActive }) =>
                  "text-dark-grayish-blue group  px-3 py-2 flex items-center text-sm font-medium" +
                  (!isActive
                    ? " hover:bg-light-grayish-blue"
                    : " border-l-4 bg-pale-orange border-orange hover:bg-pale-orange")
                }
                x-state-description='undefined: "bg-pale-orange border-orange text-dark-grayish-blue", undefined: "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900"'
              >
                <ion-icon class="p-2 text-base" name="basket"></ion-icon>
                <span className="truncate">My Orders</span>
              </NavLink>

              <NavLink
                to="addresses"
                className={({ isActive }) =>
                  "text-dark-grayish-blue group  px-3 py-2 flex items-center text-sm font-medium" +
                  (!isActive
                    ? " hover:bg-light-grayish-blue"
                    : " border-l-4 bg-pale-orange border-orange hover:bg-pale-orange")
                }
                x-state-description='undefined: "bg-pale-orange border-orange text-dark-grayish-blue", undefined: "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900"'
              >
                <ion-icon class="p-2 text-base" name="location"></ion-icon>
                <span className="truncate">My Address</span>
              </NavLink>

              <NavLink
                to="notifications"
                className={({ isActive }) =>
                  "text-dark-grayish-blue group  px-3 py-2 flex items-center text-sm font-medium" +
                  (!isActive
                    ? " hover:bg-light-grayish-blue"
                    : " border-l-4 bg-pale-orange border-orange hover:bg-pale-orange")
                }
                x-state-description='undefined: "bg-pale-orange border-orange text-dark-grayish-blue", undefined: "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900"'
              >
                <ion-icon class="p-2 text-base" name="notifications"></ion-icon>
                <span className="truncate">Notifications</span>
              </NavLink>

              <NavLink
                to="password"
                className={({ isActive }) =>
                  "text-dark-grayish-blue group  px-3 py-2 flex items-center text-sm font-medium" +
                  (!isActive
                    ? " hover:bg-light-grayish-blue"
                    : " border-l-4 bg-pale-orange border-orange hover:bg-pale-orange")
                }
                x-state-description='undefined: "bg-pale-orange border-orange text-dark-grayish-blue", undefined: "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900"'
              >
                <ion-icon class="p-2 text-base" name="key"></ion-icon>
                <span className="truncate">Password</span>
              </NavLink>

              <NavLink
                to="settings"
                className={({ isActive }) =>
                  "text-dark-grayish-blue group  px-3 py-2 flex items-center text-sm font-medium" +
                  (!isActive
                    ? " hover:bg-light-grayish-blue"
                    : " border-l-4 bg-pale-orange border-orange hover:bg-pale-orange")
                }
                x-state-description='undefined: "bg-pale-orange border-orange text-dark-grayish-blue", undefined: "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900"'
              >
                <ion-icon class="p-2 text-base" name="settings"></ion-icon>
                <span className="truncate">Account setting</span>
              </NavLink>
              <hr className="text-grayish-blue" />
              <button
                onClick={() => onLogOut()}
                className="text-grayish-blue flex items-center px-3 py-2"
              >
                <ion-icon class="p-2 text-base" name="log-out"></ion-icon>
                <span className="truncate">Log out</span>
              </button>
            </nav>
          </div>
          <div className="bg-white flex-1 rounded-lg shadow-md p-8">
            {userToken ? (
              <>
                {!error ? (
                  <>
                    {loading ? (
                      <div className=" w-full h-full flex items-center justify-center">
                        <Loading />
                      </div>
                    ) : (
                      <>
                        {userInfo ? (
                          <Outlet />
                        ) : (
                          <>
                            Please{" "}
                            <NavLink
                              to="/login"
                              className="text-sm border-b-2 border-b-orange font-bold"
                            >
                              Login
                            </NavLink>{" "}
                            to view this page
                          </>
                        )}
                      </>
                    )}
                  </>
                ) : (
                  <p className=" mt-20 text-center text-very-dark-blue">
                    {userErrorMsg}
                  </p>
                )}
              </>
            ) : (
              <>
                Please{" "}
                <NavLink
                  to="/login"
                  className="text-sm border-b-2 border-b-orange font-bold"
                >
                  Login
                </NavLink>{" "}
                to view this page
              </>
            )}{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
