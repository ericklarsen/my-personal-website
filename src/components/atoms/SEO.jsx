import Head from "next/head";
import PropTypes from "prop-types";
import React from "react";

const SEO = (props) => {
  return (
    <Head>
      {props.data.map((v, i) => {
        switch (v.type) {
          case "title":
            return <title key={i}>{v.title}</title>;
          case "meta":
            return <meta key={i} name={v.name} content={v.content} />;
          case "og":
            return <meta key={i} property={v.name} content={v.content} />;
          case "link":
            return <link key={i} rel={v.rel} href={v.href} />;
          case "script":
            return <script key={i} type={v.name} dangerouslySetInnerHTML={{ __html: v.content }} />;
          default:
            return;
        }
      })}
    </Head>
  );
};

SEO.propTypes = {
  data: PropTypes.arrayOf(Object),
};

export default SEO;
