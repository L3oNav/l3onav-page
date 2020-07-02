import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Article = styled(Link)`
	font-size: 15px;
	padding-left: 10px;
	padding-right: 10px;
	@media screen and (min-width: 1000px) {
		font-size: 20px;
	}
`;
