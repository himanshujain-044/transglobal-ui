import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/feature-comps/home";
import Services from "../components/feature-comps/services";
import ProjectReference from "../components/feature-comps/project-reference";
import AboutUs from "../components/feature-comps/about-us";
import ContactUs from "../components/feature-comps/contact-us";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Navigate to="home" replace={true} />} />
      <Route index path="home" exact element={<Home />} />
      <Route path="services" exact element={<Services />} />
      <Route path="project/:projectName" exact element={<ProjectReference />} />
      <Route path="about-us" exact element={<AboutUs />} />
      <Route path="contact" exact element={<ContactUs />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
export default PublicRoutes;
