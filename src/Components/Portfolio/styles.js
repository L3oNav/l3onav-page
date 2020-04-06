import styled, {keyframes} from "styled-components";
import Widths from '../../mediaquery'
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
    @media screen and (min-width: ${Widths.mobileMin}) and (max-width: ${Widths.mobileMax}){
        width: 90%;
    }
    @media screen and (min-width: ${Widths.tabletMin}) and (max-width: ${Widths.tabletMax}){
        width: 100%;
    }
`

export const Img = styled.img`
    width: 100%;
`
