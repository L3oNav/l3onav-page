import React, { Component } from "react";
import Biography from "../Components/Biography.jsx";
import Portfolio from "../Components/Projects.jsx";
class Content extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="grid-content">
        <h3 className="text-about">About Me</h3>
        <div className="line-h" />
        <div className="container-content">
          <div className="container">
            <Biography />
          </div>
        </div>
        <div className="portfolio-container">
          <Portfolio />
        </div>
      </div>
    );
  }
}

export default Content;
