import React from 'react';
import CollectionsCards from '../components/collections/CollectionsCards';

const Collections = () => {
  return (
    <section className='max-w-xl sm:max-w-4xl lg:max-w-7xl relative px-5 pt-20 mt-2 pb-12 items-center mx-auto lg:mx-20 xl:mx-28 2xl:mx-40 lg:pb-2 lg:px-1 xl:px-3 2xl:px-1'>
      <h2 className='product capitalize text-very-dark-blue font-bold text-center lg:text-left text-3xl sm:text-4xl sm:leading-none pb-3'>
        Collections
      </h2>
      <CollectionsCards />
    </section>
  );
};

export default Collections;
