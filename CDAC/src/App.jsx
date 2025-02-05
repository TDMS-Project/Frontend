import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./Context/UserContext";


import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Base from "./Pages/Base";
import AdminHomePage from "./Pages/AdminHomePage";
import Vendor from "./Pages/Vendor";
import DeliverPerson from "./Pages/DeliverPerson";
import AdminProfile from "./Pages/AdminProfile";
import OrderHistory from "./Pages/OrderHistory";
import FeedBack from "./Pages/FeedBack";
import CustomerHomePage from "./Component/Customer/CustomerHomePage";
import VendorsList from "./Component/Customer/VendorsList";
import CustomerProfile from "./Component/Customer/CustomerProfile";
import CustomerOrderHistory from "./Component/Customer/CustomerOrderHistory";
import CustomerFeedback from "./Component/Customer/CustomerFeedback";
import MenuPage2 from "./Component/Customer/MenuPage2";
import VendorsHomePage from "./Component/Vendor/VendorsHomePage"
import VendorProfile from "./Component/Vendor/VendorsProfile"

function App() {
  return (
    <UserProvider>  {/* Wrap the entire application with UserProvider */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Base />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AdminHomePage" element={<AdminHomePage />} />
          <Route path="/Vendor" element={<Vendor />} />
          <Route path="/DeliverPerson" element={<DeliverPerson />} />
          <Route path="/AdminProfile" element={<AdminProfile />} />
          <Route path="/OrderHistory" element={<OrderHistory />} />
          <Route path="/FeedBack" element={<FeedBack />} />
          {/* <Route path="/CustomerHomePage" element={<CustomerHomePage />} /> */}
          {/* <Route path="/CustomerHomePage" element={<CustomerHomePage />} /> */}
          <Route path="/CustomerHomePage" element={<CustomerHomePage />} />

          <Route path="/VendorsList" element={<VendorsList />} />
          <Route path="/CustomerProfile" element={<CustomerProfile />} />
          <Route path="/CustomerOrderHistory" element={<CustomerOrderHistory />} />
          <Route path="/CustomerFeedback" element={<CustomerFeedback />} />
          <Route path="/menu/:vendorId" element={<MenuPage2 />} />
          <Route path="/VendorsHomePage" element={<VendorsHomePage/>}/>
          <Route path="/VendorsProfile" element={<VendorProfile/>}/>
        </Routes>
      </div>
    </UserProvider>
  );
}

export default App;
