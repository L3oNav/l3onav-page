import React from "react";
import Portfolio from "../Portfolio";
import { ContainerList, Container, List } from "./styles";
//? Images
import ReactCertificate from "../../Images/Diplomas/diploma-react-1.jpg";
import JsFuncamentos from "../../Images/Diplomas/diploma-fundamentos-javascript-1.jpg";
import CssGrids from "../../Images/Diplomas/diploma-css-grid-layout-1.jpg";
import PreWork from "../../Images/Diplomas/diploma-prework-1.jpg";
import PythonCertificate from "../../Images/Diplomas/diploma-python-1.jpg";
import HtmlCss from "../../Images/Diplomas/diploma-html5-css3-1.jpg";
import Ingenieria from "../../Images/Diplomas/diploma-ingenieria-1.jpg";

//* Certificates Obj
const certificates = [
	{
		Image: ReactCertificate,
		Title: "ReactJs",
		URL: "https://platzi.com/@L3oNav/curso/1548-react/diploma/detalle/"
	},
	{
		Image: JsFuncamentos,
		Title: "JavaScript",
		URL:
			"https://platzi.com/@L3oNav/curso/1339-fundamentos-javascript/diploma/detalle/"
	},
	{
		Image: CssGrids,
		Title: "Css Grid Layout",
		URL:
			"https://platzi.com/@L3oNav/curso/1229-css-grid-layout/diploma/detalle/"
	},
	{
		Image: PreWork,
		Title: "Pre Work",
		URL: "https://platzi.com/@L3oNav/curso/1650-prework/diploma/detalle/"
	},
	{
		Image: PythonCertificate,
		Title: "Python",
		URL: "https://platzi.com/@L3oNav/curso/1104-python/diploma/detalle/"
	},
	{
		Image: Ingenieria,
		Title: "Software",
		URL: "https://platzi.com/@L3oNav/curso/1098-ingenieria/diploma/detalle/"
	},
	{
		Image: HtmlCss,
		Title: "Html5 Css3",
		URL: "https://platzi.com/@L3oNav/curso/1492-html-css/diploma/detalle/"
	}
];

export function ListPortfolio() {
	return (
		<Container>
			<List>
				<ContainerList>
					{certificates.map(project => (
						<Portfolio {...project} />
						))}
				</ContainerList>
			</List>
		</Container>
	);
}
