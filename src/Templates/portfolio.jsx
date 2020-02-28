/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Projects from '../Components/Projects.jsx'

class Portfolio extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <h2> Projects </h2>
                <Projects />
            </div>
        );
    }
}

export default Portfolio;
