import React from 'react';
import SocialLinks from '../SocialLinks/index';
import { Container, TextContainer } from './styles';

const Biography = ({title, biography}) => {
		return (
			<Container>
				<TextContainer>
					<div>{title}</div>
					<div>{biography}</div>
				</TextContainer>
				<SocialLinks />
			</Container>
	);
}

export default Biography;
