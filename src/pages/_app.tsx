/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import "../styles/reset.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
