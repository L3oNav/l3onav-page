import styled, {keyframes} from "styled-components";

import Widths from '../../mediaquery.js'

export const AnimactionsKeyframes = keyframes`
    0% {
        filter: blur(5px);
        opacity: 0;
    }
    100%{
        filter: blur(0);
        opacity: 1;
    }
`

export const Container = styled.div`
    position: absolute;
    top: 26%;
    left: 6%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media screen and (min-width: ${Widths.desktopMin}){
        top: 26%;
        left: 30%;
    }
`
export const InfoContainer = styled.div`
    margin-left: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`

export const Img = styled.img`
    height: auto;
    border-radius: 50%;
    width: 35%;
    @media screen and (min-width: ${Widths.tabletMin}) and (max-width: ${Widths.tabletMax}){
        width: 35%;
    }
    @media screen and (min-width: ${Widths.mobileMin}) and (max-width: ${Widths.mobileMax}) {
        width: 56.3%;
        height: auto;
    }
`
