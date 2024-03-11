import React from "react";
import salem_logo_footer from "../../assets/brand/salem-logo-footer.png";
import app_store_banner from "../../assets/images/appstorebanner.png";
import googleplay from "../../assets/images/googleplay.png";
import facebook from "../../assets/SVGs/facebook.svg";
import instagram from "../../assets/SVGs/instagram.svg";
import twitter from "../../assets/SVGs/twitter.svg";
import youtube from "../../assets/SVGs/youtube.svg";

const Footer = () => {
  return (
    <div className="bg-[#015FF1] text-white py-[20px] md:py-[60px] mt-[140px] ">
      <div className="grid md:grid-cols-4 sm:grid-cols-2  md:gap-[20px] w-[80%] mx-[auto]">
        <div className="grid gap-[15px] text-[14px] order-4 md:order-first text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-[5px]">
            <img
              className="h-[50px]"
              src={salem_logo_footer}
              alt="salem_logo_footer"
            />
            <p className="text-[30px] font-bold cursor-pointer">BNPL</p>
          </div>

          <p>
            264 Manon road F1 456 caron Town
          </p>
          <p>Office No 3457</p>
          <p>info@salem.com</p>
          <p>1-800-356-6522</p>
          <div className="flex items-center justify-center md:justify-start gap-[15px] mt-[10px]">
            <div className="bg-white rounded-[50%] p-[5px]  h-[42px] w-[42px] flex cursor-pointer">
              <img src={facebook} alt="facebook" />
            </div>
            <div className="bg-white rounded-[50%] p-[5px]  h-[42px] w-[42px] flex cursor-pointer">
              <img src={instagram} alt="instagram" />
            </div>
            <div className="bg-white rounded-[50%] p-[5px]  h-[42px] w-[42px] flex cursor-pointer">
              <img src={twitter} alt="twitter" />
            </div>
            <div className="bg-white rounded-[50%] p-[5px]  h-[42px] w-[42px] flex cursor-pointer">
              <img src={youtube} alt="youtube" />
            </div>
          </div>
        </div>
        <div className="md:py-[20px] py-[10px] order-3 md:-order-1 text-center md:text-left">
          <h4 className="text-[22px] font-semibold mb-[15px]">About Us</h4>
          <ol className="grid gap-[15px] text-[14px]">
            <li>Careers</li>
            <li>Blog</li>
            <li>Team</li>
            <li>Contact Us</li>
          </ol>
        </div>
        <div className="py-[20px] text-center md:text-left">
          <h4 className="text-[22px] font-semibold mb-[15px]">Our Services</h4>
          <ol className="grid gap-[15px] text-[14px]">
            <li>Interest Free Periods</li>
            <li>Instant Approval Process</li>
            <li>Enhanced Shopping Experience</li>
            <li>Low or No Fees</li>
          </ol>
        </div>
        <div className="py-[20px] text-center md:text-left">
          <h4 className="text-[22px] font-semibold uppercase mb-[15px]">
            Download our app
          </h4>
          <p className="text-[14px]">
            Tackle your Financial experience with our Mobile app and Make Your
            Life Easy.
          </p>
          <div className="md:flex hidden flex-wrap justify-between">
            <img
              className="mt-[20px] h-[30px]"
              src={app_store_banner}
              alt="app_store_banner"
            />
            <img
              className="mt-[20px] h-[30px]"
              src={googleplay}
              alt="googleplay"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
