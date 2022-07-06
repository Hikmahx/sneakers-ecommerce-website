import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilters,
  selectFilters,
  selectSort,
} from "../redux/reducers/productSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.product.filter);
  const loading = useSelector((state) => state.product.loading);
  const colors = useSelector((state) => state.product.colors);
  const brands = useSelector((state) => state.product.brands);
  const filteredProducts = useSelector(
    (state) => state.product.filteredProducts
  );

  useEffect(() => {
    if (!loading) {
      dispatch(getFilters());
    }
    // eslint-disable-next-line
  }, [filteredProducts]);

  const handleFilter = (e) => {
    dispatch(
      selectFilters({ filter: { ...filter, [e.target.name]: e.target.value } })
    );
  };

  const handleSort = (e) => {
    dispatch(selectSort({ sort: e.target.value }));

    // REFILTER AFTER SORTED
    dispatch(selectFilters({ filter: { ...filter } }));
  };

  return (
    <div className="wrapper mt-28 lg:mt-40 flex flex-col sm:flex-row justify-between mx-auto sm">
      <div className="filter-container mb-4 sm:mb-0 flex items-center justify-between sm:mr-8">
        <span className="font-bold text-base md:text-xl mr-2 sm:mr-10">
          Filter Products:
        </span>
        <div className="flex">
          <select
            className=" appearance-none px-3 py-2 border border-solid transition ease-in-out m-0 focus:outline-none mr-4 bg-white"
            aria-label="Default color select"
            name="color"
            onChange={handleFilter}
          >
            <option value="">Color</option>
            {colors.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>
          <select
            className=" appearance-none px-3 py-2 border border-solid transition ease-in-out m-0 focus:outline-none capitalize bg-white"
            aria-label="Default company/ brand select"
            name="company"
            onChange={handleFilter}
          >
            <option value="">brand</option>
            {brands.map((brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="sort-container flex items-center justify-between">
        <span className="font-bold md:text-xl mr-2 sm:mr-10">
          Sort Products:
        </span>
        <select
          className="appearance-none px-3 py-2 border border-solid transition ease-in-out m-0 focus:outline-none bg-white"
          aria-label="Default sorting select"
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
