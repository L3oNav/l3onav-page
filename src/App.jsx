import React, { Component } from 'react';
import Header from './Templates/Header.jsx'
import Content from './Templates/content.jsx'

class App extends Component {
  render() {
    return (
      <React.Fragment className="grid">
          <Header/>
          <Content/>
      </React.Fragment>
    );
  }
}

export default App; 