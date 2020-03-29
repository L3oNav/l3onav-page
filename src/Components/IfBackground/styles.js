import styled from "styled-components";
import Particles from "react-particles-js";

const min_width_phone = '319px'
const max_width_phone = '750px'

export const ContainerParticles = styled.div`
    display: block;
    background-color: #242424;
    width: 100%;
    height:100vh;
`
export const ParticlesEffect = styled(Particles)`
    @media screen and (min-width:1025px) and (max-width: 2000px){
        width: 100%;
        height: 100vh;
    }
    @media screen and (min-width: 751px) and (max-width:1024px){
        width: 100%;
        height: 100vh;
    }
    @media screen and (min-width:${min_width_phone}) and (max-width: ${max_width_phone}){
        width: 100%;
        height: 100vh;
    }
`