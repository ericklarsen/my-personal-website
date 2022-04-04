import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import HomeScreen from "../components/organisms/HomeScreen";
import AboutMeScreen from "../components/organisms/AboutMeScreen";
import MySkillScreen from "../components/organisms/MySkillScreen";
import PortfolioScreen from "../components/organisms/PortfolioScreen/PortfolioScreen";
import CommonHead from "../components/atoms/CommonHead";
import SEO from "../components/atoms/SEO";
import { NextPage } from "next";

interface Data {
  type?: string;
  title?: string;
  name?: string;
  content?: string;
  rel?: string;
  href?: string;
}

const index: NextPage = () => {
  const seoData: Data[] = [
    {
      type: "title",
      title: "Erick Larsen | FrontEnd Developer - Javascript - UI/UX",
      content: "",
      rel: "",
      href: "",
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
        "Hey what's up! My name is Erick, currently working as a FrontEnd Developer. My competencies are on React, Redux, Next JS, Javascript and also UI/UX. I am always enthusiastic to learn and take new challenges.",
    },
    { type: "og", name: "og:title", content: `FOOD.ID` },
    {
      type: "og",
      name: "og:description",
      content:
        "Hey what's up! My name is Erick, currently working as a FrontEnd Developer. My competencies are on React, Redux, Next JS, Javascript and also UI/UX. I am always enthusiastic to learn and take new challenges.",
    },
    {
      type: "meta",
      name: "twitter:description",
      content:
        "Hey what's up! My name is Erick, currently working as a FrontEnd Developer. My competencies are on React, Redux, Next JS, Javascript and also UI/UX. I am always enthusiastic to learn and take new challenges.",
    },
    {
      type: "og",
      name: "og:title",
      content: "Erick Larsen | FrontEnd Developer - Javascript - UI/UX",
    },
    {
      type: "og",
      name: "og:description",
      content: `Hey what's up! My name is Erick, currently working as a FrontEnd Developer. My competencies are on React, Redux, Next JS, Javascript and also UI/UX. I am always enthusiastic to learn and take new challenges.`,
    },
    // { type: "og", name: "og:image", content: `${HOST}/static/img/cover-fd.jpeg` },
    // { type: "og", name: "og:url", content: `${HOST}` },
    { type: "og", name: "og:site_name", content: "ericklarsen.com" },
    { type: "og", name: "og:type", content: "website" },
    {
      type: "meta",
      name: "twitter:title",
      content: "Erick Larsen | FrontEnd Developer - Javascript - UI/UX",
    },
    { type: "meta", name: "twitter:card", content: "summary_large_image" },
    { type: "meta", name: "twitter:site", content: "@teletublessss" },
  ];
  return (
    <MainLayout>
      <CommonHead />
      <SEO data={seoData} />

      <HomeScreen />
      <AboutMeScreen />
      <MySkillScreen />
      {/* <PortfolioScreen /> */}
    </MainLayout>
  );
};

export default index;
