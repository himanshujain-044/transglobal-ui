import React from "react";

const AboutUs = () => {
  return (
    <div className="px-6 md:px-12 py-8">
      <div className="flex flex-col gap-[1rem] [&_p]:tracking-[1px]">
        <img
          src="https://www.consultancy.uk/illustrations/news/detail/2018-04-17-201940028-Operational-excellence-can-improve-margins-at-oil-refineries.jpg"
          className="w-full md:w-[70%] m-auto object-contain md:h-[400px] mb-6"
        />

        <p className="text-sm md:text-base py-1 tracking-wide">
          At Trans Global Services LLC, we are driving innovation in the
          refining industry through cutting-edge research and the development of
          advanced technologies that optimize efficiency, sustainability, and
          operational excellence. Our multidisciplinary team of scientists,
          engineers, and technical experts is dedicated to overcoming the
          complexities faced by modern refineries, advancing solutions that
          maximize process performance and minimize environmental impact.
        </p>
        <p className="text-sm md:text-base py-1 tracking-wide">
          Our mission is to lead the advancement of next-generation refinery
          technologies with a strong focus on process intensification, emissions
          reduction, energy efficiency, and digitalization. We specialize in
          enhancing hydrogen generation systems that enable refineries to meet
          the rising demand for cleaner fuels. Our designs and innovations
          improve the efficiency, integration, and performance of hydrogen
          generation equipment within refinery operations, supporting
          decarbonization efforts and maximizing hydrogen purity and yield.
        </p>
        <p className="text-sm md:text-base py-1 tracking-wide">
          Trans Global Services LLC’s process technologies and lifecycle
          solutions enable refineries to extract maximum value from
          hydrocarbons, including advanced catalysts, gas separation systems,
          and hydrogen recovery units. Through our state-of-the-art digital
          tools, we help operators enhance efficiency, ensure operational
          stability, and improve asset longevity.
        </p>
        <p className="text-sm md:text-base py-1 tracking-wide">
          Our commitment to safety, product quality, and environmental
          responsibility is at the core of everything we do. We work closely
          with our partners to implement technologies that not only improve
          refinery performance but also contribute to the global energy
          transition. At Trans Global Services LLC, we are leading the charge
          toward a more sustainable future through innovative hydrogen solutions
          and next-generation refining technologies.
        </p>
      </div>
      <div className="flex md:flex-row flex-col items-start gap-6 my-8 md:my-12">
        {/* <img
          src="https://media.gettyimages.com/id/530281675/photo/happy-businessman-sitting-in-office-lobby.jpg?s=2048x2048&w=gi&k=20&c=wSQeW8DksjuTTcZoSwo6MfLkCzKUM9ApkeYkpjNSnqk="
          alt="About Us"
          loading="lazy"
          className="bg-cover bg-no-repeat bg-fixed bg-center md:h-[20%] md:w-[40%] w-full"
        /> */}
        <div className="flex flex-col items-center justify-center gap-[1.25rem] mb-4">
          <h1 className="text-black text-2xl md:text-[1.875rem] font-medium">
            FRANK CAPRISTO
          </h1>
          <hr className="border-none w-full h-[0.0625rem] bg-[#172554] mb-[0.5rem]" />
          <p className="text-gray-600 text-justify leading-[1.25rem] tracking-[2px] h-min">
            Frank Capristo, a dynamic and forward-thinking individual, is the
            driving force behind Trans Global Services LLC. With a
            deep-rooted passion for energy and a keen eye for innovation, he
            established the company with a vision to revolutionize the refining
            industry. He recognized the growing demand for sustainable and
            efficient energy solutions and sought to address this need by
            building a world-class refinery. Through meticulous planning,
            strategic partnerships, and unwavering dedication, Frank Capristo
            successfully brought Trans Global Services LLC to fruition.
            His leadership style is characterized by a strong emphasis on
            innovation, environmental responsibility, and employee empowerment.
            Frank Capristo fosters a culture of excellence, encouraging his team
            to think creatively and strive for continuous improvement. Under his
            guidance, Trans Global Services LLC has become a leader in
            the industry, known for its commitment to quality, safety, and
            sustainability.
          </p>
        </div>
      </div>
      {/* <div className="flex flex-col items-center gap-6 mt-2">
        <strong className="text-3xl md:text-5xl py-4">LEADERSHIP</strong>
        <div className="flex md:flex-row flex-col gap-6 px-0">
          <img
            src="https://www.matrixservice.com/wp-content/uploads/2022/03/Shawn-Payne-200x200-1.jpg"
            className="object-cover md:w-[200px] w-full"
          />
          <div className="flex flex-col gap-y-1">
            <strong className="tracking-[3px]">Frank Capristo</strong>
            <span className="tracking-[3px] text-[0.65rem] md:text-sm font-medium">
              Vice President, Operations - Turnaround & Plant Services
            </span>
            <span className="tracking-[1px] md:text-base text-sm font-light">
              Frank Capristo serves as Vice President of Turnaround & Plant
              Services for Matrix Service. He joined Matrix in 2013, most
              recently holding the position of General Manager, Maintenance &
              Plant Services and before that, as Project Sponsor for the BP
              Cherry Point Refinery where he established a strong reputation for
              safety and client relationship leadership. Before joining Matrix
              Service, he held several leadership positions at Brinderon, Jacobs
              Engineering and Fluor Corporation.
            </span>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-4 px-0">
          <img
            src="https://www.matrixservice.com/wp-content/uploads/2021/07/ExecutiveHeadshots-MarkFillman-web_200x200.jpg"
            className="object-cover md:w-[200px] w-full"
          />
          <div className="flex flex-col gap-y-1">
            <strong className="tracking-[3px]">Mark Fillman</strong>
            <span className="tracking-[3px] text-[0.65rem] md:text-sm font-medium">
              Vice President, Operations - AST & Specialty Vessels
            </span>
            <span className="tracking-[1px] md:text-base text-sm font-light">
              Mark Fillman is Vice President of Operations, AST & Specialty
              Vessels, for Matrix Service. He joined Matrix in 1998 and has
              served in several roles within the storage products area
              throughout his career including Project Manager, Commercial
              Contracts Manager, Divisional Manager, and General Manager. Mr.
              Fillman has advanced the historical core AST business at Matrix
              and lead the development of the Company’s cryogenic and specialty
              vessel storage product and service lines.
            </span>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-4 px-0">
          <img
            src="https://www.matrixservice.com/wp-content/uploads/2024/08/Longer-headshot.jpg"
            className="object-cover md:w-[200px] w-full"
          />
          <div className="flex flex-col gap-y-1">
            <strong className="tracking-[3px]">Terry Longer</strong>
            <span className="tracking-[3px] text-[0.65rem] md:text-sm font-medium">
              Vice President, Operations - National Construction Group
            </span>
            <span className="tracking-[1px] md:text-base text-sm font-light">
              Terry Longer is the Vice President of Operations, National
              Construction Group, at Matrix Service. Mr. Longer drives the
              development and implementation of strategic business initiatives
              while overseeing the overall operations and performance, ensuring
              the safe and successful execution of quality projects. Before
              joining Matrix, Mr. Longer served as Vice President of
              Construction for The Americas at Technip Energies.
            </span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AboutUs;
