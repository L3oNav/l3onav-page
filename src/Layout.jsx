import React, { Component } from "react";
import Header from "./Components/Header/index.jsx";
import { Background } from "./GlobalStyles";
import Particles from "react-particles-js";

const Layout = (props) => {
  const handleWidth = () => {
    let body = document.body.clientWidth;
    if (body <= 430) {
      return 22;
    }
    return 50;
  };

  return (
    <div>
      <Background>
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
      </Background>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
