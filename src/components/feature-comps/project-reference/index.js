const ProjectReference = () => {
  return (
    <div className="p-[3rem]">
      <div className="flex flex-col items-center justify-center">
        <strong className="text-[32px] mb-[1rem]">Past Projects</strong>
        <div className="grid grid-cols-3 gap-[2rem]">
          <img
            src="https://shriparth.com/wp-content/uploads/2021/07/2.png"
            height="350px"
            width="350px"
            className="rounded-[4px]"
          />
          <img
            src="https://shriparth.com/wp-content/uploads/2021/07/3.png"
            height="350px"
            width="350px"
            className="rounded-[4px]"
          />
          <img
            src="https://shriparth.com/wp-content/uploads/2021/07/15.png"
            height="350px"
            width="350px"
            className="rounded-[4px]"
          />
          <img
            src="https://shriparth.com/wp-content/uploads/2021/07/25.png"
            height="350px"
            width="350px"
            className="rounded-[4px]"
          />
          <img
            src="https://shriparth.com/wp-content/uploads/2021/07/24.png"
            height="350px"
            width="350px"
            className="rounded-[4px]"
          />
          <img
            src="https://shriparth.com/wp-content/uploads/2021/07/19.png"
            height="350px"
            width="350px"
            className="rounded-[4px]"
          />
        </div>
        <div className="p-[1rem] flex gap-[2rem] mt-[2rem] bg-white rounded-[4px] tracking-[1px]">
          <div className="flex flex-col">
            <strong className="text-center">Refinery Expansion Project</strong>
            <span>
              <strong>Client:</strong> Global Oil Corp
            </span>
            <span>
              <strong> Location:</strong> Houston, Texas, USA
            </span>
            <span>
              <strong>Scope:</strong> Expanded refinery capacity by 20%,
              including new distillation units and upgraded processing
              facilities.
            </span>
            <span>
              <strong>Challenges: </strong>Complex engineering design, tight
              deadlines, and stringent environmental regulations.
            </span>
            <span>
              <strong>Results:</strong> Successfully completed the expansion
              project ahead of schedule and within budget, significantly
              increasing production capacity and revenue.
            </span>
          </div>
          <div className="flex flex-col">
            <strong className="text-center">
              Pipeline Rehabilitation Project
            </strong>
            <span>
              <strong>Client:</strong> National Pipeline Company
            </span>
            <span>
              <strong> Location:</strong>Alberta, Canada
            </span>
            <span>
              <strong>Scope:</strong> Rehabilitated a 500-mile pipeline,
              including pipeline replacement, coating, and cathodic protection.
            </span>
            <span>
              <strong>Challenges: </strong>Remote location, harsh weather
              conditions, and logistical challenges.
            </span>
            <span>
              <strong>Results:</strong> Improved pipeline integrity, reduced
              maintenance costs, and enhanced safety.
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-[3rem]">
        <strong className="text-[32px]">Testimonials</strong>
        <div className="flex flex-col gap-[2rem] tracking-[1px]">
          <div className="flex gap-[2rem] items-center">
            <img
              src="https://www.nirwanuniversity.ac.in/uploads/TestimonialImage/22testi_varun.jpg"
              className="rounded-[4px]"
            />
            <div className="flex flex-col">
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
          <div className="flex gap-[2rem] items-center">
            <img
              src="https://www.nirwanuniversity.ac.in/uploads/TestimonialImage/30testi_manjeet.jpg"
              className="rounded-[4px]"
            />
            <div className="flex flex-col">
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
