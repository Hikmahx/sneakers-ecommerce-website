import React from "react";

const NotFound = () => {
  document.title = "Not Found"

  return (
    <section className="bg-light-grayish-blue h-auto lg:pt-2 min-h-[80vh]">
      <div className="max-w-xl sm:max-w-4xl lg:max-w-7xl relative px-5 pt-20 pb-12 items-center mx-auto lg:mx-20 xl:mx-28 2xl:mx-40 3xl:mx-auto lg:pb-2 lg:px-1 xl:px-3 2xl:px-1">
        <p className="product capitalize font-bold text-center relative z-10 lg:text-left text-3xl sm:text-4xl sm:leading-none pb-16 px-8">
          Page Not Found
        </p>
      </div>
    </section>
  );
};

export default NotFound;
