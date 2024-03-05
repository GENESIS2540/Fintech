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
    <div className="bg-white">
      <Navbar handleButtonClick={handleButtonClick} />
      {selectedPage === "landingPage" && (
        <>
          <ImageCarousel handleButtonClick={handleButtonClick}/>
          <GlobalReach />
          <Services />
          <FaqReferals />
          <NewsLetter />
          <Footer />
        </>
      )}
      {selectedPage === "login" && <Login handleButtonClick={handleButtonClick} />}
      {selectedPage === "signup" && (
        <Signup handleButtonClick={handleButtonClick} />
      )}
      {selectedPage === "balance" && <CheckBalance />}
    </div>
  );
};

export default LandingPage;
