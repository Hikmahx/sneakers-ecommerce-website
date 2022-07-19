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
    <section className="h-auto pt-2 min-h-[80vh]">
      <div className="max-w-xl sm:max-w-4xl lg:max-w-7xl relative px-5 pt-20 pb-12 items-center mx-auto lg:mx-20 xl:mx-28 2xl:mx-40 3xl:mx-auto lg:pb-2 lg:px-1 xl:px-3 2xl:px-1">
        {!error ? (
          <>
            {loading ? (
              <Loading />
            ) : (
              <>
                {userInfo ? (
                  <>
                    <figure>{userInfo.email}</figure>
                    <span>
                      Welcome <strong>{userInfo?.username}!</strong> You can
                      view this page because you're logged in
                    </span>
                  </>
                ) : (
                  <>
                    Please <Link to="/login" className="text-sm border-b-2 border-b-orange font-bold">Login</Link> to view this page
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
        )}
      </div>
    </section>
  );
};

export default UserProfile;
