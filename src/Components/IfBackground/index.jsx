import React, { Component } from 'react';
import { ContainerParticles,ParticlesEffect } from './styles';

class IfBackground extends Component {
  render() {
    return (
        <ContainerParticles>
              <ParticlesEffect />
        </ContainerParticles>
    );
  }
}

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default IfBackground;
