import styled from "styled-components";
import Widths from '../../mediaquery'

export const TextContainer = styled.p`
    text-align: justify;
    @media screen and (min-width: ${Widths.tabletMin}) and (max-width: ${Widths.tabletMax}){
        font-size: 20px;
    }
    @media screen and (min-width: ${Widths.mobileMin}) and (max-width: ${Widths.mobileMax}){
        font-size: 17px;
    }
`
export const ContainerBiography = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 95%;
    @media screen and (min-width: ${Widths.tabletMin}) and (max-width: ${Widths.tabletMax}){
        width: 80%;
    }
`