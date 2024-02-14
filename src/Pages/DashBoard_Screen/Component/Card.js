import React from "react";

const Card = ({ title, subtitle, icon, color }) => {
  return (
    <div className={`shadow-lg border-2 w-72 h-48 rounded-xl bg-["#fff"] `}>
      <div
        className={`flex justify-center items-center border-2 border-[#118615] h-20 rounded-xl bg-["#fff"]`}
      >
        <h1 className="text-2xl text-[#118615] font-bold">{subtitle}</h1>
      </div>
      <div className="flex justify-between mx-5 h-28 items-center">
        <div className="">
          <img src={icon} alt="icon" className="h-[6vh] w-[6vh]" />
        </div>
        <div className="">
          <span className="text-5xl text-[#118615]">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
