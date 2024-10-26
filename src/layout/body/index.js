import AboutUs from "../../components/feature-comps/about-us";
import ContactUs from "../../components/feature-comps/contact-us";
import Home from "../../components/feature-comps/home";
import ProjectReference from "../../components/feature-comps/project-reference";
import Services from "../../components/feature-comps/services";
import { useMenu } from "../../context/MenuContext";

const Body = () => {
  const { selectedMenu } = useMenu();

  return (
    <div className="relative mt-[68px] md:mt-[88px]">
      {selectedMenu === 1 && <Home />}
      {selectedMenu === 2 && <Services />}
      {selectedMenu === 3 && <ProjectReference />}
      {selectedMenu === 4 && <AboutUs />}
      {selectedMenu === 5 && <ContactUs />}
    </div>
  );
};

export default Body;
