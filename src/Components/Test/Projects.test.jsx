import React from 'react';
import ReactDOM from 'react-dom'
import Projects from '../Projects.jsx'

describe('Test Projects component type funtion',()=>{
    it('renders without crashing',()=>{
        const div = document.createElement('div')
        ReactDOM.render(<Projects/>, div)
    })
})