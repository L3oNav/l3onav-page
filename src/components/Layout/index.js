import React, { Component } from "react";
import Header from "../Header/index.jsx";
import Particles from "react-particles-js";
import useWindowSize from "../../hooks/useWidth";
import styles from "./style.module.css";

const Layout = (props) => {
  const sizes = useWindowSize();
  const handleWidth = () => {
    let body = sizes.width;
    if (body <= 430) {
      return 22;
    }
    return 50;
  };

  return sizes.width ? (
    <div>
      <div className={styles.background}>
        <Particles
          params={{
            particles: {
              number: {
                value: handleWidth(),
              },
              size: {
                value: 2,
              },
            },
            interactivity: {
              events: {
                onclick: {
                  enable: false,
                },
              },
            },
          }}
        />
      </div>
      <Header />
      {props.children}
    </div>
  ) : (
    <div></div>
  );
};

export default Layout;
