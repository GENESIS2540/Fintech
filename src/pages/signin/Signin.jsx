import { Checkbox, Form, Input, Select } from 'antd';
import React, { useState } from 'react';
import logo from '../landing/assets/brand/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { createCustomer , createVendor } from '../../Api/api';
import 'react-toastify/dist/ReactToastify.css';
import { message } from "antd";

const Signin = () => {


  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password1: '',
    password2: '',
    user_type: 'customer',
  });


  const navigate = useNavigate();
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    await setFormData((prevState) => ({
      ...prevState,
      username: `${formData.email}`,
    }));
    console.log(formData); // Log form data to verify
    try {
        // Call your signUpUser function from the API with formData
      let response = '';
      if( formData.user_type === 'customer'){
         response = await createCustomer(formData);
      }
      else{
         response = await createVendor(formData);
      }

      // Check if signup was successful
      if (response.key) {

        // Delay for 200 milliseconds (assuming you have a function called `delay`)
        await delay(600);
        // Redirect to login page after successful signup or regardless of success
        message.success('Welcome to the BNPL family.Sign up successfull');
        navigate('/login');
      } else {
        message.error('Sign up failed Try again later')
      }
    } catch (error) {
      console.error('Error signing up:', error.response.data);

      if(error.response.data.email){
        message.error('email: '+error.response.data.email)
      }
      else if(error.response.data.first_name){
        message.error('first name: '+error.response.data.first_name)

      }
      else if(error.response.data.last_name){
        message.error('last name: '+error.response.data.last_name)

      }
      else if(error.response.data.password1){
        message.error('password: '+error.response.data.password1)
      }      
      else if(error.response.data.password2){
        message.error('Confirm password: '+error.response.data.password2)
      }
      else if(error.response.data.username){
        message.error('username: '+error.response.data.username)
      }      
      else if(error.response.data.non_field_errors){
        message.error('username: '+error.response.data.username)
      }
      else {
        message.error('An unexpected error occurred. Please try again later.');
      }      
      // message.error('Sign up failed Try again later')
    }
  };

  // Options: vendor or customer
  const { Option } = Select;

  return (
    <div className="bg-img flex h-[100vh] items-center justify-center">
      <div className="grid glass gap-[10px] shadow-custom md:w-[450px] w-[95%] mx-auto p-[30px] bg-white bg-opacity-70 rounded-2xl">
        <img className="place-self-center cursor-pointer" src={logo} alt="" />
        <p className="font-bold text-[34px] text-center text-[#015FF1]">
          Sign Up
        </p>
        <Form
          className="grid gap-[15px]"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="md:flex grid gap-[15px] md:gap-[10px]">
            <Input
              placeholder="First Name"
              required
              type="text"
              onChange={(e) =>
                setFormData({ ...formData, first_name: e.target.value })
              }
                          />
            <Input
              required
              type="text"
              placeholder="Last Name"
              onChange={(e) =>
                setFormData({ ...formData, last_name: e.target.value })
              }   
                       />
          </div>
          <Input
            required
            type="email"
            placeholder="Email Address"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <div>
          <Select
              defaultValue="Customer"
              className="w-full"
              onChange={(value) => setFormData({ ...formData, user_type: value })}
            >
              <Option value="vendor">Vendor</Option>
              <Option value="customer">Customer</Option>
            </Select>
          </div>
          <Input
            required
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setFormData({ ...formData, password1: e.target.value })
            }
          />
          <Input
            required
            type="password"
            placeholder="Confirm Password"
            onChange={(e) =>
              setFormData({ ...formData, password2: e.target.value })
            }
          />
          <div className="flex gap-[5px]">
            <Checkbox required />{' '}
            <p>
              I accept the BNPL{' '}
              <span className="text-[#015FF1] cursor-pointer transition-all ease-in-out duration-500 hover:opacity-60">
                Terms of Use
              </span>{' '}
              &{' '}
              <span className="text-[#015FF1] cursor-pointer transition-all ease-in-out duration-500 hover:opacity-60">
                Privacy policy
              </span>
            </p>
          </div>
          <button
            className="cursor-pointer bg-[#015FF1] text-white font-semibold uppercase py-[5px] rounded-full shadow-btn bg-opacity-90"
            type="submit"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </Form>
        <p className="text-area">
          Already have an account?{' '}
          <Link
            to="/login"
            className="cursor-pointer transition-all duration-300 ease-in-out text-[#015FF1] hover:opacity-70 font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
