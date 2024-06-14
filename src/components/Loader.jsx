import React from "react";
import { CircleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center my-10 absolute top-0 bottom-0 bg-white left-0 right-0 z-20">
      <CircleLoader color="skyblue" size={100}></CircleLoader>
    </div>
  );
};

export default Loader;
