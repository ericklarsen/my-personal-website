import React from "react";
// import PropTypes from "prop-types";

const SliderContainer = (props) => {
  return (
    <div
      className="flex w-max transition-all duration-300 animate-fade min-h-sliderMobile lg:min-h-sliderDesktop "
      {...props}
    ></div>
  );
};

SliderContainer.propTypes = {};

export default SliderContainer;
