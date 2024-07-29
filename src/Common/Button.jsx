import React from 'react';

const CustomButton = ({ className, onClick, children }) => {
  return (
    <button
      className={`bg-[#015FF1] text-white px-[20px] rounded mt-2 font-semibold h-[35px] shadow-btn transition-all duration-300 ease-in-out ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
