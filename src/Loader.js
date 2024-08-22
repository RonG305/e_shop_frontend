import React from "react";

const Loader = () => {
  return (
    <div className=" w-full h-full flex items-center justify-center">
      <div className=" bg-gray-300 text-white rounded-md px-4 py-1 mt-2 buttonload">
        <i class="fa fa-circle-o-notch fa-spin"></i>
      </div>
    </div>
  );
};

export default Loader;
