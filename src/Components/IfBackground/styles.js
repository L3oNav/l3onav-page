import styled from "styled-components";
import Particles from "react-particles-js";

const min_width_phone = '350px';

export const ContainerParticles = styled.div`
    display: block;
    background-color: #242424;
    width: 100%;
    height:100vh;
`
export const ParticlesEffect = styled(Particles)`
    @media screen and (min-width:${min_width_phone}) and (max-width: 999px){
        width: 100%;
        height: 100vh;
    }
`