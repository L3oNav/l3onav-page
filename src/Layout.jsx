import React, { Component } from 'react';
import Header from './Components/Header/index.jsx';
import { Background } from './GlobalStyles';
import Particles from 'react-particles-js';

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Background>
          <Particles
            height='auto'
            params={{
              'particles': {
                'number': {
                  'value': 50,
                  'max': 70
                },
                'size': {
                  'value': 3
                }
              },
              'interactivity': {
                'events': {
                  'onclick': {
                    'enable': true,
                    'mode': 'push'
                  }
                }
              }
            }}
          />
        </Background>
        <Header />
        <div>{this.props.children}</div>
      </React.Fragment>
    );
  }
}

export default Layout;
