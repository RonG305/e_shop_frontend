import React from "react";

const Loader = () => {
  return (
    <div className="  flex items-center justify-center ">
      <div className="  text-slate-950 rounded-md px-4 py-1  mt-2 buttonload">
        <i class="fa fa-circle-o-notch   fa-spin"></i>
      </div>
    </div>
  );
};

export default Loader;
