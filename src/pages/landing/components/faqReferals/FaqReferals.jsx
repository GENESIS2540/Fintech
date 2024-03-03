import React from "react";
import stroke_bars from "../../assets/SVGs/strokes-bars.svg";

 const FaqReferals = () => {
  return (
    <div className="bg-[#F7F7F7] h-[100vh] mt-[80px]">
      <div className="grid content-evenly h-[100%]">
        <img
          className="justify-self-center"
          src={stroke_bars}
          alt="stroke_bars"
        />
        <div className="grid grid-cols-2 mx-[auto] w-[75%] gap-[60px]">
          <div className="grid content-evenly  px-[10px] bg-[#ECF3FB] text-center ">
            <h3 className="text-[45px] font-bold">FAQs</h3>
            <div className="text-[#OB1035] text-[16px] opacity-75 font-bold">
              <p>&gt;How do I transfer money? </p>
              <p>&gt;How do I access my account information and activity?</p>
              <p>&gt;How do I make Payments?</p>
              <p>&gt;What security features are in </p>
            </div>
            <div>
              <p className="text-[#OB1035] opacity-75 text-[18px] font-bold">
                Have More Questions?
              </p>
              <button className="bg-[#015FF1] mt-[10px] text-white px-[20px] rounded w-max font-semibold justify-self-center  h-[40px] hover:bg-transparent hover:border border-[#015FF1] hover:text-black transition-background duration-150">
                Contact Us
              </button>
            </div>
          </div>
          <div className="grid content-evenly bg-[#ECF3FB] px-[10px] text-center h-[400px]">
            <h3 className="text-[45px] font-bold">Referals</h3>
            <p className="text-[#OB1035] opacity-75 text-[16px] font-bold">
              Refer Your Friends and Earn More Discount Rewards
            </p>
            <button className="bg-[#015FF1]	 justify-self-center text-white px-[20px] rounded w-max font-semibold  h-[40px] hover:bg-transparent hover:border border-[#015FF1] hover:text-black transition-background duration-150">
              Invite Friends
            </button>
          </div>
        </div>
        <img
          className="justify-self-center"
          src={stroke_bars}
          alt="stroke_bars"
        />
      </div>
    </div>
  );
};

export default FaqReferals;

