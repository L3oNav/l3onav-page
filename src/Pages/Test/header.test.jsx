import React from 'react';
// import ReactDOM from 'react-dom'
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../Header.jsx';

configure({
   adapter: new Adapter()
});

describe('Test Header component type funtion',()=>{
    test('test with enzyme shallow Header',()=>{
        shallow(<Header/>)
    });
})