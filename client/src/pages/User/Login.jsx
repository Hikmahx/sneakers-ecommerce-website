import React, { useEffect } from "react";
import AuthBg from "../../assets/user/auth-bg.jpg";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { loginUser, removeError } from "../../redux/reducers/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  document.title = "Login Page";

  const { loading, userInfo, error, errMsg } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  // redirect authenticated user to profile screen
  useEffect(() => {
    if (userInfo) {
      navigate("/user-profile");
      // eslint-disable-next-line
    }
  }, [navigate, userInfo]);

  const submitForm = (data) => {
    dispatch(loginUser(data));
  };

  const removeErrMsg = () => {
    dispatch(removeError());
  };

  return (
    <div className="relative h-screen">
      <div className="bg-pale-orange absolute inset-0 h-full w-full -z-20">
        <img
          src={AuthBg}
          alt="background of sneakers on a wooden board"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
      </div>
      <div className="wrapper w-full min-h-screen py-12 sm:py-8 flex items-center justify-center">
        <div className="wrapper w-5/6 sm:w-3/4 md:w-3/5 xl:w-2/5 container py-16 px-8 sm:px-12 bg-white relative">
          <h1 className="title text-xl sm:text-2xl lg:text-3xl font-bold text-very-dark-blue mb-12">
            SIGN IN
          </h1>
          <form
            className="flex flex-wrap justify-between w-full"
            onSubmit={handleSubmit(submitForm)}
            onChange={removeErrMsg}
          >
            {error && (
              <p className=" absolute text-[#f96464] text-sm top-28">
                {errMsg}
              </p>
            )}
            <div className="relative w-full  mb-2 py-3">
              <input
                id="email"
                name="email"
                type="text"
                className="peer h-10 w-full border-b-2 border-grayish-blue text-very-dark-blue placeholder-transparent focus:outline-none focus:border-orange"
                placeholder="username or email"
                {...register("email")}
                required
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-3.5 text-dark-grayish-blue text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grayish-blue peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-dark-grayish-blue peer-focus:text-sm"
              >
                Username or Email
              </label>
            </div>
            <div className="relative w-full  mb-6 py-3">
              <input
                id="password"
                name="password"
                type="password"
                className="peer h-10 w-full border-b-2 border-grayish-blue text-very-dark-blue placeholder-transparent focus:outline-none focus:border-orange"
                placeholder="Password"
                {...register("password")}
                required
              />
              <label
                htmlFor="password"
                className="absolute left-0 -top-3.5 text-dark-grayish-blue text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grayish-blue peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-dark-grayish-blue peer-focus:text-sm"
              >
                Password
              </label>
            </div>
            <button
              type="submit"
              className={
                "w-full h-12 max-w-lg lg:max-w-none bg-orange rounded-md mt-3 mb-2 text-white flex items-center justify-center lg:w-2/5 border border-orange shadow-[inset_0_0_0_0_#ffede1] hover:shadow-[inset_0_-4rem_0_0_#ffede1] hover:text-orange transition-all duration-300 " +
                (loading ? "cursor-not-allowed" : "cursor-auto")
              }
              disabled={loading}
            >
              {loading ? (
                <div
                  className=" spinner-border animate-spin inline-block w-4 h-4 border rounded-full"
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <>LOGIN</>
              )}
            </button>
            <br />
            <br />
            <div className="links mt-12 flex flex-wrap justify-between w-full">
              <a
                className="mb-5 lg:mb-0 border-b-2 border-solid hover:border-orange border-transparent transition-all"
                href="/"
              >
                FORGET PASSWORD?
              </a>
              <NavLink
                to="/register"
                className="border-b-2 border-solid border-transparent hover:border-orange transition-color"
                href="/"
              >
                CREATE NEW ACCOUNT
              </NavLink>
            </div>
          </form>
        </div>
      </div>
      Login
    </div>
  );
};

export default Login;
