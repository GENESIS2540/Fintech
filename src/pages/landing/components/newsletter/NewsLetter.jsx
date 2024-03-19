import React from "react";

const NewsLetter = () => {
  return (
    <div className="relative my-[100px]">
      <div className="newsletter">
        <div className="newsletter-content">
          <h3 className="md:text-[46px] text-[30px] font-bold">SignUp For Our News Letter</h3>
          <div className="flex gap-[10px] justify-center">
            <input
              className="w-[130px] focus:outline-none border bg-transparent h-[40px] rounded text-center placeholder-white"
              type="email"
              placeholder="Enter Your Email"
            />
            <input
              className="text-black bg-white w-[130px] rounded h-[40px] cursor-pointer"
              type="submit"
              value="Submit"
            />
          </div>
        </div>
      </div>
     
      <div className="w-[64%] h-[70px] flex left-[50%] translate-x-[-50%] justify-between shaow-custom px-[20px] py-[15px] absolute bg-white bottom-[-38px]">
        
      </div>

    
    </div>
  );
};

export default NewsLetter;
