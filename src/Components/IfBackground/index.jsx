import React, { Component } from 'react';
import Particles from 'react-particles-js'
import { ContainerParticles,ParticlesEffect } from './styles';

class IfBackground extends Component {
  render() {
    return (
        <ContainerParticles>
            <ParticlesEffect
                params={{
                    "particles": {
                        "number": {
                            "value": 25
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onclick": {
                                "enable": false
                            }
                        }
                    }
                }}
            />
        </ContainerParticles>
    );
  }
}

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default IfBackground;
