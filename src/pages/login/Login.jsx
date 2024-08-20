import { faLock, faUser, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../landing/assets/brand/logo.svg";
import { message } from "antd";
import { login, getUserProfile } from "../../Api/api";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../AuthContext";
const Login = () => {
  const [accountID, setAccountId] = useState("");
  const [passcode, setPasscode] = useState("");
  const location = useLocation();
  const { loginUser } = useAuth();
  const info = location.state?.message;
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      if (accountID === '' || passcode === '') {
        message.error("Please fill all fields");
        return;
      }
      const response = await login({ username: accountID, password: passcode });
      if (response.non_field_errors) {
        message.error(response.non_field_errors);
        return;
      }
      const user = await getUserProfile();
      if (!user.id) {
        message.error("please try again later");
        return;
      }
      // Storing the user object in sessionStorage
      sessionStorage.setItem('user', JSON.stringify(user));
      message.success("Login successful");
      await loginUser();
      if (user.user_type === "customer") {
        navigate("/customer");
      } else if (user.user_type === "admin") {
        navigate("/admin");
      } else if (user.user_type === "vendor") {
        navigate("/vendors");
      } else {
        message.error("Server error, please contact support");
      }
    } catch (error) {
      if (error.response?.data?.non_field_errors) {
        message.error(error.response.data.non_field_errors);
      } else {
        message.error("Server error, please contact support");
        console.log(error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-img">
      <div className="shadow-lg p-6 bg-white bg-opacity-70 rounded-xl relative">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="absolute top-3 left-3 text-blue-600 cursor-pointer"
          size="lg"
          onClick={() => navigate('/')}
        />
        <img className="mx-auto mb-4 cursor-pointer" src={logo} alt="Logo" />
        <p className="text-center text-2xl font-bold text-blue-600 mb-4">Login</p>
        {info && <p className="text-center text-red-600">{info}</p>}
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
