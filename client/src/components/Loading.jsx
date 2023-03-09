import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center space-x-2 mt-20">
      <div
        className=" spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-orange"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
