import styled from "styled-components";
import Widths from '../../mediaquery'
export const ContainerIcons = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
    margin-bottom: 50px;
    @media screen and (min-width: ${Widths.desktopMin}){
        justify-content: space-evenly;
    }
`

