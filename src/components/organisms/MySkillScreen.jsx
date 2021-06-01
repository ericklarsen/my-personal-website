import React from "react";
import PropTypes from "prop-types";
import MySkillLayout from "../layouts/MySkillLayout";
import Tag from "../atoms/Tag";

const MySkillScreen = (props) => {
  const data = [
    {
      src: "/img/react.png",
      alt: "react",
    },
    {
      src: "/img/redux.png",
      alt: "redux",
    },
    {
      src: "/img/nextjs.png",
      alt: "nextjs",
    },
    {
      src: "/img/nodejs.png",
      alt: "nodejs",
    },
    {
      src: "/img/html.png",
      alt: "html",
    },
    {
      src: "/img/tailwind.png",
      alt: "tailwind",
    },
    {
      src: "/img/styled.png",
      alt: "styled",
    },
    {
      src: "/img/sass.png",
      alt: "sass",
    },
    {
      src: "/img/php.png",
      alt: "php",
    },
    {
      src: "/img/ci.png",
      alt: "ci",
    },
    {
      src: "/img/mysql.png",
      alt: "mysql",
    },
    {
      src: "/img/mongodb.png",
      alt: "mongodb",
    },
    {
      src: "/img/ai.png",
      alt: "ai",
    },
    {
      src: "/img/ps.png",
      alt: "ps",
    },
    {
      src: "/img/figma.png",
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
