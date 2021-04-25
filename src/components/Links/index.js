import React from 'react';
import { Article } from './styles';

export const Links = ({ Buttons }) => {
	if (Buttons) {
		return (
			<div>
				{Buttons.map(btn => (
					<Article key={btn.id} to={btn.to}>
						{btn.title}
					</Article>
				))}
			</div>
		);
	} else {
		return null;
	}
};
