import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { headerMenu } from "../../../constants/header-menu";

const Services = () => {
  const navigate = useNavigate();
  return (
    <div className="px-3 py-6 md:px-8 md:py-6">
      <div className="flex flex-col items-start">
        <h1 className="text-[1.8rem] md:text-[2.5rem] md:tracking-[4px]">
          Hydrogen Production
        </h1>
        <div className="mt-2 mb-4 flex flex-col gap-2 tracking-normal text-sm md:text-lg font-light text-wrap">
          <span>
            Utilizing cutting-edge methods, including electrolysis and biomass
            gasification, we produce high-purity hydrogen that meets stringent
            quality standards. Our AST capabilities cover atmospheric,
            pressurized and cryogenic tanks for liquid, gas and bulk storage,
            including complete terminals.
          </span>
          <span>
            Specialty tank and vessel construction projects are engineered and
            constructed with the same strict adherence to project details of API
            650 and 620 requirements.
          </span>
          <span>
            Matrix Service’s experience with specialty tanks and vessels
            includes ASME spheres.
          </span>
        </div>
        <img
          src="https://www.oil-refinery.com/wp-content/uploads/2018/08/inside-refinery-plant.jpg"
          className="w-full md:w-[45%] h-[22rem] object-cover"
          alt="Services at Transglobaltl"
        />
        <Button
          variant="contained"
          sx={{ marginTop: "1rem", backgroundColor: "#172554" }}
          onClick={() => {
            navigate(headerMenu[headerMenu.length - 1].route);
          }}
          aria-label="Contactus"
        >
          Contact us
        </Button>
      </div>
      <div className="flex flex-col items-end my-8 md:my-0">
        <h1 className="text-[1.8rem] md:text-[2.5rem] md:tracking-[4px]">
          Distribution Networks
        </h1>
        <div className="mt-2 mb-4 flex flex-col gap-2 tracking-normal text-sm md:text-lg font-light text-wrap">
          <span>
            Our extensive distribution infrastructure ensures that hydrogen is
            delivered safely and efficiently to industries, fueling stations,
            and beyond. We provide fabrication and construction services to
            ensure that your raw materials are right where you need them.
          </span>
          <span>
            Teaming with our sister division Matrix PDM Engineering, Matrix
            Service provides a wide variety of turnkey material handling
            services. Matrix PDM Engineering is a worldwide leader for
            engineering and design in the bulk material handling industry.
          </span>
        </div>
        <img
          src="https://oilbridges.com/wp-content/uploads/2020/02/404-bg-1170x517.jpg"
          className="w-full md:w-[45%] h-[22rem] object-cover"
          alt="Services at Transglobaltl"
        />
        <Button
          variant="contained"
          sx={{ marginTop: "1rem", backgroundColor: "#172554" }}
          onClick={() => {
            navigate(headerMenu[headerMenu.length - 1].route);
          }}
          aria-label="Contactus"
        >
          Contact us
        </Button>
      </div>
      <div className="flex flex-col items-start">
        <h1 className="text-[1.8rem] md:text-[2.5rem] md:tracking-[4px]">
          Consulting & Solutions
        </h1>
        <div className="mt-2 mb-4 flex flex-col gap-2 tracking-normal text-sm md:text-lg font-light text-wrap">
          <span>
            We offer tailored consulting services to help businesses integrate
            hydrogen into their operations, maximizing efficiency and
            sustainability. Removing these components allows gasoline and diesel
            to burn cleaner and thus makes hydrogen a critical component in the
            production of cleaner fuels needed by efficient internal combustion
            engines.
          </span>
          <span>
            Oxygen enrichment can help increase capacity or give refiners the
            ability to process crude blends of various densities and sulfur
            content.
          </span>
          <span>
            Nitrogen does not react with most materials, making it an excellent
            blanketing and purging gas that can be used to protect valuable
            products from harmful contaminants.
          </span>
        </div>
        <img
          src="https://www.airproducts.com/-/media/images/969x646/content-row-image/509848898-refinery-twilight-3x2.jpg?as=0&w=969&hash=1FECECB22CCBFE6550F81C82337535C8"
          className="w-full md:w-[45%] h-[22rem] object-cover"
          alt="Serivces at Transglobaltl"
        />
        <Button
          variant="contained"
          sx={{ marginTop: "1rem", backgroundColor: "#172554" }}
          onClick={() => {
            navigate(headerMenu[headerMenu.length - 1].route);
          }}
          aria-label="Contactus"
        >
          Contact us
        </Button>
      </div>
    </div>
  );
};
export default Services;
