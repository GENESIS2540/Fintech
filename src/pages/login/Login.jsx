import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkbox, Form } from "antd";
import React, { useState } from "react";
import logo from "../landing/assets/brand/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { loginUser} from "../../Api/handler/Authentication/login";

const Login = () => {
  const [acccountID, setAccountId] = useState("");
  const [passcode, setPasscode] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try{
      const response = await loginUser(acccountID,passcode);
      if (response.success){
        let userProfile = sessionStorage.getItem('userProfile');
        userProfile = JSON.parse(userProfile);
        alert('login sucessfull')
        console.log(userProfile.user_type)
        if (userProfile.user_type === "customer") {
          navigate("/customer");
        } else if (userProfile.user_type  === "admin") {
          navigate("/admin");
        } else if (userProfile.user_type  === "vendor") {
          navigate("/vendors");
        } else {
          alert("Server error please contact support");
        }
      }
      else{
        alert("Wrong passcode or account id");
      }
    }
    catch(error){
      console.log(error);
    }
    
    
    
  };

  return (
    <div className="flex justify-center items-center h-[100vh] bg-img ">
      <div className="grid gap-[10px] shadow-custom md:w-[450px] w-[95%] mx-auto p-[30px] bg-white bg-opacity-70 rounded-2xl">
        <img className="place-self-center cursor-pointer" src={logo} alt="" />
        <p className="font-bold text-[34px] text-center text-[#015FF1]">
          Login
        </p>
        <Form
          className="grid gap-[15px]"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="items-center w-[100%] flex relative">
            <FontAwesomeIcon
              className="absolute pl-[10px] text-[#015FF1]"
              icon={faUser}
            />
            <input
              required
              className="bg-white w-[100%] border-[#015FF1] rounded px-[40px] py-[5px] outline-none focus:border-[#015FF1] border"
              placeholder="User Name or Email Address"
              onChange={(e) => setAccountId(e.target.value)}
            />
          </div>
          <div className="items-center w-[100%] flex relative">
            <FontAwesomeIcon
              className="absolute pl-[10px] text-[#015FF1]"
              icon={faLock}
            />
            <input
              className="bg-white w-[100%] border-[#015FF1] rounded px-[40px] py-[5px] outline-none focus:border-[#015FF1] border"
              placeholder="Password"
              type="password"
              required
              onChange={(e) => setPasscode(e.target.value)}
            />
          </div>
          <div className="flex justify-between">
            <div className="flex gap-[5px]">
              <Checkbox />
              <p>Remember me</p>
            </div>
            <p className="cursor-pointer transition-all duration-300 ease-in-out text-[#015FF1] hover:opacity-70 font-semibold">
              Forgot Password?
            </p>
          </div>
          <button
            className="cursor-pointer bg-[#015FF1] text-white font-semibold uppercase py-[5px] rounded-full shadow-btn bg-opacity-90"
            type="submit"
            onClick={handleLogin}
          >
            Sign In
          </button>
        </Form>
        <p className="text-area ">
          Don't have an account yet?{" "}
          <Link to='/signup' className="cursor-pointer transition-all duration-300 ease-in-out text-[#015FF1] hover:opacity-70 font-semibold">
            Register for free
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
