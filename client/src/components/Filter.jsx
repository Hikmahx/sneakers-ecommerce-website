import React from "react";

const Filter = () => {
  return (
    <div className="wrapper mt-20 flex flex-col sm:flex-row justify-between max-w-xl sm:max-w-2xl md:max-7xl mx-auto">
      <div className="filter-container mb-4">
        <span className="font-bold sm:text-xl mr-2 sm:mr-10">Filter Products:</span>
        <select
          className="form-select appearance-none px-3 py-1.5 border border-solid rounded transition ease-in-out m-0 focus:outline-none"
          aria-label="Default select example"
        >
          <option value="color">Color</option>
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="orange">Orange</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
      </div>
      <div className="sort-container">
        <span className="font-bold sm:text-xl mr-2 sm:mr-10">Sort Products:</span>
        <select
          className="form-select appearance-none px-3 py-1.5 border border-solid rounded transition ease-in-out m-0 focus:outline-none"
          aria-label="Default select example"
          name="sortBy"
        >
          <option value="newest">Newest</option>
          <option value="asc">Price, low-high</option>
          <option value="desc">Price, high-low</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
