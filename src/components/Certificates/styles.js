import styled from 'styled-components';

export const Img = styled.img`
    width: 300px;
    height: 220px;
    @media screen and (max-width: 650px) {
        width: 250px;
        height: 170px;
    }
    @media screen and (min-width: 651px) {
        width: 300px;
        height: 220px;
    }
    @media screen and (min-width: 1300px) {
        width: 400px;
        height: 320px;
    }
`

export const Article = styled.a`
    width: 300px;
    height: 220px;
    @media screen and (max-width: 650px) {
        width: 250px;
        height: 170px;
    }
    @media screen and (min-width: 651px) {
        width: 300px;
        height: 220px;
    }
    @media screen and (min-width: 1300px) {
        width: 400px;
        height: 320px;
    }
`
export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 300px);
    grid-template-columns: repeat(auto, 1fr);
    grid-gap: 50px;
    justify-content: center;
    @media screen and (max-width: 650px) {
        grid-template-columns: repeat(1, 270px);
    }
    @media screen and (min-width: 651px) {
        grid-template-columns: repeat(2, 300px);
    }
    @media screen and (min-width: 1300px) {
        grid-template-columns: repeat(3, 400px);
    }
`;
