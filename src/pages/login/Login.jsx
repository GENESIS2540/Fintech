import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../landing/assets/brand/logo.svg";
import { message } from "antd";

const Login = () => {
  const [accountID, setAccountId] = useState("");
  const [passcode, setPasscode] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    const validPasscode = "1234567";
    const validAccounts = ["customer", "vendor", "admin"];

    if (!validAccounts.includes(accountID)) {
      message.error("Invalid account ID");
      return;
    }
    if (passcode !== validPasscode) {
      message.error("Invalid passcode");
      return;
    }

    message.success("Login successful");
    if (accountID === "customer") {
      navigate("/customer");
    } else if (accountID === "admin") {
      navigate("/admin");
    } else if (accountID === "vendor") {
      navigate("/vendors");
    } else {
      message.error("Server error, please contact support");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-img">
      <div className="shadow-lg p-6 bg-white bg-opacity-70 rounded-xl">
        <img className="mx-auto mb-4 cursor-pointer" src={logo} alt="Logo" />
        <p className="text-center text-2xl font-bold text-blue-600 mb-4">Login</p>
        <div className="space-y-4">
          <div className="relative">
            <FontAwesomeIcon className="absolute left-3 top-3 text-blue-600" icon={faUser} />
            <input
              className="w-full pl-10 pr-4 py-2 border rounded focus:border-blue-600"
              placeholder="User Name or Email Address"
              value={accountID}
              onChange={(e) => setAccountId(e.target.value)}
            />
          </div>
          <div className="relative">
            <FontAwesomeIcon className="absolute left-3 top-3 text-blue-600" icon={faLock} />
            <input
              className="w-full pl-10 pr-4 py-2 border rounded focus:border-blue-600"
              placeholder="Password"
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            onClick={handleLogin}
          >
            Sign In
          </button>
        </div>
        <p className="mt-4 text-center">
          Don't have an account yet?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Register for free
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
