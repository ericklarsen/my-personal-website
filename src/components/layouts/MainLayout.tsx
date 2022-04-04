import * as React from "react";
import Footer from "../organisms/Footer";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full bg-gradient-to-b from-dark-200  to-dark-500 overflow-x-hidden">
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
