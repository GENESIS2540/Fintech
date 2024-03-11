import React from "react";
import lock_img from "../../assets/images/lock.jpeg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (acccountID, passcode) => {
    if (acccountID === "customer" && passcode === "1234567") {
      navigate("/customer");
    } else if (acccountID === "admin" && passcode === "1234567") {
      navigate("/admin");
    } else {
      alert("Wrong passcode or account id");
    }
  };

  return (
    <div className="bg-[#F7F7F7] gap-[20px] grid grid-cols-2	w-[80%] m-[auto] mb-[0px] h-[450px] pl-[40px] p-[20px]">
      <form
        className="flex flex-col justify-center gap-[20px]"
        onSubmit={(e) => {
          e.preventDefault();
          const acccountID = e.target.acccountID.value;
          const passcode = e.target.passcode.value;
          handleLogin(acccountID, passcode);
        }}
      >
        <label htmlFor="">Account ID</label>
        <input
          name="acccountID"
          className="bg-transparent border-b focus:outline-none px-[5px]"
          type="text"
        />
        <label>Passcode</label>
        <input
          name="passcode"
          type="password"
          className="bg-transparent border-b focus:outline-none px-[5px]"
        />
        <button
          type="submit"
          className="bg-[#015FF1] text-white px-[20px] rounded w-max justify-self-center  h-[40px] hover:bg-transparent hover:border-2 border-[#015FF1] hover:text-black"
        >
          Login
        </button>
      </form>
      <div className="md:block hidden">
        <img className="h-[100%]" src={lock_img} alt="lock_img" />
      </div>
    </div>
  );
};

export default Login;
