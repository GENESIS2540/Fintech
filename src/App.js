import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Customer from "./pages/customer/Customer";
import Admin from "./pages/admin/components/Admin";
import LandingPage from "./pages/landing/components/LandingPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;
