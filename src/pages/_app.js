/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import "../styles/globals.scss";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
