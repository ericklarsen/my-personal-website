import React from "react";
import PropTypes from "prop-types";
import MySkillLayout from "../layouts/MySkillLayout";
import Tag from "../atoms/Tag";

const MySkillScreen = (props) => {
  const data = [
    {
      src: "/img/react.svg",
      alt: "react",
    },
    {
      src: "/img/redux.svg",
      alt: "redux",
    },
    {
      src: "/img/nextjs.svg",
      alt: "nextjs",
    },
    {
      src: "/img/nodejs.svg",
      alt: "nodejs",
    },
    {
      src: "/img/html.svg",
      alt: "html",
    },
    {
      src: "/img/tailwind.svg",
      alt: "tailwind",
    },
    {
      src: "/img/styled.svg",
      alt: "styled",
    },
    {
      src: "/img/sass.svg",
      alt: "sass",
    },
    {
      src: "/img/php.svg",
      alt: "php",
    },
    {
      src: "/img/ci.svg",
      alt: "ci",
    },
    {
      src: "/img/mysql.svg",
      alt: "mysql",
    },
    {
      src: "/img/mongodb.svg",
      alt: "mongodb",
    },
    {
      src: "/img/ai.svg",
      alt: "ai",
    },
    {
      src: "/img/ps.svg",
      alt: "ps",
    },
    {
      src: "/img/figma.svg",
      alt: "figma",
    },
  ];
  return (
    <MySkillLayout>
      <Tag>
        My
        <br />
        Skills.
      </Tag>
      <div className="w-full grid grid-cols-3 gap-12 p-10 pt-16">
        {data.map((item, i) => (
          <div key={i} className="w-full">
            <img src={item.src} alt={item.alt} className="w-full object-contain" />
          </div>
        ))}
      </div>
    </MySkillLayout>
  );
};

MySkillScreen.propTypes = {};

export default MySkillScreen;
