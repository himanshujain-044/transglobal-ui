import ImgSlider from "../../shared-comps/img-slider";

const Home = () => {
  return (
    <div className="w-full h-full">
      <div className="relative">
        <div className="z-[1] absolute text-[#172554] w-[90%] m-auto h-max md:w-[32rem] rounded-[4px] p-[1rem] bottom-2 md:bottom-[2rem] left-2 md:left-[1rem] bg-[#a9a9a9] opacity-[0.75] ml-1 md:ml-4">
          <h1 className="text-[24px] md:text-[40px] font-bold">
            Welcome to Transglobal
          </h1>
          <div className="tracking-normal md:tracking-[1px] text-sm md:text-base">
            We are pioneering the future of energy sector by building and
            operating refineries operates on latest industry standards and
            optimized production with energy efficiency.
          </div>
        </div>
        <ImgSlider />
      </div>
      <div className="px-3 md:px-8 py-8 flex flex-col gap-6">
        <div className="flex flex-col md:tracking-[1px] gap-y-2">
          <strong className="text-xl md:text-2xl">
            Join Us in Building a Sustainable Future
          </strong>
          <span className="text-sm md:text-base">
            Explore our website to learn more about our technologies,
            partnerships, and how we can work together to harness the power of
            hydrogen. Together, we can drive the shift towards a clean energy
            future. Transglobal, we are revolutionizing the energy landscape
            with our state-of-the-art refineries that integrate advanced
            hydrogen production technologies. Our commitment to sustainable
            practices and innovation positions us as leaders in the transition
            to a cleaner, hydrogen-powered future.
          </span>
        </div>
        <div className="flex flex-col md:tracking-[1px] gap-y-2">
          <strong className="text-xl md:text-2xl">Our Vision</strong>
          <span className="text-sm md:text-base">
            We envision a world where hydrogen is a cornerstone of energy,
            driving industrial processes and reducing carbon footprints. Our
            refineries not only produce high-quality hydrogen but also harness
            it for various applications, creating a versatile energy ecosystem.
          </span>
        </div>
        <div className="flex flex-col items-center my-4">
          <strong className="tracking-[2px] text-4xl md:text-[2.5rem]">
            What We Offer
          </strong>
          <div className="flex md:flex-row flex-col w-full gap-[1rem] tracking-[1px] my-6">
            <div className="p-4 rounded-md flex flex-col bg-white gap-y-1 shadow-md shadow-[#17255433]">
              <strong className="text-base">
                Integrated Refinery Solutions:
              </strong>
              <span className="text-sm py-2">
                Our cutting-edge refineries are designed to optimize hydrogen
                production alongside traditional refining processes, ensuring
                efficiency and minimal environmental impact.
              </span>
            </div>

            <div className="p-4 rounded-md flex flex-col bg-white gap-y-1 shadow-md shadow-[#17255433]">
              <strong className="text-base">Hydrogen Packages:</strong>
              <span className="text-sm py-2">
                We provide tailored hydrogen solutions that cater to diverse
                industrial needs, from fuel production to chemical
                manufacturing, enhancing operational flexibility.
              </span>
            </div>

            <div className="p-4 rounded-md flex flex-col bg-white gap-y-1 shadow-md shadow-[#17255433]">
              <strong className="text-base">Operational Expertise:</strong>
              <span className="text-sm py-2">
                Our experienced team manages and operates our facilities with a
                focus on safety, reliability, and innovation, ensuring seamless
                hydrogen production and distribution.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
