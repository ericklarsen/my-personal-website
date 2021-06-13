import Head from "next/head";
import PropTypes from "prop-types";
import React from "react";

function CommonHead(props) {
  return (
    <Head {...props}>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="theme-color" content="#434343" />
      <link rel="icon" href="/favicon.ico" />
      {/* <link rel="manifest" href="/manifest.json" /> */}
      {/* <link rel="apple-touch-icon" href="/apple-touch-icon-180x180.png" /> */}
      {props.children}
    </Head>
  );
}

CommonHead.propTypes = {
  children: PropTypes.any,
};

export default CommonHead;
