/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import UserInf from '../Components/UserInf.jsx'
import FontImg from '../Images/fondoUserInfo.jpg'
import UserImg from '../Images/UserImg.jpeg'

const User = {
    img: UserImg,
    name:'Leonardo Nava',
    twitter:'https://platzi.com/@L3oNav/',
    username:'@L3oNav',
    job:'Web Developer Reactjs',
}

const Header = () => {
  return (
    <div className="grid-info" >
      <div className="overflow">
        <img src={FontImg} className="font-img" />
      </div>
      <div className="header-inf">
        <UserInf
          UsrImg={User.img}
          UsrName={User.name}
          UsrJob={User.job}
        />
      </div>
    </div>
  );
}

export default Header;