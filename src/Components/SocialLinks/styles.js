import styled from 'styled-components';

export const Container = styled.div`
	padding-top: 20px;
	width: 100%;
	height: 200px;
	@media screen and (min-width: 1000px) {
		width: 80%;
		margin: 0 auto;
	}
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 35px 35px 35px;
	grid-template-rows: 35px 35px;
	grid-gap: 35px;
	width: 100%;
	justify-content: space-between;
	@media screen and (min-width: 1000px) {
		justify-content: space-around;
		grid-gap: 67px;
		width: 80%;
		margin: 0 auto;
	}
`;

export const Articles = styled.a`
	width: 35px;
	height: 35px;
`;
