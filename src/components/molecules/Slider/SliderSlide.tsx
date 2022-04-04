import React from "react";

interface Props {
  children: React.ReactNode;
}

const SliderSlide: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-screen max-w-screen-2xl px-10 lg:px-0 lg:mr-10 lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
      <div className={`w-full grid grid-cols-1 gap-5 my-10 lg:grid-cols-2`}>{children}</div>
    </div>
  );
};

export default SliderSlide;
