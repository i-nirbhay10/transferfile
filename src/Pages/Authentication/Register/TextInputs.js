import React from "react";

function TextInputs(props) {
  const { title, value, name, placeholder, onInputChange, type } = props;

  return (
    <div className="w-full">
      <div className="relative">
        <span className="px-2 rounded-xl bg-white text-sm text-[#118615] align-center absolute  -top-3 left-4">
          {title}
        </span>
        <input
          type={type}
          required
          value={value}
          name={name}
          placeholder={placeholder}
          className="p-2 w-full border rounded-lg border-1 border-[#B1B1B1] "
          onChange={(e) => onInputChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default TextInputs;
