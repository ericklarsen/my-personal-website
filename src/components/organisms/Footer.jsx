import React from "react";
// import PropTypes from "prop-types";
import FooterLayout from "../layouts/FooterLayout";

const Footer = () => {
  return (
    <FooterLayout>
      <div className="relative overflow-y-hidden bg-maroon w-full p-9 flex flex-col items-center justify-center xl:flex-row xl:justify-start xl:px-35">
        <h1 className="text-white text-4xl uppercase font-mont-black italic tracking-widest xl:text-6xl">
          Thank you
        </h1>
        <div className="flex flex-row mt-3.5 xl:mt-0 xl:ml-7">
          <img src="/img/github_icon.svg" alt="github" />
          <img className="ml-5" src="/img/linkedin_icon.svg" alt="linkedin" />
        </div>
        <img
          src="/img/overlayFooter.svg"
          alt="overlay"
          className="absolute top-0 right-0 h-44 hidden xl:block"
        />
      </div>
    </FooterLayout>
  );
};

Footer.propTypes = {};

export default Footer;
