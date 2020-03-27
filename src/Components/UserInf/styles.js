import styled, {keyframes} from "styled-components";
const min_width_phone = '350px';
export const AnimactionsKeyframes = keyframes`
    from {
        filter: blur(5px);
        opacity: 0;
    }

    to{
        filter: blur(0);
        opacity: 1;
    }
`

export const Container = styled.div`
    animation: 1.1s ${AnimactionsKeyframes} ease;
    display: flex;
    align-items: center;
    & div {
        margin-left: 30px;
    }
`
export const InfoContainer = styled.div`
    @media screen and (min-width: ${min_width_phone}){
        font-size: 10px;
    }
    @media screen and (min-width: 1000px){
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
    @media screen and (min-width:1000px){
        width: 300px;
        height: 300px;
        border-radius: 20%;
        overflow: hidden;
    }
    @media screen and (min-width:${min_width_phone}){
        width: 250px;
        height: 200px;
        border-radius: 20%;
        overflow: hidden;
    }
`
