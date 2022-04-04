import Head from "next/head";
import React from "react";

const CommonHead: React.FC = (props) => {
  return (
    <Head {...props}>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="theme-color" content="#353535" />
      <link rel="icon" href="/favicon.svg" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/apple-touch-icon-180.png" />
      {props.children}
    </Head>
  );
};
export default CommonHead;
