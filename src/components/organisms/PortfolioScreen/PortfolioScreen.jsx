import React, { useState } from "react";
import PropTypes from "prop-types";
import PortfolioLayout from "../../layouts/PortfolioLayout";
import TabMenu from "./TabMenu";
import UiUx from "./UiUx";
import WebProjects from "./WebProjects";
import Tag from "../../atoms/Tag";
import { UseElementOnScreen } from "../../../hooks/UseElementOnScreen";

const Container = ({ children, className }) => (
  <div
    className={`w-full py-10 overflow-x-hidden lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl animate-fade ${className}`}
  >
    {children}
  </div>
);

const PortfolioScreen = () => {
  const [currentTab, setCurrentTab] = useState("uiux");
  const [containerRef, isVisible] = UseElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.4,
  });

  return (
    <PortfolioLayout ref={containerRef}>
      <Tag rotate={true}>Portfolio</Tag>

      <Container className={!isVisible ? "min-h-screen" : ""}>
        {isVisible && (
          <>
            <TabMenu setCurrentTab={setCurrentTab} currentTab={currentTab} />
            {currentTab === "uiux" ? <UiUx /> : <WebProjects />}
            {/* <UiUx /> */}
          </>
        )}
      </Container>
    </PortfolioLayout>
  );
};

PortfolioScreen.propTypes = {};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default PortfolioScreen;
