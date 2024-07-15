import { Checkbox, Form, Input, Select } from 'antd';
import React, { useState, useEffect } from 'react';
import logo from '../landing/assets/brand/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { signUpUser } from '../../Api/handler/Authentication/signup'; // Import your API function for signing up
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signin = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    user_type: 'customer',
  });

  // Update the username when firstName or lastName changes
  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      username: `${firstName}${lastName}`,
      firstName: `${firstName}`,
      lastName: `${lastName}`,
    }));
  }, [firstName, lastName]);
  const navigate = useNavigate();
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log(formData); // Log form data to verify

    try {
      // Call your signUpUser function from the API with formData
      const response = await signUpUser(formData);

      // Check if signup was successful
      if (response.success) {
        // Show success message (assuming you have a function called `roastify` to display messages)
        toast.success(response.message);
        // Delay for 200 milliseconds (assuming you have a function called `delay`)
        await delay(600);
        // Redirect to login page after successful signup or regardless of success
        alert(response.message);
        navigate('/login');
      } else {
        alert(response.message);
        toast.error(response.message);
      }
    } catch (error) {
      console.error('Error signing up:', error.response.data);
      alert('Error signing up');
      toast.error(error);
      // Handle error (e.g., show error message to the user)
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
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              required
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
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
              defaultValue='Customer'
              className='w-full'
            >
              <Option value="Vendor">Vendor</Option>
              <Option value="Customer">Customer</Option>
            </Select>
          </div>
          <Input
            required
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <Input
            required
            type="password"
            placeholder="Confirm Password"
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
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
