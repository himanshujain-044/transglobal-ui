import ImgSlider from "../../shared-comps/img-slider";

const Home = () => {
  return (
    <div className="">
      <div className="relative">
        <div className="z-[1] absolute text-[#172554] w-[32rem] rounded-[4px] p-[1rem] bottom-[2rem] left-[1rem] bg-[#a9a9a9] opacity-[0.75]">
          <h1 className="text-[42px]">Welcome to Transglobal</h1>
          <div className="tracking-[1px]">
            We are pioneering the future of energy sector by building and
            operating refineries operates on latest industry standards and
            optimized production with energy efficiency.
          </div>
        </div>
        <ImgSlider />
      </div>
      <div className="px-[3rem] py-[2rem] flex flex-col gap-[1rem]">
        <div className="flex flex-col tracking-[1px]">
          <strong>Join Us in Building a Sustainable Future</strong>
          <span>
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
        <div className="flex flex-col tracking-[1px]">
          <strong> Our Vision</strong>
          <span>
            We envision a world where hydrogen is a cornerstone of energy,
            driving industrial processes and reducing carbon footprints. Our
            refineries not only produce high-quality hydrogen but also harness
            it for various applications, creating a versatile energy ecosystem.
          </span>
        </div>
        <div className="flex flex-col items-center mt-[4rem]">
          <strong className="tracking-[2px] text-[24px]"> What We Offer</strong>
          <div className="flex gap-[1rem] tracking-[1px]">
            <div className="px-[1.5rem] py-[0.5rem] rounded-[4px] flex flex-col bg-white">
              <strong>Integrated Refinery Solutions:</strong>
              <span>
                Our cutting-edge refineries are designed to optimize hydrogen
                production alongside traditional refining processes, ensuring
                efficiency and minimal environmental impact.
              </span>
            </div>

            <div className="px-[1.5rem] py-[0.5rem] rounded-[4px] flex flex-col bg-white">
              <strong> Hydrogen Packages:</strong>
              <span>
                We provide tailored hydrogen solutions that cater to diverse
                industrial needs, from fuel production to chemical
                manufacturing, enhancing operational flexibility.
              </span>
            </div>
            <div className="px-[1.5rem] py-[0.5rem] rounded-[4px] flex flex-col bg-white">
              <strong>Operational Expertise:</strong>
              <span>
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
