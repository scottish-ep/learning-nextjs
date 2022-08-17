import "../styles/globals.css";
import styles from "../styles/App.module.scss";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import Script from "next/script";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
