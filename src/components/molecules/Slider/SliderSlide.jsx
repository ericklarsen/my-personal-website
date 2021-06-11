import React from "react";
import PropTypes from "prop-types";

const SliderSlide = ({ children }) => {
  return (
    <div className="w-screen max-w-screen-2xl px-10 lg:px-0 lg:mr-10 lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
      <div className={`w-full grid grid-cols-1 gap-5 my-10 lg:grid-cols-2`}>{children}</div>
    </div>
  );
};

SliderSlide.propTypes = {};

export default SliderSlide;
