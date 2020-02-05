import React, { Component } from 'react';
import Particles from 'react-particles-js'
// import { Container } from './styles';

class IfBackground extends Component {
  render() {
    return (   
        <Particles  className='font-pacticles' 
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
    );
  }
}

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default IfBackground;
