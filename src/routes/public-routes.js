import { Routes, Route } from "react-router-dom";
import Home from "../components/feature-comps/home";
import Services from "../components/feature-comps/services";
import ProjectReference from "../components/feature-comps/project-reference";
import AboutUs from "../components/feature-comps/about-us";
import ContactUs from "../components/feature-comps/contact-us";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route
        exact
        path="/project/:projectName"
        element={<ProjectReference />}
      />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="contact" element={<ContactUs />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};
export default PublicRoutes;
