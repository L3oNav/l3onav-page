import React, { Component } from 'react';
import { Contact } from '../Contacts/index.js';
import { ContainerIcons } from './styles.js'
import {FiInstagram, FiLinkedin, FiTwitter, FiGithub, FiMail, FiGitlab} from 'react-icons/fi';

const social = [
        {
            id:1,
            component: FiInstagram,
            url:"https://www.instagram.com/l3onav/?hl=es-la",
        },
        {
            component:FiLinkedin,
            url:"https://www.linkedin.com/in/leonardo-nava-6015b3160",
        },
        {
            id:3,
            component:FiTwitter,
            url:"https://twitter.com/L3oNav",
         },
         {
            id:4,
            component:FiGithub,
            url:"https://github.com/L3oNav",
        },
        {
            id:5,
            component:FiMail,
            url:"mailto:leo785.lol@gmail.com?",
        },
        {
            id:5,
            component:FiGitlab,
            url:"https://gitlab.com/L3oNav/l3onav-portfolio",
        }
]

export function ListConstacts(){
    return (
        <ContainerIcons>
            {social.map(Icon=><Contact {...Icon} />)}
        </ContainerIcons>
    );    
}
