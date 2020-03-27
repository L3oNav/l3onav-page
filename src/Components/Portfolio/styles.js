import styled, {keyframes} from "styled-components";

const min_width_phone = '350px'
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

export const Article = styled.a`
    animation: 1.5s ${AnimactionsKeyframes} ease;
    text-decoration: none;
    color: white;
    width: 300px;
    height: auto;
`

export const Img = styled.img`
    @media screen and (min-width: 1000px){
        width: 450px;
        height: 345px;
        border-radius: 8px;
    }
    @media screen and (min-width: ${min_width_phone}){
        width: 300px;
        height: auto;
        border-radius: 8px;
        box-shadow: 2px white;
    }
`

export const ContainerCard = styled.div`
    width:450px;
    margin: 0;
    padding: 0;
`
