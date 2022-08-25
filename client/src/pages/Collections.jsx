import React from 'react';
import CollectionsCards from '../components/collections/CollectionsCards';
import CollectionsHeader from '../assets/page-header/collections-header.jpg';

const Collections = () => {
  document.title = "Sneakers Collections"

  return (
    <section className='h-auto lg:pt-2 min-h-[80vh]'>
      <div className='max-w-xl sm:max-w-4xl lg:max-w-7xl relative px-5 pt-20 pb-12 items-center mx-auto lg:mx-20 xl:mx-28 2xl:mx-40 3xl:mx-auto lg:pb-2 lg:px-1 xl:px-3 2xl:px-1'>
        <h2 className='product capitalize text-white font-bold text-center relative z-[1] lg:text-left text-3xl sm:text-4xl sm:leading-none pb-16 px-8'>
          Collections
        </h2>
        <div className='absolute top-0 left-0 -z-0 bg-dark-grayish-blue w-full h-48 lg:rounded-md overflow-hidden'>
          <img
            src={CollectionsHeader}
            alt='sneakers on a shelf'
            className='opacity-10 h-full w-full object-cover'
          />
        </div>
        <CollectionsCards />
      </div>
    </section>
  );
};

export default Collections;
