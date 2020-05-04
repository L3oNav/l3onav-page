import React from 'react';
import imgDefault from '../../Images/Diplomas/diploma-react-1.jpg'
// import './styles.scss';
const DEFAULT_IMAGE = imgDefault;

function Portfolio({Image = DEFAULT_IMAGE, URL="https://platzi.com/@L3oNav"}){
    return (
        <a className="portfolio-article" href={URL} target="_blank">
            <img className="portfolio-img" src={Image}/>
        </a>
    )
}
export default Portfolio;