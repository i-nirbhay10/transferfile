import React from "react";

function Dashboard_Header(props) {
  return (
    <div className="text-3xl m-4 font-semibold text-[#605C5C]">
      {props.head}
    </div>
  );
}

export default Dashboard_Header;
