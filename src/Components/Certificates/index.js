import React, { Component } from 'react';
import { Img, Article, Container } from './styles';
// ? Images
import ReactCertificate from '../../Images/Diplomas/react.jpg';
import cPythonCertificate from '../../Images/Diplomas/carrera-python.jpg';
import CssGrids from '../../Images/Diplomas/css-grids.jpg';
import WebDevelopment from '../../Images/Diplomas/desarrollo-web.jpg';
import Ingenieria from '../../Images/Diplomas/ingenieria.jpg';
import Javascript from '../../Images/Diplomas/javascript.jpg';
import Linux from '../../Images/Diplomas/linux.jpg';
import PythonPComputacional from '../../Images/Diplomas/pensamiento-computacional.jpg';
import Python from '../../Images/Diplomas/python.jpg';
import PreWork from '../../Images/Diplomas/prework.jpg';

export default class Certificates extends Component {
	render() {
		return (
			<Container>
				{certificates.map((certificate) => (
					<Article href={certificate.URL} target="_blank">
						<Img key={certificate.id} src={certificate.image} />
					</Article>
				))}
			</Container>
		);
	}
}

const certificates = [
	{
		id: 1,
		URL: 'https://platzi.com/@L3oNav/curso/1123-linux-2017/diploma/detalle/',
		image: Linux
	},
	{
		id: 2,
		URL: 'https://platzi.com/@L3oNav/curso/1229-css-grid-layout/diploma/detalle/',
		image: CssGrids
	},
	{
		id: 3,
		URL: 'https://platzi.com/@L3oNav/curso/1350-html5-css3/diploma/detalle/',
		image: WebDevelopment
	},
	{
		id: 4,
		URL: 'https://platzi.com/@L3oNav/curso/1764-python-cs/diploma/detalle/',
		image: PythonPComputacional
	},
	{
		id: 5,
		URL: 'https://platzi.com/@L3oNav/curso/1104-python/diploma/detalle/',
		image: Python
	},
	{
		id: 6,
		URL: 'https://platzi.com/@L3oNav/curso/1548-react/diploma/detalle/',
		image: ReactCertificate
	},
	{
		id: 7,
		URL: 'https://platzi.com/@L3oNav/curso/1339-fundamentos-javascript/diploma/detalle/',
		image: Javascript
	},
	{
		id: 8,
		URL: 'https://platzi.com/@L3oNav/curso/1098-ingenieria/diploma/detalle/',
		image: Ingenieria
	},
	{
		id: 9,
		URL: 'https://platzi.com/@L3oNav/curso/1650-prework/diploma/detalle/',
		image: PreWork
	},
	{
        id: 10,
        URL: 'https://platzi.com/@L3oNav/ruta/3-backend-python/diploma/detalle/',
        image: cPythonCertificate
	}
];
