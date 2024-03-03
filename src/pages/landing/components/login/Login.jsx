import React from "react";
import lock_img from "../../Assets/Images/lock.jpeg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleCheckBalanceClick = () => {
    navigate("/balance");
  };

  return (
    <div className="bg-[#F7F7F7] gap-[20px] grid grid-cols-2	w-[80%] m-[auto]  h-[70vh] pl-[40px] p-[20px]">
      <div className="flex flex-col justify-center gap-[20px]">
        <label htmlFor="">Account ID</label>
        <input
          className="bg-transparent border-b focus:outline-none px-[5px]"
          type="text"
        />
        <label>Passcode</label>
        <input
          type="number"
          min="1"
          className="bg-transparent border-b focus:outline-none px-[5px]"
        />
        <button
          onClick={handleCheckBalanceClick}
          className="bg-[#015FF1] text-white px-[20px] rounded w-max justify-self-center  h-[40px] hover:bg-transparent hover:border-2 border-[#015FF1] hover:text-black"
        >
          Check Balance
        </button>
      </div>
      <div>
        <img className="h-[100%]" src={lock_img} alt="lock_img" />
      </div>
    </div>
  );
};

export default Login;
