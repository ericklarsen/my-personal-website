import * as React from "react";

interface Props {
  children: React.ReactNode;
}
const HomeScreenLayout = React.forwardRef<HTMLDivElement, Props>(({ children }, ref) => {
  return (
    <div
      className="w-full h-screen max-h-desktop max-w-screen-2xl m-auto p-10 relative md:h-desktop md:pt-12 md:px-0"
      ref={ref}
    >
      {children}
    </div>
  );
});

export default HomeScreenLayout;
