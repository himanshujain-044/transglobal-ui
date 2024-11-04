import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/feature-comps/home";
import Services from "../components/feature-comps/services";
import Project from "../components/feature-comps/project";
import AboutUs from "../components/feature-comps/about-us";
import ContactUs from "../components/feature-comps/contact-us";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route exact path="/project/:projectName" element={<Project />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};
export default PublicRoutes;
