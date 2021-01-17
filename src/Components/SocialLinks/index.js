import React, { Component } from 'react';
import {
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiGithub,
	FiMail,
	FiGitlab
} from 'react-icons/fi';
import { Container, Articles, Grid } from './styles';

const social = [
	{
		id: 1,
		alt: 'instagram',
		component: FiInstagram,
		url: 'https://www.instagram.com/l3onav/?hl=es-la'
	},
	{
		id: 2,
		alt: 'linkedin',
		component: FiLinkedin,
		url: 'https://www.linkedin.com/in/leonardo-nava-6015b3160'
	},
	{
		id: 3,
		alt: 'twitter',
		component: FiTwitter,
		url: 'https://twitter.com/L3oNav'
	},
	{
		id: 4,
		alt: 'github',
		component: FiGithub,
		url: 'https://github.com/L3oNav'
	},
	{
		id: 5,
		alt: 'email',
		component: FiMail,
		url: 'mailto:info@l3onav.tech?'
	},
	{
		id: 6,
		alt: 'gitlab',
		component: FiGitlab,
		url: 'https://gitlab.com/L3oNav/l3onav-portfolio'
	}
];

class SocialLinks extends Component {
	render() {
		return (
			<Container>
				<Grid>
					{social.map(link => (
							<Articles key={link.id} href={link.url} target='_blank' ref="noopener" alt={link.alt}>
								<link.component size='35' color='white' />
							</Articles>
						)
					)}
				</Grid>
			</Container>
		);
	}
}

export default SocialLinks;
