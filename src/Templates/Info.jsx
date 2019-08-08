/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import UserInf from '../Components/UserInf.jsx'
import UserImg from '../Images/UserImg.jpeg'
import FontImg from '../Images/fondoUserInfo.jpg'
const User = {
    img: UserImg,
    name:'Leonardo Nava',
    twitter:'https://platzi.com/@L3oNav/',
    username:'@L3oNav',
    job:'Web Developer Reactjs',
    biography:'Soy aquella persona rara que quiere ser físico, con un profundo amor a leer, a la tecnología, matemáticas, y a las ciencias.'
}

const Info = () => {
    return (
      <div className="grid-info">
        <div className="overflow">
          <img src={FontImg} className="font-img" />
        </div>
        <div className="header-inf">
          <UserInf
            UsrImg={User.img}
            UsrName={User.name}
            UserJob={User.job}
          />
        </div>
      </div>
    );
}

export default Info;
