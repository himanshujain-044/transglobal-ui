import AboutUs from "../../components/feature-comps/about-us";
import ContactUs from "../../components/feature-comps/contact-us";
import Home from "../../components/feature-comps/home";
import ProjectReference from "../../components/feature-comps/project-reference";
import Services from "../../components/feature-comps/services";
// import ImgSlider from "../../components/shared-comps/img-slider";

const Body = ({ selectedMenu }) => {
  return (
    <div className="relative mt-[88px]">
      {selectedMenu === 1 && <Home />}
      {selectedMenu === 2 && <Services />}
      {selectedMenu === 3 && <ProjectReference />}
      {selectedMenu === 4 && <AboutUs />}
      {selectedMenu === 5 && <ContactUs />}
      {/* <div>Body</div>
      <div>Transglobal</div>
      
      <ImgSlider /> */}
    </div>
  );
};
export default Body;
