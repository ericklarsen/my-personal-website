import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import UseIsMobile from "../../../hooks/UseIsMobile";
import { generateSlider } from "../../../helpers/swipe_helper";
import DetailUI from "../../molecules/DetailUI";
import { allData } from "../../../styles/_variables";
import Slider from "../../molecules/Slider/Slider";

const UiUx = () => {
  const data = allData;
  const [totalSlides, setTotalSlides] = useState(1);
  const [show, setShow] = useState(false);
  const [contentId, setContentId] = useState(0);
  const isMobile = UseIsMobile();

  const onChangeShow = (id) => {
    setShow(!show);
    setContentId(id);
  };

  useEffect(() => {
    if (isMobile) {
      setTotalSlides(Math.ceil(data.length / 2));
    } else {
      setTotalSlides(Math.ceil(data.length / 4));
    }
  }, [isMobile]);

  return (
    <>
      {show && <DetailUI show={show} onShow={onChangeShow} contentId={contentId} />}
      <Slider data={allData}>{generateSlider(totalSlides, data, isMobile, onChangeShow)}</Slider>
    </>
  );
};

UiUx.propTypes = {};

export default UiUx;
