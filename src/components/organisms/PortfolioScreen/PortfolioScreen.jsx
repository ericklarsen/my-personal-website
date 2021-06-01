import React, { useState } from "react";
import PropTypes from "prop-types";
import PortfolioLayout from "../../layouts/PortfolioLayout";
import Tag from "../../atoms/Tag";
import TabMenu from "./TabMenu";
import UiUx from "./UiUx";
import WebProjects from "./WebProjects";

const Container = ({ children }) => {
  return <div className="w-full py-10">{children}</div>;
};

const PortfolioScreen = (props) => {
  const [currentTab, setCurrentTab] = useState("uiux");

  return (
    <PortfolioLayout>
      <Tag>Portfolio</Tag>

      <Container>
        <TabMenu setCurrentTab={setCurrentTab} currentTab={currentTab} />
        {currentTab === "uiux" ? <UiUx /> : <WebProjects />}
      </Container>
    </PortfolioLayout>
  );
};

PortfolioScreen.propTypes = {};

export default PortfolioScreen;
