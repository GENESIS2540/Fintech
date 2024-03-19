import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Customer from "./pages/customer/Customer";
import Admin from "./pages/admin/components/Admin";
import LandingPage from "./pages/landing/components/LandingPage";
import Vendors from "./pages/Vendors/Vendors";
import Dashboard from "./pages/Vendors/components/dashboard/Dashboard";
import Orders from "./pages/Vendors/components/Service/Orders";
import Cancellation from "./pages/Vendors/components/Service/requests/Cancellation";
import Return from "./pages/Vendors/components/Service/requests/Return";
import CheckBalance from "./pages/Vendors/components/profile/checkBalance/checkBalance";
import BankAccount from "./pages/Vendors/components/profile/bankAccount/BankAccount";
import Cookie from "./pages/Vendors/components/profile/cookie/Cookie";
import ManageAddres from "./pages/Vendors/components/profile/address/ManageAddres";
import Update from "./pages/Vendors/components/profile/updateCredentials/Update";
import ServiceList from "./pages/Vendors/components/Service/ServiceList";
import PaymentRegistration from "./pages/Vendors/components/profile/payment/PaymentRegistration";
import MyCredits from "./pages/Vendors/components/General/MyCredits";
import MessagesPage from "./pages/Vendors/components/General/MessagesPage";
import SidebarCustomerTest from "./pages/customer/components/sidebar/SidebarCustomerTest";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/vendors/dash" element={<Dashboard  />} />
        <Route path="/vendors/orders" element={<Orders />} />
        <Route path="/vendors/cancellation" element={<Cancellation />} />
        <Route path="/vendors/return" element={<Return />} />
        <Route path="/vendors/account" element={<CheckBalance />} />
        <Route path="/vendors/bank" element={<BankAccount />} />
        <Route path="/vendors/cookie" element={<Cookie />} />
        <Route path="/vendors/address" element={<ManageAddres />} />
        <Route path="/vendors/update" element={<Update />} />
        <Route path="/vendors/service" element={<ServiceList />} />
        <Route path="/vendors/pament" element={<PaymentRegistration />} />
        <Route path="/vendors/credits" element={<MyCredits/>} />
        <Route path="/vendors/feed" element={<MessagesPage/>} />
        <Route path="/sidebar" element={<SidebarCustomerTest />} />
      </Routes>
    </Router>
  );
};

export default App;
