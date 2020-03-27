import styled from 'styled-components'
import IfBackground from "../../Components/IfBackground/index.jsx";
const min_width_phone = '350px';

export const Background = styled(IfBackground)`
    width: 100%;
    height: 100%;
`
export const Container = styled.div`
    @media screen and (min-width:${min_width_phone}) and (max-width: 999px){
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        position: relative;
        align-items: center;
    }
`

export const ContainerInfo = styled.div`
    z-index: 5;
    display: block;
    @media screen and (min-width: 1000px){
        height: 500px;
        width: 750px;
    }
`

export const ContainerChildren = styled.div`
    @media screen and (min-width: 1000px){
        display: block;
        position: absolute;
        left: 35%;
        top: 30%;
        width: 300px;
        height: 300px;
    }
    @media screen and (min-width:${min_width_phone}) and (max-width: 999px){
        display: block;
        position: absolute;
        left: 12%;
        top: 30%;
        width: 300px;
        height: 150px;
    }
`