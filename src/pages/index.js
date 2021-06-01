import React from "react";
import PropTypes from "prop-types";
import MainLayout from "../components/layouts/MainLayout";
import HomeScreen from "../components/organisms/HomeScreen";
import AboutMeScreen from "../components/organisms/AboutMeScreen";
import MySkillScreen from "../components/organisms/MySkillScreen";
import PortfolioScreen from "../components/organisms/PortfolioScreen/PortfolioScreen";

const index = (props) => {
  return (
    <MainLayout>
      <HomeScreen />
      <AboutMeScreen />
      <MySkillScreen />
      <PortfolioScreen />
    </MainLayout>
  );
};

index.propTypes = {};

export default index;
