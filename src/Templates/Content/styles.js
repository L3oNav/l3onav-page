import styled from "styled-components";

const min_width_phone = '350px'

export const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BoxContainer = styled.div`
    @media screen and (min-width:${min_width_phone}) and (max-width: 999px){
        width: 300px;
        height: 400px;
    }
    background-color: #242424;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PortfolioContainer = styled.div`
    display: grid;
    grid-column: 550px 550px 550px;
`