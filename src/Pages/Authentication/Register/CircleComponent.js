import React from "react";

const CircleComponent = (props) => {
  const { mw } = props;
  return (
    <div className="relative">
      <div className="w-64 h-64  rounded-full flex justify-center items-center bg-[#118615] opacity-10"></div>
      <div
        className={`absolute top-4 left-3  w-56 h-56   rounded-full flex justify-center items-center bg-[#118615] opacity-10 z-0`}
      ></div>
      <div className="absolute top-10 left-8 w-44 h-44 rounded-full flex justify-center items-center bg-[#118615] opacity-10 z-10"></div>
    </div>
  );
};

export default CircleComponent;
