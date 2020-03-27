import styled from "styled-components";
const min_width_phone = '350px'
export const ContainerList = styled.div`
    @media screen and (min-width:${min_width_phone}){
        grid-template-rows: repeat(auto-fill, 350px);
        position: absolute;
        left:50%;
        margin-left:-150px;
    }
    @media screen and (min-width:1000px){
        display: grid;
        grid-template: repeat(auto-fill, 350px) / 450px 450px 450px;
        grid-gap: 2%;
        justify-content: center;
    }
`