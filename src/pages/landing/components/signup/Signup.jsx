import React from "react";

const Signup = () => {
  
  return (
    <div className="w-[80%] mx-[auto] shaow-custom grid h-[70vh] px-[40px] py-[20px]">
      <h3 className="bg-[#F7F7F7] w-max py-[3px] px-[10px] rounded-[5px] h-max">
        Sign Up
      </h3>
      <p className="bg-[#F7F7F7] w-max py-[3px] px-[10px] rounded-[5px] h-max">
        Please fill in this form to create an account!
      </p>
      <hr />
      <div className="flex justify-between">
        <input
          className="focus:outline-none bg-[#F7F7F7] w-max py-[3px] px-[10px] rounded-[5px] h-max"
          type="text"
          placeholder="First Name"
        />
        <input
          className="focus:outline-none bg-[#F7F7F7] w-max py-[3px] px-[10px] rounded-[5px] h-max"
          type="text"
          placeholder="Last Name"
        />
      </div>
      <input
        className="focus:outline-none bg-[#F7F7F7] w-max py-[3px] px-[10px] rounded-[5px] h-max active:outline-none"
        type="email"
        name="email"
        id=""
        placeholder="Email"
      />
      <input
        className="focus:outline-none bg-[#F7F7F7] w-max py-[3px] px-[10px] rounded-[5px] h-max"
        type="password"
        name="password"
        placeholder="Password"
      />
      <input
        className="focus:outline-none bg-[#F7F7F7] w-max py-[3px] px-[10px] rounded-[5px] h-max"
        type="password"
        name="password"
        placeholder="Confirm Password"
      />
      <div className="flex items-center gap-[8px]">
        <input
          className="bg-[#F7F7F7] outline-red w-max  h-max"
          type="checkbox"
          name="checkbox"
        />{" "}
        <p>
          I accept the{" "}
          <span className="text-[#2073F3] cursor-pointer">Terms of Use</span> &{" "}
          <span className="text-[#2073F3] cursor-pointer">Privacy Policy</span>
        </p>
      </div>
      <button
        className="bg-[#015FF1] text-white px-[20px] py-[5px] rounded w-max justify-self-start mt-[5px] h-[40px] hover:bg-transparent hover:border border-[#015FF1] hover:text-black transition-background duration-150"
      >
        Sign Up
      </button>
    </div>
  );
};

export default Signup;
