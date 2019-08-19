import React from 'react';

const Biography = (props) => {
    return (
        <div>
            <div className="biography-display">
                <div className="biography">
                    <p className="biography-text">
                        Hello world!
                    </p>
                    <p className="biography-text">
                        I am Leonardo Nava someone with the idea of ​​studying physics, I like to learn new things,
                        technological culture, read from scientific dissemination, finance to fantasy.
                        I am a web developer jr and I use Reactjs.
                    </p>
                </div>
            </div>
            <div className="contact-container">
                <a className="icon-instagram" href="https://www.instagram.com/l3onav.jsx/?hl=es-la" target="_blank"></a>
                <a className="icon-linkedin" href="https://www.linkedin.com/in/leonardo-nava-6015b3160" target="_blank"></a>
                <a className="icon-twitter" href="https://twitter.com/L3oNav" target="_blank"></a>
                <a className="icon-github" href="https://github.com/L3oNav" target="_blank"></a>
                <a className="icon-mail" href="mailto:leo785.lol@gmail.com?" target="_blank"></a>
                <a className="icon-cloud" href="https://gitlab.com/L3oNav/l3onav-portfolio" target="_blank"></a>
            </div>
        </div>
    );
}


export default Biography;
