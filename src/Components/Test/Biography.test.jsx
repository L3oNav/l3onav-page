import React from 'react';
import ReactDOM from 'react-dom'
import Biography from '../Biography.jsx'

describe('test of test', () => {
    it('sums numbers', () => {
        expect(1+2).toEqual(3);
        expect(2 + 2).toEqual(4);
    })
});

describe('Test Biography component type funtion',()=>{
    it('renders without crashing',()=>{
        const div = document.createElement('div')
        ReactDOM.render(<Biography/>, div)
    })
})