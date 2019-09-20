import React from "react";
import { connect } from "react-redux";
import { getLanguage } from "../Redux/actions/index";
import BoxBiography from './BoxBiography.jsx';
class Biography extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (!this.props.language) {
      this.props.getLanguage()
    }
  }
  render() {
    const { language } = this.props;
    return (
      <div>
        <div className="biography-display">
          {language? 
            <BoxBiography
              title={language.title}
              Biography={language.biography}
            />: null
          }
        </div>
        <div className="contact-container">
          <a
            className="icon-instagram"
            href="https://www.instagram.com/l3onav/?hl=es-la"
            target="_blank"
          ></a>
          <a
            className="icon-linkedin"
            href="https://www.linkedin.com/in/leonardo-nava-6015b3160"
            target="_blank"
          ></a>
          <a
            className="icon-twitter"
            href="https://twitter.com/L3oNav"
            target="_blank"
          ></a>
        </div>
        <div className="contact-container">
          <a
            className="icon-github"
            href="https://github.com/L3oNav"
            target="_blank"
          ></a>
          <a
            className="icon-mail"
            href="mailto:leo785.lol@gmail.com?"
            target="_blank"
          ></a>
          <a
            className="icon-cloud"
            href="https://gitlab.com/L3oNav/l3onav-portfolio"
            target="_blank"
          ></a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.language
  };
};

const mapDispatchToProps = {
  getLanguage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Biography);
