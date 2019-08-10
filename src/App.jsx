import React, { Component } from 'react';
import Header from './Templates/Header.jsx'
import Content from './Templates/content.jsx'
class App extends Component {
  render() {
    return (
      <div className="grid">
          <Header/>
          <Content/>
      </div>
    );
  }
}

export default App; 