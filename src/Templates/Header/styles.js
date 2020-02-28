import styled from 'styled-components'


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
    height: 300px;
    width: 700px;
    display: block;

`
export const ContainerChildren = styled.div`
    display: block;
    position: absolute;
    left: 35%;
    top: 30%;
    width: 300px;
    height: 300px;
`