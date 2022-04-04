import * as React from "react";

interface Props {
  children: React.ReactNode;
}
const FooterLayout = React.forwardRef<HTMLDivElement, Props>(({ children }, ref) => {
  return (
    <div className="w-full relative" ref={ref as React.MutableRefObject<HTMLDivElement>}>
      {children}
    </div>
  );
});

export default FooterLayout;
