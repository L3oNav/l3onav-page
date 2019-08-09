import React, { Component } from 'react';
import Biography from '../Components/Biography.jsx'
class Content extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="grid-content">
            <h3 className="text-about">About Me</h3>
            <div className="line-h"></div>
                <div className="container-content">
                    <div className="container">
                        <Biography />
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
