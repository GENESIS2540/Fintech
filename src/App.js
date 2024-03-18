import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Customer from "./pages/customer/Customer";
import Admin from "./pages/admin/components/Admin";
import LandingPage from "./pages/landing/components/LandingPage";
import Vendors from "./pages/Vendors/Vendors";
import SidebarCustomerTest from "./pages/customer/components/sidebar/SidebarCustomerTest";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/sidebar" element={<SidebarCustomerTest />} />
      </Routes>
    </Router>
  );
};

export default App;
