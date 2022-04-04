import * as React from "react";

interface Props {
  children: React.ReactNode;
}

const PortfolioLayout = React.forwardRef<HTMLDivElement, Props>(({ children }, ref) => {
  return (
    <div
      id="portfolio"
      ref={ref as React.MutableRefObject<HTMLDivElement>}
      className="w-full max-w-screen-2xl m-auto relative lg:min-h-desktop lg:px-10 lg:flex lg:items-center lg:flex-row-reverse lg:justify-between xl:px-35 "
    >
      {children}
    </div>
  );
});
export default PortfolioLayout;
