import React from 'react';
import CollectionsCards from '../components/collections/CollectionsCards';
import CollectionsHeader from '../assets/collections-header.jpg'


const Collections = () => {
  return (
    <section className='max-w-xl sm:max-w-4xl lg:max-w-7xl relative px-5 pt-20 mt-2 pb-12 items-center mx-auto lg:mx-20 xl:mx-28 2xl:mx-40 3xl:mx-auto lg:pb-2 lg:px-1 xl:px-3 2xl:px-1'>
      <h2 className='product capitalize text-white font-bold text-center lg:text-left text-3xl sm:text-4xl sm:leading-none pb-16 px-8'>
        Collections
      </h2>
      <div className="absolute top-0 left-0 -z-20 bg-dark-grayish-blue w-full h-48 lg:rounded-md overflow-hidden">
        <img src={CollectionsHeader} alt="" className="opacity-20 h-full w-full object-cover" />
      </div>
      <CollectionsCards />
    </section>
  );
};

export default Collections;
