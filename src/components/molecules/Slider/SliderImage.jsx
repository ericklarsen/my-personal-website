import React, { useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import Loader from "../../atoms/Loader";

const SliderImage = ({ src }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {isVisible && <Loader />}
      <div className="w-full h-full object-cover rounded-2xl">
        <Image
          src={src}
          alt="images"
          onLoad={() => setIsVisible(false)}
          placeholder="blur"
          objectFit="cover"
          blurDataURL={src}
          layout="fill"
        />
      </div>
    </>
  );
};

SliderImage.propTypes = {
  src: PropTypes.string,
};

export default SliderImage;
