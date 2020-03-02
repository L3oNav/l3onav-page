import styled, {keyframes} from "styled-components";


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
    width: 550px;
    height: 300px;
`


export const Img = styled.img`
    width: 450px;
    height: 350px;
    border-radius: 8px;
`
export const ContainerCard = styled.div`
    width:500px;
    margin: 0;
    padding: 0;
`
