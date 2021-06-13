import React from "react";
// import PropTypes from "prop-types";
import MainLayout from "../components/layouts/MainLayout";
import HomeScreen from "../components/organisms/HomeScreen";
import AboutMeScreen from "../components/organisms/AboutMeScreen";
import MySkillScreen from "../components/organisms/MySkillScreen";
import PortfolioScreen from "../components/organisms/PortfolioScreen/PortfolioScreen";
import CommonHead from "../components/atoms/CommonHead";
import SEO from "../components/atoms/SEO";

const index = () => {
  const seoData = [
    {
      type: "title",
      title: "Hi. I'm Erick! | FrontEnd Developer",
    },
    {
      type: "meta",
      name: "keywords",
      content: "website, frontend, personal",
    },
    {
      type: "meta",
      name: "description",
      content:
        "Hey what's up! My name is Erick and I’m currently working as a FrontEnd Developer. My competencies are on React, Redux, Next JS, Javascript and also UI/UX. I am always enthusiastic to learn and take new challenge.",
    },
    { type: "og", name: "og:title", content: `FOOD.ID` },
    {
      type: "og",
      name: "og:description",
      content:
        "Hey what's up! My name is Erick and I’m currently working as a FrontEnd Developer. My competencies are on React, Redux, Next JS, Javascript and also UI/UX. I am always enthusiastic to learn and take new challenge.",
    },
    {
      type: "meta",
      name: "twitter:description",
      content:
        "Hey what's up! My name is Erick and I’m currently working as a FrontEnd Developer. My competencies are on React, Redux, Next JS, Javascript and also UI/UX. I am always enthusiastic to learn and take new challenge.",
    },
    {
      type: "og",
      name: "og:title",
      content: "Hi. I'm Erick! Welcome to My Personal Website.",
    },
    {
      type: "og",
      name: "og:description",
      content: `Hey what's up! My name is Erick and I’m currently working as a FrontEnd Developer. My competencies are on React, Redux, Next JS, Javascript and also UI/UX. I am always enthusiastic to learn and take new challenge.`,
    },
    // { type: "og", name: "og:image", content: `${HOST}/static/img/cover-fd.jpeg` },
    // { type: "og", name: "og:url", content: `${HOST}` },
    { type: "og", name: "og:site_name", content: "FOOD.ID" },
    { type: "og", name: "og:type", content: "website" },
    {
      type: "meta",
      name: "twitter:title",
      content: "Hi. I'm Erick! Welcome to My Personal Website.",
    },
    { type: "meta", name: "twitter:card", content: "summary_large_image" },
    { type: "meta", name: "twitter:site", content: "@kulinaID" },
  ];
  return (
    <MainLayout>
      <CommonHead />
      <SEO data={seoData} />

      <HomeScreen />
      <AboutMeScreen />
      <MySkillScreen />
      <PortfolioScreen />
    </MainLayout>
  );
};

index.propTypes = {};

export default index;
