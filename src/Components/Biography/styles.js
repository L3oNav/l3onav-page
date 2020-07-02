import styled from 'styled-components';

export const Container = styled.div`
	width: 80%;
	margin: 0 auto;
	@media screen and (min-width: 1000px) {
		width: 50%;
	}
`;

export const TextContainer = styled.div`
	text-align: justify;
	@media screen and (min-width: 1040px) {
		font-size: 25px;
	}
`;
