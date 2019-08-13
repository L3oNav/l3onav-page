import React from 'react';
import ReactDOM from 'react-dom'
import Content from '../content.jsx'

describe('Test content component type funtion',()=>{
    it('renders without crashing',()=>{
        const div = document.createElement('div')
        ReactDOM.render(<Content/>, div)
    })
})