import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Customer from "./pages/customer/Customer";
import Admin from "./pages/admin/components/Admin";
import LandingPage from "./pages/landing/components/LandingPage";
import Vendors from "./pages/Vendors/Vendors";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/vendors" element={<Vendors />} />
      </Routes>
    </Router>
  );
};

export default App;
