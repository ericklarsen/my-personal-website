import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

const SliderBubbleButton = ({ totalSlides, activeSlide, leftMove, rightMove, bubbleMove }) => {
  return (
    <div className="flex justify-center items-center flex-shrink-0">
      <Image
        src="/img/leftArrow.svg"
        alt="left arrow"
        onClick={leftMove}
        width={12}
        height={20}
        className={`${activeSlide === 1 && "opacity-20"} cursor-pointer`}
      />
      <div className="flex mx-8 ">
        {[...Array(totalSlides).keys()].map((i) => (
          <div
            key={i}
            onClick={() => bubbleMove(i)}
            className={`w-3 h-3 rounded-full cursor-pointer bg-white ${
              activeSlide === i + 1 ? "opacity-50" : "opacity-10"
            } ${i !== totalSlides - 1 && "mr-2.5"}`}
          ></div>
        ))}
      </div>
      <Image
        src="/img/rightArrow.svg"
        alt="right arrow"
        onClick={rightMove}
        width={12}
        height={20}
        className={`${activeSlide === totalSlides && "opacity-20"} cursor-pointer`}
      />
    </div>
  );
};

SliderBubbleButton.propTypes = {
  totalSlides: PropTypes.number,
  activeSlide: PropTypes.number,
  leftMove: PropTypes.func,
  rightMove: PropTypes.func,
  bubbleMove: PropTypes.func,
};

export default SliderBubbleButton;
