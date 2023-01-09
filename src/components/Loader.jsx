import React from "react";

const Loader = () => {
  return (
    <div className="animate-[spin_1s_linear_infinite] motion-safe:animate-spin w-[50px] h-[50px] mx-auto ">
      <svg viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" />
      </svg>
    </div>
  );
};

export default Loader;
