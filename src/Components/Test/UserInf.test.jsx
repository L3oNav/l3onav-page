import React from 'react';
import ReactDOM from 'react-dom'
import UserInf from '../UserInf.jsx'
import { shallow, configure, mount }from 'enzyme';
import UserImg from '../../Images/UserImg.jpeg'
import Adapter from 'enzyme-adapter-react-16';

configure({
    adapter: new Adapter()
});

const User = {
    img: UserImg,
    name:'Leonardo Nava',
    twitter:'https://platzi.com/@L3oNav/',
    username:'@L3oNav',
    job:'Web Developer Reactjs',
}
describe('Test UserInf component type funtion',()=>{
    test('renders without crashing',()=>{
        shallow(<UserInf/>)
    })
    test('test image UserInf component countet props', () => {
        const wrapper = mount(
            <UserInf
            UsrImg={User.img}
            UsrName={User.name}
            UsrJob={User.job}
          />
        )
        expect(wrapper.find('img').prop('src')).toEqual(UserImg)
        expect(wrapper.find('h1').text()).toEqual(User.name)
        expect(wrapper.find('h3').text()).toEqual(User.job)
        expect(wrapper.find('a').prop('href')).toEqual('https://platzi.com/@L3oNav/')
    });
})
