import { useState } from "react";
import { useLocation } from "react-router-dom";
import { projectData } from "./project-data";
const routeMapping = {
  "hydrocracking-processes": "hydrocrackingProcesses",
  "refining-processes": "refiningProcesses",
  "refinery-operations": "refineryOperations",
};
const Project = () => {
  const location = useLocation();
  const locations = location.pathname.split("/");
  const data = projectData[routeMapping?.[locations?.[locations?.length - 1]]];

  console.log(
    "10",
    locations,
    locations[locations?.length - 1],
    routeMapping?.[locations?.[locations?.length - 1]]
  );
  return (
    <div className="px-6 md:px-12 py-8">
      <strong className="text-2xl md:text-4xl mb-6 text-center block">
        {data?.name}
      </strong>
      <div className="flex gap-[1rem] md:gap-[2rem] flex-col md:flex-row items-center justify-center mt-[2rem]">
        <div className="p-[4px] md:p-[1rem] flex flex-col gap-[1rem]  bg-white rounded-[4px] tracking-[1px] max-w-[100%] md:max-w-[60%]">
          {data?.content.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 justify-center items-center md:max-w-[1150px]">
          {data?.imgs.map((imgUrl, index) => (
            <img
              key={index}
              src={imgUrl}
              className="rounded-[4px] object-cover"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-12">
        <strong className="text-2xl md:text-5xl mb-6">Testimonials</strong>
        <div className="flex flex-col gap-[2rem] tracking-[1px]">
          <div className="flex flex-col md:flex-row gap-4 items-center w-full">
            <img
              src="https://www.nirwanuniversity.ac.in/uploads/TestimonialImage/22testi_varun.jpg"
              className="rounded-[4px] w-full md:w-auto"
            />
            <div className="flex flex-col text-sm md:text-base">
              <span>
                <strong>Client:</strong> Global Oil Corp
              </span>
              <span>
                <strong>Testimonial:</strong>Your team's expertise and
                dedication were instrumental in the successful completion of our
                refinery expansion project. Their ability to overcome challenges
                and deliver results on time and within budget was impressive.
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center w-full">
            <img
              src="https://www.nirwanuniversity.ac.in/uploads/TestimonialImage/30testi_manjeet.jpg"
              className="rounded-[4px] w-full md:w-auto"
            />
            <div className="flex flex-col text-sm md:text-base">
              <span>
                <strong>Client:</strong> National Pipeline Company
              </span>
              <span>
                <strong> Testimonial: </strong>We were very satisfied with the
                quality of work and professionalism of your team during the
                pipeline rehabilitation project. They effectively managed the
                project, ensuring minimal disruption to our operations.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
