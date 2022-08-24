import React from "react";

const Notifications = () => {
  document.title = "My Notifications"

  return (
    <>
      <h3 className="text-xl leading-6 font-bold text-gray-900">
        Notifications
      </h3>
      <p className="mt-1 max-w-2xl text-sm text-gray-500">
        Check your notifications here.
      </p>
      <hr className="border-b border-grayish-blue mt-3 mb-8" />
      <div className="">
        <p className="text-xl">No Notifications available.</p>
      </div>
    </>
  );
};

export default Notifications;
