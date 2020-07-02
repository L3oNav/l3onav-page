import styled from 'styled-components';

export const Text = styled.span`
	font-size: 18px;
	padding-top: 9.5px;
	padding-left: 5px;
	@media screen and (min-width: 1000px) {
		font-size: 20px;
	}
`;

export const Column = styled.div`
	width: 75px;
	height: 35px;
	display: flex;
	cursor: pointer;
	user-select: none;
`;
