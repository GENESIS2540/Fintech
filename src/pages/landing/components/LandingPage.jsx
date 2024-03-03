import React from "react";
import "./landingPage.css";
import ImageCarousel from "./imageCarousel/ImageCarousel";
import GlobalReach from "./globalReach/GlobalReach";
import Services from "./services/Services";
import FaqReferals from "./faqReferals/FaqReferals";
import NewsLetter from "./newsletter/NewsLetter";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <ImageCarousel />
      <GlobalReach />
      <Services />
      <FaqReferals />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default LandingPage;
