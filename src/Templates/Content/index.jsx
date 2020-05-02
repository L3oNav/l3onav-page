import React, { Component } from "react";
import Biography from "../../Components/Biography/index.jsx";
import { ListPortfolio } from "../../Components/ListPortfolio/index";

class Content extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div>
				<Biography />
				<ListPortfolio />
			</div>
		);
	}
}
export default Content;
