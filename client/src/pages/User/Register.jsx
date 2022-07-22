import React from 'react';
import AuthBg from '../../assets/user/auth-bg.jpg';
import { NavLink } from 'react-router-dom';

const Register = () => {
  return (
    <div className='relative'>
      <div className='bg-pale-orange absolute inset-0 h-full -z-20'>
        <img
          src={AuthBg}
          alt='background of sneakers on a wooden board'
          className='absolute inset-0 h-full w-full object-cover opacity-30'
        />
      </div>
      <div className='wrapper w-full min-h-screen py-12 sm:py-8 flex items-center justify-center'>
        <div className='wrapper w-5/6 sm:w-3/4 md:w-3/5 xl:w-2/5 container py-16 px-8 sm:px-12 bg-white'>
          <h1 className='title text-xl sm:text-2xl lg:text-3xl mb-5 font-bold'>
            CREATE AN ACCOUNT
          </h1>
          <form className='flex flex-wrap justify-between'>
            <div className='relative w-full lg:w-[45%]  mb-2 py-3'>
              <input
                id='firstname'
                name='firstname'
                type='text'
                className='peer h-10 w-full border-b-2 border-grayish-blue text-very-dark-blue placeholder-transparent focus:outline-none focus:border-orange'
                placeholder='First Name'
              />
              <label
                htmlFor='firstname'
                className='absolute left-0 -top-3.5 text-dark-grayish-blue text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grayish-blue peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-dark-grayish-blue peer-focus:text-sm'
              >
                First Name
              </label>
            </div>
            <div className='relative w-full lg:w-[45%] mb-2 py-3'>
              <input
                id='lastname'
                name='lastname'
                type='text'
                className='peer h-10 w-full border-b-2 border-grayish-blue text-very-dark-blue placeholder-transparent focus:outline-none focus:border-orange'
                placeholder='Last Name'
              />
              <label
                htmlFor='lastname'
                className='absolute left-0 -top-3.5 text-dark-grayish-blue text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grayish-blue peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-dark-grayish-blue peer-focus:text-sm'
              >
                Last Name
              </label>
            </div>
            <div className='relative w-full  mb-2 py-3'>
              <input
                id='username'
                name='username'
                type='text'
                className='peer h-10 w-full border-b-2 border-grayish-blue text-very-dark-blue placeholder-transparent focus:outline-none focus:border-orange'
                placeholder='username'
              />
              <label
                htmlFor='username'
                className='absolute left-0 -top-3.5 text-dark-grayish-blue text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grayish-blue peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-dark-grayish-blue peer-focus:text-sm'
              >
                username
              </label>
            </div>
            <div className='relative w-full  mb-2 py-3'>
              <input
                id='email'
                name='email'
                type='email'
                className='peer h-10 w-full border-b-2 border-grayish-blue text-very-dark-blue placeholder-transparent focus:outline-none focus:border-orange'
                placeholder='email'
              />
              <label
                htmlFor='email'
                className='absolute left-0 -top-3.5 text-dark-grayish-blue text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grayish-blue peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-dark-grayish-blue peer-focus:text-sm'
              >
                Email
              </label>
            </div>
            <div className='relative w-full lg:w-[45%] mb-6 py-3'>
              <input
                id='password'
                name='password'
                type='password'
                className='peer h-10 w-full border-b-2 border-grayish-blue text-very-dark-blue placeholder-transparent focus:outline-none focus:border-orange'
                placeholder='Password'
              />
              <label
                htmlFor='password'
                className='absolute left-0 -top-3.5 text-dark-grayish-blue text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grayish-blue peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-dark-grayish-blue peer-focus:text-sm'
              >
                Password
              </label>
            </div>
            <div className='relative w-full lg:w-[45%] mb-6 py-3'>
              <input
                id='confirm-password'
                name='confirm-password'
                type='password'
                className='peer h-10 w-full border-b-2 border-grayish-blue text-very-dark-blue placeholder-transparent focus:outline-none focus:border-orange'
                placeholder='Confirm Password'
              />
              <label
                htmlFor='confirm-password'
                className='absolute left-0 -top-3.5 text-dark-grayish-blue text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-grayish-blue peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-dark-grayish-blue peer-focus:text-sm'
              >
                Confirm Password
              </label>
            </div>
            <div className='agreement text-sm text-dark-grayish-blue py-4'>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </div>
            <button className='w-full h-12 max-w-lg lg:max-w-none bg-orange rounded-md mt-3 lg:mt-5 mb-2 text-white flex items-center justify-center lg:w-2/5 shadow-[inset_0_-1px_0_0_#ffede1] hover:shadow-[inset_0_-4rem_0_0_#ffede1] hover:text-orange border transition-all duration-300'>
              CREATE
            </button>
            <div className='links mt-12 flex flex-wrap w-full'>
              <span className="text-dark-grayish-blue lg:mr-4"> Already have an account? </span>
              <NavLink
                to='/login'
                className='border-b-2 border-solid border-transparent hover:border-orange transition-color'
                href='/'
              >
                LOGIN
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
