import styled from 'styled-components'
import IfBackground from "../../Components/IfBackground/index.jsx";

const min_width_phone = '319px'
const max_width_phone = '750px'

export const Background = styled(IfBackground)`
    width: 100%;
    height: 100%;
`

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
`

export const ContainerInfo = styled.div`
    z-index: 5;
    display: block;
    @media screen and (min-width: 751px) and (max-width:1024px){
        width: 500px;
        height: 300px;
    }
    @media screen and (min-width: 1025px) and (max-width:2000px){
        width: 650px;
        height: 300px;
    }
`

export const ContainerChildren = styled.div`
    @media screen and (min-width: 751px) and (max-width:1024px){
        display: block;
        position: absolute;
        left: 20%;
        top: 30%;
        width: 550px;
        height: 300px;
    }
    @media screen and (min-width: 1025px) and (max-width:2000px){
        display: block;
        position: absolute;
        left: 35%;
        top: 30%;
        width: 650px;
        height: 300px;
    }
    @media screen and (min-width:${min_width_phone}) and (max-width: ${max_width_phone}){
        display: block;
        position: absolute;
        left: 12%;
        top: 30%;
        width: 300px;
        height: 150px;
    }
`