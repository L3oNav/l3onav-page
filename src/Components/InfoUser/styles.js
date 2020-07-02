import styled from 'styled-components';

export const Img = styled.img`
	width: 180px;
	height: 180px;
	border-radius: 50%;
	@media screen and (min-width: 1000px) {
		width: 250px;
		height: 250px;
	}
`;

export const TextInfo = styled.div`
	text-align: center;
	margin: 0 auto;
	@media screen and (min-width: 1000px) {
		font-size: 25px;
		div {
			font-size: 30px;
		}
	}
`;

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	margin: auto;
	margin-top: -100px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
