import React from "react";
// import PropTypes from "prop-types";
import SliderContainer from "../../molecules/Slider/SliderContainer";
import SliderSlide from "../../molecules/Slider/SliderSlide";

const WebProjects = () => {
  const leftMove = () => {
    console.log("");
  };

  const rightMove = () => {
    console.log("");
  };

  // const elipsis = {
  //   display: "-webkit-box",
  //   WebkitLineClamp: 4,
  //   WebkitBoxOrient: "vertical",
  //   overflow: "hidden",
  //   textOverflow: "ellipsis",
  //   wordBreak: "break-word",
  // };

  return (
    <>
      <SliderContainer
        style={{ transform: `translateX(0%)` }}
        // onTouchEnd={(e) => onTouchEnd(e)}
        // onTouchStart={(e) => onTouchStart(e)}
      >
        <SliderSlide column={1}>
          {[...Array(3).keys()].map((i) => (
            <div
              key={i}
              className="w-full border-2 border-white border-opacity-20  rounded-2xl p-5"
            >
              <h5 className="text-white font-mont-bold tracking-wide text-lg">
                Academic Website - 2019
              </h5>
              <p className="text-white font-mont-regular tracking-wide text-xs italic mt-1.5 mb-5">
                Built with CodeIgniter, PHP and MySQL
              </p>
              <p className="text-white font-mont-regular tracking-wide text-xs leading-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed amet lorem ipsum
                tristique. Quis vulputate id metus scelerisque iaculis mauris magna amet Quis
                vulputate id metus scelerisque iaculis mauris magna amet na amet Quis vulputate id
                metus scelerisque iaculis mauris magna amet
              </p>
            </div>
          ))}
        </SliderSlide>
      </SliderContainer>

      <div className="flex justify-center items-center flex-shrink-0">
        <img src="/img/leftArrow.svg" alt="left arrow" onClick={leftMove} />
        <div className="flex mx-8 ">
          <div className="w-3 h-3 rounded-full bg-white opacity-50 mr-2.5"></div>
          <div className="w-3 h-3 rounded-full bg-white opacity-25"></div>
        </div>
        <img src="/img/rightArrow.svg" alt="right arrow" onClick={rightMove} />
      </div>
    </>
  );
};

WebProjects.propTypes = {};

export default WebProjects;
