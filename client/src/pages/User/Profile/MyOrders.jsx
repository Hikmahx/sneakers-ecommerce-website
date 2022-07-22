import React from "react";

const MyOrders = () => {
  return (
    <>
      <h3 className="text-xl leading-6 font-bold text-gray-900">My Orders</h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">
        Order history details
      </p>
      <hr className="border-b border-grayish-blue mt-3 mb-8" />

      <div className="">
        <p className="text-xl">No Orders yet.</p>
      </div>
    </>
  );
};

export default MyOrders;
