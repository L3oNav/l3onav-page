import styled from "styled-components";
import Widths from '../../mediaquery'

export const ContainerList = styled.div`
    display: none;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: ${Widths.desktopMin}){
        display: grid;
        grid-template-columns: repeat(3, 350px);
        grid-template-columns: repeat(auto, 1fr);
        grid-template-areas: "cert cert cert";
        grid-gap: 50px;
        justify-content: center;
    }
    @media screen and (min-width: ${Widths.mobileMin}) and (max-width: ${Widths.mobileMax}){
        display: flex;
        flex-direction: column;
    }
    @media screen and (min-width: ${Widths.tabletMin}) and (max-width: ${Widths.tabletMax}){
        display: grid;
        grid-template-columns: repeat(2, 300px);
        grid-column-gap: 100px;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
`
export const List = styled.div`
    width: 75%;
`
