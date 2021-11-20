import React from "react";
// import PropTypes from "prop-types";
import Image from "next/image";
import MySkillLayout from "../layouts/MySkillLayout";
import Tag from "../atoms/Tag";
import { UseElementOnScreen } from "../../hooks/UseElementOnScreen";

const MySkillScreen = () => {
  const [containerRef, isVisible] = UseElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });
  const data = [
    {
      src: "/img/react.svg",
      alt: "react",
    },
    {
      src: "/img/typescript.svg",
      alt: "typescript",
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
    <MySkillLayout ref={containerRef}>
      <Tag>
        My
        <br />
        Skills.
      </Tag>
      <div
        className={`w-full grid grid-cols-3 gap-12 p-10 pt-16 sm:gap-36 md:mr-0 md:max-w-xl md:gap-24 lg:mr-12 lg:max-w-2xl xl:mr-24 xl:max-w-3xl xl:grid-cols-4 xl:gap-20 2xl:mr-0 transition-all duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {data.map((item, i) => (
          <div key={i} className="w-full">
            <Image
              src={item.src}
              alt={item.alt}
              width={150}
              height={150}
              placeholder="empty"
              // blurDataURL={item.src}
            />
          </div>
        ))}
      </div>
    </MySkillLayout>
  );
};

MySkillScreen.propTypes = {};

export default MySkillScreen;
