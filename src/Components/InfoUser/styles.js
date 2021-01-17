import styled from 'styled-components';

export const Img = styled.img`
	width: 260px;
	height: 260px;
	border-radius: 50%;
	object-fit: cover;
	object-position: 0 30%;
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
	@media screen and (min-width: 700px) {
		font-size: 20px;
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
