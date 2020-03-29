import styled from "styled-components";
const min_width_phone = '319px'
const max_width_phone = '750px'
export const ContainerList = styled.div`
    @media screen and (min-width:${min_width_phone}) and (max-width: ${max_width_phone}){
        grid-template-rows: repeat(auto-fill, 350px);
        position: absolute;
        left:50%;
        margin-left:-150px;
    }
    @media screen and (min-width: 751px) and (max-width:1024px){
        grid-template-rows: repeat(auto-fill, 350px);
        position: absolute;
        left:50%;
        margin-left:-225px;
    }
    @media screen and (min-width:1025px) and (max-width: 2000px){
        display: grid;
        grid-template-columns: repeat(3, 450px);
        grid-gap: 5%;
        justify-content: center;
    }
`