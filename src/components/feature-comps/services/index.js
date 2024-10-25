import { Button } from "@mui/material";

const Services = () => {
  return (
    <div className="px-[2.5rem] mt-[2rem]">
      <div className="flex flex-col items-start">
        <h1 className="text-[2.5rem] tracking-[4px]">Specialty Vessels</h1>
        <div className="mb-[2rem] flex flex-col gap-[1rem] tracking-[2px] [&_span]:leading-[1.65rem]">
          <span>
            For decades, Matrix Service has been the industry leader in the
            engineering, fabrication, construction, maintenance, modification,
            repair and relocation of aboveground storage tanks and specialty
            vessels. Our AST capabilities cover atmospheric, pressurized and
            cryogenic tanks for liquid, gas and bulk storage, including complete
            terminals.
          </span>
          <span>
            Specialty tank and vessel construction projects are engineered and
            constructed with the same strict adherence to project details of API
            650 and 620 requirements.
          </span>
          <span>
            Matrix Service’s experience with specialty tanks and vessels
            includes ASME spheres
          </span>
        </div>
        <img
          src="https://www.oil-refinery.com/wp-content/uploads/2018/08/inside-refinery-plant.jpg"
          className="w-[45%] h-[22rem] object-cover"
        />
        <Button
          variant="contained"
          sx={{ marginTop: "1rem", backgroundColor: "#172554" }}
        >
          Get in touch
        </Button>
      </div>
      <div className="flex flex-col justify-end items-end">
        <h1 className="text-[2.5rem] tracking-[4px]">Material Handling</h1>
        <div className="mb-[2rem] flex flex-col gap-[1rem] tracking-[2px] [&_span]:leading-[1.65rem] text-end">
          <span>
            Matrix Service has a dedicated team of mining professionals whose
            focused competencies in mining facility engineering and material
            handling are backed by decades of service in the mining and minerals
            sector. We provide fabrication and construction services to ensure
            that your raw materials are right where you need them.
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
          className="w-[45%] h-[22rem] object-cover"
        />
        <Button
          variant="contained"
          sx={{ marginTop: "1rem", backgroundColor: "#172554" }}
        >
          Get in touch
        </Button>
      </div>
      <div className="flex flex-col items-start">
        <h1 className="text-[2.5rem] tracking-[4px]">Reliable Gas Supply</h1>
        <div className="mb-[2rem] flex flex-col gap-[1rem] tracking-[2px] [&_span]:leading-[1.65rem]">
          <span>
            Hydrogen is widely used in refining processes to remove impurities
            found in crude oil such as sulfur to meet stringent product and
            environmental specifications. Removing these components allows
            gasoline and diesel to burn cleaner and thus makes hydrogen a
            critical component in the production of cleaner fuels needed by
            efficient internal combustion engines.
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
          className="w-[45%] h-[22rem] object-cover"
        />
        <Button
          variant="contained"
          sx={{ marginTop: "1rem", backgroundColor: "#172554" }}
        >
          Get in touch
        </Button>
      </div>
    </div>
  );
};
export default Services;
