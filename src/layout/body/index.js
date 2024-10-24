import AboutUs from "../../components/feature-comps/about-us";
import ImgSlider from "../../components/shared-comps/img-slider";

const Body = ({ selectedMenu }) => {
  console.log("5", selectedMenu);
  return (
    <div className="relative top-[88px]">
      <div>Body</div>
      <div>Transglobal</div>
      <AboutUs />
      <ImgSlider />
    </div>
  );
};
export default Body;
