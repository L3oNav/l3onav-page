import React from 'react';
import imgDefault from '../../Images/office.jpg'
import {Img, Article, ContainerCard} from './styles'
import {Document, Page} from 'react-pdf'
const DEFAULT_IMAGE = imgDefault;

function Portfolio({Image = DEFAULT_IMAGE, URL="https://platzi.com/@L3oNav"}){
    return (
        <Article href={URL} target="_blank">
            <Img src={Image}/>
        </Article>
    )
}
export default Portfolio;