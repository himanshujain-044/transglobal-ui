const ProjectReference = () => {
  return (
    <div className="px-6 md:px-12 py-8">
      <div className="flex flex-col items-center justify-center">
        <strong className="text-3xl md:text-5xl mb-6">Past Projects</strong>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center md:max-w-[1150px]">
          <img
            src="https://shriparth.com/wp-content/uploads/2021/07/2.png"
            className="rounded-[4px] object-cover"
          />
          <img
            src="https://shriparth.com/wp-content/uploads/2021/07/3.png"
            className="rounded-[4px] object-cover"
          />
          <img
            src="https://shriparth.com/wp-content/uploads/2021/07/15.png"
            className="rounded-[4px] object-cover"
          />
          <img
            src="https://shriparth.com/wp-content/uploads/2021/07/25.png"
            className="rounded-[4px] object-cover"
          />
          <img
            src="https://shriparth.com/wp-content/uploads/2021/07/24.png"
            className="rounded-[4px] object-cover"
          />
          <img
            src="https://shriparth.com/wp-content/uploads/2021/07/19.png"
            className="rounded-[4px] object-cover"
          />
        </div>
        <div className="p-4 flex flex-col md:flex-row gap-6 md:gap-24 mt-[2rem] bg-white rounded-[4px] tracking-[1px]">
          <div className="flex flex-col md:w-1/2">
            <strong className="text-start pb-2 text-lg md:text-xl">
              Refinery Expansion Project
            </strong>
            <div className="gap-1 flex flex-col py-2">
              <span className="text-sm">
                <strong>Client:</strong> Global Oil Corp
              </span>
              <span className="text-sm">
                <strong> Location:</strong> Houston, Texas, USA
              </span>
              <span className="text-sm">
                <strong>Scope:</strong> Expanded refinery capacity by 20%,
                including new distillation units and upgraded processing
                facilities.
              </span>
              <span className="text-sm">
                <strong>Challenges: </strong>Complex engineering design, tight
                deadlines, and stringent environmental regulations.
              </span>
              <span className="text-sm">
                <strong>Results:</strong> Successfully completed the expansion
                project ahead of schedule and within budget, significantly
                increasing production capacity and revenue.
              </span>
            </div>
          </div>
          <div className="flex flex-col md:w-1/2">
            <strong className="text-start pb-2 text-lg md:text-xl">
              Pipeline Rehabilitation Project
            </strong>
            <div className="gap-1 flex flex-col py-2">
              <span className="text-sm">
                <strong>Client:</strong> National Pipeline Company
              </span>
              <span className="text-sm">
                <strong> Location:</strong>Alberta, Canada
              </span>
              <span className="text-sm">
                <strong>Scope:</strong> Rehabilitated a 500-mile pipeline,
                including pipeline replacement, coating, and cathodic
                protection.
              </span>
              <span className="text-sm">
                <strong>Challenges: </strong>Remote location, harsh weather
                conditions, and logistical challenges.
              </span>
              <span className="text-sm">
                <strong>Results:</strong> Improved pipeline integrity, reduced
                maintenance costs, and enhanced safety.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-12">
        <strong className="text-3xl md:text-5xl mb-6">Testimonials</strong>
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
export default ProjectReference;
