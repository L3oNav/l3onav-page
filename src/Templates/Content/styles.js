import styled from "styled-components";

const min_width_phone = '319px'
const max_width_phone = '750px'
export const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BoxContainer = styled.div`
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (min-width:751px) and (max-width: 999px){
        width: 500px;
        height: 400px;
    }
    @media screen and (min-width:${min_width_phone}) and (max-width: ${max_width_phone}){
        width: 300px;
        height: 400px;
    }
    @media screen and (min-width: 1000px) and (max-width: 2000px){
        width: 550px;
        height: 400px;
    }
    background-color: #242424;
`
