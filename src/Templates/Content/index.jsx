import React, { Component } from "react";
import Biography from "../../Components/Biography/index.jsx";
import Portfolio from "../../Components/Projects.jsx";
import {ContentContainer, BoxContainer} from './styles'

class Content extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <ContentContainer>
        <BoxContainer>
          <Biography/>
        </BoxContainer>
      </ContentContainer>
    );
  }
}
export default Content;