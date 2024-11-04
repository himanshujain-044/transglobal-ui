import AboutUs from "../../components/feature-comps/about-us";
import ContactUs from "../../components/feature-comps/contact-us";
import Home from "../../components/feature-comps/home";
import ProjectReference from "../../components/feature-comps/project-reference";
import Services from "../../components/feature-comps/services";
import { useMenu } from "../../context/MenuContext";
import PublicRoutes from "../../routes/public-routes";

const Body = () => {
  const { selectedMenu } = useMenu();

  return (
    <div className="relative mt-[68px] md:mt-[88px]">
      <PublicRoutes />
    </div>
  );
};

export default Body;
