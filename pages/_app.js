import React from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { Footer } from "../components/Footer/Footer";
import styles from "../styles/_app.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <div id={styles.container}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;