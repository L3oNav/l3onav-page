import React, { Component } from 'react';
import Header from './Components/Header/index.jsx';
import { Background } from './GlobalStyles';
import Particles from 'react-particles-js';

class Layout extends Component {

  handleWidth = () => { 
    let body = document.body.clientWidth
    if (body <= 430) {
      return 22
    }
    return 50
  }

  render() {
    return (
      <div>
        <Background>
          <Particles
            params={{
              'particles': {
                'number': {
                  'value': this.handleWidth()
                },
                'size': {
                  'value': 2
                }
              },
              'interactivity': {
                'events': {
                  'onclick': {
                    'enable': false
                  }
                }
              }
            }}
          />
        </Background>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
