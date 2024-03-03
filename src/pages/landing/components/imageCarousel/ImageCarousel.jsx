import React from "react";
import stroke_bar from "../../assets/SVGs/strokes-bars.svg";
import payment_option from "../../assets/SVGs/payment_option.svg";
import rates from "../../assets/SVGs/rates.svg";
import interest_fee from "../../assets/SVGs/interest_fee.svg";
import enhanced_shopping from "../../assets/SVGs/enhanced_shopping.svg";
import SimpleSlider from "./SimpleSlider";
import { useNavigate } from "react-router-dom";

const ImageCarousel = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("signup");
  };
  return (
    <div>
      <div className="relative mb-[220px]">
        <div className="overflow-x-hidden">
          <SimpleSlider />
        </div>

        <div className="absolute top-[150px] left-[15%] p-4 ">
          <span className="text-[#015FF1] flex gap-[5px] justify-center items-center">
            <img src={stroke_bar} alt="stroke_bar" />
            <p>Welcome To BNPL</p>
          </span>
          <h3 className="font-bold text-4xl my-[5px]">Buy Now</h3>
          <h3 className="font-bold text-4xl text-[#015FF1]">Pay Later</h3>
          <button
            onClick={handleSignup}
            className="uppercase mt-[15px] w-[145px] text-white bg-[#015FF1] rounded-[100vw] h-[40px]"
          >
            Enroll now
          </button>
        </div>
        <div className="flex justify-between w-[60%] absolute left-1/2 transform -translate-x-1/2 bottom-[-110px] ">
          <div className="flex flex-col cursor-pointer rounded justify-center  items-center h-[150px] w-[150px] text-center bg-white font-semibold | transform-scale shaow-custom ">
            <img src={payment_option} alt="payment_option" />
            <p>
              Flexible Payment <br /> Options
            </p>
          </div>
          <div className="flex flex-col cursor-pointer rounded justify-center items-center h-[150px] w-[150px] text-center bg-[#015FF1] text-white font-semibold | transform-scale shaow-custom">
            <img src={interest_fee} alt="interest_fee" />
            <p>
              Interest Free <br /> Periods
            </p>
          </div>
          <div className="flex flex-col cursor-pointer rounded justify-center items-center h-[150px] w-[150px] text-center  bg-white font-semibold | transform-scale shaow-custom">
            <img src={rates} alt="rates" />{" "}
            <p>
              Instant Approval <br /> Rates
            </p>
          </div>
          <div className="flex flex-col cursor-pointer rounded justify-center items-center h-[150px] w-[150px] text-center bg-[#015FF1] text-white font-semibold | transform-scale shaow-custom">
            <img src={enhanced_shopping} alt="enhanced_shopping" />
            <p>
              Enhanced Shopping <br /> Experience
            </p>
          </div>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-200px]">
          <button
            onClick={handleSignup}
            className="uppercase mt-[15px] w-[145px] text-white bg-[#015FF1] rounded-[8px] h-[40px] hover:bg-transparent hover:border border-[#015FF1] hover:text-black transition-background duration-150"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
