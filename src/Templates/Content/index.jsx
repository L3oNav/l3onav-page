import React, { Component } from "react";
import Biography from "../../Components/Biography/index.jsx";
import Portfolio from "../../Components/Projects.jsx";
import { ContentContainer, BoxContainer } from "./styles";
import { ListPortfolio } from "../../Components/ListPortfolio/index";

class Content extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div>
				{/* <ContentContainer> */}
					{/* <BoxContainer> */}
						<Biography />
					{/* </BoxContainer> */}
				{/* </ContentContainer> */}
				<ListPortfolio />
			</div>
		);
	}
}
export default Content;
