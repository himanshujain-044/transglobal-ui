import React, { useEffect, useRef } from "react";
import cx from "classnames";

function ImgSlider({ children, classes = "", speed = 2 }) {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;
    const scrollSpeed = speed; // Adjust speed as needed

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
    <div
      ref={sliderRef}
      className={cx("flex w-full animate-scroll overflow-hidden", classes)}
    >
      {children}
    </div>
  );
}

export default ImgSlider;
