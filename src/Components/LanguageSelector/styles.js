import styled from 'styled-components';

export const Text = styled.span`
	font-size: 18px;
	padding-top: 10px;
	padding-left: 5px;
	@media screen and (min-width: 1000px) {
		font-size: 20px;
	}
`;

export const Column = styled.div`
	width: 75px;
	height: 35px;
	padding-left: 10px;
	display: flex;
	cursor: pointer;
	user-select: none;
`;
