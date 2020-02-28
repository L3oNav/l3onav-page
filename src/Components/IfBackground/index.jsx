import React, { Component } from 'react';
import Particles from 'react-particles-js'
import { ContainerParticles } from './styles';

class IfBackground extends Component {
  render() {
    return (
        <ContainerParticles>
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 50,
                            "max":70
                            
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onclick": {
                                "enable": true,
                                "mode": "push"
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
