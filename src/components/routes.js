import React, { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Banner } from "./Banner";
import Resources from "./pages/resources/Resources";
import { AboutUs } from "./pages/AboutUs/AboutUs";
import OurAlumni from "./pages/OurAlumni";
import Undergraduate from "./dropdown/undergraduate/Undergraduate";
import Masters from "./dropdown/master/Masters";
import PhD from "./dropdown/phd/PhD";
import Programmes from "./dropdown/programmes/Programmes";
import ScholarshipsPage from "./pages/ScholarshipsPage/ScholarshipsPage";
import AdminLogin from "./admindashboard/adminlogin/AdminLogin";
import CreateScholarships from "./admindashboard/scholarships/CreateScholarships";
import AdminDashboard from "./admindashboard/AdminDashboard";
import { redirect } from "react-router-dom";
import PartnershipPage from "./pages/PartnershipPage/PartnershipPage";
import { ContactUs } from "./pages/contactUs/ContactUs";




const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("id");

  
if(token){
  return children;
}else{
return <Navigate to="/login" replace/>
}
}

function MyRoutes() {
  return (
    <Fragment>
      <Routes>
        <Route path={"/"} element={<Banner />} />
        <Route path={"/undergraduate"} element={<Undergraduate />} />
        <Route path={"/master's"} element={<Masters />} />
        <Route path={"/phd"} element={<PhD />} />
        <Route path={"/programmes"} element={<Programmes />} />
        <Route path={"/scholarships"} element={<ScholarshipsPage/>} />
        <Route path={"/resources"} element={<Resources/>} />
        <Route path={"/aboutus"} element={<AboutUs/>} />
        <Route path={"/ouralumni"} element={<OurAlumni/>} />
        <Route path={"/contacts"} element={<ContactUs/>} />
        <Route path={"/login"} element={<AdminLogin />} />
        <Route path={"/scholarshipform"} element={<CreateScholarships />} />
        <Route path={"/partnership"} element={<PartnershipPage />} />
        <Route
          path={"/admindashboard"}
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Fragment>
  );
}

export default MyRoutes;
