import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters, selectSort } from "../redux/reducers/productSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.product.filter);

  const handleFilter = (e) => {
    dispatch(
      selectFilters({ filter: { ...filter, [e.target.name]: e.target.value } })
    );
  };

  const handleSort = (e) => {
    dispatch(selectSort({ sort: e.target.value }));

    // REFILTER AFTER SORTED
    dispatch(selectFilters({ filter: { ...filter} }))
  };

  return (
    <div className="wrapper mt-28 lg:mt-40 flex flex-col sm:flex-row justify-between mx-auto">
      <div className="filter-container mb-4 sm:mb-0 flex items-center justify-between">
        <span className="font-bold sm:text-xl mr-2 sm:mr-10">
          Filter Products:
        </span>
        <div className="flex">
          <select
            className=" appearance-none px-3 py-2 border border-solid transition ease-in-out m-0 focus:outline-none mr-4 bg-white"
            aria-label="Default select example"
            name="color"
            onChange={handleFilter}
          >
            <option value="">Color</option>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="orange">Orange</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
          </select>
          <select
            className=" appearance-none px-3 py-2 border border-solid transition ease-in-out m-0 focus:outline-none capitalize bg-white"
            aria-label="Default select example"
            name="company"
            onChange={handleFilter}
          >
            <option value="">brand</option>
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
        <span className="font-bold sm:text-xl mr-2 sm:mr-10">
          Sort Products:
        </span>
        <select
          className="appearance-none px-3 py-2 border border-solid transition ease-in-out m-0 focus:outline-none bg-white"
          aria-label="Default select example"
          name="sortBy"
          onChange={handleSort}
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
