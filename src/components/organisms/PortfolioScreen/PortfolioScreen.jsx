import React, { useState } from "react";
import PropTypes from "prop-types";
import PortfolioLayout from "../../layouts/PortfolioLayout";
import TabMenu from "./TabMenu";
import UiUx from "./UiUx";
import WebProjects from "./WebProjects";
import Tag from "../../atoms/Tag";

const Container = ({ children }) => {
  return <div className="w-full py-10 overflow-x-hidden lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">{children}</div>;
};

const PortfolioScreen = (props) => {
  const [currentTab, setCurrentTab] = useState("uiux");

  return (
    <PortfolioLayout>
      <Tag rotate={true}>
        Portfolio
      </Tag>

      <Container>
        <TabMenu setCurrentTab={setCurrentTab} currentTab={currentTab} />
        {currentTab === "uiux" ? <UiUx /> : <WebProjects />}
      </Container>
    </PortfolioLayout>
  );
};

PortfolioScreen.propTypes = {};

export default PortfolioScreen;
