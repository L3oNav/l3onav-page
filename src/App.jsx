import React, { Component } from 'react';
import Header from './Templates/Header/index.jsx'
import Content from './Templates/Content/index.jsx'

const App = () => {
    return (
      <React.Fragment className="grid">
          <Header/>
          <Content/>
      </React.Fragment>
    );
}

export default App;
