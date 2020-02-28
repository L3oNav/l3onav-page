import React from 'react'
import {TextContainer, ContainerBiography} from './styles'
const BoxBiography = ({title, Biography}) => {
    return (
        <ContainerBiography>
            <TextContainer>
                {title}
            </TextContainer>
            <TextContainer> 
                {Biography}
            </TextContainer>
        </ContainerBiography>
    )
}
export default BoxBiography;
