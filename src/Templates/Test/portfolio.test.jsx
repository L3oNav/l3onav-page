import React from 'react';
import ReactDOM from 'react-dom'
import Portfolio from '../portfolio.jsx'

describe('Test portfolio component type funtion',()=>{
    it('renders without crashing',()=>{
        const div = document.createElement('div')
        ReactDOM.render(<Portfolio/>, div)
    })
})