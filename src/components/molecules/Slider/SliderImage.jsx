import React, { useState } from "react";
import PropTypes from "prop-types";
import Loader from "../../atoms/Loader";

const SliderImage = ({ src }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {isVisible && <Loader />}
      <img
        src={src}
        alt="images"
        onLoad={() => setIsVisible(false)}
        className="w-full h-full object-cover rounded-2xl"
      />
    </>
  );
};

SliderImage.propTypes = {
  src: PropTypes.string,
};

export default SliderImage;
