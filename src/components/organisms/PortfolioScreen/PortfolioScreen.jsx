import React from "react";
import PropTypes from "prop-types";
import PortfolioLayout from "../../layouts/PortfolioLayout";
import Tag from "../../atoms/Tag";
import TabMenu from "./TabMenu";
import UiUx from "./UiUx";

const Container = ({ children }) => {
  return <div className="w-full py-10">{children}</div>;
};

const PortfolioScreen = (props) => {
  return (
    <PortfolioLayout>
      <Tag>Portfolio</Tag>

      <Container>
        <TabMenu />
        <UiUx />
        
      </Container>
    </PortfolioLayout>
  );
};

PortfolioScreen.propTypes = {};

export default PortfolioScreen;
