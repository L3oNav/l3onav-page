import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    html{
        font-family: 'Montserrat', sans-serif;
        color: #fff;
    }
    body{
        padding: 0;
        margin: 0;
        background-color: #242424;
    }
    #root{
        width:100%;
        height: 100%;
    }
    a{
        color: #fff;
        text-decoration: none;
    }
    #tsparticles {
        width: 100%;
        height: 100%;
    }
`
export const Background = styled.div`
    display: block;
    background-color: #242424;
    width:100%;
    height:100%;
    position: absolute;
    z-index: -100;
`

