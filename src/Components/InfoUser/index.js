import React from "react";
import MyImage from "../../Images/Userimg.jpg";
import { Img, TextInfo, Container } from "./styles";
export const InfoUser = ({ job }) => {
	return (
		<Container>
			<Img src={MyImage} alt="Leonardo Photo" />
			<TextInfo>
				<div>Leonardo Nava</div>
				{job}
			</TextInfo>
		</Container>
	);
};
