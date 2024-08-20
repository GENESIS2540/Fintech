// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import PrivateRoute from "./PrivateRoute";
import Customer from "./pages/customer/Customer";
import Admin from "./pages/admin/components/Admin";
import LandingPage from "./pages/landing/components/LandingPage";
import Vendors from "./pages/Vendors/Vendors";
import Login from "./pages/login/Login";
import Signin from "./pages/signin/Signin";
import Printing from "./pages/printing/Printing";
import ShippingService from "./pages/shipping/Shipping";
import MarketPlace from "./pages/marketPlace/MarketPlace";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signin />} />
          <Route path="/market-place" element={<MarketPlace />}/>


          {/* Private Routes */}
          <Route path="/customer" element={<PrivateRoute><Customer /></PrivateRoute>} />
          <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
          <Route path="/vendors" element={<PrivateRoute><Vendors /></PrivateRoute>} />
          <Route path="/printing" element={<PrivateRoute><Printing /></PrivateRoute>} />
          <Route path="/shipping" element={<PrivateRoute><ShippingService /></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
