import React from "react";
import salem_logo_footer from "../../../Assets/brand/salem-logo-footer.png";
import app_store_banner from "../../../Assets/Images/appstorebanner.png";
import googleplay from "../../../Assets/Images/googleplay.png";
import facebook from "../../../Assets/SVGs/facebook.svg";
import instagram from "../../../Assets/SVGs/instagram.svg";
import twitter from "../../../Assets/SVGs/twitter.svg";
import youtube from "../../../Assets/SVGs/youtube.svg";

const Footer = () => {
  return (
    <div className="bg-[#015FF1] text-white py-[60px] mt-[140px] ">
      <div className="grid grid-cols-4 gap-[20px] w-[80%] mx-[auto]">
        <div className="grid gap-[15px] text-[14px]">
          <img
            className="h-[60px]"
            src={salem_logo_footer}
            alt="salem_logo_footer"
          />
          <p>
            264 Manon road F1 456 caron <br /> Town
          </p>
          <p>Office No 3457</p>
          <p>info@salem.com</p>
          <p>1-800-356-6522</p>
          <div className="flex gap-[15px] mt-[10px]">
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
        <div className="py-[20px]">
          <h4 className="text-[22px] font-semibold mb-[15px]">About Us</h4>
          <ol className="grid gap-[15px] text-[14px]">
            <li>Careers</li>
            <li>Blog</li>
            <li>Team</li>
            <li>Contact Us</li>
          </ol>
        </div>
        <div className="py-[20px]">
          <h4 className="text-[22px] font-semibold mb-[15px]">Our Services</h4>
          <ol className="grid gap-[15px] text-[14px]">
            <li>Interest Free Periods</li>
            <li>Instant Approval Process</li>
            <li>Enhanced Shopping Experience</li>
            <li>Low or No Fees</li>
          </ol>
        </div>
        <div className="py-[20px]">
          <h4 className="text-[22px] font-semibold uppercase mb-[15px]">
            Download our app
          </h4>
          <p className="text-[14px]">
            Tackle your Financial experience with our Mobile app and Make Your
            Life Easy.
          </p>
          <div className="flex gap-[8px]">
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
