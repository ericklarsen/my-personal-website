import * as React from "react";

interface Props {
  children: React.ReactNode;
}

const AboutMeLayout = React.forwardRef<HTMLDivElement, Props>(({ children }, ref) => {
  return (
    <div
      ref={ref as React.MutableRefObject<HTMLDivElement>}
      id="about"
      className="w-full h-content max-w-screen-2xl m-auto pb-10 relative md:px-10 md:py-16 lg:px-16 xl:px-35 xl:py-32 2xl:px-28"
    >
      {children}
    </div>
  );
});

export default AboutMeLayout;
