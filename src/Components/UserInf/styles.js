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

export const Container = styled.div`
    animation: 1.1s ${AnimactionsKeyframes} ease;
    display: flex;
    align-items: center;
    & div {
        margin-left: 50px;
    }
`
export const InfoContainer = styled.div`
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
    width: 300px;
    height: 300px;
    border-radius: 20%;
    overflow: hidden; 
`
