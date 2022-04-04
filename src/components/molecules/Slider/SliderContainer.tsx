import * as React from "react";

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onTouchEnd?: (e) => void;
  onTouchStart?: (e) => void;
}

const SliderContainer: React.FC<Props> = (props) => {
  return (
    <div
      className="flex w-max transition-all duration-300 animate-fade min-h-sliderMobile lg:min-h-sliderDesktop "
      {...props}
    ></div>
  );
};

export default SliderContainer;
