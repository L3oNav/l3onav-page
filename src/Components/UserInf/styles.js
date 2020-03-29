import styled, {keyframes} from "styled-components";

const min_width_phone = '350px'
const max_width_phone = '750px'

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
    animation: 2s ${AnimactionsKeyframes} linear;
    border-radius: 60px 10px 10px 60px;
    display: flex;
    align-items: center;
    & div {
        margin-left: 30px;
    }
`
export const InfoContainer = styled.div`
    border-radius: 20%;
    @media screen and (min-width: 751px) and (max-width:1024px){
        font-size: 20px;
    }
    @media screen and (min-width: ${min_width_phone}) and (max-width: ${max_width_phone}){
        font-size: 10px;
    }
    @media screen and (min-width: 1025px) and (max-width: 2000px){
        font-size: 15px;
    }
    color: white;
    &:hover{
        transform: scale(1.1)
    }
    & a{
        text-decoration: none;
        color: white;
    }
`

export const Img = styled.img`
    box-shadow: 0 5px 12px 2px #757575;
    @media screen and (min-width:1025px){
        width: 300px;
        height: 300px;
        border-radius: 20%;
        overflow: hidden;
    }
    @media screen and (min-width: 751px) and (max-width:1024px){
        /* width: 300px; */
        height: 300px;
        border-radius: 20%;
        overflow: none;
    }
    @media screen and (min-width:${min_width_phone}) and (max-width:${max_width_phone}){
        width: 250px;
        height: 175px;
        border-radius: 20%;
        overflow: hidden;
    }
`
