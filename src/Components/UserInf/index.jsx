import React from "react";
function UserInf(props) {
	return (
		<div className="userInf-container">
			<img src={props.UsrImg} alt='Foto de Leonardo' className="info-img"/>
			<div className='info-text'>
				<a href='https://platzi.com/@L3oNav/' target='_blank'>
					<h1>{props.UsrName}</h1>
					<h3>{props.UsrJob}</h3>
				</a>
				<h3>click &#8593;</h3>
			</div>
		</div>
	);
}

export default UserInf;
