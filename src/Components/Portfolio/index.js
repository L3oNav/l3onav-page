import React from 'react';
import imgDefault from '../../Images/Diplomas/diploma-react-1.jpg'
import {Img, Article} from './styles';
const DEFAULT_IMAGE = imgDefault;

function Portfolio({Image = DEFAULT_IMAGE, URL="https://platzi.com/@L3oNav"}){
    return (
        <Article href={URL} target="_blank">
            <Img src={Image}/>
        </Article>
    )
}
export default Portfolio;