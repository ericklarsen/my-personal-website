import * as React from "react";

interface Props {
  children: React.ReactNode;
}

const MySkillLayout = React.forwardRef<HTMLDivElement, Props>(({ children }, ref) => {
  return (
    <div
      id="myskill"
      ref={ref}
      className={`w-full h-content max-w-screen-2xl m-auto pb-10 relative md:min-h-desktop md:flex md:items-center md:justify-between 2xl:px-28 transition-all`}
    >
      {children}
    </div>
  );
});

export default MySkillLayout;
