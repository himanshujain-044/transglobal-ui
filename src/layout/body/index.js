import AboutUs from "../../components/feature-comps/about-us";
import ContactUs from "../../components/feature-comps/contact-us";
import Home from "../../components/feature-comps/home";
import Services from "../../components/feature-comps/services";
// import ImgSlider from "../../components/shared-comps/img-slider";

const Body = ({ selectedMenu }) => {
  console.log("5", selectedMenu);
  return (
    <div className="relative mt-[88px]">
      {selectedMenu === 1 && <Home />}
      {selectedMenu === 2 && <Services />}
      {selectedMenu === 3 && <span>project ref</span>}
      {selectedMenu === 4 && <AboutUs />}
      {selectedMenu === 5 && <ContactUs />}
      {/* <div>Body</div>
      <div>Transglobal</div>
      
      <ImgSlider /> */}
    </div>
  );
};
export default Body;
