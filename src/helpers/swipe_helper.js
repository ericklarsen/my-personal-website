import React from "react";
import SliderSlide from "../components/molecules/Slider/SliderSlide";
import SliderImage from "../components/molecules/Slider/SliderImage";

export const generateSlider = (totalSlides, data, isMobile, onShow) => {
  let position = 0;
  let contentPerSlide = 4;

  if (isMobile) {
    contentPerSlide = 2;
  }

  return [...Array(totalSlides).keys()].map((item, i) => {
    let mainIdx = i + 1;
    return (
      <SliderSlide key={i} column={2}>
        {data.map((item, j) => {
          let subIdx = j + 1;

          if (mainIdx === 1 && subIdx <= mainIdx * contentPerSlide) {
            position = subIdx;
            return (
              <div
                key={j}
                className="relative w-full h-56 md:h-80 rounded-2xl cursor-pointer overflow-hidden"
                onClick={() => onShow(item.id)}
              >
                <div className="hidden absolute top-0 left-0 w-full h-full bg-dark-500 opacity-50 rounded-2xl z-10 hover:bg-transparent transition-all xl:flex"></div>
                <SliderImage src={item.mainImage} />
              </div>
            );
          } else if (mainIdx !== 1 && subIdx > position && subIdx <= mainIdx * contentPerSlide) {
            position = subIdx;
            return (
              <div
                key={j}
                className="relative w-full h-56 md:h-80 rounded-2xl cursor-pointer overflow-hidden"
                onClick={() => onShow(item.id)}
              >
                <div className="hidden absolute top-0 left-0 w-full h-full bg-dark-500 opacity-50 rounded-2xl z-10 hover:bg-transparent transition-all xl:flex"></div>
                <SliderImage src={item.mainImage} />
              </div>
            );
          }
        })}
      </SliderSlide>
    );
  });
};
