import React, { useEffect, useRef } from "react";
import industry from "../../../assets/images/industry.jpg";

const images = [
  industry,
  "https://media.istockphoto.com/id/1192897532/photo/concept-of-renewable-energy-solution-in-beautiful-morning-light-installation-of-solar-power.jpg?s=612x612&w=0&k=20&c=NLX6XQMYgmDO9-UdJFO6OGoq8O7zZrdZAtN-J7WK2dU=",
  "https://media.licdn.com/dms/image/D4E12AQETX0SAqIGmuw/article-cover_image-shrink_720_1280/0/1660226593714?e=2147483647&v=beta&t=jjDLENBTm3uOO0vBBk_30nu33af2Sd2FCam0hav5HSE",
  "https://media.licdn.com/dms/image/v2/D5612AQE19ch1ML2z_Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1677946275785?e=2147483647&v=beta&t=MOvxAHQFOI84rtbplmjcdeD9wYu5qJYx3faU5hs_qOA",
];

function ImgSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const scrollSpeed = 1; // Adjust speed as needed

    const scrollSlider = () => {
      scrollAmount += scrollSpeed;
      slider.scrollLeft = scrollAmount;

      // Reset scroll position to the beginning to create an infinite effect
      if (scrollAmount >= slider.scrollWidth / 2) {
        scrollAmount = 0;
      }
    };

    const intervalId = setInterval(scrollSlider, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div ref={sliderRef} className="flex w-full animate-scroll overflow-hidden">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index}`}
          className="w-full h-[36rem] object-cover"
        />
      ))}
    </div>
  );
}

export default ImgSlider;
