import { Checkbox, Form, Input } from "antd";
import React from "react";
import logo from "../landing/assets/brand/logo.svg";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="bg-img flex h-[100vh] items-center justify-center">
      <div className="grid glass gap-[10px] shadow-custom md:w-[450px] w-[95%] mx-auto p-[30px] bg-white bg-opacity-70 rounded-2xl">
        <img className="place-self-center cursor-pointer" src={logo} alt="" />
        <p className="font-bold text-[34px] text-center text-[#015FF1]">
          Sign Up
        </p>
        <Form className="grid gap-[15px]">
          <div className="md:flex grid gap-[15px] md:gap-[10px]">
            <Input placeholder="First Name" required type="text" />
            <Input required type="text" placeholder="Last Name" />
          </div>
          <Input required type="email" placeholder="Email Address" />
          <Input required type="password" placeholder="Password" />
          <Input required type="password" placeholder="Confirm Password" />
          <div className="flex gap-[5px]">
            <Checkbox />{" "}
            <p>
              I accept the BNPL{" "}
              <span className="text-[#015FF1] cursor-pointer transition-all ease-in-out duration-500 hover:opacity-60">
                Terms of Use
              </span>{" "}
              &{" "}
              <span className="text-[#015FF1] cursor-pointer transition-all ease-in-out duration-500 hover:opacity-60">
                Privacy policy
              </span>
            </p>
          </div>
          <input
            className="cursor-pointer bg-[#015FF1] text-white font-semibold uppercase py-[5px] rounded-full shadow-btn bg-opacity-90"
            type="submit"
            value="Sign Up"
          />
        </Form>
        <p className="text-area">
          Already have an account?{" "}
          <Link to='/login' className="cursor-pointer transition-all duration-300 ease-in-out text-[#015FF1] hover:opacity-70 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
