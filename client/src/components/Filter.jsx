import React, { useState } from "react";

const Filter = () => {
 const [filter, setFilter] = useState({})
 const [sort, setSort] = useState({})


 const handleFilter = (e) =>{
    setFilter({...filter, [e.target.name]: e.target.value})
 }

//  console.log(filter)

  return (
    <div className="wrapper mt-28 lg:mt-40 flex flex-col sm:flex-row justify-between mx-auto">
      <div className="filter-container mb-4 sm:mb-0 flex items-center justify-between">
        <span className="font-bold sm:text-xl mr-2 sm:mr-10">Filter Products:</span>
        <div className="flex">
        <select
          className="form-select appearance-none px-3 py-2 border border-solid transition ease-in-out m-0 focus:outline-none mr-4"
          aria-label="Default select example"
          name="color"
          onChange={handleFilter}
        >
          <option value="color">Color</option>
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="orange">Orange</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
        <select
          className="form-select appearance-none px-3 py-2 border border-solid transition ease-in-out m-0 focus:outline-none capitalize"
          aria-label="Default select example"
          name="brand"
          onChange={handleFilter}
        >
          <option value="brand">brand</option>
          <option value="nike">nike</option>
          <option value="adidas">adidas</option>
          <option value="puma">puma</option>
          <option value="reebok">reebok</option>
          <option value="jordan">jordan</option>
          <option value="vans">vans</option>
        </select>
        </div>
      </div>
      <div className="sort-container flex items-center justify-between">
        <span className="font-bold sm:text-xl mr-2 sm:mr-10">Sort Products:</span>
        <select
          className="form-select appearance-none px-3 py-2 border border-solid transition ease-in-out m-0 focus:outline-none"
          aria-label="Default select example"
          name="sortBy"
          onChange={(e)=>{setSort(e.target.value)}}
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
