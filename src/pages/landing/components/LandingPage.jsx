import React from "react";
import "./landingPage.css";
import ImageCarousel from "./imageCarousel/ImageCarousel";
import GlobalReach from "./globalReach/GlobalReach";
import Services from "./services/Services";
import FaqReferals from "./faqReferals/FaqReferals";
import NewsLetter from "./newsletter/NewsLetter";
import Login from "./login/Login";
import Signup from "./signup/Signup";
import CheckBalance from "../../customer/components/profile/checkBalance/checkBalance";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

const LandingPage = () => {
  const [selectedPage, setSelectedPage] = React.useState("landingPage");

  const handleButtonClick = (setting) => {
    setSelectedPage(setting);
  };

  return (
    <div id="home" className="bg-white">
      <div className="">
        <Navbar handleButtonClick={handleButtonClick} />
      </div>

      {selectedPage === "landingPage" && (
        <>
          <ImageCarousel handleButtonClick={handleButtonClick} />
          <div id="about">
            <GlobalReach />
          </div>
          <div id="services">
            <Services />
          </div>
          <div id="faqs">
            <FaqReferals />
          </div>
          <NewsLetter />
          <Footer />
        </>
      )}
      {selectedPage === "login" && (
        <Login handleButtonClick={handleButtonClick} />
      )}
      {selectedPage === "signup" && (
        <Signup handleButtonClick={handleButtonClick} />
      )}
      {selectedPage === "balance" && <CheckBalance />}
    </div>
  );
};

export default LandingPage;
